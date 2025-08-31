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
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('href').substring(1);
                this.navigateToPage(page);
                this.addRefreshEffect(link);
            });
        });
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
        const mainContentArea = document.querySelector('#main-content td[bgcolor="#FFFFFF"] table td');
        if (!mainContentArea) return;
        
        const pageContent = this.getPageContent(pageName);
        mainContentArea.innerHTML = pageContent;
        
        // Re-initialize features for specific pages
        this.initializePageFeatures(pageName);
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
            case 'guestbook':
                return this.getGuestbookContent();
            case 'downloads':
                return this.getDownloadsContent();
            case 'chat':
                return this.getChatContent();
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
            
            <div class="rainbow-divider"></div>
            
            <center>
                <h1><font color="#0000FF" face="Comic Sans MS">Welcome to CyberSpace!</font></h1>
                
                <div style="margin: 20px 0;">
                    <div class="dancing-baby" title="Dancing Baby - The Internet's First Viral Sensation!"></div>
                    <div class="construction-worker" title="Under Construction - Check Back Soon!"></div>
                    <div class="spinning-logo" title="Web Site Loading..."></div>
                </div>
                
                <div style="margin: 15px 0;">
                    <div class="fire-gif" title="Hot New Content!"></div>
                    <div class="bouncing-ball" title="Cool Animation!"></div>
                    <div class="email-gif" title="You've Got Mail!"></div>
                </div>
                
                <div class="starfield" title="Journey Through Cyberspace"></div>
            </center>
            
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
                            <a href="#">[Previous]</a> |
                            <a href="#">[Random]</a> |
                            <a href="#">[Next]</a><br>
                            Member #1337 of 42,069 sites</font>
                        </td>
                    </tr>
                </table>
            </center>
        `;
    }
    
    getAboutContent() {
        const visitCount = Math.floor(Math.random() * 500) + 100;
        const joinDate = "September 15, 1999";
        
        return `
            <center>
                <h1><font color="#FF00FF" face="Comic Sans MS">👤 About CyberKid1999 👤</font></h1>
                <div class="rainbow-divider"></div>
            </center>
            
            <table width="100%" border="2" cellpadding="15" bgcolor="#FFFFCC">
                <tr>
                    <td>
                        <center>
                            <h2><font color="#0000FF">Hi! I'm CyberKid1999, and I LOVE the internet!</font></h2>
                            <div class="dancing-baby"></div>
                        </center>
                        
                        <div class="rainbow-divider"></div>
                        
                        <p><font face="Arial" size="3">
                            <b>Real Name:</b> Jamie Thompson<br>
                            <b>Age:</b> 16<br>
                            <b>Location:</b> Somewhere in the USA 🇺🇸<br>
                            <b>AOL Screen Name:</b> CyberKid1999<br>
                            <b>ICQ Number:</b> 12345678<br>
                            <b>Email:</b> cyberkid1999@hotmail.com
                        </font></p>
                        
                        <hr color="#FF00FF">
                        
                        <h3><font color="#008000">🎵 Favorite Bands 🎵</font></h3>
                        <ul>
                            <li><font color="#FF0000">Backstreet Boys</font> ❤️</li>
                            <li><font color="#0000FF">Britney Spears</font> 💫</li>
                            <li><font color="#FF8000">NSYNC</font> 🌟</li>
                            <li><font color="#800080">TLC</font> ✨</li>
                            <li><font color="#008000">Alanis Morissette</font> 🎤</li>
                        </ul>
                        
                        <h3><font color="#FF00FF">🎮 Hobbies 🎮</font></h3>
                        <ul>
                            <li>Surfing the World Wide Web 🌐</li>
                            <li>Playing Solitaire and Minesweeper 💣</li>
                            <li>Collecting Pokemon cards 🃏</li>
                            <li>Watching MTV and TRL 📺</li>
                            <li>Talking on AIM with friends 💬</li>
                            <li>Making websites in FrontPage 💻</li>
                        </ul>
                        
                        <h3><font color="#0000FF">💭 Random Facts About Me 💭</font></h3>
                        <ul>
                            <li>I have a 56k modem and it's FAST! 🚀</li>
                            <li>My favorite search engine is Yahoo! 🔍</li>
                            <li>I collect cool animated GIFs 🎆</li>
                            <li>I know HTML and I'm learning JavaScript 👨‍💻</li>
                            <li>I have 47 different email addresses 📧</li>
                        </ul>
                        
                        <center>
                            <div class="rainbow-divider"></div>
                            <font color="#FF0000" class="blink glow-text">
                                <b>This page has been visited ${visitCount} times since ${joinDate}!</b>
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
    
    getDownloadsContent() {
        return ExtendedNavContent.getDownloadsContent();
    }
    
    getGuestbookContent() {
        return ExtendedNavContent.getGuestbookContent();
    }
    
    getChatContent() {
        return ExtendedNavContent.getChatContent();
    }
    
    initializePageFeatures(pageName) {
        // Re-initialize features when switching pages
        if (pageName === 'home') {
            // Reinit time machine and Y2K countdown
            if (window.initializeFeatures) {
                setTimeout(() => window.initializeFeatures(), 100);
            }
        } else if (pageName === 'guestbook') {
            // Reinit guestbook
            if (window.initializeGuestbook) {
                setTimeout(() => window.initializeGuestbook(), 100);
            }
        } else if (pageName === 'chat') {
            // Reinit chatroom
            if (window.initializeChatroom) {
                setTimeout(() => window.initializeChatroom(), 100);
            }
        }
    }
}

// Initialize navigation when main site loads
window.initializeNavigation = function() {
    window.ninetyNineNav = new NinetyNineNavigation();
};