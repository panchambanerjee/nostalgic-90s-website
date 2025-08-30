// Simplified 90s Style Guestbook
class Guestbook {
    constructor() {
        this.entries = this.loadEntries();
        this.initializeGuestbook();
    }
    
    loadEntries() {
        const stored = localStorage.getItem('guestbook-entries');
        if (stored) {
            return JSON.parse(stored);
        } else {
            return [
                { name: "CyberSurfer98", message: "OMG this site is totally rad! 🤘 Love the dancing baby!", date: "12/15/1999", email: "cybersurfer98@hotmail.com" },
                { name: "NetNinja42", message: "Dude, your HTML skills are off the hook! How did you make that background?", date: "12/20/1999", email: "netninja@geocities.com" },
                { name: "DialUpDiva", message: "Finally found a fellow netizen! Your page loaded super fast on my 56k! 📞", date: "12/25/1999", email: "dialupdiva@aol.com" }
            ];
        }
    }
    
    saveEntries() {
        localStorage.setItem('guestbook-entries', JSON.stringify(this.entries));
    }
    
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
            max-width: 700px;
            height: 80%;
            background: #C0C0C0;
            border: 3px outset #C0C0C0;
            z-index: 10001;
            font-family: 'Comic Neue', 'Comic Sans MS', cursive;
            overflow: hidden;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        const entriesHTML = this.entries.map(entry => `
            <div style="background: #FFFFFF; border: 1px solid #C0C0C0; margin: 10px 0; padding: 10px; border-radius: 3px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; color: #000080; font-weight: bold;">
                    <strong>👤 ${this.escapeHtml(entry.name)}</strong>
                    <span style="font-size: 10px; color: #666666;">📅 ${entry.date}</span>
                </div>
                <div style="font-size: 11px; color: #008000; margin-bottom: 8px;">✉️ ${this.escapeHtml(entry.email)}</div>
                <div style="color: #000000; line-height: 1.4; margin-bottom: 10px;">${this.escapeHtml(entry.message)}</div>
            </div>
        `).join('');
        
        guestbookWindow.innerHTML = `
            <div style="background: linear-gradient(90deg, #000080, #0000FF); color: white; padding: 5px 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold;">
                <span>📖 CyberKid1999's Guestbook - Sign My Page! 📖</span>
                <button onclick="document.getElementById('guestbook-window').remove()" style="background: #FF0000; color: white; border: 1px outset #C0C0C0; width: 20px; height: 20px; cursor: pointer; font-weight: bold;">×</button>
            </div>
            
            <div style="padding: 15px; height: calc(100% - 30px); overflow-y: auto; background: #FFFFFF;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #FF00FF; margin: 10px 0;">🌟 Welcome to my Guestbook! 🌟</h2>
                    <p>Please sign my guestbook and let me know you were here!<br>
                    <em>Remember: No flame wars or spamming!</em></p>
                </div>
                
                <div style="margin: 20px 0; text-align: center;">
                    <table cellpadding="5" bgcolor="#E0E0E0" border="1" style="margin: 0 auto; border-collapse: separate; border-spacing: 0;">
                        <tr bgcolor="#000080">
                            <td colspan="2" align="center">
                                <font color="white"><b>✍️ Sign My Guestbook! ✍️</b></font>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Your Name:</b></td>
                            <td><input type="text" id="guest-name" maxlength="30" style="width: 200px; border: 2px inset #C0C0C0; padding: 2px;"></td>
                        </tr>
                        <tr>
                            <td><b>Email:</b></td>
                            <td><input type="email" id="guest-email" maxlength="50" style="width: 200px; border: 2px inset #C0C0C0; padding: 2px;"></td>
                        </tr>
                        <tr>
                            <td valign="top"><b>Message:</b></td>
                            <td><textarea id="guest-message" rows="4" cols="40" maxlength="500" placeholder="Leave your mark on the information superhighway!" style="border: 2px inset #C0C0C0; padding: 2px;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <button id="sign-guestbook" style="background: linear-gradient(45deg, #FF00FF, #FFFF00); border: 3px outset #C0C0C0; color: #000000; font-family: 'Comic Neue', 'Comic Sans MS', cursive; font-size: 14px; font-weight: bold; padding: 10px 20px; cursor: pointer; margin: 5px;">📝 SIGN GUESTBOOK 📝</button>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <div style="margin-top: 30px;">
                    <h3 style="color: #008000; text-align: center; border-bottom: 2px solid #008000; padding-bottom: 5px;">📚 Previous Visitors (${this.entries.length} total) 📚</h3>
                    <div style="max-height: 300px; overflow-y: auto; border: 2px inset #C0C0C0; background: #F0F0F0; padding: 10px;">
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
        
        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message!');
            return;
        }
        
        const newEntry = {
            name: name,
            email: email,
            message: message,
            date: this.getCurrentDate(),
            id: Date.now()
        };
        
        this.entries.unshift(newEntry);
        this.saveEntries();
        
        document.getElementById('guest-name').value = '';
        document.getElementById('guest-email').value = '';
        document.getElementById('guest-message').value = '';
        
        document.getElementById('guestbook-window').remove();
        this.openGuestbook();
        
        if (window.visualEffects) {
            window.visualEffects.celebrateAction('🎉 Thanks for signing! 🎉');
        }
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

// Initialize guestbook when main site loads
window.initializeGuestbook = function() {
    window.guestbook = new Guestbook();
};