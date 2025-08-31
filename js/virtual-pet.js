// ===== 90s VIRTUAL PET CARE SYSTEM =====

class VirtualPet {
    constructor() {
        this.petData = {
            name: localStorage.getItem('petName') || 'CyberPet',
            species: localStorage.getItem('petSpecies') || 'cyber-creature',
            age: parseInt(localStorage.getItem('petAge')) || 0,
            happiness: parseInt(localStorage.getItem('petHappiness')) || 75,
            hunger: parseInt(localStorage.getItem('petHunger')) || 50,
            health: parseInt(localStorage.getItem('petHealth')) || 80,
            energy: parseInt(localStorage.getItem('petEnergy')) || 60,
            cleanliness: parseInt(localStorage.getItem('petCleanliness')) || 70,
            lastFed: parseInt(localStorage.getItem('petLastFed')) || Date.now(),
            lastPlayed: parseInt(localStorage.getItem('petLastPlayed')) || Date.now(),
            lastCleaned: parseInt(localStorage.getItem('petLastCleaned')) || Date.now(),
            birthTime: parseInt(localStorage.getItem('petBirthTime')) || Date.now(),
            evolutionStage: parseInt(localStorage.getItem('petEvolutionStage')) || 1
        };

        this.petEmojis = {
            1: { happy: '🐣', sad: '😴', hungry: '🐥', sick: '😵', sleeping: '💤' },
            2: { happy: '🐤', sad: '😢', hungry: '🍼', sick: '🤒', sleeping: '😪' },
            3: { happy: '🐦', sad: '😞', hungry: '🍕', sick: '🏥', sleeping: '😴' },
            4: { happy: '🦋', sad: '💔', hungry: '🍰', sick: '⚕️', sleeping: '🌙' }
        };

        this.activities = ['playing', 'eating', 'sleeping', 'dancing', 'singing', 'exploring'];
        this.currentActivity = 'idle';
        this.isWindowOpen = false;
        
        this.init();
    }

    init() {
        this.setupPetStyles();
        this.startPetTimer();
        this.updateMiniPet();
    }

    setupPetStyles() {
        if (!document.querySelector('#virtual-pet-styles')) {
            const style = document.createElement('style');
            style.id = 'virtual-pet-styles';
            style.textContent = `
                .pet-window {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #C0C0C0;
                    border: 4px outset #C0C0C0;
                    width: 400px;
                    height: 500px;
                    z-index: 10000;
                    font-family: Arial, sans-serif;
                    display: none;
                    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
                }
                
                .pet-header {
                    background: linear-gradient(90deg, #008080, #00CCD0);
                    color: white;
                    padding: 5px 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: bold;
                    font-size: 12px;
                }
                
                .pet-content {
                    padding: 15px;
                    height: calc(100% - 40px);
                    overflow-y: auto;
                }
                
                .pet-display {
                    background: #000080;
                    border: 3px inset #C0C0C0;
                    padding: 20px;
                    text-align: center;
                    margin-bottom: 15px;
                    min-height: 120px;
                    position: relative;
                }
                
                .pet-sprite {
                    font-size: 48px;
                    display: block;
                    margin-bottom: 10px;
                    animation: petBounce 2s ease-in-out infinite;
                }
                
                @keyframes petBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .pet-name {
                    color: #FFFF00;
                    font-weight: bold;
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                
                .pet-status {
                    color: #00FFFF;
                    font-size: 10px;
                }
                
                .pet-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin-bottom: 15px;
                }
                
                .stat-bar {
                    background: #808080;
                    border: 2px inset #C0C0C0;
                    padding: 5px;
                    font-size: 10px;
                }
                
                .stat-label {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 3px;
                    font-weight: bold;
                }
                
                .stat-progress {
                    background: #404040;
                    height: 8px;
                    border: 1px inset #808080;
                    position: relative;
                }
                
                .stat-fill {
                    height: 100%;
                    transition: width 0.5s ease;
                }
                
                .happiness-fill { background: linear-gradient(90deg, #FF69B4, #FF1493); }
                .hunger-fill { background: linear-gradient(90deg, #32CD32, #228B22); }
                .health-fill { background: linear-gradient(90deg, #FF0000, #DC143C); }
                .energy-fill { background: linear-gradient(90deg, #FFD700, #FFA500); }
                .cleanliness-fill { background: linear-gradient(90deg, #00BFFF, #0080FF); }
                
                .pet-actions {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                    margin-bottom: 15px;
                }
                
                .pet-btn {
                    background: linear-gradient(45deg, #C0C0C0, #E0E0E0);
                    border: 2px outset #C0C0C0;
                    padding: 8px 4px;
                    cursor: pointer;
                    font-size: 10px;
                    text-align: center;
                    font-weight: bold;
                }
                
                .pet-btn:hover {
                    background: linear-gradient(45deg, #E0E0E0, #F0F0F0);
                }
                
                .pet-btn:active {
                    border: 2px inset #C0C0C0;
                }
                
                .pet-info {
                    background: #FFFFCC;
                    border: 2px inset #FFCC00;
                    padding: 8px;
                    font-size: 10px;
                    margin-bottom: 10px;
                }
                
                .pet-evolution {
                    background: #E0FFE0;
                    border: 2px ridge #00AA00;
                    padding: 8px;
                    font-size: 10px;
                    text-align: center;
                    margin-bottom: 10px;
                }
                
                .mini-pet-container {
                    background: linear-gradient(45deg, #FF69B4, #FF1493);
                    border: 2px outset #FF69B4;
                    padding: 8px;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .mini-pet-container:hover {
                    background: linear-gradient(45deg, #FF1493, #DC143C);
                    transform: scale(1.05);
                }
                
                .mini-pet {
                    font-size: 20px;
                    display: block;
                    margin-bottom: 3px;
                    animation: miniPetFloat 3s ease-in-out infinite;
                }
                
                @keyframes miniPetFloat {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    33% { transform: translateY(-3px) rotate(5deg); }
                    66% { transform: translateY(3px) rotate(-5deg); }
                }
                
                .mini-status {
                    color: white;
                    font-size: 8px;
                    font-weight: bold;
                    text-shadow: 1px 1px 0px #000;
                }
                
                .pet-care-btn {
                    background: linear-gradient(45deg, #00FF00, #00CC00);
                    border: 2px outset #00FF00;
                    color: #000;
                    padding: 3px 6px;
                    cursor: pointer;
                    font-size: 8px;
                    font-weight: bold;
                    margin-top: 3px;
                    width: 100%;
                }
                
                .notification-bubble {
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    background: #FF0000;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    font-weight: bold;
                    animation: notificationPulse 1s ease-in-out infinite;
                }
                
                @keyframes notificationPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    openPetWindow() {
        if (this.isWindowOpen) return;
        
        this.isWindowOpen = true;
        const petWindow = document.createElement('div');
        petWindow.className = 'pet-window';
        petWindow.id = 'pet-care-window';
        petWindow.style.display = 'block';
        
        petWindow.innerHTML = `
            <div class="pet-header">
                <span>🐾 Virtual Pet Care Center v1.99 🐾</span>
                <button onclick="window.virtualPet.closePetWindow()" style="background: #FF0000; color: white; border: none; width: 16px; height: 14px; font-size: 9px;">×</button>
            </div>
            
            <div class="pet-content">
                <div class="pet-display" id="pet-display">
                    <div class="pet-sprite" id="pet-sprite">${this.getCurrentPetEmoji()}</div>
                    <div class="pet-name">${this.petData.name}</div>
                    <div class="pet-status" id="pet-status">${this.getCurrentActivity()}</div>
                </div>
                
                <div class="pet-stats">
                    <div class="stat-bar">
                        <div class="stat-label"><span>😊 Happiness</span><span id="happiness-value">${this.petData.happiness}%</span></div>
                        <div class="stat-progress"><div class="stat-fill happiness-fill" style="width: ${this.petData.happiness}%"></div></div>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-label"><span>🍕 Hunger</span><span id="hunger-value">${100 - this.petData.hunger}%</span></div>
                        <div class="stat-progress"><div class="stat-fill hunger-fill" style="width: ${100 - this.petData.hunger}%"></div></div>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-label"><span>❤️ Health</span><span id="health-value">${this.petData.health}%</span></div>
                        <div class="stat-progress"><div class="stat-fill health-fill" style="width: ${this.petData.health}%"></div></div>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-label"><span>⚡ Energy</span><span id="energy-value">${this.petData.energy}%</span></div>
                        <div class="stat-progress"><div class="stat-fill energy-fill" style="width: ${this.petData.energy}%"></div></div>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-label"><span>🧼 Clean</span><span id="cleanliness-value">${this.petData.cleanliness}%</span></div>
                        <div class="stat-progress"><div class="stat-fill cleanliness-fill" style="width: ${this.petData.cleanliness}%"></div></div>
                    </div>
                </div>
                
                <div class="pet-actions">
                    <button class="pet-btn" onclick="window.virtualPet.feedPet()">🍕 Feed</button>
                    <button class="pet-btn" onclick="window.virtualPet.playWithPet()">🎮 Play</button>
                    <button class="pet-btn" onclick="window.virtualPet.cleanPet()">🧼 Clean</button>
                    <button class="pet-btn" onclick="window.virtualPet.healPet()">💊 Medicine</button>
                    <button class="pet-btn" onclick="window.virtualPet.petSleep()">💤 Sleep</button>
                    <button class="pet-btn" onclick="window.virtualPet.renamePet()">📝 Rename</button>
                </div>
                
                <div class="pet-info">
                    <b>📊 Pet Info:</b><br>
                    Species: ${this.getSpeciesName()} | Age: ${this.getDisplayAge()}<br>
                    Stage: ${this.getEvolutionStageName()} | Born: ${this.getBirthDate()}
                </div>
                
                <div class="pet-evolution">
                    <b>🧬 Evolution Progress:</b><br>
                    ${this.getEvolutionInfo()}
                </div>
            </div>
        `;
        
        document.body.appendChild(petWindow);
        this.makeDraggable(petWindow);
    }

    closePetWindow() {
        const petWindow = document.getElementById('pet-care-window');
        if (petWindow) {
            petWindow.remove();
            this.isWindowOpen = false;
        }
    }

    getCurrentPetEmoji() {
        const stage = this.petData.evolutionStage;
        const emojis = this.petEmojis[stage] || this.petEmojis[1];
        
        if (this.petData.health < 30) return emojis.sick;
        if (this.petData.energy < 20) return emojis.sleeping;
        if (this.petData.hunger > 80) return emojis.hungry;
        if (this.petData.happiness < 30) return emojis.sad;
        
        return emojis.happy;
    }

    getCurrentActivity() {
        if (this.petData.health < 30) return "Feeling sick... 🤒";
        if (this.petData.energy < 20) return "Sleeping... 💤";
        if (this.petData.hunger > 80) return "Very hungry! 🍼";
        if (this.petData.happiness < 30) return "Feeling sad... 😢";
        
        const activities = [
            "Playing happily! 🎮",
            "Exploring the digital world 🌐",
            "Dancing to MIDI music 🎵",
            "Chatting in IRC 💬",
            "Browsing GeoCities 🏠",
            "Learning HTML 💻"
        ];
        
        return activities[Math.floor(Math.random() * activities.length)];
    }

    feedPet() {
        if (this.petData.hunger <= 10) {
            alert("🍽️ Your pet is already full! Maybe try playing instead?");
            return;
        }
        
        this.petData.hunger = Math.max(0, this.petData.hunger - 30);
        this.petData.happiness = Math.min(100, this.petData.happiness + 10);
        this.petData.health = Math.min(100, this.petData.health + 5);
        this.petData.lastFed = Date.now();
        
        this.showPetAction("🍕 Nom nom nom! Your pet enjoyed the meal!");
        this.updatePetDisplay();
        this.savePetData();
    }

    playWithPet() {
        if (this.petData.energy < 20) {
            alert("😴 Your pet is too tired to play! Let them sleep first.");
            return;
        }
        
        this.petData.happiness = Math.min(100, this.petData.happiness + 20);
        this.petData.energy = Math.max(0, this.petData.energy - 15);
        this.petData.hunger = Math.min(100, this.petData.hunger + 10);
        this.petData.lastPlayed = Date.now();
        
        const games = [
            "🎮 Played virtual Pong together!",
            "🏃‍♂️ Ran around the desktop!",
            "🎯 Played digital fetch!",
            "🎪 Performed circus tricks!",
            "🎨 Drew pixel art together!"
        ];
        
        this.showPetAction(games[Math.floor(Math.random() * games.length)]);
        this.updatePetDisplay();
        this.savePetData();
    }

    cleanPet() {
        if (this.petData.cleanliness >= 90) {
            alert("✨ Your pet is already sparkling clean!");
            return;
        }
        
        this.petData.cleanliness = Math.min(100, this.petData.cleanliness + 40);
        this.petData.happiness = Math.min(100, this.petData.happiness + 5);
        this.petData.health = Math.min(100, this.petData.health + 10);
        this.petData.lastCleaned = Date.now();
        
        this.showPetAction("🧼 Splish splash! Your pet is now squeaky clean!");
        this.updatePetDisplay();
        this.savePetData();
    }

    healPet() {
        if (this.petData.health >= 90) {
            alert("❤️ Your pet is already in perfect health!");
            return;
        }
        
        this.petData.health = Math.min(100, this.petData.health + 30);
        this.petData.happiness = Math.min(100, this.petData.happiness + 5);
        
        this.showPetAction("💊 Medicine administered! Your pet feels much better!");
        this.updatePetDisplay();
        this.savePetData();
    }

    petSleep() {
        if (this.petData.energy >= 90) {
            alert("😊 Your pet is already well-rested!");
            return;
        }
        
        this.petData.energy = Math.min(100, this.petData.energy + 40);
        this.petData.health = Math.min(100, this.petData.health + 10);
        this.petData.happiness = Math.min(100, this.petData.happiness + 5);
        
        this.showPetAction("💤 Zzz... Your pet had a refreshing nap!");
        this.updatePetDisplay();
        this.savePetData();
    }

    renamePet() {
        const newName = prompt("🏷️ Enter a new name for your pet:", this.petData.name);
        if (newName && newName.trim() && newName.trim() !== this.petData.name) {
            this.petData.name = newName.trim();
            this.showPetAction(`📝 Your pet's name has been changed to "${this.petData.name}"!`);
            this.updatePetDisplay();
            this.updateMiniPet();
            this.savePetData();
        }
    }

    showPetAction(message) {
        const sprite = document.getElementById('pet-sprite');
        if (sprite) {
            sprite.style.animation = 'petBounce 0.5s ease-in-out 3';
        }
        
        alert(message);
    }

    updatePetDisplay() {
        if (!this.isWindowOpen) return;
        
        const sprite = document.getElementById('pet-sprite');
        const status = document.getElementById('pet-status');
        
        if (sprite) sprite.textContent = this.getCurrentPetEmoji();
        if (status) status.textContent = this.getCurrentActivity();
        
        // Update stat bars
        this.updateStatBar('happiness', this.petData.happiness);
        this.updateStatBar('hunger', 100 - this.petData.hunger);
        this.updateStatBar('health', this.petData.health);
        this.updateStatBar('energy', this.petData.energy);
        this.updateStatBar('cleanliness', this.petData.cleanliness);
        
        this.updateMiniPet();
    }

    updateStatBar(statName, value) {
        const valueEl = document.getElementById(`${statName}-value`);
        const fillEl = document.querySelector(`.${statName}-fill`);
        
        if (valueEl) valueEl.textContent = `${value}%`;
        if (fillEl) fillEl.style.width = `${value}%`;
    }

    updateMiniPet() {
        const miniPet = document.getElementById('mini-pet');
        const petStatus = document.querySelector('.pet-status');
        const petContainer = document.querySelector('.pet-container');
        
        if (miniPet) {
            miniPet.textContent = this.getCurrentPetEmoji();
        }
        
        if (petStatus) {
            petStatus.textContent = this.petData.name;
        }
        
        // Add notification bubble if pet needs attention
        if (petContainer) {
            const existingBubble = petContainer.querySelector('.notification-bubble');
            if (existingBubble) existingBubble.remove();
            
            if (this.needsAttention()) {
                const bubble = document.createElement('div');
                bubble.className = 'notification-bubble';
                bubble.textContent = '!';
                bubble.title = 'Your pet needs attention!';
                petContainer.appendChild(bubble);
            }
        }
    }

    needsAttention() {
        return this.petData.hunger > 80 || 
               this.petData.happiness < 30 || 
               this.petData.health < 40 || 
               this.petData.energy < 20 || 
               this.petData.cleanliness < 30;
    }

    startPetTimer() {
        setInterval(() => {
            this.updatePetNeeds();
            this.checkEvolution();
        }, 30000); // Update every 30 seconds
    }

    updatePetNeeds() {
        const now = Date.now();
        const timeSince = {
            fed: now - this.petData.lastFed,
            played: now - this.petData.lastPlayed,
            cleaned: now - this.petData.lastCleaned
        };
        
        // Gradual stat decay over time
        if (timeSince.fed > 300000) { // 5 minutes
            this.petData.hunger = Math.min(100, this.petData.hunger + 1);
        }
        
        if (timeSince.played > 600000) { // 10 minutes
            this.petData.happiness = Math.max(0, this.petData.happiness - 1);
        }
        
        if (timeSince.cleaned > 900000) { // 15 minutes
            this.petData.cleanliness = Math.max(0, this.petData.cleanliness - 1);
        }
        
        // Energy gradually recovers
        if (this.petData.energy < 100) {
            this.petData.energy = Math.min(100, this.petData.energy + 1);
        }
        
        // Health affected by other stats
        if (this.petData.hunger > 90 || this.petData.happiness < 20 || this.petData.cleanliness < 20) {
            this.petData.health = Math.max(0, this.petData.health - 1);
        } else if (this.petData.hunger < 50 && this.petData.happiness > 70 && this.petData.cleanliness > 70) {
            this.petData.health = Math.min(100, this.petData.health + 1);
        }
        
        this.updateMiniPet();
        this.savePetData();
    }

    checkEvolution() {
        const age = Math.floor((Date.now() - this.petData.birthTime) / (1000 * 60 * 60)); // Hours
        let newStage = 1;
        
        if (age >= 24) newStage = 2; // 1 day
        if (age >= 72) newStage = 3; // 3 days
        if (age >= 168) newStage = 4; // 1 week
        
        if (newStage > this.petData.evolutionStage) {
            this.petData.evolutionStage = newStage;
            this.showEvolutionMessage(newStage);
            this.savePetData();
        }
    }

    showEvolutionMessage(stage) {
        const stageNames = {
            2: "Juvenile CyberPet",
            3: "Adult CyberPet", 
            4: "Elder CyberWisdom"
        };
        
        alert(`🧬 EVOLUTION! 🧬\n\nYour pet has evolved into a ${stageNames[stage]}!\n\nNew abilities unlocked!`);
    }

    getSpeciesName() {
        const species = {
            'cyber-creature': 'Cyber Creature',
            'digital-dragon': 'Digital Dragon',
            'pixel-pal': 'Pixel Pal'
        };
        return species[this.petData.species] || 'Unknown Species';
    }

    getDisplayAge() {
        const hours = Math.floor((Date.now() - this.petData.birthTime) / (1000 * 60 * 60));
        if (hours < 24) return `${hours} hours`;
        const days = Math.floor(hours / 24);
        return `${days} days`;
    }

    getEvolutionStageName() {
        const stages = {
            1: "Baby",
            2: "Juvenile", 
            3: "Adult",
            4: "Elder"
        };
        return stages[this.petData.evolutionStage] || "Unknown";
    }

    getBirthDate() {
        return new Date(this.petData.birthTime).toLocaleDateString();
    }

    getEvolutionInfo() {
        const age = Math.floor((Date.now() - this.petData.birthTime) / (1000 * 60 * 60));
        const stage = this.petData.evolutionStage;
        
        if (stage >= 4) return "Maximum evolution reached! 🌟";
        
        const nextEvolution = {
            1: { hours: 24, name: "Juvenile" },
            2: { hours: 72, name: "Adult" },
            3: { hours: 168, name: "Elder" }
        };
        
        const next = nextEvolution[stage];
        if (next) {
            const remaining = next.hours - age;
            if (remaining > 0) {
                return `Next evolution to ${next.name} in ${remaining} hours`;
            }
        }
        
        return "Ready to evolve! 🧬";
    }

    savePetData() {
        Object.keys(this.petData).forEach(key => {
            localStorage.setItem(`pet${key.charAt(0).toUpperCase() + key.slice(1)}`, this.petData[key]);
        });
    }

    makeDraggable(element) {
        let isDragging = false;
        let startX, startY, initialX, initialY;
        
        const header = element.querySelector('.pet-header');
        
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = element.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            header.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            element.style.left = (initialX + deltaX) + 'px';
            element.style.top = (initialY + deltaY) + 'px';
            element.style.transform = 'none';
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            header.style.cursor = 'grab';
        });
        
        header.style.cursor = 'grab';
    }
}

// Initialize Virtual Pet when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.virtualPet = new VirtualPet();
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    window.virtualPet = new VirtualPet();
}

// Global function to open pet window (called from HTML)
window.openPetWindow = function() {
    if (window.virtualPet) {
        window.virtualPet.openPetWindow();
    }
};