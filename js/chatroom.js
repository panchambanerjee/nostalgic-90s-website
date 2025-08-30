// 90s Style Chatroom Simulator
class ChatroomSimulator {
    constructor() {
        this.isOpen = false;
        this.users = [
            { name: "CyberWizard99", color: "#FF00FF", avatar: "🧙‍♂️" },
            { name: "DialUpQueen", color: "#00FFFF", avatar: "👸" },
            { name: "HTMLHero", color: "#FFFF00", avatar: "🦸‍♂️" },
            { name: "GeoCitiesGuru", color: "#00FF00", avatar: "🌟" }
        ];
        
        this.botResponses = [
            "OMG that's so cool! 😎",
            "Has anyone tried the new Napster? 🎵",
            "My 56k is acting up again... anyone else? 📞",
            "Just got the new Windows 98! It's amazing! 💻",
            "Check out my new GeoCities page! It has FRAMES! 🌐",
            "Does anyone know how to make animated GIFs? 🎞️",
            "Y2K is coming... are we all doomed? 😱"
        ];
        
        this.initializeChatroom();
    }
    
    initializeChatroom() {
        document.addEventListener('click', (e) => {
            if (e.target.href && e.target.href.includes('#chat')) {
                e.preventDefault();
                this.openChatroom();
            }
        });
    }
    
    openChatroom() {
        if (this.isOpen) return;
        this.isOpen = true;
        
        const chatroomWindow = document.createElement('div');
        chatroomWindow.id = 'chatroom-window';
        chatroomWindow.style.cssText = `
            position: fixed;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 70%;
            background: #C0C0C0;
            border: 3px outset #C0C0C0;
            z-index: 10002;
            font-family: 'Comic Neue', 'Comic Sans MS', cursive;
            overflow: hidden;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        chatroomWindow.innerHTML = `
            <div style="background: linear-gradient(90deg, #000080, #0000FF); color: white; padding: 5px 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold;">
                <span>💬 #CyberSpace Chat - The Future of Communication! 💬</span>
                <button onclick="this.parentElement.parentElement.remove(); window.chatroom.isOpen = false;" style="background: #FF0000; color: white; border: 1px outset #C0C0C0; width: 20px; height: 20px; cursor: pointer; font-weight: bold;">×</button>
            </div>
            
            <div style="display: flex; height: calc(100% - 30px);">
                <div style="width: 200px; background: #E0E0E0; border-right: 2px inset #C0C0C0; padding: 10px;">
                    <div style="font-weight: bold; margin-bottom: 10px;">👥 Online Users</div>
                    <div style="font-size: 11px;">
                        <div>🆕 You (Guest${Math.floor(Math.random() * 9999)})</div>
                        ${this.users.map(user => `<div style="color: ${user.color};">${user.avatar} ${user.name}</div>`).join('')}
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; background: #FFFFFF;">
                    <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 10px; border-bottom: 2px inset #C0C0C0;">
                        <div style="background: #FFFFCC; border: 1px solid #CCCC00; padding: 8px; margin: 5px 0; text-align: center; color: #666600; font-size: 12px;">
                            🌟 Welcome to the CyberSpace Chat Room! 🌟<br>
                            <small>Remember: Be excellent to each other!</small>
                        </div>
                    </div>
                    
                    <div style="padding: 5px; background: #E0E0E0; display: flex; gap: 5px; align-items: center;">
                        <input type="text" id="chat-input" placeholder="Type your message... (Enter to send)" maxlength="200" style="flex: 1; border: 2px inset #C0C0C0; padding: 4px; font-family: inherit; font-size: 12px;">
                        <button id="chat-send" style="border: 2px outset #C0C0C0; background: #C0C0C0; padding: 4px 8px; cursor: pointer; font-size: 10px;">📤 Send</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(chatroomWindow);
        this.addEventListeners();
        this.startBotActivity();
        this.addWelcomeMessages();
    }
    
    addEventListeners() {
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send');
        
        if (input && sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    }
    
    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage('You', message, '#FF0000', '🆕', true);
        input.value = '';
        
        setTimeout(() => {
            this.triggerBotResponse();
        }, 1000 + Math.random() * 3000);
    }
    
    addMessage(username, message, color, avatar, isUser = false) {
        const messagesContainer = document.getElementById('chat-messages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = isUser ? 
            'margin: 8px 0; padding: 5px; border-radius: 3px; background: #E6F3FF; border-left: 3px solid #0066CC;' :
            'margin: 8px 0; padding: 5px; border-radius: 3px; background: #F0F0F0; border-left: 3px solid #666666;';
        
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        messageDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 3px; font-size: 11px;">
                <span style="margin-right: 5px; font-size: 12px;">${avatar}</span>
                <span style="font-weight: bold; margin-right: 8px; color: ${color};">${username}</span>
                <span style="color: #666666; font-size: 9px; margin-left: auto;">${timestamp}</span>
            </div>
            <div style="font-size: 12px; line-height: 1.4; margin-left: 20px;">${message}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    triggerBotResponse() {
        const response = this.botResponses[Math.floor(Math.random() * this.botResponses.length)];
        const randomUser = this.users[Math.floor(Math.random() * this.users.length)];
        this.addMessage(randomUser.name, response, randomUser.color, randomUser.avatar);
    }
    
    startBotActivity() {
        const botActivity = () => {
            if (!this.isOpen) return;
            
            if (Math.random() < 0.3) {
                const randomUser = this.users[Math.floor(Math.random() * this.users.length)];
                const randomResponse = this.botResponses[Math.floor(Math.random() * this.botResponses.length)];
                this.addMessage(randomUser.name, randomResponse, randomUser.color, randomUser.avatar);
            }
            
            setTimeout(botActivity, 15000 + Math.random() * 30000);
        };
        
        setTimeout(botActivity, 10000);
    }
    
    addWelcomeMessages() {
        setTimeout(() => {
            this.addMessage('CyberWizard99', 'Anyone else excited about the new millennium? 🎉', '#FF00FF', '🧙‍♂️');
        }, 1000);
        
        setTimeout(() => {
            this.addMessage('DialUpQueen', 'My connection is SO slow today... 56k problems! 📞', '#00FFFF', '👸');
        }, 3000);
        
        setTimeout(() => {
            this.addMessage('HTMLHero', 'Just finished coding my first table layout! Tables are awesome! 📊', '#FFFF00', '🦸‍♂️');
        }, 5000);
    }
}

// Initialize chatroom when main site loads
window.initializeChatroom = function() {
    window.chatroom = new ChatroomSimulator();
};
