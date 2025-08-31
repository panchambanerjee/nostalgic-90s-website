// Main 90s Website Functionality
class NostalgicWebsite {
    constructor() {
        this.hitCount = this.getHitCount();
        this.popupInterval = null;
        this.musicEnabled = false;
        
        this.initializeHitCounter();
        this.startPopupAds();
        this.addRandomEffects();
    }
    
    getHitCount() {
        const stored = localStorage.getItem('hit-counter');
        return stored ? parseInt(stored) : Math.floor(Math.random() * 9999) + 1000;
    }
    
    incrementHitCounter() {
        this.hitCount++;
        localStorage.setItem('hit-counter', this.hitCount.toString());
        const counter = document.getElementById('hit-counter');
        if (counter) {
            counter.textContent = this.hitCount.toLocaleString();
        }
    }
    
    initializeHitCounter() {
        // Will be called when main content is shown
        setTimeout(() => {
            this.incrementHitCounter();
        }, 1000);
    }
    
    startPopupAds() {
        // Start showing popup ads after 10 seconds, then every 30-60 seconds
        setTimeout(() => {
            this.showPopupAd();
            this.popupInterval = setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance
                    this.showPopupAd();
                }
            }, 30000 + Math.random() * 30000);
        }, 10000);
    }
    
    showPopupAd() {
        const ads = [
            {
                title: "🎉 CONGRATULATIONS! 🎉",
                content: "You are our 1000th visitor today!<br>Click here to claim your FREE iPod!",
                button: "CLAIM NOW!"
            },
            {
                title: "⚠️ VIRUS ALERT! ⚠️",
                content: "Your computer may be infected!<br>Download our FREE antivirus now!",
                button: "SCAN NOW"
            },
            {
                title: "💰 MAKE MONEY FAST! 💰",
                content: "Earn $5000 per week working from home!<br>No experience needed!",
                button: "JOIN NOW!"
            },
            {
                title: "🔮 Miss Cleo's Psychic Hotline 🔮",
                content: "Call now for your FREE tarot reading!<br>The spirits are waiting!",
                button: "CALL NOW!"
            },
            {
                title: "📼 Columbia House CD Club 📼",
                content: "Get 12 CDs for just 1 penny!<br>Plus shipping and handling.",
                button: "JOIN TODAY!"
            }
        ];
        
        const ad = ads[Math.floor(Math.random() * ads.length)];
        this.createPopupWindow(ad);
    }
    
    createPopupWindow(ad) {
        const popup = document.createElement('div');
        popup.className = 'popup-ad';
        popup.innerHTML = `
            <div class="popup-header">
                <span>${ad.title}</span>
                <button class="popup-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="popup-content">
                <p>${ad.content}</p>
                <button class="popup-button" onclick="alert('Just kidding! This is a fake 90s popup 😄'); this.parentElement.parentElement.remove();">
                    ${ad.button}
                </button>
            </div>
        `;
        
        // Random position
        popup.style.left = Math.random() * (window.innerWidth - 300) + 'px';
        popup.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        
        document.body.appendChild(popup);
        
        // Auto-close after 10 seconds if user doesn't interact
        setTimeout(() => {
            if (popup.parentElement) {
                popup.remove();
            }
        }, 10000);
    }
    
    addRandomEffects() {
        // Random sparkle cursor effect
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.1) { // 10% chance
                this.createSparkle(e.clientX, e.clientY);
            }
        });
        
        // Random screen glitch effect
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance every second
                this.addScreenGlitch();
            }
        }, 1000);
        
        console.log('Random effects (sparkles and glitches) initialized');
    }
    
    createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.position = 'fixed';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '12px';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
    
    addScreenGlitch() {
        document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 100);
    }
    
    toggleMusic() {
        if (this.musicEnabled) {
            this.stopBackgroundMusic();
            this.musicEnabled = false;
            this.updateMusicButton('🎵 Play Music 🎵');
        } else {
            this.playBackgroundMusic();
            this.musicEnabled = true;
            this.updateMusicButton('🔇 Stop Music 🔇');
        }
    }
    
    updateMusicButton(text) {
        const musicBtn = document.querySelector('.music-btn');
        if (musicBtn) {
            musicBtn.textContent = text;
        }
    }
    
    playBackgroundMusic() {
        try {
            // Create audio context
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a simple melody pattern
            const melody = [261.63, 293.66, 329.63, 349.23, 392.00, 349.23, 329.63, 293.66]; // C major melody
            let noteIndex = 0;
            
            const playNextNote = () => {
                if (!this.musicEnabled) return;
                
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(melody[noteIndex], this.audioContext.currentTime);
                oscillator.type = 'square'; // Classic 8-bit sound
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.05);
                gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.5);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.5);
                
                noteIndex = (noteIndex + 1) % melody.length;
                
                // Schedule next note
                if (this.musicEnabled) {
                    this.musicTimeout = setTimeout(playNextNote, 600);
                }
            };
            
            // Start the melody
            playNextNote();
            
        } catch (error) {
            console.log('Web Audio API not supported');
        }
    }
    
    stopBackgroundMusic() {
        if (this.musicTimeout) {
            clearTimeout(this.musicTimeout);
            this.musicTimeout = null;
        }
        
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
    }
}

// Initialize main website when called from dialup
window.initializeMainSite = function() {
    console.log('Initializing main site...');
    
    window.nostalgicSite = new NostalgicWebsite();
    
    // Initialize all subsystems with proper timing
    setTimeout(() => {
        // Initialize visual effects first
        if (window.initializeVisualEffects) {
            console.log('Initializing visual effects...');
            window.initializeVisualEffects();
        }
        
        // Initialize additional features
        if (window.initializeFeatures) {
            console.log('Initializing features...');
            window.initializeFeatures();
        }
        
        // Initialize navigation system
        if (window.initializeNavigation) {
            console.log('Initializing navigation...');
            window.initializeNavigation();
        }
        
        // Initialize desktop interface
        if (window.initializeDesktop) {
            console.log('Initializing desktop...');
            window.initializeDesktop();
        }
        
        // Initialize guestbook
        if (window.initializeGuestbook) {
            console.log('Initializing guestbook...');
            window.initializeGuestbook();
        }
        
        // Initialize chatroom
        if (window.initializeChatroom) {
            console.log('Initializing chatroom...');
            window.initializeChatroom();
        }
        
        // Initialize easter eggs
        if (window.initializeEasterEggs) {
            console.log('Initializing easter eggs...');
            window.initializeEasterEggs();
        }
        
        console.log('Main site initialization complete!');
    }, 100);
}

// Add sparkle animation CSS
const sparkleCSS = `
@keyframes sparkleAnim {
    0% { 
        opacity: 1; 
        transform: scale(0) rotate(0deg); 
    }
    50% { 
        opacity: 1; 
        transform: scale(1) rotate(180deg); 
    }
    100% { 
        opacity: 0; 
        transform: scale(0) rotate(360deg); 
    }
}

.popup-ad {
    position: fixed;
    width: 300px;
    background: #C0C0C0;
    border: 2px outset #C0C0C0;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.5);
    z-index: 10000;
    font-family: 'Comic Neue', 'Comic Sans MS', cursive;
}

.popup-header {
    background: linear-gradient(90deg, #000080, #0000FF);
    color: white;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
}

.popup-close {
    background: #C0C0C0;
    border: 1px outset #C0C0C0;
    color: black;
    font-weight: bold;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-close:hover {
    background: #FF0000;
    color: white;
}

.popup-content {
    padding: 15px;
    text-align: center;
    color: black;
}

.popup-content p {
    margin: 10px 0;
    line-height: 1.4;
}

.popup-button {
    background: linear-gradient(45deg, #FF0000, #FFFF00);
    border: 2px outset #C0C0C0;
    color: black;
    font-weight: bold;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 10px;
    animation: buttonPulse 1s infinite;
}

@keyframes buttonPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.popup-button:hover {
    background: linear-gradient(45deg, #FFFF00, #FF0000);
}
`;

// Add CSS to document
const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);