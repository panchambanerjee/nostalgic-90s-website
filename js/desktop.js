// Simple Desktop Interface for 90s Website
class DesktopInterface {
    constructor() {
        this.windows = [];
        this.nextZIndex = 1000;
        this.initializeDesktop();
    }
    
    initializeDesktop() {
        this.createDesktopIcons();
        this.addDesktopEvents();
    }
    
    createDesktopIcons() {
        const iconContainer = document.createElement('div');
        iconContainer.id = 'desktop-icons';
        iconContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 500;';
        
        const icons = [
            { name: 'Recycle Bin', icon: '🗑️', x: 20, y: 20, action: 'openRecycleBin' },
            { name: 'My Computer', icon: '💻', x: 20, y: 100, action: 'openMyComputer' },
            { name: 'Solitaire', icon: '🃏', x: 20, y: 180, action: 'openSolitaire' },
            { name: 'Paint', icon: '🎨', x: 20, y: 260, action: 'openPaint' },
            { name: 'Notepad', icon: '📝', x: 20, y: 340, action: 'openNotepad' }
        ];
        
        icons.forEach(iconData => {
            const icon = document.createElement('div');
            icon.className = 'desktop-icon';
            icon.style.cssText = 'position: absolute; left: ' + iconData.x + 'px; top: ' + iconData.y + 'px; width: 60px; height: 80px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; cursor: pointer; pointer-events: auto; user-select: none; transition: background 0.2s ease;';
            
            icon.innerHTML = '<div style="font-size: 32px; margin-bottom: 5px;">' + iconData.icon + '</div><div style="font-size: 10px; color: white; text-align: center; text-shadow: 1px 1px 1px black;">' + iconData.name + '</div>';
            
            icon.addEventListener('click', () => {
                this[iconData.action]();
            });
            
            icon.addEventListener('mouseenter', () => {
                icon.style.background = 'rgba(0, 0, 255, 0.3)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.background = 'transparent';
            });
            
            iconContainer.appendChild(icon);
        });
        
        document.body.appendChild(iconContainer);
    }
    
    addDesktopEvents() {
        // Right-click context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showContextMenu(e.clientX, e.clientY);
        });
        
        // Double-click to change wallpaper
        document.addEventListener('dblclick', (e) => {
            if (e.target === document.body || e.target.id === 'main-content') {
                this.changeWallpaper();
            }
        });
    }
    
    showContextMenu(x, y) {
        const existing = document.getElementById('context-menu');
        if (existing) existing.remove();
        
        const menu = document.createElement('div');
        menu.id = 'context-menu';
        menu.style.cssText = 'position: fixed; left: ' + x + 'px; top: ' + y + 'px; background: #C0C0C0; border: 2px outset #C0C0C0; padding: 2px; z-index: 10000; font-family: Arial, sans-serif; font-size: 11px; box-shadow: 2px 2px 5px rgba(0,0,0,0.5);';
        
        const menuItems = [
            { text: 'Refresh', icon: '🔄', action: () => location.reload() },
            { text: 'Properties', icon: '📋', action: () => this.showProperties() },
            { text: 'View Source', icon: '📄', action: () => this.viewSource() }
        ];
        
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.style.cssText = 'padding: 3px 20px; cursor: pointer; white-space: nowrap;';
            menuItem.innerHTML = item.icon + ' ' + item.text;
            
            menuItem.addEventListener('mouseenter', () => {
                menuItem.style.background = '#0000FF';
                menuItem.style.color = 'white';
            });
            
            menuItem.addEventListener('mouseleave', () => {
                menuItem.style.background = '';
                menuItem.style.color = '';
            });
            
            menuItem.addEventListener('click', () => {
                item.action();
                menu.remove();
            });
            
            menu.appendChild(menuItem);
        });
        
        document.body.appendChild(menu);
        
        setTimeout(() => {
            document.addEventListener('click', function removeMenu() {
                menu.remove();
                document.removeEventListener('click', removeMenu);
            });
        }, 100);
    }
    
    changeWallpaper() {
        const wallpapers = [
            'linear-gradient(45deg, #000080, #008080)',
            'linear-gradient(45deg, #800080, #FF00FF)',
            'linear-gradient(45deg, #008000, #00FF00)',
            'repeating-linear-gradient(45deg, #000080, #000080 20px, #008080 20px, #008080 40px)'
        ];
        
        const currentWallpaper = localStorage.getItem('wallpaper') || 0;
        const nextWallpaper = (parseInt(currentWallpaper) + 1) % wallpapers.length;
        
        document.body.style.background = wallpapers[nextWallpaper];
        localStorage.setItem('wallpaper', nextWallpaper);
        
        this.showNotification('Wallpaper changed! 🎨');
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #FFFFCC; border: 2px outset #C0C0C0; padding: 10px; z-index: 10000; font-family: Arial, sans-serif; font-size: 12px; box-shadow: 3px 3px 10px rgba(0,0,0,0.5);';
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    createWindow(options) {
        const windowDiv = document.createElement('div');
        windowDiv.className = 'desktop-window';
        windowDiv.style.cssText = 'position: fixed; left: ' + (options.x || (window.innerWidth - options.width) / 2) + 'px; top: ' + (options.y || (window.innerHeight - options.height) / 2) + 'px; width: ' + options.width + 'px; height: ' + options.height + 'px; background: #C0C0C0; border: 2px outset #C0C0C0; z-index: ' + (this.nextZIndex++) + '; box-shadow: 4px 4px 10px rgba(0,0,0,0.5); font-family: Arial, sans-serif;';
        
        const titleBar = document.createElement('div');
        titleBar.style.cssText = 'background: linear-gradient(90deg, #000080, #0000FF); color: white; padding: 2px 5px; font-size: 11px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; cursor: move;';
        
        titleBar.innerHTML = '<span>' + options.title + '</span><button onclick="this.parentElement.parentElement.remove()" style="background: #C0C0C0; border: 1px outset #C0C0C0; width: 16px; height: 14px; font-size: 9px; line-height: 1;">×</button>';
        
        const contentArea = document.createElement('div');
        contentArea.style.cssText = 'padding: 10px; height: calc(100% - 30px); overflow: auto; font-size: 11px;';
        contentArea.innerHTML = options.content;
        
        windowDiv.appendChild(titleBar);
        windowDiv.appendChild(contentArea);
        document.body.appendChild(windowDiv);
        
        return windowDiv;
    }
    
    openRecycleBin() {
        const deletedFiles = [
            '📧 old_emails_1998.pst',
            '🎵 my_mix_cd.wav',
            '📷 vacation_pics.bmp',
            '📄 school_essay.doc',
            '🎮 game_saves.dat'
        ];
        
        const fileList = deletedFiles.map(file => '<div style="padding: 2px 0; border-bottom: 1px dotted #CCC;">' + file + '</div>').join('');
        
        const content = '<h3>🗑️ Recycle Bin</h3><p>Files deleted from your computer:</p><div style="background: white; border: 1px inset #C0C0C0; padding: 10px; height: 150px; overflow-y: auto;">' + fileList + '</div><br><center><button onclick="alert(\'Files permanently deleted! (Just kidding, they were never real 😄)\')">Empty Recycle Bin</button></center>';
        
        this.createWindow({
            title: '🗑️ Recycle Bin',
            content: content,
            width: 350,
            height: 280
        });
    }
    
    openMyComputer() {
        const drives = [
            { name: 'Hard Disk (C:)', icon: '💾', size: '2.1 GB', free: '847 MB' },
            { name: 'Floppy (A:)', icon: '💾', size: '1.44 MB', free: '1.44 MB' },
            { name: 'CD-ROM (D:)', icon: '💿', size: 'No disc', free: '-' }
        ];
        
        const driveList = drives.map(drive => 
            '<div style="display: flex; align-items: center; padding: 5px; border-bottom: 1px dotted #CCC; cursor: pointer;" onmouseover="this.style.background=\'#0000FF\'; this.style.color=\'white\'" onmouseout="this.style.background=\'\'; this.style.color=\'\'"><span style="font-size: 20px; margin-right: 10px;">' + drive.icon + '</span><div><div style="font-weight: bold;">' + drive.name + '</div><div style="font-size: 10px; color: #666;">Size: ' + drive.size + ' | Free: ' + drive.free + '</div></div></div>'
        ).join('');
        
        const content = '<h3>💻 My Computer</h3><div style="background: white; border: 1px inset #C0C0C0; padding: 10px; height: 180px;">' + driveList + '</div><br><center><button onclick="alert(\'Access denied! Please insert Windows 98 CD-ROM 💿\')">Format C:</button></center>';
        
        this.createWindow({
            title: '💻 My Computer',
            content: content,
            width: 400,
            height: 300
        });
    }
    
    openSolitaire() {
        const content = '<h3>🃏 Solitaire</h3><center><div style="background: #008000; border: 2px inset #C0C0C0; width: 250px; height: 150px; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">🎴 Card Game Loading...<br><br>Just kidding! This would be<br>the classic Windows Solitaire!</div><br><button onclick="alert(\'You win! 🎉 (Score: 9999)\')">Deal New Game</button></center>';
        
        this.createWindow({
            title: '🃏 Solitaire',
            content: content,
            width: 300,
            height: 250
        });
    }
    
    openPaint() {
        const content = '<h3>🎨 Paint</h3><center><div style="background: white; border: 2px inset #C0C0C0; width: 250px; height: 150px; display: flex; align-items: center; justify-content: center; color: black; font-size: 12px;">🖌️ Canvas Area<br><br>(This would be MS Paint!)</div><br><div><button>✏️ Pencil</button> <button>🪣 Fill</button> <button>📐 Line</button> <button>⬜ Rectangle</button></div></center>';
        
        this.createWindow({
            title: '🎨 Paint',
            content: content,
            width: 300,
            height: 250
        });
    }
    
    openNotepad() {
        const content = '<h3>📝 Notepad</h3><textarea style="width: 100%; height: 150px; border: 2px inset #C0C0C0; font-family: Courier New, monospace; font-size: 11px;" placeholder="Type your 90s thoughts here...">Welcome to Notepad!\n\nThis is where you would write:\n- Your diary entries\n- HTML code\n- Love letters to your crush\n- Y2K preparation lists\n\nThe future is now! 🚀</textarea><br><center><button onclick="alert(\'File saved as: my_document.txt\')">💾 Save</button> <button onclick="alert(\'Nothing to print! 🖨️\')">🖨️ Print</button></center>';
        
        this.createWindow({
            title: '📝 Notepad - Untitled',
            content: content,
            width: 350,
            height: 280
        });
    }
    
    showProperties() {
        const content = '<h3>📋 Display Properties</h3><p><b>System:</b> Windows 98 (emulated)</p><p><b>Resolution:</b> 800 x 600</p><p><b>Colors:</b> 256 colors (8-bit)</p><p><b>Refresh Rate:</b> 60 Hz</p><p><b>Memory:</b> 64 MB RAM</p><p><b>Video Card:</b> S3 Trio64</p><br><center><button onclick="this.parentElement.parentElement.parentElement.remove()">OK</button></center>';
        
        this.createWindow({
            title: '📋 Properties',
            content: content,
            width: 300,
            height: 250
        });
    }
    
    viewSource() {
        const content = '<h3>📄 View Source</h3><div style="background: white; border: 2px inset #C0C0C0; padding: 10px; height: 150px; overflow: auto; font-family: Courier New, monospace; font-size: 10px; color: black;">&lt;html&gt;<br>&lt;head&gt;<br>&nbsp;&nbsp;&lt;title&gt;CyberKid1999\'s Page&lt;/title&gt;<br>&lt;/head&gt;<br>&lt;body bgcolor="#000080"&gt;<br>&nbsp;&nbsp;&lt;marquee&gt;Welcome to my page!&lt;/marquee&gt;<br>&nbsp;&nbsp;&lt;blink&gt;Under Construction!&lt;/blink&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;</div><br><center><button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button></center>';
        
        this.createWindow({
            title: '📄 View Source',
            content: content,
            width: 400,
            height: 280
        });
    }
}

// Initialize desktop when main site loads
window.initializeDesktop = function() {
    window.desktopInterface = new DesktopInterface();
    
    // Load saved wallpaper
    const savedWallpaper = localStorage.getItem('wallpaper');
    if (savedWallpaper) {
        const wallpapers = [
            'linear-gradient(45deg, #000080, #008080)',
            'linear-gradient(45deg, #800080, #FF00FF)',
            'linear-gradient(45deg, #008000, #00FF00)',
            'repeating-linear-gradient(45deg, #000080, #000080 20px, #008080 20px, #008080 40px)'
        ];
        document.body.style.background = wallpapers[savedWallpaper];
    }
};