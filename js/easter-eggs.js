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
        this.setupSecretPages();
        this.setupNostalgicGameReferences();
        this.setupHiddenFeatures();
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
            <p>🔓 All Features Unlocked</p>
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
    
    setupSecretPages() {
        // Secret page accessible via typing 'matrix' anywhere on the page
        let secretSequence = '';
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            secretSequence += e.key.toLowerCase();
            secretSequence = secretSequence.slice(-6); // Keep last 6 characters
            
            if (secretSequence === 'matrix') {
                this.openMatrixPage();
            } else if (secretSequence === 'secret') {
                this.openSecretPage();
            } else if (secretSequence === 'games') {
                this.openRetroGamesPage();
            }
        });
    }
    
    openMatrixPage() {
        const matrixPage = document.createElement('div');
        matrixPage.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            color: #00FF00;
            font-family: 'Courier New', monospace;
            z-index: 10000;
            padding: 20px;
            overflow-y: auto;
        `;
        
        matrixPage.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #00FF00; text-shadow: 0 0 10px #00FF00;">🔒 THE MATRIX 🔒</h1>
                <p>Welcome to the real world, Neo...</p>
            </div>
            
            <div style="border: 1px solid #00FF00; padding: 15px; margin: 20px 0; background: rgba(0,255,0,0.1);">
                <h3>💊 Take the Red Pill 💊</h3>
                <p>You've discovered the hidden Matrix page! This secret area contains:</p>
                <ul>
                    <li>🔓 Developer console access</li>
                    <li>📱 Morpheus chatbot</li>
                    <li>🎮 Hidden mini-games</li>
                    <li>📜 Secret cheat codes</li>
                </ul>
            </div>
            
            <div style="border: 1px solid #00FF00; padding: 15px; margin: 20px 0; background: rgba(0,255,0,0.1);">
                <h3>🎮 Matrix Terminal</h3>
                <div id="matrix-terminal" style="background: #000; border: 1px solid #00FF00; padding: 10px; height: 200px; overflow-y: auto;">
                    <div style="color: #00FF00;">Matrix OS v1.0.1999 - Terminal Ready</div>
                    <div style="color: #00FF00;">Type 'help' for available commands...</div>
                    <div style="color: #FFFF00;">matrix@system:~$ <span id="terminal-cursor" style="animation: blink 1s infinite;">_</span></div>
                </div>
                <input type="text" id="matrix-input" style="width: 100%; background: transparent; border: none; color: #00FF00; margin-top: 10px;" placeholder="Enter command...">
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="this.parentElement.remove()" style="
                    background: linear-gradient(45deg, #FF0000, #000000);
                    color: #FFFFFF;
                    border: 2px solid #FF0000;
                    padding: 10px 20px;
                    cursor: pointer;
                    font-weight: bold;
                    text-shadow: 0 0 5px #FF0000;
                ">🚪 Exit Matrix</button>
            </div>
        `;
        
        document.body.appendChild(matrixPage);
        this.setupMatrixTerminal();
    }
    
    setupMatrixTerminal() {
        const input = document.getElementById('matrix-input');
        const terminal = document.getElementById('matrix-terminal');
        
        const commands = {
            'help': 'Available commands: help, whoami, ls, cat, hack, exit',
            'whoami': 'You are: The One (Level 1337 Hacker)',
            'ls': 'red_pill.exe  blue_pill.exe  zion.dat  neo.txt  trinity.log',
            'cat neo.txt': 'There is no spoon. The Matrix has you. Follow the white rabbit.',
            'hack': 'Accessing mainframe... [████████████] 100% - Access Granted!',
            'exit': 'Goodbye, Neo. Remember... there is no spoon.'
        };
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = input.value.trim().toLowerCase();
                const response = commands[command] || `Command not found: ${command}`;
                
                terminal.innerHTML += `<div style="color: #FFFF00;">matrix@system:~$ ${input.value}</div>`;
                terminal.innerHTML += `<div style="color: #00FF00;">${response}</div>`;
                terminal.innerHTML += `<div style="color: #FFFF00;">matrix@system:~$ <span id="terminal-cursor" style="animation: blink 1s infinite;">_</span></div>`;
                
                input.value = '';
                terminal.scrollTop = terminal.scrollHeight;
                
                if (command === 'exit') {
                    setTimeout(() => {
                        document.querySelector('[style*="Matrix OS"]').parentElement.remove();
                    }, 2000);
                }
            }
        });
        
        setTimeout(() => input.focus(), 100);
    }
    
    openSecretPage() {
        const secretPage = document.createElement('div');
        secretPage.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #8A2BE2, #4B0082);
            color: #FFFF00;
            font-family: 'Comic Sans MS', cursive;
            z-index: 10000;
            padding: 20px;
            overflow-y: auto;
            text-align: center;
        `;
        
        secretPage.innerHTML = `
            <h1 style="color: #FFFF00; text-shadow: 3px 3px 0px #FF00FF;">🎯 SECRET AREA UNLOCKED! 🎯</h1>
            <p style="font-size: 18px;">Congratulations! You found the hidden page!</p>
            
            <div style="background: rgba(255,255,255,0.2); border: 3px ridge #FFFF00; padding: 20px; margin: 20px auto; max-width: 600px;">
                <h2>🕹️ Secret Features Unlocked:</h2>
                <ul style="text-align: left; font-size: 14px;">
                    <li>🎮 Snake Game (type 'snake' anywhere)</li>
                    <li>🔄 Time Portal (triple-click the date)</li>
                    <li>🎨 Color Changer (Ctrl+Shift+C)</li>
                    <li>👾 Invaders Mode (type 'invaders')</li>
                    <li>🌈 Rainbow Mode (Alt+R)</li>
                    <li>💫 Psychedelic Mode (type 'trippy')</li>
                </ul>
            </div>
            
            <div style="background: rgba(0,0,0,0.5); border: 2px solid #00FF00; padding: 15px; margin: 20px auto; max-width: 500px;">
                <h3>🔐 Elite Hacker Status Achieved!</h3>
                <p>You are now part of the secret CyberKids underground!</p>
                <p style="font-family: monospace; color: #00FF00;">Access Level: MAXIMUM</p>
                <p style="font-family: monospace; color: #00FF00;">Clearance: ULTRA</p>
            </div>
            
            <button onclick="this.parentElement.remove()" style="
                background: linear-gradient(45deg, #FF1493, #8A2BE2);
                color: white;
                border: 3px outset #FF1493;
                padding: 10px 20px;
                cursor: pointer;
                font-weight: bold;
                font-size: 14px;
                margin-top: 20px;
            ">🚪 Return to Normal Reality</button>
        `;
        
        document.body.appendChild(secretPage);
    }
    
    openRetroGamesPage() {
        const gamesPage = document.createElement('div');
        gamesPage.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000080;
            color: #FFFF00;
            font-family: 'Courier New', monospace;
            z-index: 10000;
            padding: 20px;
            overflow-y: auto;
        `;
        
        gamesPage.innerHTML = `
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #FFFF00; text-shadow: 2px 2px 0px #FF0000;">🕹️ RETRO ARCADE 1999 🕹️</h1>
                <p style="font-size: 16px;">Welcome to the underground gaming vault!</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
                <div onclick="window.easterEggs.startSnakeGame()" style="
                    background: linear-gradient(45deg, #00FF00, #008000);
                    color: #000;
                    padding: 20px;
                    border: 3px outset #00FF00;
                    cursor: pointer;
                    text-align: center;
                    font-weight: bold;
                ">
                    <h3>🐍 SNAKE GAME</h3>
                    <p>Classic Nokia-style Snake! Eat the dots, don't hit the walls!</p>
                    <p style="font-size: 12px;">Controls: Arrow Keys</p>
                </div>
                
                <div onclick="window.easterEggs.startPongGame()" style="
                    background: linear-gradient(45deg, #FF6600, #CC3300);
                    color: #FFF;
                    padding: 20px;
                    border: 3px outset #FF6600;
                    cursor: pointer;
                    text-align: center;
                    font-weight: bold;
                ">
                    <h3>🏓 CYBER PONG</h3>
                    <p>The classic paddle game that started it all!</p>
                    <p style="font-size: 12px;">Controls: W/S Keys</p>
                </div>
                
                <div onclick="window.easterEggs.startTetrisGame()" style="
                    background: linear-gradient(45deg, #8A2BE2, #4B0082);
                    color: #FFF;
                    padding: 20px;
                    border: 3px outset #8A2BE2;
                    cursor: pointer;
                    text-align: center;
                    font-weight: bold;
                ">
                    <h3>🧱 CYBER BLOCKS</h3>
                    <p>Stack those blocks like it's 1984!</p>
                    <p style="font-size: 12px;">Controls: Arrow Keys + Space</p>
                </div>
                
                <div onclick="window.easterEggs.startInvadersGame()" style="
                    background: linear-gradient(45deg, #FF1493, #8B008B);
                    color: #FFF;
                    padding: 20px;
                    border: 3px outset #FF1493;
                    cursor: pointer;
                    text-align: center;
                    font-weight: bold;
                ">
                    <h3>👾 SPACE INVADERS</h3>
                    <p>Defend Earth from the pixel invasion!</p>
                    <p style="font-size: 12px;">Controls: A/D + Spacebar</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <p style="color: #00FFFF;">💰 High Scores saved to localStorage!</p>
                <p style="color: #00FFFF;">🏆 Compete with other CyberKids worldwide!</p>
                <button onclick="this.parentElement.remove()" style="
                    background: linear-gradient(45deg, #FF0000, #800000);
                    color: white;
                    border: 3px outset #FF0000;
                    padding: 10px 20px;
                    cursor: pointer;
                    font-weight: bold;
                    margin-top: 20px;
                ">🚪 Exit Arcade</button>
            </div>
        `;
        
        document.body.appendChild(gamesPage);
    }
    
    setupNostalgicGameReferences() {
        // Add game launcher shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            // Snake game shortcut
            if (e.key.toLowerCase() === 's' && e.ctrlKey && e.shiftKey) {
                e.preventDefault();
                this.startSnakeGame();
            }
            
            // Color changer
            if (e.key.toLowerCase() === 'c' && e.ctrlKey && e.shiftKey) {
                e.preventDefault();
                this.toggleColorMode();
            }
            
            // Rainbow mode
            if (e.key.toLowerCase() === 'r' && e.altKey) {
                e.preventDefault();
                this.toggleRainbowMode();
            }
        });
        
        // Secret game access via typing
        let gameSequence = '';
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            gameSequence += e.key.toLowerCase();
            gameSequence = gameSequence.slice(-8);
            
            if (gameSequence.includes('snake')) {
                this.startSnakeGame();
                gameSequence = '';
            } else if (gameSequence.includes('invaders')) {
                this.startInvadersGame();
                gameSequence = '';
            } else if (gameSequence.includes('trippy')) {
                this.startPsychedelicMode();
                gameSequence = '';
            }
        });
    }
    
    setupHiddenFeatures() {
        // Time portal (triple-click date)
        let clickCount = 0;
        document.addEventListener('click', (e) => {
            if (e.target.textContent && e.target.textContent.includes('1999')) {
                clickCount++;
                if (clickCount >= 3) {
                    this.openTimePortal();
                    clickCount = 0;
                }
                setTimeout(() => { clickCount = 0; }, 2000);
            }
        });
        
        // Secret admin panel (type 'admin' + Enter)
        let adminSequence = '';
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            if (e.key === 'Enter' && adminSequence === 'admin') {
                this.openAdminPanel();
                adminSequence = '';
            } else if (e.key.length === 1) {
                adminSequence += e.key.toLowerCase();
                adminSequence = adminSequence.slice(-5);
            }
        });
    }
    
    startSnakeGame() {
        alert('🐍 Snake Game Loading...\n\nJust kidding! This would launch a full Snake game.\n\nIn a real implementation, this would open a canvas-based Snake game!\n\n🎮 Use arrow keys to control the snake!');
    }
    
    startPongGame() {
        alert('🏓 Cyber Pong Loading...\n\nThis would launch the classic Pong game!\n\n🎮 Use W/S keys to control your paddle!');
    }
    
    startTetrisGame() {
        alert('🧱 Cyber Blocks Loading...\n\nThis would launch a Tetris-style game!\n\n🎮 Use arrow keys to rotate and move blocks!');
    }
    
    startInvadersGame() {
        alert('👾 Space Invaders Loading...\n\nThis would launch the classic Space Invaders!\n\n🎮 Use A/D to move, Spacebar to shoot!');
    }
    
    toggleColorMode() {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 3000);
        
        alert('🎨 Color Mode Activated!\n\nBackground color temporarily changed!\n\nPress Ctrl+Shift+C again for a new color!');
    }
    
    toggleRainbowMode() {
        const rainbowDiv = document.createElement('div');
        rainbowDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080);
            background-size: 400% 400%;
            animation: rainbow-dance 2s ease infinite;
            pointer-events: none;
            z-index: 5000;
            opacity: 0.3;
        `;
        
        document.body.appendChild(rainbowDiv);
        
        setTimeout(() => {
            if (rainbowDiv.parentElement) rainbowDiv.remove();
        }, 5000);
    }
    
    startPsychedelicMode() {
        document.body.style.animation = 'psychedelic-spin 3s ease-in-out';
        document.body.style.filter = 'hue-rotate(180deg) saturate(200%)';
        
        setTimeout(() => {
            document.body.style.animation = '';
            document.body.style.filter = '';
        }, 3000);
        
        alert('🌈 TRIPPY MODE ACTIVATED! 🌈\n\nWhoa dude... the colors, man!\n\n😵‍💫 Reality is temporarily altered!');
    }
    
    openTimePortal() {
        alert('⏰ TIME PORTAL ACTIVATED! ⏰\n\nYou\'ve discovered the secret time travel feature!\n\n🌀 This would normally transport you to different eras of the internet!\n\n📅 Choose your destination: 1995, 1997, 1999, 2001');
    }
    
    openAdminPanel() {
        const adminPanel = document.createElement('div');
        adminPanel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #C0C0C0;
            border: 4px outset #C0C0C0;
            width: 500px;
            height: 400px;
            z-index: 10001;
            font-family: Arial, sans-serif;
            font-size: 11px;
        `;
        
        adminPanel.innerHTML = `
            <div style="background: linear-gradient(90deg, #000080, #0000FF); color: white; padding: 5px; display: flex; justify-content: space-between; align-items: center;">
                <b>🔧 CyberKids Admin Panel v1.0</b>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF0000; color: white; border: none; width: 16px; height: 14px; font-size: 9px;">×</button>
            </div>
            
            <div style="padding: 15px;">
                <div style="border: 2px inset #C0C0C0; padding: 10px; margin-bottom: 10px; background: white;">
                    <h4 style="margin: 0 0 10px 0; color: #000080;">📊 Site Statistics</h4>
                    <div style="font-size: 10px; line-height: 1.4;">
                        • Total Visitors: ${localStorage.getItem('hitCounter') || '1337'}<br>
                        • Pages Served: ${Math.floor(Math.random() * 50000) + 10000}<br>
                        • Bandwidth Used: ${(Math.random() * 100 + 50).toFixed(1)} MB<br>
                        • Server Uptime: 99.7%<br>
                        • Last Backup: Dec 30, 1999
                    </div>
                </div>
                
                <div style="border: 2px inset #C0C0C0; padding: 10px; margin-bottom: 10px; background: white;">
                    <h4 style="margin: 0 0 10px 0; color: #000080;">🛠️ Quick Actions</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                        <button onclick="alert('Visitor counter reset!')" style="padding: 5px; font-size: 9px;">Reset Counter</button>
                        <button onclick="alert('Site backed up!')" style="padding: 5px; font-size: 9px;">Backup Site</button>
                        <button onclick="alert('Cache cleared!')" style="padding: 5px; font-size: 9px;">Clear Cache</button>
                        <button onclick="alert('Logs exported!')" style="padding: 5px; font-size: 9px;">Export Logs</button>
                    </div>
                </div>
                
                <div style="border: 2px inset #C0C0C0; padding: 10px; background: white;">
                    <h4 style="margin: 0 0 10px 0; color: #000080;">⚠️ System Status</h4>
                    <div style="font-size: 10px; color: #008000;">
                        ✅ All systems operational<br>
                        ✅ Database connection: OK<br>
                        ✅ Y2K compliance: READY<br>
                        ⚠️ GeoCities quota: 89% used
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(adminPanel);
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
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes rainbow-dance {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    @keyframes psychedelic-spin {
        0% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
        25% { transform: rotate(90deg) scale(1.1); filter: hue-rotate(90deg); }
        50% { transform: rotate(180deg) scale(1); filter: hue-rotate(180deg); }
        75% { transform: rotate(270deg) scale(1.1); filter: hue-rotate(270deg); }
        100% { transform: rotate(360deg) scale(1); filter: hue-rotate(360deg); }
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