// Y2K Countdown and Virtual Pet Features
class Y2KCountdown {
    constructor() {
        this.targetDate = new Date('2000-01-01T00:00:00');
        this.glitchTriggered = false;
        this.initializeCountdown();
    }
    
    initializeCountdown() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }
    
    updateCountdown() {
        const now = new Date();
        const timeLeft = this.targetDate - now;
        
        const timer = document.getElementById('countdown-timer');
        if (!timer) return;
        
        if (timeLeft <= 0) {
            if (!this.glitchTriggered) {
                this.triggerY2KGlitch();
                this.glitchTriggered = true;
            }
            timer.textContent = '💥 Y2K HAPPENED! 💥';
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        // Trigger glitch effect when close to Y2K
        if (timeLeft < 10000 && !this.glitchTriggered) { // 10 seconds
            this.triggerY2KGlitch();
            this.glitchTriggered = true;
        }
    }
    
    triggerY2KGlitch() {
        // Screen goes crazy for a few seconds
        this.showGlitchOverlay();
        
        // Scramble text temporarily
        setTimeout(() => this.scramblePageText(), 500);
        
        // Recovery message
        setTimeout(() => this.showRecoveryMessage(), 3000);
    }
    
    showGlitchOverlay() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: repeating-linear-gradient(
                45deg,
                #FF0000 0px,
                #00FF00 2px,
                #0000FF 4px,
                #FFFF00 6px
            );
            z-index: 9999;
            animation: glitchFlicker 3s ease-out;
            pointer-events: none;
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => overlay.remove(), 3000);
    }
    
    scramblePageText() {
        const textElements = document.querySelectorAll('p, h1, h2, h3, span, div');
        const originalTexts = new Map();
        
        textElements.forEach(el => {
            if (el.textContent.trim()) {
                originalTexts.set(el, el.textContent);
                el.textContent = this.generateGlitchText(el.textContent.length);
            }
        });
        
        // Restore original text after 2 seconds
        setTimeout(() => {
            originalTexts.forEach((text, el) => {
                el.textContent = text;
            });
        }, 2000);
    }
    
    generateGlitchText(length) {
        const chars = '!@#$%^&*()[]{}|;:,.<>?~`';
        return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }
    
    showRecoveryMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #000080;
            color: #FFFFFF;
            padding: 20px;
            border: 3px outset #C0C0C0;
            font-family: 'Courier New', monospace;
            z-index: 10000;
            text-align: center;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        message.innerHTML = `
            <h3>🔧 SYSTEM RECOVERY 🔧</h3>
            <p>Y2K bug detected and neutralized!</p>
            <p>All systems operational.</p>
            <p>Welcome to the new millennium!</p>
            <button onclick="this.parentElement.remove()" style="margin-top: 10px;">OK</button>
        `;
        
        document.body.appendChild(message);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (message.parentElement) {
                message.remove();
            }
        }, 10000);
    }
}

class VirtualPet {
    constructor() {
        this.petData = {
            name: localStorage.getItem('pet-name') || 'CyberPet',
            happiness: parseInt(localStorage.getItem('pet-happiness')) || 50,
            hunger: parseInt(localStorage.getItem('pet-hunger')) || 50,
            energy: parseInt(localStorage.getItem('pet-energy')) || 50,
            lastFed: parseInt(localStorage.getItem('pet-last-fed')) || Date.now()
        };
        
        this.petEmojis = ['😴', '😊', '😃', '🤩', '😍'];
        this.initializePet();
    }
    
    initializePet() {
        this.updatePetDisplay();
        
        // Pet needs decay over time
        setInterval(() => {
            this.updatePetNeeds();
            this.savePetData();
        }, 30000); // Every 30 seconds
        
        // Random pet animations
        setInterval(() => {
            this.animatePet();
        }, 5000);
    }
    
    updatePetNeeds() {
        const now = Date.now();
        const timeSinceLastFed = now - this.petData.lastFed;
        const hoursPasssed = timeSinceLastFed / (1000 * 60 * 60);
        
        // Decrease stats over time
        this.petData.hunger = Math.max(0, this.petData.hunger - hoursPasssed * 2);
        this.petData.happiness = Math.max(0, this.petData.happiness - hoursPasssed * 1);
        this.petData.energy = Math.max(0, this.petData.energy - hoursPasssed * 1.5);
        
        this.updatePetDisplay();
    }
    
    updatePetDisplay() {
        const miniPet = document.getElementById('mini-pet');
        const petStatus = document.querySelector('.pet-status');
        
        const avgStat = (this.petData.happiness + this.petData.hunger + this.petData.energy) / 3;
        
        if (miniPet) {
            const emojiIndex = Math.min(4, Math.floor(avgStat / 20));
            miniPet.textContent = this.petEmojis[emojiIndex];
        }
        
        if (petStatus) {
            if (avgStat < 30) {
                petStatus.textContent = 'Needs Care!';
                petStatus.style.color = '#FF0000';
            } else if (avgStat < 70) {
                petStatus.textContent = 'Doing OK';
                petStatus.style.color = '#FFA500';
            } else {
                petStatus.textContent = 'Happy!';
                petStatus.style.color = '#008000';
            }
        }
    }
    
    animatePet() {
        const miniPet = document.getElementById('mini-pet');
        if (miniPet) {
            miniPet.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                miniPet.style.transform = '';
            }, 200);
        }
    }
    
    feedPet() {
        this.petData.hunger = Math.min(100, this.petData.hunger + 20);
        this.petData.happiness = Math.min(100, this.petData.happiness + 10);
        this.petData.lastFed = Date.now();
        this.savePetData();
        this.updatePetDisplay();
        
        // Show feedback
        this.showPetFeedback('🍎 Fed! +20 Hunger, +10 Happiness');
    }
    
    playWithPet() {
        this.petData.happiness = Math.min(100, this.petData.happiness + 15);
        this.petData.energy = Math.max(0, this.petData.energy - 10);
        this.savePetData();
        this.updatePetDisplay();
        
        // Show feedback
        this.showPetFeedback('🎾 Played! +15 Happiness, -10 Energy');
    }
    
    petSleep() {
        this.petData.energy = Math.min(100, this.petData.energy + 25);
        this.savePetData();
        this.updatePetDisplay();
        
        // Show feedback
        this.showPetFeedback('😴 Slept! +25 Energy');
    }
    
    showPetFeedback(message) {
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #FFFFCC;
            border: 2px outset #C0C0C0;
            padding: 10px;
            z-index: 10001;
            font-family: 'Comic Sans MS', cursive;
            font-size: 12px;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
        `;
        
        feedback.textContent = message;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }
    
    savePetData() {
        Object.entries(this.petData).forEach(([key, value]) => {
            localStorage.setItem(`pet-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value.toString());
        });
    }
}

// Initialize features when main content loads
window.initializeFeatures = function() {
    new Y2KCountdown();
    window.virtualPet = new VirtualPet();
};

// Pet care functions
window.openPetWindow = function() {
    if (!window.virtualPet) {
        alert('Pet system not initialized yet! Please wait a moment and try again.');
        return;
    }
    
    const petWindow = document.createElement('div');
    petWindow.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #C0C0C0;
        border: 2px outset #C0C0C0;
        padding: 20px;
        z-index: 10000;
        font-family: 'Comic Neue', 'Comic Sans MS', cursive;
        text-align: center;
        min-width: 300px;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    `;
    
    const pet = window.virtualPet;
    const avgStat = (pet.petData.happiness + pet.petData.hunger + pet.petData.energy) / 3;
    const emojiIndex = Math.min(4, Math.floor(avgStat / 20));
    
    petWindow.innerHTML = `
        <div style="background: #000080; color: white; padding: 5px; margin: -20px -20px 15px -20px;">
            <b>🐾 CyberPet Care Center 🐾</b>
            <button onclick="this.parentElement.parentElement.remove()" style="float: right; background: #FF0000; color: white; border: none; width: 20px; height: 20px;">×</button>
        </div>
        
        <div style="font-size: 48px; margin: 10px 0;">${pet.petEmojis[emojiIndex]}</div>
        <div style="font-weight: bold; margin: 5px 0;">${pet.petData.name}</div>
        
        <div style="text-align: left; margin: 15px 0;">
            <div>Happiness: <progress value="${pet.petData.happiness}" max="100"></progress> ${Math.round(pet.petData.happiness)}%</div>
            <div>Hunger: <progress value="${pet.petData.hunger}" max="100"></progress> ${Math.round(pet.petData.hunger)}%</div>
            <div>Energy: <progress value="${pet.petData.energy}" max="100"></progress> ${Math.round(pet.petData.energy)}%</div>
        </div>
        
        <div style="margin: 15px 0;">
            <button onclick="window.virtualPet.feedPet(); this.parentElement.parentElement.remove(); window.openPetWindow();">🍎 Feed</button>
            <button onclick="window.virtualPet.playWithPet(); this.parentElement.parentElement.remove(); window.openPetWindow();">🎾 Play</button>
            <button onclick="window.virtualPet.petSleep(); this.parentElement.parentElement.remove(); window.openPetWindow();">😴 Sleep</button>
        </div>
        
        <div style="font-size: 10px; color: #666; margin-top: 10px;">
            Last fed: ${new Date(pet.petData.lastFed).toLocaleTimeString()}
        </div>
    `;
    
    document.body.appendChild(petWindow);
};

// Add CSS for new animations
const featureCSS = `
@keyframes glitchFlicker {
    0%, 100% { opacity: 0; }
    10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% { opacity: 0.8; }
    15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% { opacity: 0.1; }
}

progress {
    width: 120px;
    height: 15px;
    border: 1px inset #C0C0C0;
    background: #FFFFFF;
}

progress::-webkit-progress-bar {
    background: #FFFFFF;
    border: 1px inset #C0C0C0;
}

progress::-webkit-progress-value {
    background: linear-gradient(90deg, #FF0000, #FFFF00, #00FF00);
}
`;

const style = document.createElement('style');
style.textContent = featureCSS;
document.head.appendChild(style);