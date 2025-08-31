// 90s Navigation System
class NinetyNineNavigation {
    constructor() {
        this.currentPage = 'home';
        this.initializeNavigation();
    }
    
    initializeNavigation() {
        // Handle if DOM is already loaded or wait for it
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.attachNavigationEvents();
            });
        } else {
            this.attachNavigationEvents();
        }
    }
    
    attachNavigationEvents() {
        console.log('Attaching navigation events...');
        
        // Wait for DOM to be ready and try multiple times if needed
        const attachEvents = () => {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            console.log('Found navigation links:', navLinks.length);
            
            if (navLinks.length === 0) {
                console.log('No navigation links found, retrying in 500ms...');
                setTimeout(attachEvents, 500);
                return;
            }
            
            navLinks.forEach((link, index) => {
                console.log(`Link ${index}:`, link.href, link.textContent.trim());
                
                // Remove any existing event listeners first
                link.onclick = null;
                
                // Add click event listener
                link.addEventListener('click', (e) => {
                    console.log('Navigation link clicked:', link.href, link.textContent.trim());
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const page = link.getAttribute('href').substring(1);
                    console.log('Navigating to page:', page);
                    
                    this.navigateToPage(page);
                    this.addRefreshEffect(link);
                }, true); // Use capture phase
                
                // Also add direct onclick as backup
                link.onclick = (e) => {
                    console.log('Direct onclick triggered for:', link.textContent.trim());
                    e.preventDefault();
                    const page = link.getAttribute('href').substring(1);
                    this.navigateToPage(page);
                    this.addRefreshEffect(link);
                    return false;
                };
            });
            
            console.log('Navigation events attached successfully');
        };
        
        attachEvents();
    }
    
    addRefreshEffect(element) {
        element.style.transform = 'scale(1.2)';
        element.style.color = '#FF00FF';
        setTimeout(() => {
            element.style.transform = '';
            element.style.color = '';
        }, 200);
    }
    
    navigateToPage(pageName) {
        this.currentPage = pageName;
        this.updateMainContent(pageName);
        this.addPageTransitionEffect();
    }
    
    addPageTransitionEffect() {
        const mainContent = document.querySelector('#main-content td[bgcolor="#FFFFFF"] table td');
        if (mainContent) {
            mainContent.style.opacity = '0.3';
            mainContent.style.transform = 'scale(0.95)';
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'scale(1)';
            }, 300);
        }
    }
    
    updateMainContent(pageName) {
        console.log('Updating main content for page:', pageName);
        
        // Try multiple selectors to find the main content area
        let mainContentArea = document.querySelector('.main-content-area');
        
        if (!mainContentArea) {
            mainContentArea = document.querySelector('#main-content td[bgcolor="#FFFFFF"] table td');
        }
        
        if (!mainContentArea) {
            // Find the white background content area in main content
            const whiteCell = document.querySelector('#main-content td[bgcolor="#FFFFFF"]');
            if (whiteCell) {
                mainContentArea = whiteCell.querySelector('td');
            }
        }
        
        console.log('Main content area found:', !!mainContentArea);
        
        if (!mainContentArea) {
            console.error('Main content area not found! Creating fallback...');
            // Create a fallback content area
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                const fallbackDiv = document.createElement('div');
                fallbackDiv.className = 'main-content-area';
                fallbackDiv.style.cssText = 'padding: 20px; background: white; margin: 10px;';
                mainContent.appendChild(fallbackDiv);
                mainContentArea = fallbackDiv;
            }
        }
        
        if (mainContentArea) {
            const pageContent = this.getPageContent(pageName);
            console.log('Got page content, length:', pageContent.length);
            mainContentArea.innerHTML = pageContent;
            
            // Re-initialize features for specific pages
            this.initializePageFeatures(pageName);
        }
    }
    
    getPageContent(pageName) {
        switch(pageName) {
            case 'home':
                return this.getHomeContent();
            case 'about':
                return this.getAboutContent();
            case 'photos':
                return this.getPhotosContent();
            case 'links':
                return this.getLinksContent();
            default:
                return this.getHomeContent();
        }
    }
    
    getHomeContent() {
        return `
            <div class="marquee">
                <span class="rainbow-text" style="font-size: 18px;">
                    🌟 WELCOME TO THE INFORMATION SUPERHIGHWAY! 🌟 Check out my awesome homepage! 🚀 Don't forget to sign my guestbook! 📝 
                </span>
            </div>
            
            <div class="flame-divider"></div>
            
            <center>
                <h1><font color="#0000FF" face="Comic Sans MS">Welcome to CyberSpace!</font></h1>
                
                <div style="margin: 20px 0;">
                    <span class="spinning-at">@</span>
                    <div class="dancing-baby" title="Dancing Baby - The Internet's First Viral Sensation!"></div>
                    <span class="new-badge">NEW!</span>
                    <div class="construction-worker" title="Under Construction - Check Back Soon!"></div>
                    <span class="rotating-skull">☠️</span>
                    <div class="spinning-logo" title="Web Site Loading..."></div>
                    <span class="spinning-at">@</span>
                </div>
                
                <div style="margin: 15px 0;">
                    <div class="fire-gif" title="Hot New Content!"></div>
                    <span class="pulsing-heart">❤️</span>
                    <div class="bouncing-ball" title="Cool Animation!"></div>
                    <span class="spinning-earth">🌍</span>
                    <div class="email-gif" title="You've Got Mail!"></div>
                    <span class="walking-figure">🚶‍♂️</span>
                </div>
                
                <div class="warning-sign">⚠️ UNDER CONSTRUCTION! ⚠️</div>
                
                <div class="starfield" title="Journey Through Cyberspace"></div>
            </center>
            
            <div class="flame-divider"></div>
            
            <p><font face="Times New Roman" size="3">
                <b>Greetings, fellow netizen!</b> You have successfully navigated to my corner of cyberspace! 
                This page is best viewed with Netscape Navigator 4.7+ or Internet Explorer 5.0+ at 800x600 resolution.
                <br><br>
                <b>Welcome to the final year of the millennium!</b> 1999 is going to be EPIC! We've got 
                <i>The Matrix</i> blowing our minds, Pokémon taking over the world, and Napster 
                revolutionizing how we get our music! Plus, everyone's freaking out about Y2K... 
                but I'm sure it'll be fine, right? 😅
                <br><br>
                <b>Current mood:</b> 😎 Cruising the Information Superhighway on my blazing fast 56k modem!
            </font></p>
            
            <center>
                <div class="construction-worker" style="margin: 10px;"></div>
                <br><font color="#FF0000" class="blink glow-text"><b>UNDER CONSTRUCTION!</b></font>
                <br><font size="2">Last updated: December 31, 1999</font>
            </center>
            
            <hr width="50" color="#FF00FF">
            
            <center>
                <h3><font color="#FF0000">⚠️ Y2K COUNTDOWN ⚠️</font></h3>
                <div id="y2k-countdown" class="countdown-display">
                    <div id="countdown-timer">Loading...</div>
                    <div class="countdown-warning">Prepare for the millennium bug!</div>
                </div>
                
                <!-- 1999 Cultural Moment -->
                <table border="2" cellpadding="8" bgcolor="#FFCCFF" style="margin: 15px auto;">
                    <tr>
                        <td align="center">
                            <font color="#800080" size="2">
                                <b>🎆 WHAT'S HOT IN 1999! 🎆</b><br>
                                <marquee scrollamount="3" width="250">
                                    The Matrix hits theaters! • Pokémon fever! • Napster launches! • Star Wars Episode I! • Who Wants to Be a Millionaire! • The Sixth Sense!
                                </marquee>
                            </font>
                        </td>
                    </tr>
                </table>
                
                <!-- Technology Headlines -->
                <table border="2" cellpadding="5" bgcolor="#CCFFCC" style="margin: 10px auto;">
                    <tr>
                        <td align="center">
                            <font size="1" color="#006600">
                                <b>📰 TECH NEWS 📰</b><br>
                                iMac G3 available in 5 colors! • Pentium III released! • USB becoming standard! • DVD players under $300!
                            </font>
                        </td>
                    </tr>
                </table>
            </center>
            
            <center>
                <table border="2" cellpadding="5" bgcolor="#FFFF00">
                    <tr>
                        <td align="center">
                            <font size="2"><b>🔗 CyberKids WebRing 🔗</b><br>
                            [Previous] |
                            [Random] |
                            [Next]<br>
                            Member #1337 of 42,069 sites</font>
                        </td>
                    </tr>
                </table>
            </center>
        `;
    }
    
    getAboutContent() {
        const visitCount = Math.floor(Math.random() * 500) + 100;
        
        return `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">👤 About Tom from MySpace 👤</font></h1>
                <div class="rainbow-divider"></div>
                
                <!-- Personal Cyber Identity Badge -->
                <table border="3" cellpadding="8" bgcolor="#FFFF99" style="margin: 10px auto;">
                    <tr>
                        <td align="center">
                            <font face="Arial" size="2" color="#000080">
                                <b>🎆 OFFICIAL CYBERSPACE CITIZEN I.D. 🎆</b><br>
                                <i>Valid through Millennium Crisis</i><br>
                                <b>Certified Internet Veteran Since '97</b>
                            </font>
                        </td>
                    </tr>
                </table>
            </center>
            
            <table width="100%" border="2" cellpadding="15" bgcolor="#FFFFCC">
                <tr>
                    <td>
                        <center>
                            <marquee>Welcome to Tom's TOTALLY AWESOME about page!!! MySpace Generation!</marquee>
                        </center>
                        
                        <center>
                            <font color="#FF0000" class="blink"><b>*** UNDER CONSTRUCTION ***</b></font> Last updated: December 31, 1999 at 11:59 PM
                        </center>
                        
                        <div class="rainbow-divider"></div>
                        
                        <!-- Personal Statistics -->
                        <h3><font color="#FF0000">👤 Personal Stats 👤</font></h3>
                        <p><font face="Arial" size="3">
                            <b>Real Name:</b> Tom from MySpace (but my friends call me T-Dawg, TomTom, or Spaceman)<br>
                            <b>Age:</b> 16 (gonna be 17 on Y2K!!! Party at my place if computers don't explode!)<br>
                            <b>Location:</b> Somewhere in suburbia, USA 🇺🇸 (Mom says I can't be too specific)<br>
                            <b>Status:</b> Single and ready to mingle (ladies, slide into my DMs! 😎)<br>
                            <b>Online Since:</b> 1997 (I'm practically a veteran of the Information Superhighway!)<br>
                            <b>Life Motto:</b> "Life's too short for dial-up, but it's all we got until broadband arrives!"<br>
                            <b>Biggest Fear:</b> Y2K turning my computer into a $2000 paperweight
                        </font></p>
                        
                        <!-- Contact Hub -->
                        <h3><font color="#008000">📧 Digital Communication Hub 📧</font></h3>
                        <p><font face="Arial" size="3">
                            <b>Primary AOL:</b> xXTomFromMySpaceXx (online 24/7, seriously!)<br>
                            <b>Backup AOLs:</b> CyberKid1999, T_Dawg_Supreme, SpaceManTom<br>
                            <b>ICQ UIN:</b> 12345678 (add me!!! I collect ICQ buddies like Pokémon!)<br>
                            <b>Main Email:</b> tomfrommyspace@hotmail.com (🆕 HOT new Hotmail account!)<br>
                            <b>Backup Emails:</b> tommy_rules@yahoo.com, tkid@juno.com, tom1999@excite.com<br>
                            <b>School Email:</b> t.anderson@westfield.edu (shh, don't tell the computer lab monitor!)<br>
                            <b>Pager:</b> 555-TOM-PAGE (text "911" if it's urgent, "143" if you ❤️ me)<br>
                            <b>Website:</b> www.geocities.com/tomfrommyspace1999 (bookmark it!)<br>
                            <b>AIM Handle:</b> TomSpaceRunner (when AOL is down)
                        </font></p>
                        
                        <hr color="#FF00FF">
                        
                        <h3><font color="#006400">🎵 My Favorite Bands & Artists 🎵</font></h3>
                        <p><font size="2"><i>Updated for the new millennium!</i></font></p>
                        <ul>
                            <li><b>Backstreet Boys</b> (Nick Carter is SO dreamy!!! 😍)</li>
                            <li><b>*NSYNC</b> (sorry BSB fans, JT is the future!)</li>
                            <li><b>Britney Spears</b> (...Baby One More Time = PERFECTION)</li>
                            <li><b>Eminem</b> (The Slim Shady LP is SICK!)</li>
                            <li><b>TLC</b> (No Scrubs is my anthem)</li>
                            <li><b>Limp Bizkit</b> (Break Stuff when dialup fails)</li>
                            <li><b>Korn</b> (Freak on a Leash rocks my world)</li>
                            <li><b>Smash Mouth</b> (All Star = best song EVER)</li>
                            <li><b>Blink-182</b> (What's My Age Again? is so me!)</li>
                            <li><b>Christina Aguilera</b> (Genie in a Bottle ✨)</li>
                        </ul>
                        
                        <h3><font color="red">🎬 Movies & TV Shows I'm Obsessed With 🎬</font></h3>
                        <ul>
                            <li><b>The Matrix</b> - Whoa! Neo is THE coolest (I want those sunglasses!)</li>
                            <li><b>American Pie</b> - So funny but don't tell my parents I saw it</li>
                            <li><b>Buffy the Vampire Slayer</b> - Sarah Michelle Gellar = ❤️</li>
                            <li><b>South Park</b> - Oh my god, they killed Kenny!</li>
                            <li><b>The X-Files</b> - The truth is out there...</li>
                            <li><b>Friends</b> - Could this show BE any better?</li>
                            <li><b>Seinfeld</b> - It's a show about nothing!</li>
                            <li><b>Pokémon</b> - Gotta catch 'em all! (Pikachu FTW)</li>
                        </ul>
                        
                        <h3><font color="#006400">🎮 Gaming & Digital Life 🎮</font></h3>
                        <ul>
                            <li><b>Quake</b> - I'm ranked #1 on my block (LAN parties rule!)</li>
                            <li><b>StarCraft</b> - Zerg rush kekeke!</li>
                            <li><b>Pokémon Red/Blue</b> - I have ALL 150 (Mew via GameShark counts!)</li>
                            <li><b>Napster</b> - Free MP3s forever! (Metallica can bite me)</li>
                            <li><b>IRC</b> - Hanging in #teen-chat and #pokémon daily</li>
                            <b>AOL Instant Messenger</b> - My away messages are LEGENDARY</li>
                            <li><b>Collecting</b> - 500+ animated GIFs, 50+ fonts, 1000+ MIDIs</li>
                        </ul>
                        
                        <h3><font color="#006400">🖥️ My Computer Setup 🖥️</font></h3>
                        <ul>
                            <li>Gateway 2000 Pentium II 400MHz (it's a BEAST!)</li>
                            <li>64MB of RAM (upgraded from 32MB last month)</li>
                            <li>8GB hard drive (SO much space!)</li>
                            <li>56k US Robotics modem (blazing fast!)</li>
                            <li>17" CRT monitor (800x600 resolution FTW!)</li>
                            <li>SoundBlaster 16 sound card</li>
                            <li>3dfx Voodoo graphics card (Quake looks AMAZING!)</li>
                        </ul>
                        
                        <h3><font color="purple">💭 Random Stuff About Me 💭</font></h3>
                        <ul>
                            <li>I'm learning HTML from "HTML for Dummies"</li>
                            <li>My homepage has been featured on Yahoo's "Cool Site of the Day"</li>
                            <li>I have over 500 animated GIFs in my collection</li>
                            <li>I can type 45 WPM (that's pretty fast!)</li>
                            <li>I've been online since 1997 (I'm practically a veteran!)</li>
                            <li>My favorite emoticons are :P and \\m/</li>
                            <li>I run a BBS on weekends (call 555-CYBER for access!)</li>
                            <li>I have 23 different email addresses across 8 providers</li>
                        </ul>
                        
                        <center>
                            <br>
                            <font color="red" class="blink"><b>⚠️ Y2K WARNING ⚠️</b></font><br>
                            <font size="2">This page may not display correctly after January 1, 2000 due to the Millennium Bug!</font>
                        </center>
                        

                        
                        <center>
                            <div class="rainbow-divider"></div>
                            <font color="#FF0000" class="blink glow-text">
                                <b>This page has been visited ${visitCount} times!</b>
                            </font>
                            <br><br>
                            <div class="fire-gif"></div>
                            <font size="4" color="#FFFF00" class="glow-text">
                                <b>Thanks for visiting my page!</b>
                            </font>
                            <div class="fire-gif"></div>
                        </center>
                    </td>
                </tr>
            </table>
            
            <center>
                <br>
                <table border="3" cellpadding="10" bgcolor="#C0C0C0">
                    <tr>
                        <td align="center">
                            <font face="Comic Sans MS" color="#000080">
                                <b>🌟 Sign my guestbook! 🌟</b><br>
                                <a href="#guestbook" onclick="window.ninetyNineNav.navigateToPage('guestbook')">
                                    Click here to leave me a message!
                                </a>
                            </font>
                        </td>
                    </tr>
                </table>
            </center>
        `;
    }
    
    getPhotosContent() {
        return ExtendedNavContent.getPhotosContent();
    }
    
    getLinksContent() {
        return ExtendedNavContent.getLinksContent();
    }

    
    initializePageFeatures(pageName) {
        // Re-initialize features when switching pages
        if (pageName === 'home') {
            // Reinit time machine and Y2K countdown
            if (window.initializeFeatures) {
                setTimeout(() => window.initializeFeatures(), 100);
            }
        } else if (pageName === 'photos') {
            // Reinit photo gallery
            if (window.initializePhotoGallery) {
                setTimeout(() => window.initializePhotoGallery(), 100);
            }
        }
    }
}

// Global navigation function that can be called directly from HTML
window.navigateToPage = function(pageName) {
    console.log('Global navigation called for:', pageName);
    
    // Always try to find the content area and update it directly
    const updateContentDirectly = () => {
        console.log('Updating content directly for:', pageName);
        
        // Try multiple selectors to find the main content area
        let mainContentArea = document.querySelector('.main-content-area');
        
        if (!mainContentArea) {
            mainContentArea = document.querySelector('#main-content td[bgcolor="#FFFFFF"] table td');
        }
        
        if (!mainContentArea) {
            // Find the white background content area in main content
            const whiteCell = document.querySelector('#main-content td[bgcolor="#FFFFFF"]');
            if (whiteCell) {
                mainContentArea = whiteCell.querySelector('td');
            }
        }
        
        console.log('Main content area found:', !!mainContentArea);
        
        if (mainContentArea) {
            // Get content directly without relying on class instance
            let pageContent;
            switch(pageName) {
                case 'about':
                    pageContent = getAboutContentDirect();
                    break;
                case 'home':
                    pageContent = getHomeContentDirect();
                    break;
                case 'photos':
                    pageContent = getPhotosContentDirect();
                    break;
                case 'links':
                    pageContent = getLinksContentDirect();
                    break;
                default:
                    pageContent = getHomeContentDirect();
            }
            
            console.log('Setting content for:', pageName, 'Length:', pageContent.length);
            mainContentArea.innerHTML = pageContent;
            
            // Add transition effect
            mainContentArea.style.opacity = '0.3';
            mainContentArea.style.transform = 'scale(0.95)';
            setTimeout(() => {
                mainContentArea.style.opacity = '1';
                mainContentArea.style.transform = 'scale(1)';
            }, 300);
            
            console.log('Content updated successfully for:', pageName);
        } else {
            console.error('Could not find main content area!');
        }
    };
    
    // Try the navigation system first
    if (window.ninetyNineNav) {
        window.ninetyNineNav.navigateToPage(pageName);
    } else {
        // Fall back to direct content update
        updateContentDirectly();
    }
};

// Direct content functions that work without class instance
function getHomeContentDirect() {
    return `
        <div class="marquee">
            <span class="rainbow-text" style="font-size: 18px;">
                🌟 WELCOME TO THE INFORMATION SUPERHIGHWAY! 🌟 Check out my awesome homepage! 🚀 Don't forget to sign my guestbook! 📝 
            </span>
        </div>
        
        <div class="flame-divider"></div>
        
        <center>
            <h1><font color="#0000FF" face="Comic Sans MS">Welcome to CyberSpace!</font></h1>
            
            <div style="margin: 20px 0;">
                <span class="spinning-at">@</span>
                <div class="dancing-baby" title="Dancing Baby - The Internet's First Viral Sensation!"></div>
                <span class="new-badge">NEW!</span>
                <div class="construction-worker" title="Under Construction - Check Back Soon!"></div>
                <span class="rotating-skull">☠️</span>
                <div class="spinning-logo" title="Web Site Loading..."></div>
                <span class="spinning-at">@</span>
            </div>
            
            <div style="margin: 15px 0;">
                <div class="fire-gif" title="Hot New Content!"></div>
                <span class="pulsing-heart">❤️</span>
                <div class="bouncing-ball" title="Cool Animation!"></div>
                <span class="spinning-earth">🌍</span>
                <div class="email-gif" title="You've Got Mail!"></div>
                <span class="walking-figure">🚶‍♂️</span>
            </div>
            
            <div class="warning-sign">⚠️ UNDER CONSTRUCTION! ⚠️</div>
            
            <div class="starfield" title="Journey Through Cyberspace"></div>
        </center>
        
        <div class="flame-divider"></div>
        
        <p><font face="Times New Roman" size="3">
            <b>Greetings, fellow netizen!</b> You have successfully navigated to my corner of cyberspace! 
            This page is best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0 at 800x600 resolution.
        </font></p>
        
        <center>
            <div class="construction-worker" style="margin: 10px;"></div>
            <br><font color="#FF0000" class="blink glow-text"><b>UNDER CONSTRUCTION!</b></font>
            <br><font size="2">Last updated: December 31, 1999</font>
        </center>
        
        <hr width="50" color="#FF00FF">
        
        <center>
            <h3><font color="#FF0000">⚠️ Y2K COUNTDOWN ⚠️</font></h3>
            <div id="y2k-countdown" class="countdown-display">
                <div id="countdown-timer">Loading...</div>
                <div class="countdown-warning">Prepare for the millennium bug!</div>
            </div>
        </center>
        
        <center>
            <table border="2" cellpadding="5" bgcolor="#FFFF00">
                <tr>
                    <td align="center">
                        <font size="2"><b>🔗 CyberKids WebRing 🔗</b><br>
                        [Previous] |
                        [Random] |
                        [Next]<br>
                        Member #1337 of 42,069 sites</font>
                    </td>
                </tr>
            </table>
        </center>
    `;
}

function getAboutContentDirect() {
    const visitCount = Math.floor(Math.random() * 500) + 100;
    
    return `
        <center>
            <h1><font color="#FF00FF" face="Comic Sans MS">👤 About CyberKid1999 👤</font></h1>
            <div class="rainbow-divider"></div>
        </center>
        
        <table width="100%" border="2" cellpadding="15" bgcolor="#FFFFCC">
            <tr>
                <td>
                    <center>
                        <marquee>Welcome to my TOTALLY AWESOME about page!!!</marquee>
                    </center>
                    
                    <center>
                        <font color="#FF0000" class="blink"><b>*** UNDER CONSTRUCTION ***</b></font> Last updated: December 31, 1999 at 11:47 PM
                    </center>
                    
                    <div class="rainbow-divider"></div>
                    
                    <p><font face="Arial" size="3">
                        <b>Real Name:</b> Tom from MySpace (but my friends call me T-Dog)<br>
                        <b>Age:</b> 16 (gonna be 17 on Y2K!!!)<br>
                        <b>Location:</b> Somewhere in suburbia, USA 🏠<br>
                        <b>AOL Screen Name:</b> xXCyberKid1999Xx<br>
                        <b>ICQ Number:</b> 12345678 (add me!!!)<br>
                        <b>Email:</b> cyberkid1999@hotmail.com (I also have tommy_rules@yahoo.com and tkid@juno.com)<br>
                        <b>Pager:</b> 555-PAGE-ME
                    </font></p>
                    
                    <hr color="#FF00FF">
                    
                    <h3><font color="lime">🎵 My Favorite Bands (in no particular order) 🎵</font></h3>
                    <ul>
                        <li>Backstreet Boys! Nick is the coolest!</li>
                        <li>*NSYNC (sorry BSB fans, they're better)</li>
                        <li>Britney Spears (...Baby One More Time is my jam!)</li>
                        <li>TLC (Don't go chasing waterfalls...)</li>
                        <li>Alanis Morissette (You Oughta Know rocks!)</li>
                        <li>Limp Bizkit (keep rollin' rollin' rollin')</li>
                        <li>Korn (freak on a leash!)</li>
                        <li>Smash Mouth (hey now, you're an all-star!)</li>
                    </ul>
                    
                    <h3><font color="red">🎮 My Hobbies & Interests 🎮</font></h3>
                    <ul>
                        <li>Surfing the Information Superhighway 24/7</li>
                        <li>Playing Quake and StarCraft (I'm ranked #1 on my block!)</li>
                        <li>Collecting Pokémon cards (got a holographic Charizard!)</li>
                        <li>Watching Buffy, South Park, and The X-Files</li>
                        <li>Programming in QBasic and learning C++</li>
                        <li>Making sick beats in ModTracker</li>
                        <li>Downloading MP3s on Napster (Metallica can't stop me!)</li>
                        <li>Chatting on IRC (#teen-chat represent!)</li>
                    </ul>
                    
                    <h3><font color="blue">💻 My Totally Sweet Computer Setup 💻</font></h3>
                    <p><font size="2" color="#0000FF"><b>State-of-the-art technology for the new millennium!</b></font></p>
                    <ul>
                        <li><b>Gateway 2000 Pentium II 450MHz</b> (overclocked from 400MHz - it's INSANE!)</li>
                        <li><b>128MB of SDRAM</b> (upgraded from 64MB - cost me 4 months allowance!)</li>
                        <li><b>20GB Quantum Fireball hard drive</b> (SO much space for MP3s and games!)</li>
                        <li><b>56k US Robotics Sportster modem</b> (usually connects at 52.8k - BLAZING!)</li>
                        <li><b>19" ViewSonic P95f+ CRT monitor</b> (.25mm dot pitch - crispy clear!)</li>
                        <li><b>SoundBlaster Live! Value</b> sound card (for that sweet 3D positional audio)</li>
                        <li><b>3dfx Voodoo3 3000 AGP</b> graphics card (16MB of VRAM - Quake III @ 60fps!)</li>
                        <li><b>52x Kenwood CD-ROM drive</b> (for installing those massive 2-CD games)</li>
                        <li><b>Iomega Zip 250MB drive</b> (for backing up important files)</li>
                        <li><b>Windows 98 Second Edition</b> (Y2K compliant AND USB support!)</li>
                    </ul>
                    
                    <h3><font color="orange">💭 Random Stuff About Me 💭</font></h3>
                    <ul>
                        <li>I'm learning HTML from "HTML 4.01 For Dummies" (chapter 12 now!)</li>
                        <li>My homepage got 1,337 hits last month (I'm internet famous!)</li>
                        <li>I have over 2,000 animated GIFs organized by category</li>
                        <li>I can type 72 WPM (beat that, Dad!)</li>
                        <li>I've been online since October 1997 (veteran status achieved!)</li>
                        <li>My favorite emoticons: :P, \m/, ^_^, >:D, and =P</li>
                        <li>I run a 6-line BBS called "TomSpace BBS" (555-CYBER-TOM)</li>
                        <li>I have 23 different email addresses across 12 providers</li>
                        <li>I know ALL the cheat codes for Age of Empires II</li>
                        <li>My longest continuous online session: 18 hours (mom grounded me)</li>
                        <li>I've downloaded over 5GB of MP3s (Napster forever!)</li>
                        <li>I moderate 3 different IRC channels</li>
                    </ul>
                    
                    <center>
                        <br>
                        <table border="3" cellpadding="8" bgcolor="#FF9999">
                            <tr>
                                <td align="center">
                                    <font color="red" class="blink"><b>⚠️ Y2K MILLENNIUM BUG WARNING ⚠️</b></font><br>
                                    <font size="2">This page may not display correctly after January 1, 2000<br>
                                    due to the Millennium Bug! I'm backing up everything to floppy disks!<br>
                                    <b>Days until Y2K:</b> <span id="y2k-countdown-inline">Loading...</span></font>
                                </td>
                            </tr>
                        </table>
                    </center>
                    

                    
                    <center>
                        <div class="rainbow-divider"></div>
                        <font color="#FF0000" class="blink glow-text">
                            <b>This page has been visited ${visitCount} times!</b>
                        </font>
                        <br><br>
                        <div class="fire-gif"></div>
                        <font size="4" color="#FFFF00" class="glow-text">
                            <b>Thanks for visiting my page!</b>
                        </font>
                        <div class="fire-gif"></div>
                    </center>
                </td>
            </tr>
        </table>
        
        <center>
            <br>
            <table border="3" cellpadding="10" bgcolor="#C0C0C0">
                <tr>
                    <td align="center">
                        <font face="Comic Sans MS" color="#000080">
                            <b>🌟 Sign my guestbook! 🌟</b><br>
                            <a href="#guestbook" onclick="window.navigateToPage('guestbook')">
                                Click here to leave me a message!
                            </a>
                        </font>
                    </td>
                </tr>
            </table>
        </center>
    `;
}

function getPhotosContentDirect() {
    // Direct photo content with your actual images and retro captions
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
        </center>
        
        <table width="100%" border="2" cellpadding="15" bgcolor="#FFFFCC" class="photo-table" style="table-layout: fixed;">
    `;
    
    photos.forEach((photo, index) => {
        if (index % 2 === 0) photosHTML += '<tr>';
        
        photosHTML += `
            <td align="left" bgcolor="#FFFFFF" width="50%" style="padding: 15px; vertical-align: top;">
                <div style="cursor: pointer;">
                    <div style="
                        background: linear-gradient(45deg, #2F4F4F, #696969);
                        padding: 8px;
                        border-radius: 5px;
                        box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
                        position: relative;
                        display: inline-block;
                        margin-bottom: 10px;
                    ">
                        <img src="images/${photo.file}" 
                             alt="${photo.name}" 
                             style="
                                width: ${photo.width}px;
                                height: ${photo.height}px;
                                border-radius: 3px;
                                filter: sepia(0.2) contrast(1.1) brightness(1.05);
                                transition: all 0.3s ease;
                             "
                             onmouseover="this.style.filter = 'sepia(0) contrast(1.2) brightness(1.1) saturate(1.3)';" 
                             onmouseout="this.style.filter = 'sepia(0.2) contrast(1.1) brightness(1.05)';" />
                    </div>
                    
                    <!-- Retro Caption -->
                    ${photo.retroCaption}
                </div>
            </td>
        `;
        
        // Close row after every 2 photos - no empty cells!
        if (index % 2 === 1) {
            // End of a complete row (2 photos)
            photosHTML += '</tr>';
        } else if (index === photos.length - 1) {
            // Last photo is odd-numbered, close row without empty cell
            photosHTML += '</tr>';
        }
    });
    
    photosHTML += `
        </table>
        
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
            </div>
        </center>
    `;
    
    // Add CSS for photo effects AND retro captions
    if (!document.querySelector('#photo-direct-styles')) {
        const style = document.createElement('style');
        style.id = 'photo-direct-styles';
        style.textContent = `
            .photo-table {
                table-layout: fixed !important;
                width: 100% !important;
            }
            .photo-table td {
                width: 50% !important;
                vertical-align: top !important;
                padding: 15px !important;
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
    
    return photosHTML;
}

function getLinksContentDirect() {
    return window.ExtendedNavContent ? ExtendedNavContent.getLinksContent() : '<center><h1>Links Loading...</h1></center>';
}



function getChatContentDirect() {
    return window.ExtendedNavContent ? ExtendedNavContent.getChatContent() : '<center><h1>Chat Loading...</h1></center>';
}

// Initialize navigation when main site loads
window.initializeNavigation = function() {
    console.log('Initializing navigation system...');
    // Wait a bit to ensure DOM is ready
    setTimeout(() => {
        window.ninetyNineNav = new NinetyNineNavigation();
        console.log('Navigation system initialized');
    }, 500);
};

// Global navigation function called from HTML
window.navigateToPage = function(pageName) {
    console.log('Global navigateToPage called for:', pageName);
    
    // Try to use the navigation class if available
    if (window.ninetyNineNav && window.ninetyNineNav.navigateToPage) {
        window.ninetyNineNav.navigateToPage(pageName);
        return;
    }
    
    // Fallback: Direct content update
    console.log('Using fallback navigation for:', pageName);
    
    // Find main content area
    let mainContentArea = document.querySelector('.main-content-area');
    
    if (!mainContentArea) {
        mainContentArea = document.querySelector('#main-content td[bgcolor="#FFFFFF"] table td');
    }
    
    if (!mainContentArea) {
        const whiteCell = document.querySelector('#main-content td[bgcolor="#FFFFFF"]');
        if (whiteCell) {
            mainContentArea = whiteCell.querySelector('td');
        }
    }
    
    if (mainContentArea) {
        let pageContent = '';
        
        // Get content based on page
        switch(pageName) {
            case 'about':
                pageContent = getAboutContentDirect();
                break;
            case 'home':
                pageContent = getHomeContentDirect();
                break;
            case 'photos':
                pageContent = getPhotosContentDirect();
                break;
            case 'links':
                pageContent = getLinksContentDirect();
                break;
            default:
                pageContent = getHomeContentDirect();
        }
        
        console.log('Setting content for:', pageName, 'Length:', pageContent.length);
        mainContentArea.innerHTML = pageContent;
        
        // Add transition effect
        mainContentArea.style.opacity = '0.3';
        mainContentArea.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mainContentArea.style.opacity = '1';
            mainContentArea.style.transform = 'scale(1)';
        }, 300);
        
        // Initialize page-specific features
        if (pageName === 'photos' && window.initializePhotoGallery) {
            setTimeout(() => window.initializePhotoGallery(), 100);
        } else if (pageName === 'guestbook' && window.initializeGuestbook) {
            setTimeout(() => window.initializeGuestbook(), 100);
        }
        
        console.log('Content updated successfully for:', pageName);
    } else {
        console.error('Could not find main content area!');
    }
};