// Extended Navigation Content - Photos, Links, Downloads, Chat
class ExtendedNavContent {
    static getPhotosContent() {
        const photos = [
            { name: "Me and my dog Rover!", file: "family_dog.jpg", width: 200, height: 150 },
            { name: "Summer vacation 1999", file: "vacation99.jpg", width: 180, height: 120 },
            { name: "My awesome computer setup", file: "computer.jpg", width: 220, height: 165 },
            { name: "School picture (ugh!)", file: "school_pic.jpg", width: 160, height: 200 },
            { name: "Halloween costume", file: "halloween.jpg", width: 190, height: 180 },
            { name: "Birthday party!", file: "birthday.jpg", width: 210, height: 140 }
        ];
        
        let photosHTML = `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">📸 My Photo Gallery 📸</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Check out my awesome pics! Click to enlarge!</font></p>
            </center>
            
            <table width="100%" border="2" cellpadding="10" bgcolor="#FFFFCC">
        `;
        
        photos.forEach((photo, index) => {
            if (index % 2 === 0) photosHTML += '<tr>';
            
            photosHTML += `
                <td align="center" bgcolor="#FFFFFF" width="50%">
                    <div class="photo-container" onclick="ExtendedNavContent.enlargePhoto('${photo.file}', '${photo.name}')">
                        <div class="fake-photo" style="width: ${photo.width}px; height: ${photo.height}px; border: 3px inset #C0C0C0; background: linear-gradient(45deg, #E0E0E0, #F0F0F0); display: flex; align-items: center; justify-content: center; font-size: 12px; color: #666; margin: 5px auto;">
                            <div class="loading-photo" id="photo-${index}">📷 Loading...</div>
                        </div>
                        <br>
                        <font face="Arial" size="2" color="#000080">
                            <b>${photo.name}</b>
                        </font>
                    </div>
                    <br>
                </td>
            `;
            
            if (index % 2 === 1 || index === photos.length - 1) {
                if (index === photos.length - 1 && index % 2 === 0) {
                    photosHTML += '<td></td>';
                }
                photosHTML += '</tr>';
            }
        });
        
        photosHTML += `
            </table>
            
            <center>
                <br>
                <div class="construction-worker"></div>
                <br>
                <font color="#FF0000" class="blink">
                    <b>More photos coming soon! Check back later!</b>
                </font>
                <br><br>
                
                <table border="2" cellpadding="5" bgcolor="#FFFF00">
                    <tr>
                        <td align="center">
                            <font size="2">
                                <b>📷 Photo Tips 📷</b><br>
                                • Use a digital camera for best quality!<br>
                                • Keep file sizes under 50KB for fast loading<br>
                                • Always ask permission before posting photos of friends
                            </font>
                        </td>
                    </tr>
                </table>
            </center>
        `;
        
        // Simulate photo loading
        setTimeout(() => {
            photos.forEach((photo, index) => {
                const photoElement = document.getElementById(`photo-${index}`);
                if (photoElement) {
                    photoElement.innerHTML = `📷 ${photo.file}`;
                }
            });
        }, 1000);
        
        return photosHTML;
    }
    
    static enlargePhoto(filename, caption) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            padding: 20px;
            z-index: 10001;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
        `;
        
        popup.innerHTML = `
            <div style="background: #000080; color: white; padding: 5px; margin: -20px -20px 15px -20px;">
                <b>📸 Photo Viewer</b>
                <button onclick="this.parentElement.parentElement.remove()" style="float: right; background: #FF0000; color: white; border: none; width: 20px; height: 20px;">×</button>
            </div>
            
            <div class="fake-photo enlarged" style="width: 300px; height: 225px; margin: 10px auto; border: 3px inset #C0C0C0; background: linear-gradient(45deg, #E0E0E0, #F0F0F0); display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <div style="font-size: 14px; color: #666;">
                    📷 ${filename}
                </div>
                <div style="font-size: 12px; color: #999; margin-top: 10px;">
                    (This would be a real photo in 1999!)
                </div>
            </div>
            
            <center>
                <p><b>${caption}</b></p>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 5px 10px;">Close</button>
            </center>
        `;
        
        document.body.appendChild(popup);
    }
    
    static getLinksContent() {
        return `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">🌐 Cool Links 🌐</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Check out these awesome sites!</font></p>
            </center>
            
            <table width="100%" border="2" cellpadding="15" bgcolor="#FFFFCC">
                <tr>
                    <td>
                        <h2><font color="#FF0000">🎮 Awesome Games! 🎮</font></h2>
                        <ul>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Shockwave Games Central')">🔥 Shockwave Games Central</a> <span class="blink" style="color: #FF0000; font-size: 10px;">NEW!</span></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Flash Game Paradise')">⚡ Flash Game Paradise</a></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Java Applet Central')">☕ Java Applet Central</a></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Pogo.com')">🎯 Pogo.com - Free Online Games</a></li>
                        </ul>
                        
                        <h2><font color="#0000FF">😂 Funny Stuff 😂</font></h2>
                        <ul>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('The Hamster Dance')">🐹 The Hamster Dance</a> <span class="blink" style="color: #FF0000;">HOT!</span></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('All Your Base')">👾 All Your Base Are Belong To Us</a></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Dancing Baby Central')">👶 Dancing Baby Central</a></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Bert is Evil')">😈 Bert is Evil</a></li>
                        </ul>
                        
                        <h2><font color="#008000">👥 My Friends' Pages 👥</font></h2>
                        <ul>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Sarah\\'s Page')">💕 Sarah's Awesome Homepage</a></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Mike\\'s Site')">🏀 Mike's Basketball Page</a> <span class="blink" style="color: #FF0000; font-size: 10px;">NEW!</span></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Jenny\\'s World')">🌸 Jenny's Pink Palace</a></li>
                            <li><a href="#" onclick="ExtendedNavContent.showBrokenLink('Chris\\'s Gaming')">🎮 Chris's Gaming Corner</a></li>
                        </ul>
                        
                        <h2><font color="#800080">🔗 Link Exchanges 🔗</font></h2>
                        <center>
                            <table border="1" cellpadding="5" bgcolor="#FFFFFF">
                                <tr>
                                    <td><a href="#" onclick="ExtendedNavContent.showBrokenLink('Teen Central')"><div style="width: 88px; height: 31px; background: linear-gradient(45deg, #FF69B4, #FF1493); color: white; display: flex; align-items: center; justify-content: center; font-size: 8px; border: 1px outset #C0C0C0;">Teen Central</div></a></td>
                                    <td><a href="#" onclick="ExtendedNavContent.showBrokenLink('Cool Site of the Day')"><div style="width: 88px; height: 31px; background: linear-gradient(45deg, #00BFFF, #0080FF); color: white; display: flex; align-items: center; justify-content: center; font-size: 8px; border: 1px outset #C0C0C0;">Cool Site</div></a></td>
                                </tr>
                                <tr>
                                    <td><a href="#" onclick="ExtendedNavContent.showBrokenLink('Geocities Ring')"><div style="width: 88px; height: 31px; background: linear-gradient(45deg, #32CD32, #00FF00); color: black; display: flex; align-items: center; justify-content: center; font-size: 8px; border: 1px outset #C0C0C0;">Geocities</div></a></td>
                                    <td><a href="#" onclick="ExtendedNavContent.showBrokenLink('Angelfire Sites')"><div style="width: 88px; height: 31px; background: linear-gradient(45deg, #FF4500, #FF6347); color: white; display: flex; align-items: center; justify-content: center; font-size: 8px; border: 1px outset #C0C0C0;">Angelfire</div></a></td>
                                </tr>
                            </table>
                        </center>
                    </td>
                </tr>
            </table>
            
            <center>
                <br>
                <table border="3" cellpadding="10" bgcolor="#FF69B4">
                    <tr>
                        <td align="center">
                            <font color="#FFFFFF" face="Comic Sans MS">
                                <b>🌟 Want to exchange links? 🌟</b><br>
                                Email me at cyberkid1999@hotmail.com!
                            </font>
                        </td>
                    </tr>
                </table>
                
                <br>
                <font size="1" color="#666666">
                    Links last updated: December 28, 1999<br>
                    Some links may be temporarily unavailable due to server maintenance
                </font>
            </center>
        `;
    }
    
    static showBrokenLink(siteName) {
        const messages = [
            `Sorry! ${siteName} is temporarily down for maintenance. Try again later!`,
            `Error 404: ${siteName} not found. The server may be experiencing heavy traffic.`,
            `${siteName} has exceeded its bandwidth limit. Please try again next month.`,
            `Connection timeout. ${siteName} is taking too long to respond.`,
            `${siteName} has moved to a new URL. Please update your bookmarks!`
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            padding: 20px;
            z-index: 10001;
            font-family: 'Arial', sans-serif;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
        `;
        
        popup.innerHTML = `
            <div style="background: #000080; color: white; padding: 5px; margin: -20px -20px 15px -20px;">
                <b>⚠️ Link Error</b>
                <button onclick="this.parentElement.parentElement.remove()" style="float: right; background: #FF0000; color: white; border: none; width: 20px; height: 20px;">×</button>
            </div>
            
            <p><b>${message}</b></p>
            
            <center>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 5px 10px;">OK</button>
            </center>
        `;
        
        document.body.appendChild(popup);
    }
    
    static getDownloadsContent() {
        const downloads = [
            { name: "Winamp Skins Pack", size: "2.3 MB", type: "ZIP", status: "working", desc: "50 awesome Winamp skins!" },
            { name: "Cool Screensavers", size: "1.8 MB", type: "EXE", status: "slow", desc: "Flying toasters and more!" },
            { name: "Virus Scanner 2000", size: "5.2 MB", type: "EXE", status: "broken", desc: "Protect your computer!" },
            { name: "Y2K Patch Kit", size: "856 KB", type: "ZIP", status: "working", desc: "Fix your Y2K bugs!" },
            { name: "AOL 5.0 Trial CD", size: "45 MB", type: "ISO", status: "slow", desc: "1000 FREE hours!" },
            { name: "Dancing Baby GIFs", size: "234 KB", type: "ZIP", status: "working", desc: "Animated GIF collection!" }
        ];
        
        let downloadsHTML = `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">💾 Download Central 💾</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Free downloads for your computer!</font></p>
            </center>
            
            <table width="100%" border="2" cellpadding="10" bgcolor="#FFFFCC">
                <tr bgcolor="#000080">
                    <td><font color="white"><b>File Name</b></font></td>
                    <td><font color="white"><b>Size</b></font></td>
                    <td><font color="white"><b>Type</b></font></td>
                    <td><font color="white"><b>Description</b></font></td>
                    <td><font color="white"><b>Download</b></font></td>
                </tr>
        `;
        
        downloads.forEach((file, index) => {
            const rowColor = index % 2 === 0 ? '#FFFFFF' : '#F0F0F0';
            let downloadButton = '';
            
            switch(file.status) {
                case 'working':
                    downloadButton = `<button onclick="ExtendedNavContent.startDownload('${file.name}', '${file.size}')" style="background: #00FF00; padding: 3px 8px;">Download</button>`;
                    break;
                case 'slow':
                    downloadButton = `<button onclick="ExtendedNavContent.startSlowDownload('${file.name}', '${file.size}')" style="background: #FFFF00; padding: 3px 8px;">Download</button>`;
                    break;
                case 'broken':
                    downloadButton = `<button onclick="ExtendedNavContent.showBrokenDownload('${file.name}')" style="background: #FF0000; color: white; padding: 3px 8px;">Download</button>`;
                    break;
            }
            
            downloadsHTML += `
                <tr bgcolor="${rowColor}">
                    <td><font face="Arial" size="2"><b>${file.name}</b></font></td>
                    <td><font face="Arial" size="2">${file.size}</font></td>
                    <td><font face="Arial" size="2">${file.type}</font></td>
                    <td><font face="Arial" size="2">${file.desc}</font></td>
                    <td>${downloadButton}</td>
                </tr>
            `;
        });
        
        downloadsHTML += `
            </table>
            
            <center>
                <br>
                <table border="2" cellpadding="10" bgcolor="#FFFF00">
                    <tr>
                        <td align="center">
                            <font color="#FF0000" size="2">
                                <b>⚠️ DOWNLOAD DISCLAIMER ⚠️</b><br>
                                • Always scan files for viruses before opening<br>
                                • Download speeds may vary based on server load<br>
                                • Files are provided "AS-IS" without warranty
                            </font>
                        </td>
                    </tr>
                </table>
                
                <br>
                <div class="construction-worker"></div>
                <br>
                <font color="#FF0000" class="blink">
                    <b>More downloads coming soon!</b>
                </font>
            </center>
        `;
        
        return downloadsHTML;
    }
    
    static startDownload(filename, filesize) {
        ExtendedNavContent.showDownloadProgress(filename, filesize, 'fast');
    }
    
    static startSlowDownload(filename, filesize) {
        ExtendedNavContent.showDownloadProgress(filename, filesize, 'slow');
    }
    
    static showBrokenDownload(filename) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            padding: 20px;
            z-index: 10001;
            font-family: 'Arial', sans-serif;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
        `;
        
        popup.innerHTML = `
            <div style="background: #800000; color: white; padding: 5px; margin: -20px -20px 15px -20px;">
                <b>❌ Download Error</b>
                <button onclick="this.parentElement.parentElement.remove()" style="float: right; background: #FF0000; color: white; border: none; width: 20px; height: 20px;">×</button>
            </div>
            
            <p><b>Error downloading ${filename}</b></p>
            <p>The file appears to be corrupted or the server is experiencing difficulties.</p>
            <p>Please try again later or contact the webmaster.</p>
            
            <center>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 5px 10px;">OK</button>
            </center>
        `;
        
        document.body.appendChild(popup);
    }
    
    static showDownloadProgress(filename, filesize, speed) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #C0C0C0;
            border: 2px outset #C0C0C0;
            padding: 20px;
            z-index: 10001;
            font-family: 'Arial', sans-serif;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
            min-width: 300px;
        `;
        
        popup.innerHTML = `
            <div style="background: #000080; color: white; padding: 5px; margin: -20px -20px 15px -20px;">
                <b>💾 Downloading...</b>
                <button onclick="this.parentElement.parentElement.remove()" style="float: right; background: #FF0000; color: white; border: none; width: 20px; height: 20px;">×</button>
            </div>
            
            <p><b>File:</b> ${filename}</p>
            <p><b>Size:</b> ${filesize}</p>
            
            <div style="border: 1px inset #C0C0C0; height: 20px; margin: 10px 0; background: white;">
                <div id="download-progress" style="height: 100%; background: linear-gradient(90deg, #00FF00, #008000); width: 0%; transition: width 0.5s;"></div>
            </div>
            
            <div id="download-status">Initializing download...</div>
            <div id="download-speed" style="font-size: 12px; color: #666;"></div>
            
            <center style="margin-top: 15px;">
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 5px 10px;">Cancel</button>
            </center>
        `;
        
        document.body.appendChild(popup);
        
        // Simulate download progress
        const progressBar = popup.querySelector('#download-progress');
        const statusDiv = popup.querySelector('#download-status');
        const speedDiv = popup.querySelector('#download-speed');
        
        let progress = 0;
        const maxTime = speed === 'fast' ? 3000 : 8000;
        const interval = 100;
        const increment = (100 / maxTime) * interval;
        
        const downloadInterval = setInterval(() => {
            progress += increment + Math.random() * 2 - 1;
            progress = Math.min(100, Math.max(0, progress));
            
            progressBar.style.width = progress + '%';
            statusDiv.textContent = `Downloading... ${Math.round(progress)}%`;
            
            const downloadSpeed = speed === 'fast' ? '5.2 KB/s' : '1.8 KB/s';
            speedDiv.textContent = `Transfer rate: ${downloadSpeed}`;
            
            if (progress >= 100) {
                clearInterval(downloadInterval);
                statusDiv.textContent = 'Download complete!';
                speedDiv.textContent = 'File saved to Downloads folder';
                
                // Auto-close after 2 seconds
                setTimeout(() => {
                    if (popup.parentElement) {
                        popup.remove();
                    }
                }, 2000);
            }
        }, interval);
    }
    
    static getGuestbookContent() {
        return `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">📖 CyberKid1999's Guestbook 📖</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Please sign my guestbook and tell me what you think!</font></p>
            </center>
            
            <div id="guestbook-container">
                <center>
                    <div class="construction-worker"></div>
                    <br>
                    <font color="#FF0000">Loading guestbook...</font>
                </center>
            </div>
        `;
    }
    
    static getChatContent() {
        return `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">💬 CyberKid1999's Chat Room 💬</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Come chat with other cool netizens!</font></p>
            </center>
            
            <div id="chatroom-container">
                <center>
                    <div class="construction-worker"></div>
                    <br>
                    <font color="#FF0000">Connecting to chat server...</font>
                </center>
            </div>
        `;
    }
}

// Add the methods to the main navigation class
if (window.ninetyNineNav) {
    Object.assign(window.ninetyNineNav.__proto__, {
        getPhotosContent: ExtendedNavContent.getPhotosContent,
        getLinksContent: ExtendedNavContent.getLinksContent,
        getDownloadsContent: ExtendedNavContent.getDownloadsContent,
        getGuestbookContent: ExtendedNavContent.getGuestbookContent,
        getChatContent: ExtendedNavContent.getChatContent
    });
}