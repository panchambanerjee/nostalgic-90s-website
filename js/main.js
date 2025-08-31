// Main 90s Website Functionality
class NostalgicWebsite {
    constructor() {
        this.hitCount = this.getHitCount();
        this.popupInterval = null;
        this.musicEnabled = false;
        this.currentTrack = 0;
        this.volume = 5; // 1-10 scale
        this.audioContext = null;
        this.musicTimeout = null;
        
        // Enhanced music tracks with multiple melodies
        this.musicTracks = [
            {
                name: "🎵 Cyber Dreams - MIDI Mix 🎵",
                melody: [261.63, 293.66, 329.63, 349.23, 392.00, 349.23, 329.63, 293.66],
                tempo: 600,
                waveform: 'square'
            },
            {
                name: "🎮 8-Bit Adventure Theme 🎮", 
                melody: [392.00, 440.00, 493.88, 523.25, 493.88, 440.00, 392.00, 349.23],
                tempo: 400,
                waveform: 'sawtooth'
            },
            {
                name: "🌐 Internet Superhighway 🌐",
                melody: [220.00, 246.94, 277.18, 293.66, 329.63, 369.99, 415.30, 466.16],
                tempo: 500,
                waveform: 'triangle'
            },
            {
                name: "📼 Retro Wave Nostalgia 📼",
                melody: [174.61, 196.00, 220.00, 233.08, 261.63, 293.66, 329.63, 349.23],
                tempo: 700,
                waveform: 'sine'
            },
            {
                name: "🎪 Carnival of Pixels 🎪",
                melody: [329.63, 369.99, 415.30, 466.16, 523.25, 466.16, 415.30, 369.99],
                tempo: 300,
                waveform: 'square'
            },
            {
                name: "🚀 Space Quest MIDI 🚀",
                melody: [130.81, 146.83, 164.81, 174.61, 196.00, 220.00, 246.94, 277.18],
                tempo: 450,
                waveform: 'sawtooth'
            }
        ];
        
        this.initializeHitCounter();
        this.startPopupAds();
        this.addRandomEffects();
        this.updateTrackDisplay();
        this.initializeInternetCulture();
    }
    
    getHitCount() {
        const stored = localStorage.getItem('hit-counter');
        return stored ? parseInt(stored) : Math.floor(Math.random() * 9999) + 1000;
    }
    
    incrementHitCounter() {
        this.hitCount++;
        localStorage.setItem('hit-counter', this.hitCount.toString());
        
        // Update main counter
        const counter = document.getElementById('hit-counter');
        if (counter) {
            counter.textContent = this.hitCount.toLocaleString();
        }
        
        // Update digital display with rolling animation
        this.updateDigitalCounter(this.hitCount);
    }
    
    updateDigitalCounter(count) {
        const display = document.getElementById('hit-counter-display');
        if (!display) return;
        
        // Pad with zeros to 6 digits
        const paddedCount = count.toString().padStart(6, '0');
        
        // Add rolling animation effect
        display.style.transition = 'none';
        display.style.transform = 'scaleY(0.1)';
        
        setTimeout(() => {
            display.innerHTML = `<b>${paddedCount}</b>`;
            display.style.transition = 'transform 0.3s ease';
            display.style.transform = 'scaleY(1)';
        }, 100);
        
        // Add flashing effect
        display.style.color = '#FFFF00';
        setTimeout(() => {
            display.style.color = '#FF0000';
        }, 200);
    }
    
    initializeHitCounter() {
        // Will be called when main content is shown
        setTimeout(() => {
            this.incrementHitCounter();
            this.startRandomIncrements();
        }, 1000);
    }
    
    startRandomIncrements() {
        // Simulate other visitors with periodic increments
        setInterval(() => {
            if (Math.random() < 0.15) { // 15% chance every 30 seconds
                this.simulateVisitor();
            }
        }, 30000);
        
        // Also add some faster increments during "peak hours"
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance every 10 seconds
                this.simulateVisitor();
            }
        }, 10000);
    }
    
    simulateVisitor() {
        this.hitCount++;
        localStorage.setItem('hit-counter', this.hitCount.toString());
        
        // Update both counters
        const counter = document.getElementById('hit-counter');
        if (counter) {
            counter.textContent = this.hitCount.toLocaleString();
        }
        
        this.updateDigitalCounter(this.hitCount);
        
        // Show a subtle notification
        this.showVisitorNotification();
    }
    
    showVisitorNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(45deg, #000080, #0000FF);
            color: white;
            padding: 5px 10px;
            border: 2px outset #C0C0C0;
            font-family: Arial, sans-serif;
            font-size: 10px;
            z-index: 1001;
            opacity: 0.8;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
        `;
        
        notification.textContent = '+1 Visitor!';
        document.body.appendChild(notification);
        
        // Fade out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 1000);
        }, 2000);
    }
    
    startPopupAds() {
        // Start showing popup ads after 8 seconds, then more frequently (like real 90s sites!)
        setTimeout(() => {
            this.showPopupAd();
            
            // Multiple intervals for realistic 90s popup chaos
            this.popupInterval = setInterval(() => {
                if (Math.random() < 0.4) { // 40% chance every 25 seconds
                    this.showPopupAd();
                }
            }, 25000);
            
            // Additional "aggressive" popup interval
            setTimeout(() => {
                setInterval(() => {
                    if (Math.random() < 0.25) { // 25% chance every 45 seconds
                        this.showPopupAd();
                    }
                }, 45000);
            }, 60000); // Start after 1 minute
            
            // Peak popup time (simulate peak internet hours)
            setTimeout(() => {
                setInterval(() => {
                    if (Math.random() < 0.15) { // 15% chance every 20 seconds during "peak"
                        this.showPopupAd();
                    }
                }, 20000);
            }, 180000); // Start after 3 minutes
            
        }, 8000);
    }
    
    showPopupAd() {
        const ads = [
            {
                title: "🎉 CONGRATULATIONS! 🎉",
                content: "You are our 1000th visitor today!<br>Click here to claim your FREE iPod!<br><blink>HURRY! OFFER EXPIRES SOON!</blink>",
                button: "CLAIM NOW!",
                bg: "#FF0000"
            },
            {
                title: "⚠️ VIRUS ALERT! ⚠️",
                content: "Your computer may be infected with 47 viruses!<br>Download McAfee VirusScan NOW!<br><marquee>IMMEDIATE ACTION REQUIRED!</marquee>",
                button: "SCAN NOW",
                bg: "#FFFF00"
            },
            {
                title: "💰 MAKE MONEY FAST! 💰",
                content: "Earn $5000 per week working from home!<br>No experience needed! No gimmicks!<br><b>GUARANTEED RESULTS!</b>",
                button: "JOIN NOW!",
                bg: "#00FF00"
            },
            {
                title: "🔮 Miss Cleo's Psychic Hotline 🔮",
                content: "Call now for your FREE tarot reading!<br>The spirits are waiting to reveal your destiny!<br><i>1-900-PSYCHIC</i>",
                button: "CALL NOW!",
                bg: "#800080"
            },
            {
                title: "📼 Columbia House CD Club 📼",
                content: "Get 12 CDs for just 1¢!<br>Choose from artists like Backstreet Boys,<br>Britney Spears, and Limp Bizkit!",
                button: "JOIN TODAY!",
                bg: "#0000FF"
            },
            {
                title: "📺 RealPlayer - Free Download! 📺",
                content: "Stream audio and video with RealPlayer!<br>The #1 multimedia player on the web!<br><small>56k modem recommended</small>",
                button: "DOWNLOAD",
                bg: "#FF8C00"
            },
            {
                title: "💾 WinZip Evaluation Copy 💾",
                content: "This is your 2847th day of evaluation.<br>Please register WinZip today!<br><b>Only $29.95!</b>",
                button: "REGISTER",
                bg: "#C0C0C0"
            },
            {
                title: "🌐 Free Internet Access! 🌐",
                content: "NetZero gives you 10 hours FREE!<br>No credit card required!<br><blink>Sign up today!</blink>",
                button: "SIGN UP",
                bg: "#00FFFF"
            },
            {
                title: "📧 You've Got Mail! 📧",
                content: "Upgrade to AOL 6.0 for faster email!<br>Now with Instant Messenger!<br><b>30 Days FREE!</b>",
                button: "UPGRADE",
                bg: "#4169E1"
            },
            {
                title: "💿 Napster Alternative! 💿",
                content: "Download unlimited MP3s legally!<br>Kazaa - The fast P2P network!<br><small>Not affiliated with RIAA</small>",
                button: "DOWNLOAD",
                bg: "#32CD32"
            },
            {
                title: "🎮 Pokemon Cards Online! 🎮",
                content: "Rare holographic Charizard available!<br>Trade cards with players worldwide!<br><b>Gotta Catch 'Em All!</b>",
                button: "PLAY NOW",
                bg: "#FFD700"
            },
            {
                title: "📱 Get a Free Pager! 📱",
                content: "Stay connected with Motorola pagers!<br>Numeric and alphanumeric models!<br><i>As seen on The X-Files!</i>",
                button: "ORDER NOW",
                bg: "#8B4513"
            },
            {
                title: "🎬 The Matrix on DVD! 🎬",
                content: "Own the mind-bending sci-fi thriller!<br>Special features & behind-the-scenes!<br><b>There is no spoon...</b>",
                button: "BUY NOW",
                bg: "#006400"
            },
            {
                title: "👍 Millionaire Trivia CD-ROM 👍",
                content: "Who Wants to Be a Millionaire - PC Game!<br>1,000 questions from the hit TV show!<br><i>Phone a friend feature included!</i>",
                button: "DOWNLOAD",
                bg: "#4169E1"
            },
            {
                title: "🎥 Star Wars Episode I VHS! 🎥",
                content: "The Phantom Menace - Now on Video!<br>Experience the magic of pod racing!<br><b>Jar Jar Binks awaits!</b>",
                button: "PRE-ORDER",
                bg: "#FFD700"
            },
            {
                title: "📺 Y2K Survival Guide 📺",
                content: "Prepare for the millennium bug!<br>Stock up on batteries, water, and cash!<br><blink>CIVILIZATION DEPENDS ON IT!</blink>",
                button: "GET GUIDE",
                bg: "#FF4500"
            },
            {
                title: "🕺 TRL Countdown CD 🕺",
                content: "MTV's Total Request Live hits of '99!<br>Featuring Backstreet Boys, Britney & more!<br><i>Carson Daly approved!</i>",
                button: "ORDER CD",
                bg: "#FF1493"
            }
        ];
        
        const ad = ads[Math.floor(Math.random() * ads.length)];
        this.createPopupWindow(ad);
    }
    
    createPopupWindow(ad) {
        const popup = document.createElement('div');
        popup.className = 'popup-ad';
        popup.style.cssText = `
            position: fixed;
            width: 350px;
            min-height: 180px;
            background: linear-gradient(45deg, ${ad.bg || '#C0C0C0'}, #FFFFFF);
            border: 3px outset #C0C0C0;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.7);
            z-index: 9999;
            font-family: Arial, sans-serif;
            font-size: 11px;
            cursor: move;
            animation: popupBounce 0.5s ease-out;
        `;
        
        popup.innerHTML = `
            <div class="popup-header" style="
                background: linear-gradient(90deg, #000080, #4169E1);
                color: white;
                padding: 3px 5px;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: move;
                border-bottom: 2px inset #C0C0C0;
            ">
                <span style="font-size: 10px;">${ad.title}</span>
                <button class="popup-close" onclick="this.parentElement.parentElement.remove()" style="
                    background: #C0C0C0;
                    border: 1px outset #C0C0C0;
                    width: 16px;
                    height: 14px;
                    font-size: 10px;
                    font-weight: bold;
                    cursor: pointer;
                    padding: 0;
                    line-height: 12px;
                ">×</button>
            </div>
            <div class="popup-content" style="
                padding: 15px;
                text-align: center;
                background: ${ad.bg ? `radial-gradient(circle, ${ad.bg}, #FFFFFF)` : '#F0F0F0'};
                border: 1px inset #C0C0C0;
            ">
                <div style="
                    background: #FFFFFF;
                    border: 2px inset #C0C0C0;
                    padding: 10px;
                    margin-bottom: 10px;
                    box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3);
                ">
                    <p style="margin: 0; font-weight: bold; line-height: 1.4;">${ad.content}</p>
                </div>
                <button class="popup-button" onclick="alert('Just kidding! This is a fake 90s popup 😄\\n\\nRemember when the internet was like this?'); this.parentElement.parentElement.remove();" style="
                    background: linear-gradient(45deg, #FF4500, #FF8C00);
                    color: white;
                    border: 2px outset #FF8C00;
                    padding: 8px 16px;
                    font-weight: bold;
                    font-size: 11px;
                    cursor: pointer;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
                    animation: buttonBlink 2s ease-in-out infinite;
                ">
                    ${ad.button}
                </button>
            </div>
        `;
        
        // Add CSS animations if not already added
        if (!document.querySelector('#popup-styles')) {
            const style = document.createElement('style');
            style.id = 'popup-styles';
            style.textContent = `
                @keyframes popupBounce {
                    0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
                    50% { transform: scale(1.1) rotate(5deg); opacity: 0.9; }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
                @keyframes buttonBlink {
                    0%, 50% { background: linear-gradient(45deg, #FF4500, #FF8C00); }
                    51%, 100% { background: linear-gradient(45deg, #FF8C00, #FFD700); }
                }
                .popup-ad blink {
                    animation: blink 1s linear infinite;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .popup-ad marquee {
                    background: #FF0000;
                    color: #FFFFFF;
                    font-weight: bold;
                    padding: 2px;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Random position (ensure it's visible)
        const maxLeft = Math.max(0, window.innerWidth - 370);
        const maxTop = Math.max(0, window.innerHeight - 200);
        popup.style.left = Math.random() * maxLeft + 'px';
        popup.style.top = Math.random() * maxTop + 'px';
        
        // Make draggable
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;
        
        const header = popup.querySelector('.popup-header');
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialLeft = parseInt(popup.style.left);
            initialTop = parseInt(popup.style.top);
            popup.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            popup.style.left = (initialLeft + deltaX) + 'px';
            popup.style.top = (initialTop + deltaY) + 'px';
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            popup.style.cursor = 'move';
        });
        
        document.body.appendChild(popup);
        
        // Play a notification sound effect (if available)
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+L');
            audio.volume = 0.1;
            audio.play().catch(() => {}); // Ignore errors
        } catch (e) {}
        
        // Auto-close after 15 seconds if user doesn't interact
        setTimeout(() => {
            if (popup.parentElement) {
                popup.style.animation = 'popupBounce 0.3s ease-in reverse';
                setTimeout(() => {
                    if (popup.parentElement) {
                        popup.remove();
                    }
                }, 300);
            }
        }, 15000);
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
    
    // Internet Culture Features
    initializeInternetCulture() {
        this.emailCount = {
            hotmail: Math.floor(Math.random() * 50) + 20,
            yahoo: Math.floor(Math.random() * 20) + 5,
            juno: Math.floor(Math.random() * 10) + 1,
            excite: Math.floor(Math.random() * 15) + 3
        };
        
        this.aolBuddies = [
            { name: 'CyberKid1999', status: 'online', away: false },
            { name: 'StarWarsGeek97', status: 'online', away: false },
            { name: 'PokemonMaster', status: 'away', away: true },
            { name: 'MusicLover99', status: 'online', away: false },
            { name: 'GameFreak2000', status: 'idle', away: true }
        ];
        
        this.icqStatus = 'online';
        this.pagerMessages = Math.floor(Math.random() * 5);
        
        this.startInternetCultureUpdates();
        this.createICQPopups();
    }
    
    startInternetCultureUpdates() {
        // Update email counts periodically
        setInterval(() => {
            if (Math.random() < 0.3) {
                const providers = ['hotmail', 'yahoo', 'juno', 'excite'];
                const provider = providers[Math.floor(Math.random() * providers.length)];
                this.emailCount[provider]++;
                this.updateEmailDisplay();
                this.showEmailNotification(provider);
            }
        }, 45000); // Every 45 seconds
        
        // Update buddy list status
        setInterval(() => {
            if (Math.random() < 0.4) {
                this.updateBuddyStatus();
            }
        }, 60000); // Every minute
        
        // Simulate pager messages
        setInterval(() => {
            if (Math.random() < 0.2) {
                this.pagerMessages++;
                this.showPagerNotification();
            }
        }, 80000); // Every 80 seconds
    }
    
    updateEmailDisplay() {
        const total = Object.values(this.emailCount).reduce((sum, count) => sum + count, 0);
        
        // Update the email status box if it exists
        const emailBox = document.querySelector('[bgcolor="#FFCCFF"] div');
        if (emailBox) {
            emailBox.innerHTML = `
                <div>📧 Hotmail: ${this.emailCount.hotmail} new messages!</div>
                <div>📧 Yahoo: ${this.emailCount.yahoo} new messages</div>
                <div>📧 Juno: ${this.emailCount.juno} new messages</div>
                <div>📧 Excite: ${this.emailCount.excite} new messages</div>
                <div style="color: #FF0000;"><blink>Total: ${total} unread!</blink></div>
            `;
        }
    }
    
    showEmailNotification(provider) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #0000FF, #00FFFF);
            color: white;
            padding: 8px 12px;
            border: 2px outset #C0C0C0;
            font-family: Arial, sans-serif;
            font-size: 10px;
            z-index: 1002;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
            animation: emailBounce 0.5s ease-out;
        `;
        
        notification.innerHTML = `
            <b>📧 You've Got Mail!</b><br>
            New message in ${provider.charAt(0).toUpperCase() + provider.slice(1)}!
        `;
        
        document.body.appendChild(notification);
        
        // Play email sound effect
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+L');
            audio.volume = 0.2;
            audio.play().catch(() => {});
        } catch (e) {}
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 1000);
        }, 4000);
    }
    
    updateBuddyStatus() {
        const buddy = this.aolBuddies[Math.floor(Math.random() * this.aolBuddies.length)];
        const statuses = ['online', 'away', 'idle'];
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        buddy.status = newStatus;
        buddy.away = newStatus !== 'online';
        
        // Update buddy list display
        const buddyBox = document.querySelector('[bgcolor="#E0E0FF"] div');
        if (buddyBox) {
            let buddyHTML = '';
            this.aolBuddies.forEach(b => {
                const icon = b.status === 'online' ? '🟢' : '🔴';
                const statusText = b.status === 'online' ? 'Online' : 
                                 b.status === 'away' ? 'Away' : 'Idle';
                buddyHTML += `<div>${icon} ${b.name} (${statusText})</div>`;
            });
            
            const onlineCount = this.aolBuddies.filter(b => b.status === 'online').length;
            buddyHTML += `<div style="margin-top: 2px; color: #008000;">${onlineCount} buddies online</div>`;
            
            buddyBox.innerHTML = buddyHTML;
        }
        
        this.showBuddyNotification(buddy, newStatus);
    }
    
    showBuddyNotification(buddy, status) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 20px;
            background: linear-gradient(45deg, #000080, #4169E1);
            color: white;
            padding: 6px 10px;
            border: 2px outset #C0C0C0;
            font-family: Arial, sans-serif;
            font-size: 9px;
            z-index: 1002;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
        `;
        
        const statusMessages = {
            online: `${buddy.name} signed on`,
            away: `${buddy.name} went away`,
            idle: `${buddy.name} became idle`
        };
        
        notification.textContent = statusMessages[status] || `${buddy.name} status changed`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 1000);
        }, 3000);
    }
    
    showPagerNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(45deg, #FF8C00, #FFD700);
            color: black;
            padding: 8px 12px;
            border: 2px outset #C0C0C0;
            font-family: Arial, sans-serif;
            font-size: 10px;
            font-weight: bold;
            z-index: 1002;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
            animation: pagerBlink 0.3s ease-in-out 3;
        `;
        
        const messages = [
            '📟 143 (I Love You)',
            '📟 911 (Emergency!)',
            '📟 Mom called',
            '📟 Pizza ready',
            '📟 Call me back!',
            '📟 Party @ 8pm'
        ];
        
        notification.textContent = messages[Math.floor(Math.random() * messages.length)];
        document.body.appendChild(notification);
        
        // Add CSS for pager blink animation
        if (!document.querySelector('#pager-styles')) {
            const style = document.createElement('style');
            style.id = 'pager-styles';
            style.textContent = `
                @keyframes pagerBlink {
                    0%, 100% { background: linear-gradient(45deg, #FF8C00, #FFD700); }
                    50% { background: linear-gradient(45deg, #FFD700, #FFFF00); }
                }
                @keyframes emailBounce {
                    0% { transform: scale(0.5) translateX(100%); }
                    50% { transform: scale(1.1) translateX(0); }
                    100% { transform: scale(1) translateX(0); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 1000);
        }, 4000);
    }
    
    createICQPopups() {
        // Periodic ICQ message popups
        setInterval(() => {
            if (Math.random() < 0.15) {
                this.showICQMessage();
            }
        }, 90000); // Every 90 seconds
    }
    
    showICQMessage() {
        const icqPopup = document.createElement('div');
        icqPopup.style.cssText = `
            position: fixed;
            width: 280px;
            height: 150px;
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.7);
            z-index: 9998;
            font-family: Arial, sans-serif;
            font-size: 11px;
        `;
        
        // Random position
        icqPopup.style.left = Math.random() * (window.innerWidth - 300) + 'px';
        icqPopup.style.top = Math.random() * (window.innerHeight - 170) + 'px';
        
        const icqMessages = [
            { from: 'CyberKid1999', msg: 'Dude, did you see The Matrix yet? Mind = BLOWN! 🤯' },
            { from: 'StarWarsGeek97', msg: 'Episode I comes out this year! Jar Jar looks... interesting 😅' },
            { from: 'MusicLover99', msg: 'Just downloaded the new Backstreet Boys album on Napster! 🎵' },
            { from: 'PokemonMaster', msg: 'I caught Mew using the truck trick! Want to trade? ⚡' },
            { from: 'GameFreak2000', msg: 'Quake 3 Arena is INSANE! LAN party this weekend? 🎮' }
        ];
        
        const message = icqMessages[Math.floor(Math.random() * icqMessages.length)];
        
        icqPopup.innerHTML = `
            <div style="
                background: linear-gradient(90deg, #FF0000, #FF4500);
                color: white;
                padding: 3px 5px;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <span>📢 ICQ Message</span>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #C0C0C0;
                    border: 1px outset #C0C0C0;
                    width: 16px;
                    height: 14px;
                    font-size: 10px;
                    cursor: pointer;
                    padding: 0;
                ">×</button>
            </div>
            <div style="padding: 10px; background: #F0F0F0;">
                <div style="margin-bottom: 8px;">
                    <b>From:</b> ${message.from} (12345678)<br>
                    <b>Time:</b> ${new Date().toLocaleTimeString()}
                </div>
                <div style="
                    background: white;
                    border: 1px inset #C0C0C0;
                    padding: 8px;
                    font-size: 10px;
                    max-height: 60px;
                    overflow-y: auto;
                ">
                    ${message.msg}
                </div>
                <div style="text-align: right; margin-top: 5px;">
                    <button onclick="alert('Feature not available in demo!'); this.parentElement.parentElement.parentElement.remove();" style="
                        background: #008000;
                        color: white;
                        border: 1px outset #008000;
                        padding: 3px 8px;
                        font-size: 9px;
                        cursor: pointer;
                    ">Reply</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                        background: #C0C0C0;
                        border: 1px outset #C0C0C0;
                        padding: 3px 8px;
                        font-size: 9px;
                        cursor: pointer;
                        margin-left: 5px;
                    ">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(icqPopup);
        
        // Auto-close after 20 seconds
        setTimeout(() => {
            if (icqPopup.parentElement) {
                icqPopup.remove();
            }
        }, 20000);
    }
    
    toggleMusic() {
        if (this.musicEnabled) {
            this.stopBackgroundMusic();
            this.musicEnabled = false;
            this.updatePlayButton('▶️ PLAY');
        } else {
            this.playBackgroundMusic();
            this.musicEnabled = true;
            this.updatePlayButton('⏹️ STOP');
        }
    }
    
    updatePlayButton(text) {
        const playBtn = document.getElementById('play-pause-btn');
        if (playBtn) {
            playBtn.textContent = text;
        }
    }
    
    updateTrackDisplay() {
        const trackDisplay = document.getElementById('track-marquee');
        if (trackDisplay && this.musicTracks[this.currentTrack]) {
            const track = this.musicTracks[this.currentTrack];
            trackDisplay.textContent = `🎵 ${track.name} - Track ${this.currentTrack + 1}/${this.musicTracks.length} 🎵`;
            
            // Add spectrum analyzer effect
            this.addSpectrumAnalyzer();
        }
    }
    
    addSpectrumAnalyzer() {
        const winampPlayer = document.getElementById('winamp-player');
        if (!winampPlayer) return;
        
        // Remove existing spectrum analyzer
        const existing = winampPlayer.querySelector('.spectrum-analyzer');
        if (existing) existing.remove();
        
        // Create spectrum analyzer
        const spectrum = document.createElement('div');
        spectrum.className = 'spectrum-analyzer';
        spectrum.style.cssText = `
            display: flex;
            align-items: end;
            height: 20px;
            gap: 1px;
            margin: 5px 0;
            background: #000;
            border: 1px inset #C0C0C0;
            padding: 2px;
        `;
        
        // Create spectrum bars
        for (let i = 0; i < 16; i++) {
            const bar = document.createElement('div');
            bar.style.cssText = `
                width: 4px;
                background: linear-gradient(180deg, #FF0000, #FFFF00, #00FF00);
                animation: spectrumBar${i} ${0.2 + Math.random() * 0.3}s ease-in-out infinite alternate;
                border-radius: 1px;
            `;
            spectrum.appendChild(bar);
            
            // Add unique animation for each bar
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spectrumBar${i} {
                    0% { height: 2px; opacity: 0.5; }
                    100% { height: ${4 + Math.random() * 12}px; opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Insert spectrum analyzer after track display
        const trackDisplay = winampPlayer.querySelector('#track-display');
        if (trackDisplay) {
            trackDisplay.parentNode.insertBefore(spectrum, trackDisplay.nextSibling);
        }
    }
    
    nextTrack() {
        this.currentTrack = (this.currentTrack + 1) % this.musicTracks.length;
        this.updateTrackDisplay();
        
        // If music is playing, restart with new track
        if (this.musicEnabled) {
            this.stopBackgroundMusic();
            setTimeout(() => {
                this.playBackgroundMusic();
            }, 100);
        }
    }
    
    previousTrack() {
        this.currentTrack = this.currentTrack === 0 ? this.musicTracks.length - 1 : this.currentTrack - 1;
        this.updateTrackDisplay();
        
        // If music is playing, restart with new track
        if (this.musicEnabled) {
            this.stopBackgroundMusic();
            setTimeout(() => {
                this.playBackgroundMusic();
            }, 100);
        }
    }
    
    setVolume(level) {
        this.volume = level;
        
        // Update visual volume bars with animation
        const volumeBars = document.querySelectorAll('.vol-bar');
        volumeBars.forEach((bar, index) => {
            if (index < level) {
                bar.classList.add('active');
                // Add pulse effect
                bar.style.animation = 'volumePulse 0.3s ease-in-out';
            } else {
                bar.classList.remove('active');
                bar.style.animation = '';
            }
        });
        
        // Show volume level feedback
        this.showVolumeNotification(level);
        
        // Update actual audio volume if playing
        if (this.audioContext && this.musicEnabled) {
            // Volume will be applied to next note
        }
    }
    
    showVolumeNotification(level) {
        // Remove existing notification
        const existing = document.querySelector('.volume-notification');
        if (existing) existing.remove();
        
        // Create volume notification
        const notification = document.createElement('div');
        notification.className = 'volume-notification';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.8);
            color: #00FF00;
            border: 2px solid #00FF00;
            padding: 10px 20px;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            font-size: 16px;
            z-index: 10000;
            border-radius: 5px;
            animation: volumeFade 1s ease-out forwards;
        `;
        
        const volumeIcons = ['🔇', '🔉', '🔊', '📢'];
        const iconIndex = Math.min(3, Math.floor(level / 3));
        notification.textContent = `${volumeIcons[iconIndex]} Volume: ${level}/10`;
        
        document.body.appendChild(notification);
        
        // Auto-remove after animation
        setTimeout(() => {
            if (notification.parentElement) notification.remove();
        }, 1000);
        
        // Add CSS animation if not exists
        if (!document.querySelector('#volume-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'volume-notification-styles';
            style.textContent = `
                @keyframes volumeFade {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    showPlaylist() {
        const playlist = this.musicTracks.map((track, index) => 
            `${index + 1}. ${track.name}`
        ).join('\n');
        
        alert(`🎵 WINAMP PLAYLIST 🎵\n\n${playlist}\n\nCurrently playing: Track ${this.currentTrack + 1}\n\nTip: Use ⏮️ and ⏭️ to navigate tracks!`);
    }
    
    playBackgroundMusic() {
        try {
            // Create audio context
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            const track = this.musicTracks[this.currentTrack];
            let noteIndex = 0;
            
            const playNextNote = () => {
                if (!this.musicEnabled) return;
                
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(track.melody[noteIndex], this.audioContext.currentTime);
                oscillator.type = track.waveform;
                
                // Apply volume (1-10 scale converted to 0-0.2 for audio)
                const volumeLevel = (this.volume / 10) * 0.15;
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(volumeLevel, this.audioContext.currentTime + 0.05);
                gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + (track.tempo / 1000) * 0.8);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + (track.tempo / 1000));
                
                noteIndex = (noteIndex + 1) % track.melody.length;
                
                // Add some variation to prevent monotony
                let nextDelay = track.tempo;
                if (Math.random() < 0.1) { // 10% chance for rhythm variation
                    nextDelay *= (Math.random() < 0.5 ? 0.5 : 1.5);
                }
                
                // Schedule next note
                if (this.musicEnabled) {
                    this.musicTimeout = setTimeout(playNextNote, nextDelay);
                }
            };
            
            // Start the melody
            playNextNote();
            
            // Add some bass notes occasionally for richness
            if (track.waveform === 'square' || track.waveform === 'sawtooth') {
                const addBass = () => {
                    if (!this.musicEnabled) return;
                    
                    const bassOsc = this.audioContext.createOscillator();
                    const bassGain = this.audioContext.createGain();
                    
                    bassOsc.connect(bassGain);
                    bassGain.connect(this.audioContext.destination);
                    
                    bassOsc.frequency.setValueAtTime(track.melody[0] / 2, this.audioContext.currentTime);
                    bassOsc.type = 'sine';
                    
                    const bassVolume = (this.volume / 10) * 0.05;
                    bassGain.gain.setValueAtTime(0, this.audioContext.currentTime);
                    bassGain.gain.linearRampToValueAtTime(bassVolume, this.audioContext.currentTime + 0.1);
                    bassGain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + track.tempo * 0.004);
                    
                    bassOsc.start(this.audioContext.currentTime);
                    bassOsc.stop(this.audioContext.currentTime + track.tempo * 0.004);
                    
                    if (this.musicEnabled) {
                        setTimeout(addBass, track.tempo * 4);
                    }
                };
                
                setTimeout(addBass, track.tempo * 2);
            }
            
        } catch (error) {
            console.log('Web Audio API not supported:', error);
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
        
        // Initialize photo gallery
        if (window.initializePhotoGallery) {
            console.log('Initializing photo gallery...');
            window.initializePhotoGallery();
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