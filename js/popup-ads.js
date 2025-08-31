// ===== 90s POPUP ADS SYSTEM =====

class PopupAdsManager {
    constructor() {
        this.popupQueue = [];
        this.activePopups = [];
        this.maxConcurrentPopups = 2;
        this.popupCount = 0;
        this.isInitialized = false;
        
        this.adTemplates = [
            {
                type: 'miss-cleo',
                title: 'Miss Cleo\'s Psychic Reading',
                content: this.getMissCleoAd(),
                width: 400,
                height: 300,
                sound: 'psychic'
            },
            {
                type: 'columbia-house',
                title: '12 CDs for ONLY 1¢!',
                content: this.getColumbiaHouseAd(),
                width: 450,
                height: 350,
                sound: 'cash-register'
            },
            {
                type: 'weight-loss',
                title: 'LOSE 30 LBS IN 30 DAYS!',
                content: this.getWeightLossAd(),
                width: 380,
                height: 280,
                sound: 'applause'
            },
            {
                type: 'casino',
                title: '🎰 FREE $500 CASINO BONUS! 🎰',
                content: this.getCasinoAd(),
                width: 420,
                height: 320,
                sound: 'slot-machine'
            },
            {
                type: 'mortgage',
                title: 'Refinance Your Home TODAY!',
                content: this.getMortgageAd(),
                width: 400,
                height: 300,
                sound: 'cha-ching'
            },
            {
                type: 'winner',
                title: '🎉 CONGRATULATIONS! YOU\'VE WON! 🎉',
                content: this.getWinnerAd(),
                width: 450,
                height: 320,
                sound: 'fanfare'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupPopupStyles();
        this.startPopupTimer();
        this.isInitialized = true;
    }
    
    setupPopupStyles() {
        if (!document.querySelector('#popup-ads-styles')) {
            const style = document.createElement('style');
            style.id = 'popup-ads-styles';
            style.textContent = `
                .popup-ad {
                    position: fixed;
                    background: #C0C0C0;
                    border: 4px outset #C0C0C0;
                    z-index: 9999;
                    font-family: Arial, sans-serif;
                    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
                    cursor: move;
                    animation: popupAppear 0.5s ease-out;
                }
                
                @keyframes popupAppear {
                    0% { 
                        transform: scale(0.5) rotate(-5deg);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.1) rotate(2deg);
                        opacity: 0.8;
                    }
                    100% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                
                .popup-header {
                    background: linear-gradient(90deg, #000080, #0000FF);
                    color: white;
                    padding: 5px 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: bold;
                    font-size: 12px;
                    cursor: move;
                }
                
                .popup-close {
                    background: #FF0000;
                    color: white;
                    border: 1px outset #FF0000;
                    width: 16px;
                    height: 14px;
                    font-size: 9px;
                    cursor: pointer;
                    font-weight: bold;
                }
                
                .popup-close:hover {
                    background: #CC0000;
                }
                
                .popup-content {
                    padding: 15px;
                    overflow-y: auto;
                }
                
                .popup-button {
                    background: linear-gradient(45deg, #FF6600, #FFAA00);
                    border: 3px outset #FF6600;
                    color: white;
                    padding: 8px 15px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 12px;
                    text-decoration: none;
                    display: inline-block;
                    margin: 5px;
                    animation: buttonBlink 1s ease-in-out infinite alternate;
                }
                
                .popup-button:hover {
                    background: linear-gradient(45deg, #FF8800, #FFCC00);
                    transform: scale(1.05);
                }
                
                .popup-button:active {
                    border: 3px inset #FF6600;
                }
                
                @keyframes buttonBlink {
                    0% { box-shadow: 0 0 5px #FF6600; }
                    100% { box-shadow: 0 0 15px #FFAA00, 0 0 25px #FF6600; }
                }
                
                .popup-urgent {
                    color: #FF0000;
                    font-weight: bold;
                    text-decoration: blink;
                    animation: urgentFlash 0.8s linear infinite;
                }
                
                @keyframes urgentFlash {
                    0%, 50% { color: #FF0000; }
                    51%, 100% { color: #FFFF00; }
                }
                
                .popup-marquee {
                    background: #FFFF00;
                    border: 2px solid #FF0000;
                    padding: 5px;
                    margin: 10px 0;
                    font-weight: bold;
                    color: #FF0000;
                }
                
                .popup-winner {
                    background: linear-gradient(45deg, #FFD700, #FFA500);
                    border: 3px ridge #FFD700;
                    text-align: center;
                    animation: winnerGlow 1s ease-in-out infinite alternate;
                }
                
                @keyframes winnerGlow {
                    0% { box-shadow: 0 0 10px #FFD700; }
                    100% { box-shadow: 0 0 20px #FFA500, 0 0 30px #FFD700; }
                }
                
                .popup-timer {
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    background: #FF0000;
                    color: white;
                    padding: 3px 6px;
                    border-radius: 10px;
                    font-size: 10px;
                    font-weight: bold;
                    animation: timerPulse 1s ease-in-out infinite;
                }
                
                @keyframes timerPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    startPopupTimer() {
        // Random popup intervals between 10-30 seconds
        const showRandomPopup = () => {
            if (this.activePopups.length < this.maxConcurrentPopups) {
                this.showRandomPopup();
            }
            
            // Schedule next popup
            const nextDelay = Math.random() * 20000 + 50000; // 10-70 seconds
            setTimeout(showRandomPopup, nextDelay);
        };
        
        // First popup after 5 seconds
        setTimeout(showRandomPopup, 5000);
    }
    
    showRandomPopup() {
        const template = this.adTemplates[Math.floor(Math.random() * this.adTemplates.length)];
        this.createPopup(template);
    }
    
    createPopup(template) {
        const popup = document.createElement('div');
        popup.className = 'popup-ad';
        popup.style.width = template.width + 'px';
        popup.style.height = template.height + 'px';
        
        // Random position (but keep within viewport)
        const maxX = window.innerWidth - template.width - 50;
        const maxY = window.innerHeight - template.height - 50;
        const x = Math.max(50, Math.random() * maxX);
        const y = Math.max(50, Math.random() * maxY);
        
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        
        popup.innerHTML = `
            <div class="popup-header">
                <span>${template.title}</span>
                <button class="popup-close" onclick="window.popupAdsManager.closePopup(this.parentElement.parentElement)">×</button>
            </div>
            <div class="popup-content">
                ${template.content}
            </div>
            <div class="popup-timer" id="timer-${this.popupCount}">30</div>
        `;
        
        document.body.appendChild(popup);
        this.activePopups.push(popup);
        this.popupCount++;
        
        // Make draggable
        this.makeDraggable(popup);
        
        // Play sound effect
        this.playPopupSound(template.sound);
        
        // Auto-close timer
        this.startCloseTimer(popup, 30);
        
        return popup;
    }
    
    makeDraggable(popup) {
        let isDragging = false;
        let startX, startY, initialX, initialY;
        
        const header = popup.querySelector('.popup-header');
        
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = popup.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            header.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            popup.style.left = (initialX + deltaX) + 'px';
            popup.style.top = (initialY + deltaY) + 'px';
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            header.style.cursor = 'move';
        });
    }
    
    startCloseTimer(popup, seconds) {
        const timerId = popup.querySelector('.popup-timer').id;
        let timeLeft = seconds;
        
        const countdown = setInterval(() => {
            timeLeft--;
            const timer = document.getElementById(timerId);
            if (timer) {
                timer.textContent = timeLeft;
            }
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                this.closePopup(popup);
            }
        }, 1000);
        
        popup.countdownInterval = countdown;
    }
    
    closePopup(popup) {
        if (popup.countdownInterval) {
            clearInterval(popup.countdownInterval);
        }
        
        popup.style.animation = 'popupDisappear 0.3s ease-in forwards';
        
        setTimeout(() => {
            if (popup.parentElement) {
                popup.remove();
            }
            
            const index = this.activePopups.indexOf(popup);
            if (index > -1) {
                this.activePopups.splice(index, 1);
            }
        }, 300);
        
        // Add disappear animation
        if (!document.querySelector('#popup-disappear-styles')) {
            const style = document.createElement('style');
            style.id = 'popup-disappear-styles';
            style.textContent = `
                @keyframes popupDisappear {
                    0% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                    100% { 
                        transform: scale(0.3) rotate(180deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    playPopupSound(soundType) {
        // Simulated sound effects using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Different sounds for different ad types
            switch(soundType) {
                case 'cash-register':
                    this.playCashRegisterSound(oscillator, gainNode, audioContext);
                    break;
                case 'slot-machine':
                    this.playSlotMachineSound(oscillator, gainNode, audioContext);
                    break;
                case 'fanfare':
                    this.playFanfareSound(oscillator, gainNode, audioContext);
                    break;
                default:
                    this.playGenericPopupSound(oscillator, gainNode, audioContext);
            }
        } catch (error) {
            console.log('Audio not available:', error);
        }
    }
    
    playGenericPopupSound(oscillator, gainNode, audioContext) {
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    playCashRegisterSound(oscillator, gainNode, audioContext) {
        // Ka-ching sound
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
    
    playSlotMachineSound(oscillator, gainNode, audioContext) {
        // Spinning reels sound
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(800, audioContext.currentTime + 0.3);
        oscillator.frequency.linearRampToValueAtTime(200, audioContext.currentTime + 0.6);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
    }
    
    playFanfareSound(oscillator, gainNode, audioContext) {
        // Victory fanfare
        const frequencies = [523, 659, 784, 1047]; // C, E, G, C
        frequencies.forEach((freq, index) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.1);
            gain.gain.setValueAtTime(0, audioContext.currentTime + index * 0.1);
            gain.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + index * 0.1 + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + index * 0.1 + 0.2);
            
            osc.start(audioContext.currentTime + index * 0.1);
            osc.stop(audioContext.currentTime + index * 0.1 + 0.2);
        });
    }
    
    // Ad Content Templates
    getMissCleoAd() {
        return `
            <center>
                <h2 style="color: #8A2BE2; margin: 0;">🔮 MISS CLEO'S PSYCHIC READING 🔮</h2>
                <div class="popup-marquee">
                    <marquee>Your future awaits! Call now for a FREE reading!</marquee>
                </div>
                <img src="data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80"><rect width="120" height="80" fill="#8A2BE2"/><text x="60" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle">🔮 MISS CLEO 🔮</text></svg>')}" style="border: 3px ridge #8A2BE2; margin: 10px 0;">
                <p style="font-size: 14px; margin: 10px 0;">
                    <span class="popup-urgent">CALL NOW!</span><br>
                    I see love, money, and success in your future!<br>
                    <b>1-900-PSYCHIC</b><br>
                    <small>($4.99/min, 18+, entertainment only)</small>
                </p>
                <button class="popup-button" onclick="alert('📞 Dialing Miss Cleo... Just kidding! This is a demo!')">
                    CALL NOW FOR FREE!
                </button>
            </center>
        `;
    }
    
    getColumbiaHouseAd() {
        return `
            <center>
                <h2 style="color: #000080; margin: 0;">💿 12 CDs for ONLY 1¢! 💿</h2>
                <div class="popup-marquee">
                    <marquee>Limited time offer! Join Columbia House Music Club today!</marquee>
                </div>
                <p style="font-size: 13px; margin: 10px 0;">
                    Get 12 CDs of your choice for just 1 penny!<br>
                    ✅ Backstreet Boys ✅ Britney Spears<br>
                    ✅ Eminem ✅ Limp Bizkit<br>
                    ✅ Christina Aguilera ✅ Korn<br>
                    <br>
                    <span class="popup-urgent">LIMITED TIME OFFER!</span><br>
                    <small>(Then buy 6 more at regular club prices)</small>
                </p>
                <button class="popup-button" onclick="alert('🎵 Adding to cart... Just kidding! CD clubs are gone!')">
                    JOIN FOR 1¢!
                </button>
                <button class="popup-button" onclick="alert('📋 More info: Remember those mail-order CD clubs?')">
                    MORE INFO
                </button>
            </center>
        `;
    }
    
    getWeightLossAd() {
        return `
            <center>
                <h2 style="color: #FF1493; margin: 0;">🏃‍♀️ LOSE 30 LBS IN 30 DAYS! 🏃‍♀️</h2>
                <p style="font-size: 14px; margin: 10px 0;">
                    <span class="popup-urgent">DOCTORS HATE THIS ONE WEIRD TRICK!</span><br>
                    Local mom discovers amazing weight loss secret!<br>
                    <br>
                    ✅ No diet required!<br>
                    ✅ No exercise needed!<br>
                    ✅ 100% natural!<br>
                    <br>
                    <b>Before:</b> 200 lbs → <b>After:</b> 130 lbs<br>
                    <small>"I lost 70 pounds in 2 months!" - Sarah M.</small>
                </p>
                <button class="popup-button" onclick="alert('🎯 Learn more... Classic 90s diet scam!')">
                    LEARN THE SECRET!
                </button>
            </center>
        `;
    }
    
    getCasinoAd() {
        return `
            <div class="popup-winner">
                <center>
                    <h2 style="color: #000080; margin: 0;">🎰 FREE $500 CASINO BONUS! 🎰</h2>
                    <div class="popup-marquee">
                        <marquee>Winner! Winner! Chicken Dinner!</marquee>
                    </div>
                    <p style="font-size: 13px; margin: 10px 0;">
                        <span class="popup-urgent">YOU'VE BEEN SELECTED!</span><br>
                        🎲 Over 200 casino games!<br>
                        🃏 Blackjack, Slots, Poker!<br>
                        💰 Win up to $1,000,000!<br>
                        <br>
                        <b>CLAIM YOUR $500 FREE BONUS NOW!</b><br>
                        <small>(Must be 21+, gambling problem? Call 1-800-GAMBLER)</small>
                    </p>
                    <button class="popup-button" onclick="alert('🎰 Spinning reels... Gambling ads were everywhere!')">
                        CLAIM BONUS!
                    </button>
                </center>
            </div>
        `;
    }
    
    getMortgageAd() {
        return `
            <center>
                <h2 style="color: #008000; margin: 0;">🏠 REFINANCE YOUR HOME TODAY! 🏠</h2>
                <p style="font-size: 13px; margin: 10px 0;">
                    <span class="popup-urgent">RATES HAVE NEVER BEEN LOWER!</span><br>
                    💵 Lower your payment by $500/month!<br>
                    💳 Consolidate debt!<br>
                    💰 Cash out equity!<br>
                    <br>
                    <b>FREE Rate Quote in 60 seconds!</b><br>
                    No SSN required!<br>
                    <small>(Rate depends on credit, home value, etc.)</small>
                </p>
                <button class="popup-button" onclick="alert('🏦 Calculating rates... Mortgage ads everywhere in the 90s!')">
                    GET FREE QUOTE!
                </button>
            </center>
        `;
    }
    
    getDatingAd() {
        return `
            <center>
                <h2 style="color: #FF1493; margin: 0;">💋 HOT SINGLES IN YOUR AREA! 💋</h2>
                <div class="popup-marquee">
                    <marquee>Jenny (19) wants to meet you!</marquee>
                </div>
                <p style="font-size: 13px; margin: 10px 0;">
                    <span class="popup-urgent">3 women want to meet you!</span><br>
                    💕 Chat live with local singles!<br>
                    📱 Free membership!<br>
                    🌹 Find love tonight!<br>
                    <br>
                    Click to see who's online now!<br>
                    <small>(Must be 18+, entertainment purposes)</small>
                </p>
                <button class="popup-button" onclick="alert('💌 Connecting... These ads were EVERYWHERE!')">
                    CHAT NOW!
                </button>
            </center>
        `;
    }
    
    getViagramAd() {
        return `
            <center>
                <h2 style="color: #0000FF; margin: 0;">💊 MALE ENHANCEMENT PILLS 💊</h2>
                <p style="font-size: 13px; margin: 10px 0;">
                    <span class="popup-urgent">DOCTOR RECOMMENDED!</span><br>
                    ✅ 100% Natural herbs!<br>
                    ✅ No prescription needed!<br>
                    ✅ Overnight shipping!<br>
                    <br>
                    <b>FREE 30-day trial!</b><br>
                    Discreet packaging guaranteed!<br>
                    <small>(Results not typical, consult doctor)</small>
                </p>
                <button class="popup-button" onclick="alert('📦 Ordering... Remember spam email?')">
                    ORDER FREE TRIAL!
                </button>
            </center>
        `;
    }
    
    getWinnerAd() {
        return `
            <div class="popup-winner">
                <center>
                    <h2 style="color: #FF0000; margin: 0;">🎉 CONGRATULATIONS! YOU'VE WON! 🎉</h2>
                    <div class="popup-marquee">
                        <marquee>YOU ARE VISITOR #1,000,000!</marquee>
                    </div>
                    <p style="font-size: 14px; margin: 10px 0;">
                        <span class="popup-urgent">YOU'VE WON $1,000,000!</span><br>
                        🏆 You are our 1 millionth visitor!<br>
                        💰 Claim your prize now!<br>
                        🎁 Plus a FREE iPod!<br>
                        <br>
                        <b>Click to claim your prize!</b><br>
                        <small>(Offer expires in 24 hours)</small>
                    </p>
                    <button class="popup-button" onclick="alert('🎊 Prize claim... Classic 90s scam!')">
                        CLAIM $1,000,000!
                    </button>
                </center>
            </div>
        `;
    }
}

// Initialize Popup Ads when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the page to load before starting popups
    setTimeout(() => {
        window.popupAdsManager = new PopupAdsManager();
    }, 3000);
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    setTimeout(() => {
        window.popupAdsManager = new PopupAdsManager();
    }, 3000);
}