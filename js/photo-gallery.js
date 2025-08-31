// Enhanced 90s Photo Gallery System
class PhotoGallerySystem {
    constructor() {
        this.currentFilter = 'all';
        this.initializePhotoGallery();
    }
    
    initializePhotoGallery() {
        console.log('Photo gallery system initialized');
    }
    
    filterPhotos(category) {
        this.currentFilter = category;
        
        const photoCells = document.querySelectorAll('.photo-cell');
        photoCells.forEach(cell => {
            const cellCategory = cell.getAttribute('data-category');
            
            if (category === 'all' || cellCategory === category) {
                cell.style.display = '';
                cell.classList.remove('filtered-out');
            } else {
                cell.style.display = 'none';
                cell.classList.add('filtered-out');
            }
        });
        
        // Update filter button appearance
        this.updateFilterButtons(category);
        this.showFilterNotification(category);
    }
    
    updateFilterButtons(activeCategory) {
        // This would update button styles if we could access them
        console.log(`Filter applied: ${activeCategory}`);
    }
    
    showFilterNotification(category) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 20px;
            background: linear-gradient(45deg, #FFB6C1, #FFC0CB);
            color: #8B008B;
            padding: 8px 12px;
            border: 2px outset #FFB6C1;
            font-family: Arial, sans-serif;
            font-size: 10px;
            font-weight: bold;
            z-index: 10003;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
            border-radius: 5px;
        `;
        
        const categoryNames = {
            all: 'All Photos',
            family: 'Family Photos',
            friends: 'Friends Photos', 
            tech: 'Technology Photos',
            events: 'Event Photos',
            vacation: 'Vacation Photos',
            school: 'School Photos'
        };
        
        notification.textContent = `📸 Showing: ${categoryNames[category] || category}`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 1000);
        }, 2000);
    }
    
    showCameraSpecs() {
        const specsWindow = document.createElement('div');
        specsWindow.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 400px;
            background: #C0C0C0;
            border: 3px outset #C0C0C0;
            z-index: 10002;
            font-family: Arial, sans-serif;
            font-size: 11px;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        specsWindow.innerHTML = `
            <div style="background: linear-gradient(90deg, #4169E1, #6495ED); color: white; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; font-weight: bold;">
                <span>📷 Digital Camera Specifications</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF0000; color: white; border: 1px outset; width: 20px; height: 18px; cursor: pointer; font-weight: bold;">×</button>
            </div>
            <div style="padding: 15px; height: calc(100% - 40px); overflow-y: auto; background: #F0F0F0;">
                <center>
                    <h3 style="color: #4169E1; margin: 10px 0;">🎯 Sony Mavica FD-7 Specifications</h3>
                </center>
                
                <table width="100%" border="2" cellpadding="8" bgcolor="#FFFFFF">
                    <tr bgcolor="#E0E0FF">
                        <td colspan="2" align="center">
                            <font face="Arial" size="2" color="#000080"><b>📊 Technical Specifications</b></font>
                        </td>
                    </tr>
                    <tr>
                        <td width="40%" bgcolor="#F0F8FF"><b>📸 Resolution:</b></td>
                        <td>640 x 480 pixels (0.3 megapixels!)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>💾 Storage:</b></td>
                        <td>3.5" Floppy Disk (1.44 MB capacity)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>🔍 Lens:</b></td>
                        <td>Carl Zeiss Vario-Sonnar 10x Optical Zoom</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>📺 LCD Screen:</b></td>
                        <td>2.5" Color LCD (cutting-edge!)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>🔋 Battery:</b></td>
                        <td>4 AA batteries (approx. 90 minutes)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>💰 Price (1999):</b></td>
                        <td>$799 USD (worth every penny!)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>📁 File Format:</b></td>
                        <td>JPEG compression</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0F8FF"><b>⚡ Flash:</b></td>
                        <td>Built-in flash with red-eye reduction</td>
                    </tr>
                </table>
                
                <center style="margin: 15px 0;">
                    <table border="2" cellpadding="8" bgcolor="#FFFFCC">
                        <tr>
                            <td align="center">
                                <font size="1" color="#8B4513">
                                    <b>🌟 WHY DIGITAL CAMERAS ARE THE FUTURE! 🌟</b><br>
                                    <div style="text-align: left; margin-top: 5px; line-height: 1.3;">
                                        ✓ No more expensive film developing!<br>
                                        ✓ Instant preview on LCD screen!<br>
                                        ✓ Easy file sharing via floppy disk!<br>
                                        ✓ JPEG compression saves space!<br>
                                        ✓ Professional quality at home!<br>
                                        ✓ Perfect for the new millennium!
                                    </div>
                                </font>
                            </td>
                        </tr>
                    </table>
                </center>
                
                <center>
                    <div style="font-size: 9px; color: #666; font-style: italic;">
                        "The Sony Mavica FD-7 represents the pinnacle of consumer photography technology in 1999!"
                    </div>
                </center>
            </div>
        `;
        
        document.body.appendChild(specsWindow);
        
        // Auto-close after 15 seconds
        setTimeout(() => {
            if (specsWindow.parentElement) {
                specsWindow.remove();
            }
        }, 15000);
    }
    
    showPhotoStats() {
        const statsWindow = document.createElement('div');
        statsWindow.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 450px;
            height: 350px;
            background: #C0C0C0;
            border: 3px outset #C0C0C0;
            z-index: 10002;
            font-family: Arial, sans-serif;
            font-size: 11px;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        const totalPhotos = 6;
        const avgFileSize = 45;
        const totalStorage = totalPhotos * avgFileSize;
        
        statsWindow.innerHTML = `
            <div style="background: linear-gradient(90deg, #32CD32, #90EE90); color: #006400; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; font-weight: bold;">
                <span>📊 Photo Gallery Statistics</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF0000; color: white; border: 1px outset; width: 20px; height: 18px; cursor: pointer; font-weight: bold;">×</button>
            </div>
            <div style="padding: 15px; height: calc(100% - 40px); overflow-y: auto; background: #F0F0F0;">
                <center>
                    <h3 style="color: #32CD32; margin: 10px 0;">📈 Gallery Analytics Dashboard</h3>
                </center>
                
                <table width="100%" border="2" cellpadding="8" bgcolor="#FFFFFF">
                    <tr bgcolor="#E0FFE0">
                        <td colspan="2" align="center">
                            <font face="Arial" size="2" color="#006400"><b>📊 Storage Statistics</b></font>
                        </td>
                    </tr>
                    <tr>
                        <td width="50%" bgcolor="#F0FFF0"><b>📸 Total Photos:</b></td>
                        <td>${totalPhotos} images</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0FFF0"><b>💾 Storage Used:</b></td>
                        <td>${totalStorage} KB (${(totalStorage/1440*100).toFixed(1)}% of floppy)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0FFF0"><b>📏 Average File Size:</b></td>
                        <td>${avgFileSize} KB per photo</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0FFF0"><b>🎯 Largest Photo:</b></td>
                        <td>img3.jpeg (52 KB)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#F0FFF0"><b>🎯 Smallest Photo:</b></td>
                        <td>img6.jpeg (38 KB)</td>
                    </tr>
                </table>
                
                <table width="100%" border="2" cellpadding="8" bgcolor="#FFFFFF" style="margin-top: 10px;">
                    <tr bgcolor="#FFE0E0">
                        <td colspan="2" align="center">
                            <font face="Arial" size="2" color="#8B0000"><b>📂 Category Breakdown</b></font>
                        </td>
                    </tr>
                    <tr>
                        <td width="50%" bgcolor="#FFF0F0"><b>👨‍👩‍👧‍👦 Family:</b></td>
                        <td>1 photo (16.7%)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#FFF0F0"><b>👫 Friends:</b></td>
                        <td>1 photo (16.7%)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#FFF0F0"><b>💻 Technology:</b></td>
                        <td>2 photos (33.3%)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#FFF0F0"><b>🎉 Events:</b></td>
                        <td>1 photo (16.7%)</td>
                    </tr>
                    <tr>
                        <td bgcolor="#FFF0F0"><b>🏖️ Vacation:</b></td>
                        <td>1 photo (16.7%)</td>
                    </tr>
                </table>
                
                <center style="margin: 15px 0;">
                    <table border="2" cellpadding="6" bgcolor="#E0E0FF">
                        <tr>
                            <td align="center">
                                <font size="1" color="#000080">
                                    <b>🎯 PHOTOGRAPHY GOAL FOR 2000! 🎯</b><br>
                                    <div style="margin-top: 5px; color: #4169E1;">
                                        Reach 50 digital photos by Y2K!<br>
                                        <span style="color: #FF0000;">Progress: ${totalPhotos}/50 (${(totalPhotos/50*100).toFixed(0)}%)</span>
                                    </div>
                                </font>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        `;
        
        document.body.appendChild(statsWindow);
        
        // Auto-close after 12 seconds
        setTimeout(() => {
            if (statsWindow.parentElement) {
                statsWindow.remove();
            }
        }, 12000);
    }
}

// Initialize photo gallery system
window.initializePhotoGallery = function() {
    if (!window.photoGallery) {
        window.photoGallery = new PhotoGallerySystem();
        console.log('Photo gallery system initialized');
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initializePhotoGallery);
} else {
    window.initializePhotoGallery();
}