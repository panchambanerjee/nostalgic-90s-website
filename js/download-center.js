// ===== 90s DOWNLOAD CENTER =====

class DownloadCenter {
    constructor() {
        this.downloads = [
            {
                name: "WinAmp 2.95 Full Version",
                size: "2.1 MB",
                type: "Media Player",
                description: "The ultimate MP3 player! Whips the llama's ass! Includes 50+ skins and visualization plugins.",
                filename: "winamp295_full.exe",
                category: "multimedia",
                rating: "★★★★★",
                downloads: 847392,
                new: true
            },
            {
                name: "RealPlayer 7 Basic",
                size: "5.8 MB", 
                type: "Streaming Media",
                description: "Stream audio and video over the internet! Watch QuickTime movies and listen to radio stations.",
                filename: "rp7_basic.exe",
                category: "multimedia",
                rating: "★★★★☆",
                downloads: 234567,
                new: false
            },
            {
                name: "ICQ 99b Build 3043",
                size: "1.4 MB",
                type: "Instant Messenger", 
                description: "Chat with friends online! Send messages, files, and voice clips. Uh-oh! ICQ is here!",
                filename: "icq99b_3043.exe",
                category: "communication",
                rating: "★★★★★",
                downloads: 1247893,
                new: false
            },
            {
                name: "Napster Beta 1.1",
                size: "876 KB",
                type: "File Sharing",
                description: "Share and download MP3s with millions of users! TOTALLY LEGAL music sharing revolution!",
                filename: "napster_beta11.exe", 
                category: "p2p",
                rating: "★★★★★",
                downloads: 2847392,
                new: true
            },
            {
                name: "Tribal Voice PowWow 4.0",
                size: "2.3 MB",
                type: "Voice Chat",
                description: "Voice chat and tribal gaming! Connect with your tribe and chat with crystal clear audio.",
                filename: "powwow40.exe",
                category: "communication", 
                rating: "★★★☆☆",
                downloads: 45672,
                new: false
            },
            {
                name: "Adobe Flash Player 4",
                size: "434 KB",
                type: "Browser Plugin",
                description: "View interactive Flash animations and games! Required for most cool websites.",
                filename: "flash4_plugin.exe",
                category: "browser",
                rating: "★★★★☆", 
                downloads: 934821,
                new: false
            },
            {
                name: "Quake III Arena Demo", 
                size: "47.2 MB",
                type: "Game Demo",
                description: "The ultimate arena shooter! 4 levels of intense fragging action. Requires OpenGL graphics card.",
                filename: "q3demo.exe",
                category: "games",
                rating: "★★★★★",
                downloads: 1934821,
                new: true
            },
            {
                name: "Pokemon Puzzle Challenge",
                size: "3.2 MB", 
                type: "Puzzle Game",
                description: "Gotta solve 'em all! Match Pokemon blocks in this addictive puzzle game for Windows.",
                filename: "pokemon_puzzle.exe",
                category: "games",
                rating: "★★★★☆",
                downloads: 567234,
                new: false
            }
        ];
        
        this.currentDownload = null;
        this.downloadQueue = [];
        this.init();
    }

    init() {
        this.setupDownloadStyles();
    }

    setupDownloadStyles() {
        if (!document.querySelector('#download-styles')) {
            const style = document.createElement('style');
            style.id = 'download-styles';
            style.textContent = `
                .download-center {
                    background: #F0F0F0;
                    border: 4px inset #C0C0C0;
                    padding: 15px;
                    margin: 15px 0;
                }
                
                .download-header {
                    background: linear-gradient(90deg, #000080, #0000FF);
                    color: white;
                    padding: 8px 12px;
                    margin: -15px -15px 15px -15px;
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .download-categories {
                    display: flex;
                    gap: 5px;
                    margin-bottom: 15px;
                    flex-wrap: wrap;
                }
                
                .category-btn {
                    background: linear-gradient(45deg, #C0C0C0, #E0E0E0);
                    border: 2px outset #C0C0C0;
                    padding: 4px 8px;
                    cursor: pointer;
                    font-size: 11px;
                    color: #000;
                }
                
                .category-btn.active {
                    background: linear-gradient(45deg, #0080FF, #00BFFF);
                    color: white;
                    border: 2px inset #0080FF;
                }
                
                .download-item {
                    background: white;
                    border: 2px outset #C0C0C0;
                    padding: 10px;
                    margin: 8px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .download-info {
                    flex: 1;
                }
                
                .download-name {
                    font-weight: bold;
                    color: #000080;
                    margin-bottom: 3px;
                }
                
                .download-details {
                    font-size: 11px;
                    color: #666;
                    margin-bottom: 3px;
                }
                
                .download-description {
                    font-size: 10px;
                    color: #333;
                    line-height: 1.3;
                }
                
                .download-meta {
                    text-align: right;
                    margin-left: 15px;
                    min-width: 120px;
                }
                
                .download-btn {
                    background: linear-gradient(45deg, #00FF00, #00CC00);
                    border: 3px outset #00FF00;
                    padding: 6px 12px;
                    cursor: pointer;
                    font-weight: bold;
                    color: #000;
                    margin-top: 5px;
                    display: block;
                    width: 100%;
                    text-align: center;
                }
                
                .download-btn:hover {
                    background: linear-gradient(45deg, #00CC00, #00AA00);
                }
                
                .download-btn:active {
                    border: 3px inset #00FF00;
                }
                
                .new-badge {
                    background: linear-gradient(45deg, #FF0000, #FFFF00);
                    color: #000;
                    font-size: 8px;
                    padding: 2px 4px;
                    border-radius: 2px;
                    font-weight: bold;
                    animation: newItemBlink 1s ease-in-out infinite alternate;
                }
                
                @keyframes newItemBlink {
                    0% { background: linear-gradient(45deg, #FF0000, #FFFF00); }
                    100% { background: linear-gradient(45deg, #FFFF00, #FF0000); }
                }
                
                .download-progress-window {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #C0C0C0;
                    border: 4px outset #C0C0C0;
                    width: 400px;
                    z-index: 10000;
                    display: none;
                }
                
                .progress-header {
                    background: linear-gradient(90deg, #000080, #0000FF);
                    color: white;
                    padding: 4px 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 11px;
                    font-weight: bold;
                }
                
                .progress-content {
                    padding: 15px;
                }
                
                .progress-file-info {
                    margin-bottom: 10px;
                    font-size: 11px;
                }
                
                .progress-bar-container {
                    background: #808080;
                    border: 2px inset #C0C0C0;
                    height: 20px;
                    margin: 10px 0;
                    position: relative;
                }
                
                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #0000FF, #00FFFF);
                    width: 0%;
                    transition: width 0.3s ease;
                }
                
                .progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 10px;
                    font-weight: bold;
                    color: white;
                    text-shadow: 1px 1px 0px #000;
                }
                
                .progress-stats {
                    font-size: 10px;
                    display: flex;
                    justify-content: space-between;
                    margin: 5px 0;
                }
                
                .progress-buttons {
                    text-align: center;
                    margin-top: 15px;
                }
                
                .progress-btn {
                    background: linear-gradient(45deg, #C0C0C0, #E0E0E0);
                    border: 2px outset #C0C0C0;
                    padding: 4px 12px;
                    cursor: pointer;
                    font-size: 11px;
                    margin: 0 5px;
                }
                
                .shareware-notice {
                    background: #FFFFCC;
                    border: 3px ridge #FFCC00;
                    padding: 8px;
                    margin: 10px 0;
                    font-size: 10px;
                    text-align: center;
                }
            `;
            document.head.appendChild(style);
        }
    }

    getDownloadContent() {
        return `
            <div class="download-center">
                <div class="download-header">
                    <span>💾 Tom's Download Archive 💾</span>
                    <span style="font-size: 10px;">Updated: Dec 31, 1999</span>
                </div>
                
                <div class="shareware-notice">
                    <b>⚠️ SHAREWARE NOTICE ⚠️</b><br>
                    Please respect software authors! Register shareware after 30-day trial period.<br>
                    Virus scanning recommended. Download at your own risk!
                </div>
                
                <div class="download-categories">
                    <button class="category-btn active" onclick="window.downloadCenter.filterCategory('all')">All Files</button>
                    <button class="category-btn" onclick="window.downloadCenter.filterCategory('multimedia')">Multimedia</button>
                    <button class="category-btn" onclick="window.downloadCenter.filterCategory('communication')">Chat/Comm</button>
                    <button class="category-btn" onclick="window.downloadCenter.filterCategory('games')">Games</button>
                    <button class="category-btn" onclick="window.downloadCenter.filterCategory('browser')">Browser</button>
                    <button class="category-btn" onclick="window.downloadCenter.filterCategory('p2p')">P2P/Sharing</button>
                </div>
                
                <div id="download-list">
                    ${this.renderDownloadList('all')}
                </div>
            </div>
            
            <div id="download-progress-window" class="download-progress-window">
                <div class="progress-header">
                    <span>Download Progress</span>
                    <span onclick="window.downloadCenter.cancelDownload()" style="cursor: pointer;">✖</span>
                </div>
                <div class="progress-content">
                    <div class="progress-file-info">
                        <div><b>File:</b> <span id="progress-filename">loading...</span></div>
                        <div><b>Size:</b> <span id="progress-filesize">loading...</span></div>
                        <div><b>Type:</b> <span id="progress-filetype">loading...</span></div>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" id="download-progress-bar"></div>
                        <div class="progress-text" id="progress-percentage">0%</div>
                    </div>
                    <div class="progress-stats">
                        <span>Speed: <span id="download-speed">0 KB/s</span></span>
                        <span>Time Left: <span id="time-remaining">calculating...</span></span>
                        <span>Downloaded: <span id="downloaded-amount">0 KB</span></span>
                    </div>
                    <div class="progress-buttons">
                        <button class="progress-btn" onclick="window.downloadCenter.pauseDownload()">⏸️ Pause</button>
                        <button class="progress-btn" onclick="window.downloadCenter.cancelDownload()">❌ Cancel</button>
                    </div>
                </div>
            </div>
        `;
    }

    renderDownloadList(category) {
        const filteredDownloads = category === 'all' 
            ? this.downloads 
            : this.downloads.filter(d => d.category === category);
            
        return filteredDownloads.map(download => `
            <div class="download-item" data-category="${download.category}">
                <div class="download-info">
                    <div class="download-name">
                        ${download.name} 
                        ${download.new ? '<span class="new-badge">NEW!</span>' : ''}
                    </div>
                    <div class="download-details">
                        ${download.type} • ${download.size} • ${download.rating} • ${download.downloads.toLocaleString()} downloads
                    </div>
                    <div class="download-description">
                        ${download.description}
                    </div>
                </div>
                <div class="download-meta">
                    <button class="download-btn" onclick="window.downloadCenter.startDownload('${download.filename}', '${download.name}', '${download.size}', '${download.type}')">
                        💾 DOWNLOAD
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterCategory(category) {
        // Update active button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Update download list
        document.getElementById('download-list').innerHTML = this.renderDownloadList(category);
    }

    startDownload(filename, name, size, type) {
        // Show progress window
        const progressWindow = document.getElementById('download-progress-window');
        progressWindow.style.display = 'block';
        
        // Update file info
        document.getElementById('progress-filename').textContent = filename;
        document.getElementById('progress-filesize').textContent = size;
        document.getElementById('progress-filetype').textContent = type;
        
        // Reset progress
        document.getElementById('download-progress-bar').style.width = '0%';
        document.getElementById('progress-percentage').textContent = '0%';
        document.getElementById('download-speed').textContent = '0 KB/s';
        document.getElementById('time-remaining').textContent = 'calculating...';
        document.getElementById('downloaded-amount').textContent = '0 KB';
        
        // Simulate realistic 56k download
        this.simulateDownload(filename, size);
    }

    simulateDownload(filename, size) {
        let progress = 0;
        let speed = Math.random() * 3 + 1; // 1-4 KB/s (realistic 56k speeds)
        let totalKB = parseInt(size.replace(/[^0-9.]/g, '')) * (size.includes('MB') ? 1024 : 1);
        
        const interval = setInterval(() => {
            // Simulate speed fluctuations
            speed = Math.max(0.5, speed + (Math.random() - 0.5) * 0.8);
            
            progress += speed / totalKB * 100;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                this.completeDownload(filename);
            }
            
            // Update UI
            document.getElementById('download-progress-bar').style.width = progress + '%';
            document.getElementById('progress-percentage').textContent = Math.floor(progress) + '%';
            document.getElementById('download-speed').textContent = speed.toFixed(1) + ' KB/s';
            
            const remainingKB = totalKB * (1 - progress / 100);
            const timeLeft = remainingKB / speed;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = Math.floor(timeLeft % 60);
            document.getElementById('time-remaining').textContent = 
                progress >= 100 ? 'Complete!' : `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            document.getElementById('downloaded-amount').textContent = 
                Math.floor(totalKB * progress / 100) + ' KB';
                
        }, 200); // Update every 200ms
        
        this.currentDownload = { interval, filename };
    }

    completeDownload(filename) {
        setTimeout(() => {
            document.getElementById('download-progress-window').style.display = 'none';
            alert(`💾 Download Complete! 💾\n\n${filename} has been saved to your Downloads folder.\n\nDon't forget to scan for viruses! 🛡️`);
        }, 1000);
    }

    pauseDownload() {
        if (this.currentDownload) {
            clearInterval(this.currentDownload.interval);
            alert('Download paused! Click "Resume" to continue... (Just kidding, this is a demo! 😄)');
        }
    }

    cancelDownload() {
        if (this.currentDownload) {
            clearInterval(this.currentDownload.interval);
            this.currentDownload = null;
        }
        document.getElementById('download-progress-window').style.display = 'none';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.downloadCenter = new DownloadCenter();
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    window.downloadCenter = new DownloadCenter();
}