// Extended Navigation Content - Photos, Links, Chat
class ExtendedNavContent {
    static getPhotosContent() {
        const photos = [
            { 
                name: "Christmas Morning 1998", 
                file: "img1.jpeg", 
                width: 200, 
                height: 150,
                date: "Dec 1998",
                camera: "Disposable Camera",
                description: "Christmas morning chaos! Got the N64 I wanted so badly. The wrapping paper explosion was epic!",
                category: "family",
                retroCaption: `<div class="retro-cap">
                    <a href="#">Christmas Morning 1998</a><br>
                    <small>📅 Dec 1998 • 📷 Disposable Camera • 🖼️ 2000×1590 px</small>
                    <marquee behavior="alternate" scrollamount="3">
                        <font color="#ff66ff"><blink>*~* 🎄 OMG BEST XMAS EVA!! Got da N64!!! Wrappin' paper EXPLOSION lol 🤣 
                        Disposable cam flash makin' it look all shiny & kewl *~*</blink></font>
                    </marquee>
                </div>`
            },
            { 
                name: "School Picture Day 1999", 
                file: "img2.jpeg", 
                width: 220, 
                height: 165,
                date: "Sep 1999",
                camera: "School Photographer",
                description: "Yearbook photo day! Frosted tips and that classic rainbow laser background. So 90s it hurts!",
                category: "school",
                retroCaption: `<div class="retro-cap">
                    <a href="#">School Picture Day 1999</a><br>
                    <small>📅 Sep 1999 • 📷 School Photographer • 🖼️ 2204×1652 px</small>
                    <marquee behavior="scroll" direction="left" scrollamount="4">
                        <font color="#00ffff"><blink><3 📸 LOL frosted tips + rainbow laser bg = SOOO 1337 😎 
                        Forced smile 4 da yearbook lmao. Dis pic is totally PHAT <3</blink></font>
                    </marquee>
                </div>`
            },
            { 
                name: "My 90s Bedroom", 
                file: "img3.jpeg", 
                width: 240, 
                height: 180,
                date: "Oct 1999",
                camera: "Disposable Camera",
                description: "My totally rad bedroom! BSB posters, messy desk, and that chunky CRT monitor. Peak 90s teen vibes!",
                category: "personal",
                retroCaption: `<div class="retro-cap">
                    <a href="#">My 90s Bedroom</a><br>
                    <small>📅 Oct 1999 • 📷 Disposable Camera • 🖼️ 2400×1800 px</small>
                    <marquee behavior="alternate" scrollamount="2">
                        <font color="#66ff66"><blink>¤º° 💻 BSB posters + messy desk + CRT MONSTA = teen HQ!! 
                        Shot w/ da trusty disposable cam flash = TOTAL TIME CAPSULE °º¤</blink></font>
                    </marquee>
                </div>`
            },
            { 
                name: "Disney World Trip '99", 
                file: "img4.jpeg", 
                width: 190, 
                height: 140,
                date: "Jul 1999",
                camera: "Disposable Camera",
                description: "Family vacation to Disney World! Sunburnt but still smiling in front of Cinderella Castle. Magic Kingdom memories!",
                category: "vacation",
                retroCaption: `<div class="retro-cap">
                    <a href="#">Disney World Trip '99</a><br>
                    <small>📅 Jul 1999 • 📷 Disposable Camera • 🖼️ 1900×1440 px</small>
                    <marquee behavior="scroll" direction="right" scrollamount="3">
                        <font color="#ffcc00"><blink>*^_^* 🏰 Fam squad SUNBURNT but still cheesin' 4 da castle ✨ 
                        Tourist drip lvl 9000!! Blurry disposable cam = authentic AF *^_^*</blink></font>
                    </marquee>
                </div>`
            },
            { 
                name: "Cat + Computer = True Love", 
                file: "img5.jpeg", 
                width: 210, 
                height: 160,
                date: "Nov 1999",
                camera: "Disposable Camera",
                description: "My cat decided to help me with my homework by sitting on the keyboard. Classic cat move!",
                category: "pets",
                retroCaption: `<div class="retro-cap">
                    <a href="#">Cat + Computer = True Love</a><br>
                    <small>📅 Nov 1999 • 📷 Disposable Camera • 🖼️ 2104×1600 px</small>
                    <marquee behavior="alternate" scrollamount="5">
                        <font color="#ff6666"><blink>*** 🐱 LOL my kitty sittin' on da keyboard, stoppin' my chatz!! 
                        CRT glow + floppyz = da REAL 90z vibe. Such a kewl pet pic! ***</blink></font>
                    </marquee>
                </div>`
            },
            {
                name: "Chuck E. Cheese Birthday Bash",
                file: "img6.jpeg",
                width: 180,
                height: 135,
                date: "Mar 1999",
                camera: "Disposable Camera",
                description: "16th birthday party at Chuck E. Cheese! Pizza, arcade tokens, and neon 90s fashion. What more could you want?",
                category: "birthday",
                retroCaption: `<div class="retro-cap">
                    <a href="#">Chuck E. Cheese Birthday Bash</a><br>
                    <small>📅 Mar 1999 • 📷 Disposable Camera • 🖼️ 1800×1353 px</small>
                    <marquee behavior="scroll" direction="left" scrollamount="3">
                        <font color="#99ccff"><blink>¤¸¸.•*´¯ 🎉 16th b-day @ Chuck E's!! Pizza + arcade tokenz = LIFE!! 
                        Blurry cam + neon 90z fits = SO RAD ¯´*•.¸¸¤</blink></font>
                    </marquee>
                </div>`
            }
        ];
        
        let photosHTML = `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">📸 Tom's Digital Photo Gallery 📸</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Check out my awesome digital pics! Click to enlarge!</font></p>
                
                <!-- Digital Camera Status -->
                <table border="2" cellpadding="8" bgcolor="#E0E0FF" style="margin: 10px auto;">
                    <tr>
                        <td align="center">
                            <font face="Arial" size="2" color="#000080">
                                <b>📷 DIGITAL CAMERA STATUS 📷</b><br>
                                <div style="font-size: 10px; line-height: 1.3; margin-top: 5px;">
                                    Camera: Sony Mavica FD-7 (0.3 MP!)<br>
                                    Storage: 3.5" Floppy Disk (1.44 MB)<br>
                                    Photos stored: ${photos.length}/28 max<br>
                                    <span style="color: #FF0000;">🔴 Disk almost full!</span>
                                </div>
                            </font>
                        </td>
                    </tr>
                </table>
                
                <!-- Photo Categories Filter -->
                <table border="2" cellpadding="5" bgcolor="#FFFFCC" style="margin: 10px auto;">
                    <tr>
                        <td align="center">
                            <font face="Arial" size="1" color="#800000">
                                <b>📼 PHOTO CATEGORIES 📼</b><br>
                                <div style="margin: 5px 0;">
                                    <button onclick="window.photoGallery.filterPhotos('all')" style="
                                        background: linear-gradient(45deg, #FFB6C1, #FFC0CB);
                                        border: 1px outset #FFB6C1;
                                        padding: 2px 6px;
                                        font-size: 8px;
                                        cursor: pointer;
                                        margin: 1px;
                                    ">All (${photos.length})</button>
                                    <button onclick="window.photoGallery.filterPhotos('school')" style="
                                        background: linear-gradient(45deg, #98FB98, #90EE90);
                                        border: 1px outset #98FB98;
                                        padding: 2px 6px;
                                        font-size: 8px;
                                        cursor: pointer;
                                        margin: 1px;
                                    ">School (${photos.filter(p => p.category === 'school').length})</button>
                                    <button onclick="window.photoGallery.filterPhotos('personal')" style="
                                        background: linear-gradient(45deg, #87CEEB, #87CEFA);
                                        border: 1px outset #87CEEB;
                                        padding: 2px 6px;
                                        font-size: 8px;
                                        cursor: pointer;
                                        margin: 1px;
                                    ">Personal (${photos.filter(p => p.category === 'personal').length})</button>
                                    <button onclick="window.photoGallery.filterPhotos('vacation')" style="
                                        background: linear-gradient(45deg, #DDA0DD, #DA70D6);
                                        border: 1px outset #DDA0DD;
                                        padding: 2px 6px;
                                        font-size: 8px;
                                        cursor: pointer;
                                        margin: 1px;
                                    ">Vacation (${photos.filter(p => p.category === 'vacation').length})</button>
                                    <button onclick="window.photoGallery.filterPhotos('pets')" style="
                                        background: linear-gradient(45deg, #F0E68C, #BDB76B);
                                        border: 1px outset #F0E68C;
                                        padding: 2px 6px;
                                        font-size: 8px;
                                        cursor: pointer;
                                        margin: 1px;
                                    ">Pets (${photos.filter(p => p.category === 'pets').length})</button>
                                    <button onclick="window.photoGallery.filterPhotos('birthday')" style="
                                        background: linear-gradient(45deg, #FFB6C1, #FFC0CB);
                                        border: 1px outset #FFB6C1;
                                        padding: 2px 6px;
                                        font-size: 8px;
                                        cursor: pointer;
                                        margin: 1px;
                                    ">Birthday (${photos.filter(p => p.category === 'birthday').length})</button>
                                </div>
                            </font>
                        </td>
                    </tr>
                </table>
            </center>
            
            <div id="photo-gallery-container">
                <table width="100%" border="2" cellpadding="15" bgcolor="#FFFFCC" id="photos-table">
        `;
        
        photos.forEach((photo, index) => {
            if (index % 2 === 0) photosHTML += '<tr>';
            
            photosHTML += `
                <td align="left" bgcolor="#FFFFFF" width="50%" class="photo-cell" data-category="${photo.category}" style="padding: 15px; vertical-align: top;">
                    <div class="photo-container" onclick="ExtendedNavContent.showEnhancedPhoto('${photo.file}', '${photo.name}', '${photo.description}', '${photo.camera}', '${photo.date}')" style="cursor: pointer;">
                        <div class="film-frame" style="
                            background: linear-gradient(45deg, #2F4F4F, #696969);
                            padding: 8px;
                            border-radius: 5px;
                            box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
                            position: relative;
                            display: inline-block;
                        ">
                            <!-- Film strip holes -->
                            <div style="
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                right: 3px;
                                height: 4px;
                                background: repeating-linear-gradient(90deg, #000 0px, #000 3px, transparent 3px, transparent 6px);
                            "></div>
                            <div style="
                                position: absolute;
                                bottom: 3px;
                                left: 3px;
                                right: 3px;
                                height: 4px;
                                background: repeating-linear-gradient(90deg, #000 0px, #000 3px, transparent 3px, transparent 6px);
                            "></div>
                            
                            <div class="fake-photo" id="photo-${index}" style="
                                width: ${photo.width}px;
                                height: ${photo.height}px;
                                background: linear-gradient(135deg, #E0E0E0, #F5F5F5, #E0E0E0);
                                border: 2px inset #C0C0C0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 12px;
                                color: #666;
                                position: relative;
                                overflow: hidden;
                                transition: transform 0.3s ease;
                            ">
                                <div class="loading-animation" style="
                                    position: absolute;
                                    top: 0;
                                    left: -100%;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                                    animation: filmRollLoad 2s ease-in-out infinite;
                                "></div>
                                <div class="photo-placeholder">
                                    📷 Loading...
                                </div>
                            </div>
                        </div>
                        
                        <!-- Retro Caption -->
                        ${photo.retroCaption}
                    </div>
                </td>
            `;
            
            // Close row after every 2 photos or at the end
            if (index % 2 === 1 || index === photos.length - 1) {
                // Don't add empty cell if we have an odd number and it's the last photo
                photosHTML += '</tr>';
            }
        });
        
        photosHTML += `
                </table>
            </div>
            
            <center>
                <div style="margin: 20px 0;">
                    <table border="2" cellpadding="8" bgcolor="#FFE4E1" style="margin: 10px auto;">
                        <tr>
                            <td align="center">
                                <font face="Arial" size="1" color="#8B0000">
                                    <b>🎥 DIGITAL PHOTO TIPS 🎥</b><br>
                                    <div style="text-align: left; font-size: 9px; line-height: 1.3; margin-top: 5px;">
                                        • Save photos as JPEG for smaller file sizes!<br>
                                        • 0.3 megapixels = cutting-edge technology!<br>
                                        • Each photo takes 30-50KB on floppy disk<br>
                                        • Digital cameras are the future of photography!<br>
                                        • No more expensive film developing!
                                    </div>
                                </font>
                            </td>
                        </tr>
                    </table>
                    
                    <button onclick="window.photoGallery.showCameraSpecs()" style="
                        background: linear-gradient(45deg, #4169E1, #6495ED);
                        border: 2px outset #4169E1;
                        color: white;
                        font-weight: bold;
                        padding: 8px 16px;
                        cursor: pointer;
                        font-size: 11px;
                        margin: 5px;
                    ">📷 View Camera Specs</button>
                    
                    <button onclick="window.photoGallery.showPhotoStats()" style="
                        background: linear-gradient(45deg, #32CD32, #90EE90);
                        border: 2px outset #32CD32;
                        color: #006400;
                        font-weight: bold;
                        padding: 8px 16px;
                        cursor: pointer;
                        font-size: 11px;
                        margin: 5px;
                    ">📊 Photo Statistics</button>
                </div>
            </center>
        `;
        
        // Add CSS for film roll animation and 90s photo effects
        if (!document.querySelector('#photo-gallery-styles')) {
            const style = document.createElement('style');
            style.id = 'photo-gallery-styles';
            style.textContent = `
                @keyframes filmRollLoad {
                    0% { left: -100%; }
                    50% { left: 100%; }
                    100% { left: 100%; }
                }
                
                @keyframes digitalPhotoLoad {
                    0% { 
                        opacity: 0; 
                        filter: sepia(1) contrast(2) brightness(0.5) saturate(0); 
                        transform: scale(0.8);
                    }
                    50% { 
                        opacity: 0.7; 
                        filter: sepia(0.8) contrast(1.8) brightness(0.8) saturate(0.5); 
                        transform: scale(0.95);
                    }
                    100% { 
                        opacity: 1; 
                        filter: sepia(0.15) contrast(1.1) brightness(1.05) saturate(0.9); 
                        transform: scale(1);
                    }
                }
                
                .photo-container:hover .fake-photo {
                    transform: scale(1.05);
                    box-shadow: 0 0 15px rgba(0,0,255,0.5);
                }
                
                .film-frame:hover {
                    transform: translateY(-3px);
                }
                
                @keyframes digitalGlitch {
                    0%, 100% { filter: none; }
                    25% { filter: hue-rotate(90deg) saturate(1.5); }
                    50% { filter: invert(0.1) contrast(1.2); }
                    75% { filter: hue-rotate(-90deg) brightness(1.1); }
                }
                
                @keyframes vintagePhotoEffect {
                    0% { filter: sepia(0.2) contrast(1.1) brightness(1.05); }
                    25% { filter: sepia(0.15) contrast(1.05) brightness(1.02) saturate(0.95); }
                    50% { filter: sepia(0.25) contrast(1.15) brightness(1.08) saturate(0.85); }
                    75% { filter: sepia(0.1) contrast(1.08) brightness(1.03) saturate(1.05); }
                    100% { filter: sepia(0.2) contrast(1.1) brightness(1.05); }
                }
                
                .photo-cell.filtered-out {
                    display: none;
                }
                
                #photos-table {
                    table-layout: fixed;
                }
                
                .photo-cell {
                    width: 50% !important;
                    text-align: left !important;
                    vertical-align: top !important;
                }
                
                .film-frame {
                    margin: 0 auto 10px auto;
                    display: block;
                }
                
                .photo-cell img {
                    animation: vintagePhotoEffect 6s ease-in-out infinite;
                }
                
                /* Add scan lines effect for authentic CRT monitor look */
                .fake-photo img:hover {
                    position: relative;
                }
                
                .fake-photo img:hover::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(0,0,0,0.05) 2px,
                        rgba(0,0,0,0.05) 4px
                    );
                    pointer-events: none;
                }
                
                /* Retro Caption Styles */
                blink{animation:blinker 0.9s steps(1,end) infinite}
                @keyframes blinker{50%{opacity:0}}
                .retro-cap{background:#000;color:#0f0;font-family:"Comic Sans MS","Courier New",cursive;border:3px ridge #ff0;padding:6px;margin:6px 0}
                .retro-cap small{color:#9f9}
                .retro-cap a{color:#00f;text-decoration:underline}
            `;
            document.head.appendChild(style);
        }
        
        // Simulate digital photo loading with realistic delays
        setTimeout(() => {
            photos.forEach((photo, index) => {
                setTimeout(() => {
                    const photoElement = document.getElementById(`photo-${index}`);
                    if (photoElement) {
                        const placeholder = photoElement.querySelector('.photo-placeholder');
                        if (placeholder) {
                            // Replace placeholder with actual image
                            placeholder.innerHTML = `
                                <img src="images/${photo.file}" 
                                     alt="${photo.name}" 
                                     style="
                                        width: ${photo.width}px;
                                        height: ${photo.height}px;
                                        border-radius: 3px;
                                        box-shadow: inset 1px 1px 3px rgba(0,0,0,0.2);
                                        filter: sepia(0.2) contrast(1.1) brightness(1.05);
                                        transition: all 0.3s ease;
                                     "
                                     onload="this.style.filter = 'sepia(0.1) contrast(1.05) brightness(1.02)'; this.style.transform = 'scale(1)';" 
                                     onerror="this.parentElement.innerHTML = '<div style=\"color: #FF0000; font-size: 10px; text-align: center;\">📷<br>Image Loading...<br>${photo.file}</div>';" 
                                     onmouseover="this.style.filter = 'sepia(0) contrast(1.2) brightness(1.1) saturate(1.3)';" 
                                     onmouseout="this.style.filter = 'sepia(0.1) contrast(1.05) brightness(1.02)';" />
                            `;
                        }
                    }
                }, index * 400 + Math.random() * 200); // Stagger the loading with some randomness
            });
        }, 1500);
        
        return photosHTML;
    }

    // Enhanced photo viewer
    static showEnhancedPhoto(filename, caption, description, camera, date) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 600px;
            height: 80%;
            background: #C0C0C0;
            border: 3px outset #C0C0C0;
            z-index: 10001;
            font-family: 'Comic Neue', 'Comic Sans MS', cursive;
            overflow-y: auto;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        `;
        
        popup.innerHTML = `
            <div style="background: linear-gradient(90deg, #2F4F4F, #696969); color: white; padding: 8px 15px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold;">
                <span>📸 Digital Photo Viewer v2.0</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF0000; color: white; border: 1px outset #C0C0C0; width: 20px; height: 20px; cursor: pointer; font-weight: bold;">×</button>
            </div>
            
            <div style="padding: 20px; background: #F0F0F0;">
                <!-- Photo Display Area -->
                <center>
                    <div style="
                        background: linear-gradient(45deg, #2F4F4F, #696969);
                        padding: 15px;
                        border-radius: 8px;
                        box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
                        display: inline-block;
                        margin-bottom: 20px;
                    ">
                        <!-- Film strip holes -->
                        <div style="
                            height: 6px;
                            background: repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 8px);
                            margin-bottom: 8px;
                        "></div>
                        
                        <div id="photo-viewer-image" style="
                            width: 400px;
                            height: 300px;
                            background: #000000;
                            border: 3px inset #C0C0C0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #FFFFFF;
                            font-weight: bold;
                            font-size: 16px;
                            box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);
                            overflow: hidden;
                            position: relative;
                        ">
                            <img src="images/${filename}" 
                                 alt="${caption}" 
                                 style="
                                    max-width: 390px;
                                    max-height: 290px;
                                    width: auto;
                                    height: auto;
                                    filter: sepia(0.15) contrast(1.1) brightness(1.05) saturate(0.9);
                                    transition: filter 0.3s ease;
                                 "
                                 onload="this.style.animation = 'digitalPhotoLoad 1s ease-out';" 
                                 onerror="this.parentElement.innerHTML = '<div style=\"color: #FF0000; text-align: center;\">📸<br><br>Loading ${filename}...<br><br><div style=\"font-size: 12px; color: #FFFF00;\">High-Quality Digital Image</div></div>';" 
                                 onmouseover="this.style.filter = 'sepia(0) contrast(1.2) brightness(1.1) saturate(1.1)';" 
                                 onmouseout="this.style.filter = 'sepia(0.15) contrast(1.1) brightness(1.05) saturate(0.9)';" />
                        </div>
                        
                        <!-- Film strip holes -->
                        <div style="
                            height: 6px;
                            background: repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 8px);
                            margin-top: 8px;
                        "></div>
                    </div>
                </center>
                
                <!-- Photo Information -->
                <table width="100%" border="2" cellpadding="10" bgcolor="#FFFFFF">
                    <tr bgcolor="#4169E1">
                        <td colspan="2" align="center">
                            <font color="white" face="Arial" size="3"><b>📋 Photo Information</b></font>
                        </td>
                    </tr>
                    <tr>
                        <td width="30%" bgcolor="#E0E0FF"><b>📸 Filename:</b></td>
                        <td bgcolor="#F0F8FF">${filename}</td>
                    </tr>
                    <tr>
                        <td bgcolor="#E0E0FF"><b>📝 Caption:</b></td>
                        <td bgcolor="#F0F8FF">${caption}</td>
                    </tr>
                    <tr>
                        <td bgcolor="#E0E0FF"><b>📖 Description:</b></td>
                        <td bgcolor="#F0F8FF">${description}</td>
                    </tr>
                    <tr>
                        <td bgcolor="#E0E0FF"><b>📷 Camera:</b></td>
                        <td bgcolor="#F0F8FF">${camera}</td>
                    </tr>
                    <tr>
                        <td bgcolor="#E0E0FF"><b>📅 Date Taken:</b></td>
                        <td bgcolor="#F0F8FF">${date}</td>
                    </tr>
                    <tr>
                        <td bgcolor="#E0E0FF"><b>💾 File Size:</b></td>
                        <td bgcolor="#F0F8FF">${Math.floor(Math.random() * 30) + 25} KB</td>
                    </tr>
                    <tr>
                        <td bgcolor="#E0E0FF"><b>🎨 Color Depth:</b></td>
                        <td bgcolor="#F0F8FF">24-bit True Color</td>
                    </tr>
                </table>
                
                <!-- Action Buttons -->
                <center style="margin-top: 20px;">
                    <button onclick="alert('Feature not available in demo!')" style="
                        background: linear-gradient(45deg, #32CD32, #90EE90);
                        border: 2px outset #32CD32;
                        color: #006400;
                        font-weight: bold;
                        padding: 8px 16px;
                        cursor: pointer;
                        margin: 5px;
                    ">💾 Save to Disk</button>
                    
                    <button onclick="alert('Email feature coming soon!')" style="
                        background: linear-gradient(45deg, #4169E1, #6495ED);
                        border: 2px outset #4169E1;
                        color: white;
                        font-weight: bold;
                        padding: 8px 16px;
                        cursor: pointer;
                        margin: 5px;
                    ">📧 Email Photo</button>
                    
                    <button onclick="alert('Print feature requires additional software!')" style="
                        background: linear-gradient(45deg, #FF8C00, #FFD700);
                        border: 2px outset #FF8C00;
                        color: #8B4513;
                        font-weight: bold;
                        padding: 8px 16px;
                        cursor: pointer;
                        margin: 5px;
                    ">🖨️ Print Photo</button>
                </center>
                
                <center style="margin-top: 15px;">
                    <div style="font-size: 10px; color: #666;">
                        <em>This is what a photo would look like in 1999 with cutting-edge 0.3 megapixel technology!</em>
                    </div>
                </center>
            </div>
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
                        
                        <h2><font color="#006400">👥 My Friends' Pages 👥</font></h2>
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
    

    

    
    static getGuestbookContent() {
        return `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">📖 Tom's Cyber Guestbook 📖</font></h1>
                <div class="rainbow-divider"></div>
                <p><font color="#0000FF" size="3">Sign my guestbook and join the cyber community!</font></p>
                
                <!-- Friendship Request System -->
                <table border="2" cellpadding="8" bgcolor="#FFCCFF" style="margin: 10px auto;">
                    <tr>
                        <td align="center">
                            <font face="Arial" size="2" color="#800080">
                                <b>💖 CYBER FRIENDSHIP ZONE 💖</b><br>
                                <div style="margin: 10px 0;">
                                    <button onclick="window.guestbookSystem.sendFriendRequest()" style="
                                        background: linear-gradient(45deg, #FF69B4, #FFB6C1);
                                        border: 2px outset #FF69B4;
                                        color: #000080;
                                        font-weight: bold;
                                        padding: 5px 10px;
                                        cursor: pointer;
                                        font-size: 10px;
                                    ">🤝 Send Friend Request</button>
                                    <button onclick="window.guestbookSystem.showFriendsList()" style="
                                        background: linear-gradient(45deg, #98FB98, #90EE90);
                                        border: 2px outset #98FB98;
                                        color: #006400;
                                        font-weight: bold;
                                        padding: 5px 10px;
                                        cursor: pointer;
                                        font-size: 10px;
                                        margin-left: 5px;
                                    ">👥 My Cyber Friends (${Math.floor(Math.random() * 50) + 10})</button>
                                </div>
                                <div style="font-size: 8px; color: #666;">
                                    Join Tom's exclusive friend network!<br>
                                    Currently ${Math.floor(Math.random() * 200) + 50} members worldwide!
                                </div>
                            </font>
                        </td>
                    </tr>
                </table>
                
                <!-- Enhanced Guestbook Stats -->
                <table border="2" cellpadding="5" bgcolor="#E0FFE0" style="margin: 10px auto;">
                    <tr>
                        <td align="center">
                            <font face="Arial" size="1" color="#008000">
                                <b>📊 GUESTBOOK STATS 📊</b><br>
                                <div style="font-size: 9px; line-height: 1.3;">
                                    Total Entries: ${Math.floor(Math.random() * 500) + 200}<br>
                                    This Month: ${Math.floor(Math.random() * 50) + 20}<br>
                                    Today: ${Math.floor(Math.random() * 10) + 2}<br>
                                    <span style="color: #FF0000;">🔥 Trending Page!</span>
                                </div>
                            </font>
                        </td>
                    </tr>
                </table>
            </center>
            
            <div id="guestbook-container">
                <center>
                    <div class="construction-worker"></div>
                    <br>
                    <font color="#FF0000">Loading enhanced guestbook system...</font>
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

        getGuestbookContent: ExtendedNavContent.getGuestbookContent,
        getChatContent: ExtendedNavContent.getChatContent
    });
}