// Enhanced 90s Style Guestbook with Cyber Community Features
class EnhancedGuestbook {
    constructor() {
        this.entries = this.loadEntries();
        this.friends = this.loadFriends();
        this.friendRequests = this.loadFriendRequests();
        this.initializeGuestbook();
    }
    
    // ... existing loadEntries method with enhanced entries ...
    
    // ... existing loadFriends and loadFriendRequests methods ...
    
    // ... existing save methods ...
    
    initializeGuestbook() {
        document.addEventListener('click', (e) => {
            if (e.target.href && e.target.href.includes('#guestbook')) {
                e.preventDefault();
                this.openGuestbook();
            }
        });
    }
    
    openGuestbook() {
        const guestbookWindow = document.createElement('div');
        guestbookWindow.id = 'guestbook-window';
        guestbookWindow.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 800px;
            height: 85%;
            background: #C0C0C0;
            border: 3px outset #C0C0C0;
            z-index: 10001;
            font-family: 'Comic Neue', 'Comic Sans MS', cursive;
            overflow: hidden;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        const entriesHTML = this.entries.map(entry => `
            <div style="
                background: ${entry.isFriend ? 'linear-gradient(45deg, #FFE4E1, #FFF0F5)' : '#F5F5F5'};
                border: 2px ${entry.isFriend ? 'solid #FF69B4' : 'inset #C0C0C0'};
                margin: 15px 0;
                padding: 12px;
                border-radius: 5px;
                box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
            ">
                <div style="
                    background: ${entry.isFriend ? 'linear-gradient(90deg, #FF1493, #FF69B4)' : 'linear-gradient(90deg, #4169E1, #6495ED)'};
                    color: white;
                    padding: 5px 8px;
                    margin: -12px -12px 8px -12px;
                    font-weight: bold;
                    font-size: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>${entry.isFriend ? '💖' : '👤'} ${this.escapeHtml(entry.name)} ${entry.isFriend ? '(Cyber Friend!)' : ''}</span>
                    <span style="font-size: 10px;">${entry.date}</span>
                </div>
                
                ${entry.location ? `<div style="font-size: 10px; color: #666; margin-bottom: 5px;">🌍 ${entry.location} | 🎵 ${entry.favBand} | ${entry.mood}</div>` : ''}
                
                <div style="color: #000000; line-height: 1.4; margin-bottom: 8px; font-size: 11px;">${this.escapeHtml(entry.message)}</div>
                
                <div style="
                    border-top: 1px dotted #999;
                    padding-top: 5px;
                    font-size: 9px;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>📧 ${this.escapeHtml(entry.email)}</span>
                    ${!entry.isFriend ? `<button onclick="window.guestbookSystem.addFriend('${entry.name}')" style="
                        background: linear-gradient(45deg, #32CD32, #90EE90);
                        border: 1px outset #32CD32;
                        color: #006400;
                        font-size: 8px;
                        padding: 2px 6px;
                        cursor: pointer;
                    ">+ Add Friend</button>` : '<span style="color: #FF1493; font-weight: bold;">💖 Cyber Friend!</span>'}
                </div>
            </div>
        `).join('');
        
        guestbookWindow.innerHTML = `
            <div style="background: linear-gradient(90deg, #FF1493, #FF69B4); color: white; padding: 5px 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold;">
                <span>📖 Tom's Enhanced Cyber Guestbook 📖</span>
                <button onclick="document.getElementById('guestbook-window').remove()" style="background: #FF0000; color: white; border: 1px outset #C0C0C0; width: 20px; height: 20px; cursor: pointer; font-weight: bold;">×</button>
            </div>
            
            <div style="padding: 15px; height: calc(100% - 30px); overflow-y: auto; background: #FFFFFF;">
                <!-- Enhanced Header with Stats -->
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #FF00FF; margin: 10px 0;">🌟 Welcome to the Cyber Community! 🌟</h2>
                    <div style="background: linear-gradient(45deg, #E0E0FF, #F0F8FF); border: 2px solid #4169E1; padding: 8px; margin: 10px 0; border-radius: 5px;">
                        <div style="font-size: 11px; color: #000080;">
                            <b>📊 Community Stats:</b> ${this.entries.length} messages | ${this.friends.length} cyber friends | ${this.friendRequests.length} pending requests
                        </div>
                    </div>
                    <p>Sign my guestbook and join the ultimate cyber community!<br>
                    <em>Remember: Be excellent to each other! No flame wars! 🔥🚫</em></p>
                </div>
                
                <!-- Enhanced Sign Form -->
                <div style="margin: 20px 0; text-align: center;">
                    <table cellpadding="8" bgcolor="#E0E0E0" border="2" style="margin: 0 auto; border-collapse: separate; border-spacing: 0;">
                        <tr bgcolor="#FF1493">
                            <td colspan="2" align="center">
                                <font color="white"><b>✍️ Join the Cyber Community! ✍️</b></font>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Your Name:</b></td>
                            <td><input type="text" id="guest-name" maxlength="30" style="width: 200px; border: 2px inset #C0C0C0; padding: 3px;"></td>
                        </tr>
                        <tr>
                            <td><b>Email:</b></td>
                            <td><input type="email" id="guest-email" maxlength="50" style="width: 200px; border: 2px inset #C0C0C0; padding: 3px;"></td>
                        </tr>
                        <tr>
                            <td><b>Location:</b></td>
                            <td><input type="text" id="guest-location" maxlength="50" placeholder="City, Country" style="width: 200px; border: 2px inset #C0C0C0; padding: 3px;"></td>
                        </tr>
                        <tr>
                            <td><b>Current Mood:</b></td>
                            <td>
                                <select id="guest-mood" style="width: 208px; border: 2px inset #C0C0C0; padding: 3px;">
                                    <option>😎 Totally Cool</option>
                                    <option>🤓 Surfing the Web</option>
                                    <option>😍 In Love with the Internet</option>
                                    <option>🎮 Gaming Mode</option>
                                    <option>🎵 Jamming to Music</option>
                                    <option>😴 Tired from Dial-up</option>
                                    <option>🤯 Mind Blown by Tech</option>
                                    <option>😅 Y2K Survivor</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Favorite Band:</b></td>
                            <td><input type="text" id="guest-band" maxlength="30" placeholder="e.g., Backstreet Boys" style="width: 200px; border: 2px inset #C0C0C0; padding: 3px;"></td>
                        </tr>
                        <tr>
                            <td valign="top"><b>Message:</b></td>
                            <td><textarea id="guest-message" rows="4" cols="40" maxlength="500" placeholder="Leave your mark on the information superhighway! Tell me about your cyber adventures!" style="border: 2px inset #C0C0C0; padding: 3px;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <input type="checkbox" id="friend-request" style="margin-right: 5px;">
                                <label for="friend-request" style="font-size: 10px;">Send me a cyber friend request! 💖</label><br>
                                <button id="sign-guestbook" style="background: linear-gradient(45deg, #FF00FF, #FFFF00); border: 3px outset #C0C0C0; color: #000000; font-family: 'Comic Neue', 'Comic Sans MS', cursive; font-size: 14px; font-weight: bold; padding: 10px 20px; cursor: pointer; margin: 10px;">📝 SIGN GUESTBOOK 📝</button>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <!-- Friend Requests Section -->
                ${this.friendRequests.length > 0 ? `
                <div style="margin: 20px 0; background: #FFF8DC; border: 2px solid #DAA520; padding: 10px; border-radius: 5px;">
                    <h4 style="color: #B8860B; margin: 0 0 10px 0;">🤝 Pending Friend Requests (${this.friendRequests.length})</h4>
                    ${this.friendRequests.map(req => `
                        <div style="background: white; border: 1px solid #DAA520; padding: 8px; margin: 5px 0; border-radius: 3px; display: flex; justify-content: space-between; align-items: center;">
                            <div style="font-size: 10px;">
                                <b>${req.name}</b> wants to be cyber friends!<br>
                                <em>"${req.message}"</em>
                            </div>
                            <div>
                                <button onclick="window.guestbookSystem.acceptFriendRequest('${req.name}')" style="background: #32CD32; color: white; border: 1px outset #32CD32; padding: 2px 6px; cursor: pointer; font-size: 8px; margin-right: 3px;">Accept</button>
                                <button onclick="window.guestbookSystem.rejectFriendRequest('${req.name}')" style="background: #FF6347; color: white; border: 1px outset #FF6347; padding: 2px 6px; cursor: pointer; font-size: 8px;">Reject</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                <!-- Guestbook Entries -->
                <div style="margin-top: 30px;">
                    <h3 style="color: #008000; text-align: center; border-bottom: 2px solid #008000; padding-bottom: 5px;">📚 Cyber Community Messages (${this.entries.length} total) 📚</h3>
                    <div style="max-height: 400px; overflow-y: auto; border: 2px inset #C0C0C0; background: #F0F0F0; padding: 10px;">
                        ${entriesHTML}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(guestbookWindow);
        this.addEventListeners();
    }
    
    addEventListeners() {
        const signButton = document.getElementById('sign-guestbook');
        if (signButton) {
            signButton.addEventListener('click', () => this.addEntry());
        }
        
        const messageTextarea = document.getElementById('guest-message');
        if (messageTextarea) {
            messageTextarea.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    this.addEntry();
                }
            });
        }
    }
    
    addEntry() {
        const name = document.getElementById('guest-name').value.trim();
        const email = document.getElementById('guest-email').value.trim();
        const message = document.getElementById('guest-message').value.trim();
        const location = document.getElementById('guest-location').value.trim();
        const mood = document.getElementById('guest-mood').value;
        const favBand = document.getElementById('guest-band').value.trim();
        const wantsFriend = document.getElementById('friend-request').checked;
        
        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message!');
            return;
        }
        
        const newEntry = {
            name: name,
            email: email,
            message: message,
            location: location || 'Cyberspace',
            mood: mood,
            favBand: favBand || 'The Internet Theme Song',
            date: this.getCurrentDate(),
            id: Date.now(),
            isFriend: false
        };
        
        this.entries.unshift(newEntry);
        this.saveEntries();
        
        // Handle friend request
        if (wantsFriend) {
            const friendRequest = {
                name: name,
                message: `Hi Tom! I love your site and would love to be cyber friends!`,
                date: this.getCurrentDate()
            };
            this.friendRequests.push(friendRequest);
            this.saveFriendRequests();
        }
        
        // Clear form
        document.getElementById('guest-name').value = '';
        document.getElementById('guest-email').value = '';
        document.getElementById('guest-message').value = '';
        document.getElementById('guest-location').value = '';
        document.getElementById('guest-band').value = '';
        document.getElementById('friend-request').checked = false;
        
        document.getElementById('guestbook-window').remove();
        this.openGuestbook();
        
        // Show celebration
        this.showSuccessMessage(wantsFriend);
    }
    
    showSuccessMessage(wantsFriend) {
        const message = wantsFriend ? 
            '🎉 Thanks for signing! Friend request sent! 💖' : 
            '🎉 Thanks for signing my guestbook! 📝';
        
        if (window.visualEffects) {
            window.visualEffects.celebrateAction(message);
        } else {
            alert(message);
        }
    }
    
    // Enhanced friend management methods
    addFriend(name) {
        const entry = this.entries.find(e => e.name === name);
        if (entry) {
            entry.isFriend = true;
            this.friends.push({
                name: name,
                since: this.getCurrentDate(),
                status: 'online'
            });
            this.saveEntries();
            this.saveFriends();
            
            this.showNotification(`${name} is now your cyber friend! 💖`);
            
            // Refresh guestbook display
            if (document.getElementById('guestbook-window')) {
                document.getElementById('guestbook-window').remove();
                this.openGuestbook();
            }
        }
    }
    
    acceptFriendRequest(name) {
        const requestIndex = this.friendRequests.findIndex(req => req.name === name);
        if (requestIndex !== -1) {
            const request = this.friendRequests[requestIndex];
            this.friendRequests.splice(requestIndex, 1);
            
            this.friends.push({
                name: name,
                since: this.getCurrentDate(),
                status: 'online'
            });
            
            // Mark guestbook entry as friend if exists
            const entry = this.entries.find(e => e.name === name);
            if (entry) {
                entry.isFriend = true;
                this.saveEntries();
            }
            
            this.saveFriends();
            this.saveFriendRequests();
            
            this.showNotification(`${name} is now your cyber friend! 💖`);
            
            // Refresh display
            document.getElementById('guestbook-window').remove();
            this.openGuestbook();
        }
    }
    
    rejectFriendRequest(name) {
        const requestIndex = this.friendRequests.findIndex(req => req.name === name);
        if (requestIndex !== -1) {
            this.friendRequests.splice(requestIndex, 1);
            this.saveFriendRequests();
            
            this.showNotification(`Friend request from ${name} declined.`);
            
            // Refresh display
            document.getElementById('guestbook-window').remove();
            this.openGuestbook();
        }
    }
    
    sendFriendRequest() {
        const names = [
            'HTMLNinja', 'WebMaster99', 'CyberAngel', 'DigitalDreamer', 
            'NetSurfer2000', 'CodeWizard', 'PixelArtist', 'MIDIMaker'
        ];
        const name = names[Math.floor(Math.random() * names.length)];
        
        const newRequest = {
            name: name,
            message: `Hey Tom! Your site is amazing! Want to be cyber friends?`,
            date: this.getCurrentDate()
        };
        
        this.friendRequests.push(newRequest);
        this.saveFriendRequests();
        
        this.showNotification(`Friend request sent to ${name}! 💌`);
        
        // Refresh if guestbook is open
        if (document.getElementById('guestbook-window')) {
            document.getElementById('guestbook-window').remove();
            setTimeout(() => this.openGuestbook(), 500);
        }
    }
    
    showFriendsList() {
        const friendsWindow = document.createElement('div');
        friendsWindow.style.cssText = `
            position: fixed;
            top: 60px;
            right: 20px;
            width: 300px;
            height: 400px;
            background: #E6E6FA;
            border: 3px outset #E6E6FA;
            z-index: 10002;
            font-family: Arial, sans-serif;
            font-size: 11px;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
        `;
        
        friendsWindow.innerHTML = `
            <div style="background: linear-gradient(90deg, #9370DB, #BA55D3); color: white; padding: 5px 8px; display: flex; justify-content: space-between; align-items: center;">
                <span>💖 Cyber Friends (${this.friends.length})</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF0000; color: white; border: 1px outset; width: 18px; height: 16px; cursor: pointer;">×</button>
            </div>
            <div style="padding: 10px; height: calc(100% - 30px); overflow-y: auto;">
                ${this.friends.map(friend => `
                    <div style="background: white; border: 1px solid #9370DB; margin: 5px 0; padding: 5px; border-radius: 3px;">
                        <div style="font-weight: bold; color: #9370DB;">${friend.status === 'online' ? '🟢' : '🔴'} ${friend.name}</div>
                        <div style="font-size: 9px; color: #666;">Friends since: ${friend.since}</div>
                    </div>
                `).join('')}
                ${this.friends.length === 0 ? '<div style="text-align: center; color: #666; margin-top: 50px;">No cyber friends yet!<br>Sign the guestbook to make friends!</div>' : ''}
            </div>
        `;
        
        document.body.appendChild(friendsWindow);
        
        // Auto-close after 10 seconds
        setTimeout(() => {
            if (friendsWindow.parentElement) {
                friendsWindow.remove();
            }
        }, 10000);
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(45deg, #FF69B4, #FFB6C1);
            color: #000080;
            padding: 8px 12px;
            border: 2px outset #FF69B4;
            font-family: Arial, sans-serif;
            font-size: 10px;
            font-weight: bold;
            z-index: 10003;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
            border-radius: 5px;
        `;
        
        notification.textContent = message;
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
    
    getCurrentDate() {
        const now = new Date();
        return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize enhanced guestbook system
window.initializeGuestbook = function() {
    if (!window.guestbookSystem) {
        window.guestbookSystem = new EnhancedGuestbook();
        console.log('Enhanced guestbook system initialized');
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initializeGuestbook);
} else {
    window.initializeGuestbook();
}