// Dial-up Connection Simulator
class DialupSimulator {
    constructor() {
        this.connectionSteps = [
            { text: "Initializing modem...", delay: 200 },
            { text: "Dialing 555-CYBER...", delay: 300 },
            { text: "ATDT5558423737", delay: 150 },
            { text: "♪♫ EEEEEE-AWWWWW-EEEEEE-AWWWWW ♫♪", delay: 400 },
            { text: "CONNECT 28800", delay: 200 },
            { text: "Negotiating protocols...", delay: 150 },
            { text: "Authenticating user...", delay: 200 },
            { text: "Loading TCP/IP stack...", delay: 100 },
            { text: "Establishing PPP connection...", delay: 150 },
            { text: "Connected successfully!", delay: 100 }
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
        await this.wait(200);
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
        // Create realistic modem handshake sounds using Web Audio API
        this.createRealisticModemSequence();
        
        // Add some random static noise
        setTimeout(() => this.addStaticNoise(), 400);
    }
    
    createRealisticModemSequence() {
        if (!window.AudioContext && !window.webkitAudioContext) {
            console.log('Web Audio API not supported');
            return;
        }
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Realistic modem handshake sequence with proper frequencies and timing (optimized)
        const modemSequence = [
            // Initial dial tone and ring
            { type: 'tone', freq: 350, duration: 0.3, volume: 0.15, delay: 0 },
            { type: 'tone', freq: 440, duration: 0.3, volume: 0.15, delay: 0.1 },
            
            // Answering tone (2100 Hz)
            { type: 'tone', freq: 2100, duration: 0.6, volume: 0.2, delay: 0.5 },
            
            // V.21 calling tone (1650 Hz)
            { type: 'tone', freq: 1650, duration: 0.4, volume: 0.18, delay: 1.2 },
            
            // V.22 Answer back (2225 Hz)
            { type: 'tone', freq: 2225, duration: 0.3, volume: 0.16, delay: 1.7 },
            
            // Training sequence - rapid frequency changes
            { type: 'sweep', startFreq: 1200, endFreq: 2400, duration: 0.8, volume: 0.12, delay: 2.1 },
            
            // V.32 training (scrambled data)
            { type: 'noise', freq: 1700, duration: 1.0, volume: 0.1, delay: 3.0 },
            
            // Final handshake tones
            { type: 'tone', freq: 1200, duration: 0.2, volume: 0.08, delay: 4.2 },
            { type: 'tone', freq: 2400, duration: 0.2, volume: 0.08, delay: 4.4 },
            
            // Carrier established - quieter data tones
            { type: 'data', freq: 1700, duration: 0.5, volume: 0.06, delay: 4.7 }
        ];
        
        modemSequence.forEach(sound => {
            setTimeout(() => {
                this.createModemSound(audioContext, sound);
            }, sound.delay * 1000);
        });
    }
    
    createModemSound(audioContext, soundConfig) {
        const { type, freq, duration, volume, startFreq, endFreq } = soundConfig;
        
        switch(type) {
            case 'tone':
                this.createTone(audioContext, freq, duration, volume);
                break;
            case 'sweep':
                this.createFrequencySweep(audioContext, startFreq, endFreq, duration, volume);
                break;
            case 'noise':
                this.createModulatedNoise(audioContext, freq, duration, volume);
                break;
            case 'data':
                this.createDataTones(audioContext, freq, duration, volume);
                break;
        }
    }
    
    createTone(audioContext, frequency, duration, volume) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine'; // Pure tone for carrier signals
        
        // Envelope for realistic sound
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(volume * 0.8, audioContext.currentTime + duration * 0.8);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    createFrequencySweep(audioContext, startFreq, endFreq, duration, volume) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(startFreq, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(endFreq, audioContext.currentTime + duration);
        oscillator.type = 'sawtooth'; // More complex waveform for training
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    createModulatedNoise(audioContext, centerFreq, duration, volume) {
        // Create white noise buffer
        const bufferSize = audioContext.sampleRate * duration;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate filtered noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * volume;
        }
        
        const noiseSource = audioContext.createBufferSource();
        const filter = audioContext.createBiquadFilter();
        const gainNode = audioContext.createGain();
        
        noiseSource.buffer = buffer;
        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Band-pass filter to simulate modem training data
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(centerFreq, audioContext.currentTime);
        filter.Q.setValueAtTime(5, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
        
        noiseSource.start(audioContext.currentTime);
    }
    
    createDataTones(audioContext, frequency, duration, volume) {
        // Simulate actual data transmission with rapid phase shifts
        for (let i = 0; i < duration * 10; i++) {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                // Random frequency modulation to simulate data
                const freqVariation = frequency + (Math.random() - 0.5) * 200;
                oscillator.frequency.setValueAtTime(freqVariation, audioContext.currentTime);
                oscillator.type = 'square'; // Digital-like waveform
                
                gainNode.gain.setValueAtTime(volume * 0.5, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.05);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.05);
            }, i * 100);
        }
    }
    
    addStaticNoise() {
        if (!window.AudioContext && !window.webkitAudioContext) {
            return;
        }
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create realistic line noise with crackling
        const bufferSize = audioContext.sampleRate * 2.0; // 2 seconds of noise
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate realistic line noise
        for (let i = 0; i < bufferSize; i++) {
            // Base white noise
            let noise = (Math.random() * 2 - 1) * 0.02;
            
            // Add occasional crackling sounds
            if (Math.random() < 0.001) {
                noise += (Math.random() * 2 - 1) * 0.15;
            }
            
            // Add low-frequency hum (50/60 Hz interference)
            const hum = Math.sin(2 * Math.PI * 60 * i / audioContext.sampleRate) * 0.01;
            
            data[i] = noise + hum;
        }
        
        const noiseSource = audioContext.createBufferSource();
        const filter = audioContext.createBiquadFilter();
        const gainNode = audioContext.createGain();
        
        noiseSource.buffer = buffer;
        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // High-pass filter to simulate phone line characteristics
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(300, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioContext.currentTime + 1.0);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2.0);
        
        noiseSource.start();
    }
    
    fadeToMainSite() {
        // Add success message
        this.addLogLine("🎉 Welcome to CyberSpace! 🎉");
        this.connectBtn.textContent = 'CONNECTED!';
        this.connectBtn.style.background = 'linear-gradient(45deg, #00FF00, #FFFF00)';
        
        setTimeout(() => {
            // Fade out dial-up screen
            this.dialupScreen.style.transition = 'opacity 0.8s ease-out';
            this.dialupScreen.style.opacity = '0';
            
            setTimeout(() => {
                this.dialupScreen.style.display = 'none';
                this.mainContent.style.display = 'block';
                
                // Initialize main website
                if (window.initializeMainSite) {
                    window.initializeMainSite();
                }
            }, 800);
        }, 400);
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