// Visual Effects for 90s Website
class VisualEffects {
    constructor() {
        this.floatingIcons = ['⭐', '💫', '🌟', '✨', '🎭', '🎪', '🎨', '🎯', '🎲', '🎸', '🎺', '🎼'];
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;
        
        // Start floating icons
        this.startFloatingIcons();
        
        // Add random screen effects
        this.addRandomEffects();
        
        // Create trailing cursor effect
        this.addCursorTrail();
        
        // Add random sparkles on click
        this.addClickSparkles();
        
        // Periodically add glitter effects
        this.addPeriodicGlitter();
    }
    
    startFloatingIcons() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every 3 seconds
                this.createFloatingIcon();
            }
        }, 3000);
    }
    
    createFloatingIcon() {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.textContent = this.floatingIcons[Math.floor(Math.random() * this.floatingIcons.length)];
        
        // Random position
        icon.style.left = Math.random() * (window.innerWidth - 40) + 'px';
        icon.style.top = window.innerHeight + 'px';
        
        // Random animation duration
        const duration = 4000 + Math.random() * 4000;
        icon.style.animationDuration = duration + 'ms';
        
        document.body.appendChild(icon);
        
        // Remove after animation
        setTimeout(() => {
            if (icon.parentElement) {
                icon.remove();
            }
        }, duration);
    }
    
    addRandomEffects() {
        // Random color shifts
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance
                this.addColorShift();
            }
        }, 2000);
        
        // Random screen shake
        setInterval(() => {
            if (Math.random() < 0.02) { // 2% chance
                this.addScreenShake();
            }
        }, 5000);
    }
    
    addColorShift() {
        const elements = document.querySelectorAll('h1, h2, h3, .marquee span');
        elements.forEach(el => {
            const originalFilter = el.style.filter;
            el.style.filter = 'hue-rotate(' + (Math.random() * 360) + 'deg) saturate(1.5)';
            
            setTimeout(() => {
                el.style.filter = originalFilter;
            }, 1000);
        });
    }
    
    addScreenShake() {
        document.body.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }
    
    addCursorTrail() {
        let trail = [];
        const trailLength = 10;
        
        document.addEventListener('mousemove', (e) => {
            // Add current position to trail
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            // Limit trail length
            if (trail.length > trailLength) {
                trail.shift();
            }
            
            // Create trail elements
            trail.forEach((point, index) => {
                if (Math.random() < 0.1) { // Only create trail sometimes
                    this.createTrailDot(point.x, point.y, index / trailLength);
                }
            });
        });
    }
    
    createTrailDot(x, y, opacity) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #FF00FF;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            opacity: ${opacity};
            animation: trailFade 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(dot);
        
        setTimeout(() => {
            if (dot.parentElement) {
                dot.remove();
            }
        }, 500);
    }
    
    addClickSparkles() {
        document.addEventListener('click', (e) => {
            // Create multiple sparkles at click position
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    this.createClickSparkle(
                        e.clientX + (Math.random() - 0.5) * 50,
                        e.clientY + (Math.random() - 0.5) * 50
                    );
                }, i * 100);
            }
        });
    }
    
    createClickSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: ${12 + Math.random() * 8}px;
            pointer-events: none;
            z-index: 1001;
            animation: sparkleExplode 1s ease-out forwards;
        `;
        
        const sparkleChars = ['✨', '⭐', '💫', '🌟', '✦', '✧'];
        sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentElement) {
                sparkle.remove();
            }
        }, 1000);
    }
    
    addPeriodicGlitter() {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 5 seconds
                this.addGlitterToRandomElement();
            }
        }, 5000);
    }
    
    addGlitterToRandomElement() {
        const elements = document.querySelectorAll('h1, h2, h3, .retro-button, table');
        if (elements.length === 0) return;
        
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        const originalClass = randomElement.className;
        
        randomElement.classList.add('glitter');
        
        setTimeout(() => {
            randomElement.classList.remove('glitter');
        }, 3000);
    }
    
    // Special effects for specific actions
    celebrateAction(message = '🎉 Awesome! 🎉') {
        // Create celebration overlay
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(255, 255, 255, 0.1);
            z-index: 9997;
            pointer-events: none;
        `;
        
        // Add multiple celebration elements
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${15 + Math.random() * 15}px;
                animation: confettiFall ${2 + Math.random() * 3}s ease-out forwards;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            const confettiChars = ['🎉', '🎊', '🌟', '✨', '🎈', '🎁', '🏆', '👑'];
            confetti.textContent = confettiChars[Math.floor(Math.random() * confettiChars.length)];
            
            celebration.appendChild(confetti);
        }
        
        document.body.appendChild(celebration);
        
        // Show message
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #FF00FF, #FFFF00);
            color: #000000;
            padding: 20px;
            border: 3px outset #C0C0C0;
            font-family: 'Comic Neue', 'Comic Sans MS', cursive;
            font-size: 18px;
            font-weight: bold;
            z-index: 9998;
            animation: celebrationPulse 0.5s ease-in-out 3;
            text-align: center;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
        `;
        
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (celebration.parentElement) celebration.remove();
            if (messageDiv.parentElement) messageDiv.remove();
        }, 3000);
    }
}

// Additional CSS animations
const visualEffectsCSS = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

@keyframes trailFade {
    from { opacity: 0.8; transform: scale(1); }
    to { opacity: 0; transform: scale(0); }
}

@keyframes sparkleExplode {
    0% { 
        opacity: 1; 
        transform: scale(0) rotate(0deg); 
    }
    50% { 
        opacity: 1; 
        transform: scale(1.5) rotate(180deg); 
    }
    100% { 
        opacity: 0; 
        transform: scale(0) rotate(360deg); 
    }
}

@keyframes confettiFall {
    0% { 
        transform: translateY(-50px) rotate(0deg); 
        opacity: 1; 
    }
    100% { 
        transform: translateY(100vh) rotate(720deg); 
        opacity: 0; 
    }
}

@keyframes celebrationPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
}

/* Floating icons override for proper positioning */
.floating-icon {
    position: fixed !important;
    animation: floatUp 6s ease-out forwards !important;
    z-index: 1000;
}

@keyframes floatUp {
    0% { 
        transform: translateY(0px) rotate(0deg); 
        opacity: 0.8; 
    }
    50% { 
        transform: translateY(-50vh) rotate(180deg); 
        opacity: 1; 
    }
    100% { 
        transform: translateY(-100vh) rotate(360deg); 
        opacity: 0; 
    }
}
`;

// Add visual effects CSS
const visualStyle = document.createElement('style');
visualStyle.textContent = visualEffectsCSS;
document.head.appendChild(visualStyle);

// Initialize visual effects when main site loads
window.initializeVisualEffects = function() {
    console.log('Starting visual effects initialization...');
    
    // Ensure DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.visualEffects = new VisualEffects();
            console.log('Visual effects initialized after DOM ready');
        });
    } else {
        window.visualEffects = new VisualEffects();
        console.log('Visual effects initialized immediately');
    }
};