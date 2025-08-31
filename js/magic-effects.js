// ===== 90s MAGICAL EFFECTS =====

class SparkleTrail {
    constructor() {
        this.trails = [];
        this.maxTrails = 12;
        this.init();
    }

    init() {
        // Create trail elements
        for (let i = 0; i < this.maxTrails; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.display = 'none';
            document.body.appendChild(trail);
            this.trails.push(trail);
        }

        // Track mouse movement
        let currentTrail = 0;
        document.addEventListener('mousemove', (e) => {
            const trail = this.trails[currentTrail];
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.display = 'block';
            trail.style.animation = 'none';
            
            // Trigger animation
            setTimeout(() => {
                trail.style.animation = 'sparkleTrail 0.8s ease-out forwards';
            }, 10);

            currentTrail = (currentTrail + 1) % this.maxTrails;
        });
    }
}

// Right-click protection with 90s attitude
class RightClickProtection {
    constructor() {
        this.messages = [
            "Hey! No stealing my HTML!!",
            "Nice try, but this code is MINE! 😎",
            "Right-clicking is SO not cool! 🚫",
            "This page is copyrighted 1999!",
            "You can't have my source code! 💻"
        ];
        this.init();
    }

    init() {
        // Create message element
        this.messageEl = document.createElement('div');
        this.messageEl.className = 'no-steal-message';
        document.body.appendChild(this.messageEl);

        // Block right-click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showMessage();
        });

        // Also block some keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
                e.preventDefault();
                this.showMessage();
            }
            if (e.key === 'F12') {
                e.preventDefault();
                this.showMessage();
            }
        });
    }

    showMessage() {
        const randomMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
        this.messageEl.textContent = randomMessage;
        this.messageEl.style.display = 'block';

        setTimeout(() => {
            this.messageEl.style.display = 'none';
        }, 2000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SparkleTrail();
    new RightClickProtection();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    // DOM is still loading
} else {
    // DOM is already loaded
    new SparkleTrail();
    new RightClickProtection();
}