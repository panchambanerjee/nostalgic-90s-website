// Dial-up Connection Simulator
class DialupSimulator {
    constructor() {
        this.connectionSteps = [
            { text: "Initializing modem...", delay: 1000 },
            { text: "Dialing 555-CYBER...", delay: 2000 },
            { text: "ATDT5558423737", delay: 1500 },
            { text: "♪♫ EEEEEE-AWWWWW-EEEEEE-AWWWWW ♫♪", delay: 3000 },
            { text: "CONNECT 28800", delay: 2000 },
            { text: "Negotiating protocols...", delay: 1500 },
            { text: "Authenticating user...", delay: 2000 },
            { text: "Loading TCP/IP stack...", delay: 1000 },
            { text: "Establishing PPP connection...", delay: 1500 },
            { text: "Connected successfully!", delay: 1000 }
        ];
        
        this.currentStep = 0;
        this.progressValue = 0;
        this.isConnecting = false;
        
        this.initializeElements();
        this.bindEvents();
    }
    
    initializeElements() {
        this.dialupScreen = document.getElementById('dialup-screen');
        this.connectionLog = document.getElementById('connection-log');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.connectBtn = document.getElementById('connect-btn');
        this.powerLight = document.getElementById('power-light');
        this.dataLight = document.getElementById('data-light');
        this.connLight = document.getElementById('conn-light');
        this.speedDisplay = document.getElementById('connection-speed');
        this.mainContent = document.getElementById('main-content');
        this.modemSound = document.getElementById('modem-sound');
        
        // Initialize modem lights
        this.powerLight.classList.add('active');
    }
    
    bindEvents() {
        this.connectBtn.addEventListener('click', () => {
            if (!this.isConnecting) {
                this.startConnection();
            }
        });
    }
    
    async startConnection() {
        this.isConnecting = true;
        this.connectBtn.disabled = true;
        this.connectBtn.textContent = 'CONNECTING...';
        
        // Clear previous log
        this.connectionLog.innerHTML = '';
        
        // Play modem sounds (we'll add actual audio later)
        this.playModemSounds();
        
        // Start connection sequence
        for (let i = 0; i < this.connectionSteps.length; i++) {
            await this.addLogLine(this.connectionSteps[i].text);
            await this.wait(this.connectionSteps[i].delay);
            
            // Update progress
            this.updateProgress((i + 1) / this.connectionSteps.length * 100);
            
            // Update modem lights
            this.updateModemLights(i);
            
            // Simulate connection speed fluctuation
            if (i > 3) {
                this.updateConnectionSpeed();
            }
        }
        
        // Connection complete
        await this.wait(1000);
        this.fadeToMainSite();
    }
    
    addLogLine(text) {
        return new Promise((resolve) => {
            const line = document.createElement('div');
            line.className = 'log-line';
            line.textContent = text;
            this.connectionLog.appendChild(line);
            
            // Scroll to bottom
            this.connectionLog.scrollTop = this.connectionLog.scrollHeight;
            
            setTimeout(resolve, 200);
        });
    }
    
    updateProgress(percentage) {
        this.progressValue = Math.min(percentage, 100);
        this.progressFill.style.width = this.progressValue + '%';
        this.progressText.textContent = `Connecting... ${Math.round(this.progressValue)}%`;
        
        // Add some random fluctuation
        if (percentage < 90) {
            setTimeout(() => {
                const fluctuation = Math.random() * 5 - 2.5;
                const newValue = Math.max(0, Math.min(100, this.progressValue + fluctuation));
                this.progressFill.style.width = newValue + '%';
            }, 500);
        }
    }
    
    updateModemLights(step) {
        switch(step) {
            case 2:
                this.dataLight.classList.add('active');
                break;
            case 6:
                this.connLight.classList.add('active');
                break;
        }
    }
    
    updateConnectionSpeed() {
        const speeds = ['28.8k', '26.4k', '31.2k', '28.8k', '24.0k', '33.6k'];
        const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
        this.speedDisplay.textContent = randomSpeed;
    }
    
    playModemSounds() {
        // Create synthetic modem sounds using Web Audio API
        this.createModemTones();
        
        // Also add some random static noise
        setTimeout(() => this.addStaticNoise(), 2000);
    }
    
    createModemTones() {
        if (!window.AudioContext && !window.webkitAudioContext) {
            return; // No audio support
        }
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create the classic modem handshake sequence
        const frequencies = [2100, 1200, 2400, 1200, 2100]; // Typical modem frequencies
        let time = audioContext.currentTime;
        
        frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(freq, time);
            oscillator.type = 'sawtooth'; // More authentic modem sound
            
            gainNode.gain.setValueAtTime(0, time);
            gainNode.gain.linearRampToValueAtTime(0.1, time + 0.1);
            gainNode.gain.linearRampToValueAtTime(0, time + 0.8);
            
            oscillator.start(time);
            oscillator.stop(time + 0.8);
            
            time += 0.6;
        });
    }
    
    addStaticNoise() {
        if (!window.AudioContext && !window.webkitAudioContext) {
            return;
        }
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = audioContext.sampleRate * 0.5; // 0.5 seconds of noise
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.05; // Low volume noise
        }
        
        const noiseSource = audioContext.createBufferSource();
        const gainNode = audioContext.createGain();
        
        noiseSource.buffer = buffer;
        noiseSource.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        
        noiseSource.start();
    }
    
    fadeToMainSite() {
        // Add success message
        this.addLogLine("🎉 Welcome to CyberSpace! 🎉");
        this.connectBtn.textContent = 'CONNECTED!';
        this.connectBtn.style.background = 'linear-gradient(45deg, #00FF00, #FFFF00)';
        
        setTimeout(() => {
            // Fade out dial-up screen
            this.dialupScreen.style.transition = 'opacity 2s ease-out';
            this.dialupScreen.style.opacity = '0';
            
            setTimeout(() => {
                this.dialupScreen.style.display = 'none';
                this.mainContent.style.display = 'block';
                
                // Initialize main website
                if (window.initializeMainSite) {
                    window.initializeMainSite();
                }
            }, 2000);
        }, 2000);
    }
    
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DialupSimulator();
});

// Add some random connection hiccups for authenticity
function addConnectionHiccups() {
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every few seconds
            const speedDisplay = document.getElementById('connection-speed');
            if (speedDisplay && speedDisplay.textContent !== '28.8k') {
                const hiccupSpeeds = ['14.4k', 'DISCONNECTED', '9600', '28.8k'];
                const originalSpeed = speedDisplay.textContent;
                
                speedDisplay.textContent = hiccupSpeeds[Math.floor(Math.random() * hiccupSpeeds.length)];
                
                setTimeout(() => {
                    speedDisplay.textContent = originalSpeed;
                }, 1000 + Math.random() * 2000);
            }
        }
    }, 5000);
}

// Start hiccups after initial connection
setTimeout(addConnectionHiccups, 15000);