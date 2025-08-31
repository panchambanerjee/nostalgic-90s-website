// Easter Eggs and Additional Features for 90s Website
class EasterEggs {
    constructor() {
        this.konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
        this.konamiInput = [];
        this.konamiUnlocked = false;
        this.weatherData = {
            temp: 72,
            condition: "Sunny",
            city: "Cyberspace, USA",
            lastUpdated: "December 31, 1999"
        };
        this.stockData = [
            { symbol: "MSFT", price: "119.94", change: "+2.31" },
            { symbol: "AAPL", price: "3.69", change: "+0.06" },
            { symbol: "AMZN", price: "76.13", change: "+4.25" },
            { symbol: "AOL", price: "73.75", change: "+1.50" },
            { symbol: "YHOO", price: "432.69", change: "+12.44" },
            { symbol: "EBAY", price: "63.81", change: "+2.13" }
        ];
        this.popupBlockerCount = Math.floor(Math.random() * 50) + 25;
        this.initializeEasterEggs();
    }
    
    initializeEasterEggs() {
        this.setupKonamiCode();
        this.setupCtrlAltDel();
        this.addWeatherWidget();
        this.addStockTicker();
        this.addRadioPlayer();
        this.addScreenResolutionChanger();
        this.addPopupBlockerCounter();
        this.incrementPopupBlocker();
    }
    
    setupKonamiCode() {
        document.addEventListener('keydown', (e) => {
            this.konamiInput.push(e.keyCode);
            this.konamiInput = this.konamiInput.slice(-this.konamiSequence.length);
            
            if (JSON.stringify(this.konamiInput) === JSON.stringify(this.konamiSequence)) {
                this.unlockKonamiSecrets();
            }
        });
    }
    
    unlockKonamiSecrets() {
        if (this.konamiUnlocked) return;
        
        this.konamiUnlocked = true;
        localStorage.setItem('konamiUnlocked', 'true');
        
        // Add secret content to page
        const secretDiv = document.createElement('div');
        secretDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #FF00FF, #00FFFF);
            border: 3px outset #C0C0C0;
            padding: 20px;
            z-index: 10000;
            color: white;
            text-align: center;
            font-family: 'Comic Sans MS', cursive;
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
            animation: pulse 1s infinite alternate;
        `;
        
        secretDiv.innerHTML = `
            <h2>🎉 KONAMI CODE ACTIVATED! 🎉</h2>
            <p>You've unlocked the secret 90s hacker mode!</p>
            <p>✨ Matrix Mode Enabled ✨</p>
            <p>🔓 All Downloads Unlocked</p>
            <p>💎 VIP Chatroom Access</p>
            <p>🎮 Secret Games Available</p>
            <button onclick="this.parentElement.remove()" style="padding: 5px 10px; margin-top: 10px;">Cool!</button>
        `;
        
        document.body.appendChild(secretDiv);
        
        // Add matrix effect
        this.startMatrixEffect();
        
        // Show secret navigation option
        this.addSecretNav();
    }
    
    startMatrixEffect() {
        const matrix = document.createElement('div');
        matrix.id = 'matrix-effect';
        matrix.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 100;
            overflow: hidden;
        `;
        
        for (let i = 0; i < 20; i++) {
            const column = document.createElement('div');
            column.style.cssText = `
                position: absolute;
                top: -100px;
                left: ${Math.random() * 100}%;
                color: #00FF00;
                font-family: monospace;
                font-size: 12px;
                animation: matrixRain ${2 + Math.random() * 3}s linear infinite;
            `;
            column.textContent = '10101010101010101010';
            matrix.appendChild(column);
        }
        
        document.body.appendChild(matrix);
        
        // Remove after 10 seconds
        setTimeout(() => {
            if (matrix.parentElement) matrix.remove();
        }, 10000);
    }
    
    addSecretNav() {
        const nav = document.querySelector('td[bgcolor="#C0C0C0"] font');
        if (nav) {
            nav.innerHTML += '<br><a href="#secret" onclick="alert(\'🔓 Secret area unlocked! Welcome, elite hacker! 🔓\')" style="color: #FF00FF; text-shadow: 0 0 5px #FF00FF;">🔒 Secret Area</a>';
        }
    }
    
    setupCtrlAltDel() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && e.key === 'Delete') {
                e.preventDefault();
                this.showTaskManager();
            }
        });
    }
    
    showTaskManager() {
        const taskManager = document.createElement('div');
        taskManager.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            width: 400px;
            height: 300px;
            z-index: 10001;
            font-family: Arial, sans-serif;
            font-size: 11px;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
        `;
        
        const processes = [
            { name: 'explorer.exe', cpu: '2%', memory: '4,128 K' },
            { name: 'winamp.exe', cpu: '12%', memory: '2,856 K' },
            { name: 'netscape.exe', cpu: '45%', memory: '18,432 K' },
            { name: 'solitaire.exe', cpu: '3%', memory: '1,024 K' },
            { name: 'mspaint.exe', cpu: '1%', memory: '512 K' },
            { name: 'notepad.exe', cpu: '0%', memory: '256 K' }
        ];
        
        let processHTML = '';
        processes.forEach(proc => {
            processHTML += `<tr style="background: white;"><td style="padding: 2px 5px;">${proc.name}</td><td style="padding: 2px 5px;">${proc.cpu}</td><td style="padding: 2px 5px;">${proc.memory}</td></tr>`;
        });
        
        taskManager.innerHTML = `
            <div style="background: linear-gradient(90deg, #000080, #0000FF); color: white; padding: 5px; display: flex; justify-content: space-between; align-items: center;">
                <b>Windows Task Manager</b>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF0000; color: white; border: none; width: 16px; height: 14px; font-size: 9px;">×</button>
            </div>
            
            <div style="padding: 10px;">
                <p><b>Applications currently running:</b></p>
                <table style="width: 100%; border: 1px inset #C0C0C0;">
                    <tr style="background: #E0E0E0;"><th style="padding: 2px 5px;">Process</th><th style="padding: 2px 5px;">CPU</th><th style="padding: 2px 5px;">Memory</th></tr>
                    ${processHTML}
                </table>
                
                <div style="margin-top: 15px; text-align: center;">
                    <button onclick="alert('Process terminated! 💀')" style="padding: 5px 10px; margin: 0 5px;">End Task</button>
                    <button onclick="this.parentElement.parentElement.remove()" style="padding: 5px 10px; margin: 0 5px;">Close</button>
                </div>
                
                <div style="margin-top: 10px; font-size: 10px; color: #666;">
                    CPU Usage: 63% | Available Memory: 24 MB
                </div>
            </div>
        `;
        
        document.body.appendChild(taskManager);
    }
    
    addWeatherWidget() {
        const weatherDiv = document.createElement('div');
        weatherDiv.id = 'weather-widget';
        weatherDiv.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: linear-gradient(45deg, #87CEEB, #4169E1);
            border: 2px outset #C0C0C0;
            padding: 10px;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 11px;
            z-index: 1000;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
            width: 120px;
        `;
        
        weatherDiv.innerHTML = `
            <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">☀️ Weather</div>
            <div>${this.weatherData.city}</div>
            <div style="font-size: 14px; font-weight: bold;">${this.weatherData.temp}°F</div>
            <div>${this.weatherData.condition}</div>
            <div style="font-size: 9px; margin-top: 3px;">Updated: ${this.weatherData.lastUpdated}</div>
        `;
        
        document.body.appendChild(weatherDiv);
        
        // Make it draggable
        this.makeDraggable(weatherDiv);
    }
    
    addStockTicker() {
        const tickerDiv = document.createElement('div');
        tickerDiv.id = 'stock-ticker';
        tickerDiv.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #000080;
            color: #FFFF00;
            font-family: monospace;
            font-size: 12px;
            padding: 5px 0;
            z-index: 1000;
            overflow: hidden;
            white-space: nowrap;
        `;
        
        let stockText = '';
        this.stockData.forEach(stock => {
            const color = stock.change.startsWith('+') ? '#00FF00' : '#FF0000';
            stockText += `📈 ${stock.symbol}: $${stock.price} <span style="color: ${color}">${stock.change}</span> | `;
        });
        
        tickerDiv.innerHTML = `
            <div style="display: inline-block; animation: stockScroll 30s linear infinite;">
                ${stockText}${stockText}${stockText}
            </div>
        `;
        
        document.body.appendChild(tickerDiv);
    }
    
    addRadioPlayer() {
        const radioDiv = document.createElement('div');
        radioDiv.id = 'radio-player';
        radioDiv.style.cssText = `
            position: fixed;
            top: 150px;
            right: 10px;
            background: linear-gradient(45deg, #800080, #FF00FF);
            border: 2px outset #C0C0C0;
            padding: 10px;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 10px;
            z-index: 1000;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
            width: 140px;
        `;
        
        radioDiv.innerHTML = `
            <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">📻 Cyber Radio</div>
            <select id="radio-station" style="width: 100%; margin-bottom: 5px; font-size: 9px;">
                <option value="hits">🎵 90s Hits FM</option>
                <option value="techno">🎛️ Cyber Techno</option>
                <option value="rock">🎸 Rock Central</option>
                <option value="ambient">🌌 Space Ambient</option>
            </select>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <button onclick="window.easterEggs.toggleRadio()" style="font-size: 9px; padding: 2px 4px;">▶️</button>
                <button onclick="window.easterEggs.changeStation()" style="font-size: 9px; padding: 2px 4px;">📻</button>
                <button onclick="window.easterEggs.adjustVolume()" style="font-size: 9px; padding: 2px 4px;">🔊</button>
            </div>
            <div id="now-playing" style="font-size: 9px; text-align: center;">Now Playing: Millennium</div>
        `;
        
        document.body.appendChild(radioDiv);
        this.makeDraggable(radioDiv);
    }
    
    toggleRadio() {
        const nowPlaying = document.getElementById('now-playing');
        const isPlaying = nowPlaying.textContent.includes('Playing');
        
        if (isPlaying) {
            nowPlaying.textContent = 'Radio Stopped';
        } else {
            const songs = ['Millennium - Backstreet Boys', 'Hit Me Baby - Britney', 'Mambo No. 5 - Lou Bega', 'Blue - Eiffel 65'];
            nowPlaying.textContent = 'Now Playing: ' + songs[Math.floor(Math.random() * songs.length)];
        }
    }
    
    changeStation() {
        const selector = document.getElementById('radio-station');
        const stationSongs = {
            'hits': ['Millennium - BSB', 'Smooth - Santana', 'Livin la Vida Loca'],
            'techno': ['Better Off Alone', 'Sandstorm', 'Blue Monday'],
            'rock': ['Kryptonite - 3 Doors Down', 'Last Resort - Papa Roach'],
            'ambient': ['Ethereal Waves', 'Cosmic Drift', 'Digital Dreams']
        };
        
        const station = selector.value;
        const songs = stationSongs[station];
        document.getElementById('now-playing').textContent = 'Now Playing: ' + songs[Math.floor(Math.random() * songs.length)];
    }
    
    adjustVolume() {
        const levels = ['🔇', '🔉', '🔊', '📢'];
        const button = event.target;
        const currentIndex = levels.indexOf(button.textContent);
        button.textContent = levels[(currentIndex + 1) % levels.length];
    }
    
    addScreenResolutionChanger() {
        const resDiv = document.createElement('div');
        resDiv.id = 'resolution-changer';
        resDiv.style.cssText = `
            position: fixed;
            top: 250px;
            right: 10px;
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            padding: 8px;
            font-family: Arial, sans-serif;
            font-size: 10px;
            z-index: 1000;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
            width: 120px;
        `;
        
        resDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">💻 Display</div>
            <select id="resolution-select" style="width: 100%; font-size: 9px;" onchange="window.easterEggs.changeResolution()">
                <option value="640x480">640x480 (16 colors)</option>
                <option value="800x600" selected>800x600 (256 colors)</option>
                <option value="1024x768">1024x768 (High Color)</option>
            </select>
            <div style="margin-top: 5px; font-size: 9px;">Refresh: 60Hz</div>
        `;
        
        document.body.appendChild(resDiv);
        this.makeDraggable(resDiv);
    }
    
    changeResolution() {
        const selector = document.getElementById('resolution-select');
        const resolution = selector.value;
        
        // Fake resolution change effect
        document.body.style.transform = 'scale(0.8)';
        document.body.style.transformOrigin = 'top left';
        
        setTimeout(() => {
            document.body.style.transform = '';
            alert(`Display resolution changed to ${resolution}!\n\nNote: This is just for show - your actual screen resolution hasn't changed! 😄`);
        }, 500);
    }
    
    addPopupBlockerCounter() {
        const popupDiv = document.createElement('div');
        popupDiv.id = 'popup-blocker';
        popupDiv.style.cssText = `
            position: fixed;
            top: 350px;
            right: 10px;
            background: #FF4500;
            border: 2px outset #C0C0C0;
            padding: 8px;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 10px;
            z-index: 1000;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
            width: 120px;
            text-align: center;
        `;
        
        popupDiv.innerHTML = `
            <div style="font-weight: bold;">🚫 Popup Blocker</div>
            <div style="font-size: 14px; font-weight: bold; margin: 5px 0;" id="popup-count">${this.popupBlockerCount}</div>
            <div style="font-size: 9px;">Popups Blocked</div>
        `;
        
        document.body.appendChild(popupDiv);
        this.makeDraggable(popupDiv);
    }
    
    incrementPopupBlocker() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every 5 seconds
                this.popupBlockerCount++;
                const counter = document.getElementById('popup-count');
                if (counter) {
                    counter.textContent = this.popupBlockerCount;
                    // Flash effect
                    counter.style.color = '#FFFF00';
                    setTimeout(() => {
                        counter.style.color = 'white';
                    }, 200);
                }
            }
        }, 5000);
    }
    
    makeDraggable(element) {
        let isDragging = false;
        let startX, startY, initialX, initialY;
        
        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = element.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            element.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            element.style.left = (initialX + deltaX) + 'px';
            element.style.top = (initialY + deltaY) + 'px';
            element.style.right = 'auto';
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            element.style.cursor = 'grab';
        });
        
        element.style.cursor = 'grab';
    }
}

// Add CSS animations for new effects
const style = document.createElement('style');
style.textContent = `
    @keyframes matrixRain {
        0% { top: -100px; opacity: 1; }
        100% { top: 100vh; opacity: 0; }
    }
    
    @keyframes stockScroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
    }
    
    @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        100% { transform: translate(-50%, -50%) scale(1.05); }
    }
`;
document.head.appendChild(style);

// Initialize Easter Eggs when main site loads
window.initializeEasterEggs = function() {
    window.easterEggs = new EasterEggs();
    
    // Check if Konami was previously unlocked
    if (localStorage.getItem('konamiUnlocked') === 'true') {
        window.easterEggs.konamiUnlocked = true;
        window.easterEggs.addSecretNav();
    }
};