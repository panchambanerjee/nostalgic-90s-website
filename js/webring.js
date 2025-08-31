// ===== 90s WEBRING SYSTEM =====

class WebRingManager {
    constructor() {
        this.webrings = [
            {
                name: "CyberKids WebRing",
                id: "cyberkids",
                description: "The ultimate ring for young netizens exploring cyberspace!",
                memberNumber: 1337,
                totalMembers: 42069,
                category: "teen",
                established: "1997",
                adminEmail: "webmaster@cyberkids.net"
            },
            {
                name: "Pokémon Fansite Ring",
                id: "pokemon",
                description: "Gotta catch 'em all! The premier Pokémon website ring!",
                memberNumber: 151,
                totalMembers: 649,
                category: "gaming",
                established: "1998",
                adminEmail: "ash@pokemaster.com"
            },
            {
                name: "90s Music Lovers Ring",
                id: "music90s",
                description: "From Backstreet Boys to Nirvana - celebrating 90s music!",
                memberNumber: 99,
                totalMembers: 2847,
                category: "music",
                established: "1996",
                adminEmail: "dj@90sbeats.org"
            },
            {
                name: "Angelfire Creator's Circle",
                id: "angelfire",
                description: "Showcasing the best Angelfire personal homepages!",
                memberNumber: 777,
                totalMembers: 15432,
                category: "personal",
                established: "1997",
                adminEmail: "admin@angelfire.com"
            },
            {
                name: "Y2K Countdown Ring",
                id: "y2k",
                description: "Preparing for the millennium bug with fellow survivalists!",
                memberNumber: 1999,
                totalMembers: 3847,
                category: "tech",
                established: "1999",
                adminEmail: "y2k@millennium.prep"
            }
        ];

        this.neighborSites = [
            { name: "CyberKid1999's Page", url: "#", status: "online", lastUpdated: "Dec 28, 1999" },
            { name: "StarWarsGeek97", url: "#", status: "online", lastUpdated: "Dec 30, 1999" },
            { name: "PokemonMaster2000", url: "#", status: "broken", lastUpdated: "Nov 15, 1999" },
            { name: "MusicLover99", url: "#", status: "online", lastUpdated: "Dec 31, 1999" },
            { name: "GameFreak2000", url: "#", status: "moved", lastUpdated: "Oct 12, 1999" },
            { name: "TechnoWiz98", url: "#", status: "online", lastUpdated: "Dec 29, 1999" },
            { name: "AnimeForever97", url: "#", status: "broken", lastUpdated: "Sep 3, 1999" },
            { name: "SkaterDude99", url: "#", status: "online", lastUpdated: "Dec 27, 1999" }
        ];

        this.init();
    }

    init() {
        this.setupWebRingStyles();
    }

    setupWebRingStyles() {
        if (!document.querySelector('#webring-styles')) {
            const style = document.createElement('style');
            style.id = 'webring-styles';
            style.textContent = `
                .webring-container {
                    background: #F0F0F0;
                    border: 4px ridge #C0C0C0;
                    padding: 15px;
                    margin: 15px 0;
                }
                
                .webring-header {
                    background: linear-gradient(90deg, #008080, #00CCD0);
                    color: white;
                    padding: 8px 12px;
                    margin: -15px -15px 15px -15px;
                    font-weight: bold;
                    text-align: center;
                    border-bottom: 2px solid #006666;
                }
                
                .webring-section {
                    background: white;
                    border: 2px inset #C0C0C0;
                    padding: 12px;
                    margin: 10px 0;
                }
                
                .webring-nav {
                    text-align: center;
                    background: #E0E0E0;
                    border: 3px outset #C0C0C0;
                    padding: 12px;
                    margin: 10px 0;
                }
                
                .webring-btn {
                    background: linear-gradient(45deg, #0080FF, #00BFFF);
                    border: 3px outset #0080FF;
                    color: white;
                    padding: 8px 15px;
                    margin: 0 5px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 12px;
                    text-decoration: none;
                    display: inline-block;
                }
                
                .webring-btn:hover {
                    background: linear-gradient(45deg, #0060CC, #0099CC);
                }
                
                .webring-btn:active {
                    border: 3px inset #0080FF;
                }
                
                .webring-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin: 10px 0;
                }
                
                .stat-box {
                    background: #FFFFCC;
                    border: 2px inset #FFCC00;
                    padding: 8px;
                    text-align: center;
                    font-size: 11px;
                }
                
                .member-list {
                    max-height: 200px;
                    overflow-y: auto;
                    border: 2px inset #C0C0C0;
                    padding: 8px;
                    background: white;
                }
                
                .member-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 3px 0;
                    border-bottom: 1px dotted #CCC;
                    font-size: 10px;
                }
                
                .member-item:last-child {
                    border-bottom: none;
                }
                
                .member-status {
                    padding: 2px 6px;
                    border-radius: 2px;
                    font-size: 8px;
                    font-weight: bold;
                }
                
                .status-online {
                    background: #00FF00;
                    color: #000;
                }
                
                .status-broken {
                    background: #FF0000;
                    color: #FFF;
                }
                
                .status-moved {
                    background: #FFAA00;
                    color: #000;
                }
                
                .banner-exchange {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
                    gap: 5px;
                    margin: 10px 0;
                }
                
                .banner-88x31 {
                    width: 88px;
                    height: 31px;
                    background: linear-gradient(45deg, #FF6600, #FFAA00);
                    border: 1px outset #FF6600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 8px;
                    font-weight: bold;
                    color: white;
                    text-decoration: none;
                    text-align: center;
                    line-height: 1;
                    cursor: pointer;
                    animation: bannerBlink 2s ease-in-out infinite alternate;
                }
                
                @keyframes bannerBlink {
                    0% { opacity: 0.8; }
                    100% { opacity: 1; }
                }
                
                .ring-selector {
                    display: flex;
                    gap: 5px;
                    margin: 10px 0;
                    flex-wrap: wrap;
                }
                
                .ring-tab {
                    background: linear-gradient(45deg, #C0C0C0, #E0E0E0);
                    border: 2px outset #C0C0C0;
                    padding: 5px 10px;
                    cursor: pointer;
                    font-size: 10px;
                    font-weight: bold;
                }
                
                .ring-tab.active {
                    background: linear-gradient(45deg, #0080FF, #00BFFF);
                    color: white;
                    border: 2px inset #0080FF;
                }
                
                .webring-description {
                    font-style: italic;
                    color: #666;
                    text-align: center;
                    margin: 5px 0;
                    font-size: 11px;
                }
                
                .join-webring {
                    background: #E0FFE0;
                    border: 3px ridge #00AA00;
                    padding: 10px;
                    margin: 10px 0;
                    text-align: center;
                }
                
                .join-btn {
                    background: linear-gradient(45deg, #00FF00, #00DD00);
                    border: 3px outset #00FF00;
                    color: #000;
                    padding: 6px 12px;
                    cursor: pointer;
                    font-weight: bold;
                    text-decoration: none;
                    display: inline-block;
                    margin: 5px;
                }
            `;
            document.head.appendChild(style);
        }
    }

    getWebRingContent() {
        return `
            <div class="webring-container">
                <div class="webring-header">
                    🔗 WebRing Central - Surf the Ring! 🔗
                </div>
                
                <div class="ring-selector">
                    ${this.webrings.map((ring, index) => `
                        <button class="ring-tab ${index === 0 ? 'active' : ''}" 
                                onclick="window.webRingManager.switchRing('${ring.id}', this)">
                            ${ring.name}
                        </button>
                    `).join('')}
                </div>
                
                <div id="current-webring-content">
                    ${this.renderWebRing(this.webrings[0])}
                </div>
                
                <div class="webring-section">
                    <h3 style="text-align: center; color: #0000FF; margin: 0 0 10px 0;">
                        🌐 Neighbor Sites 🌐
                    </h3>
                    <div class="member-list">
                        ${this.neighborSites.map(site => `
                            <div class="member-item">
                                <span>
                                    <a href="${site.url}" onclick="window.webRingManager.visitSite('${site.name}')">${site.name}</a>
                                </span>
                                <div>
                                    <span class="member-status status-${site.status}">${site.status.toUpperCase()}</span>
                                    <span style="margin-left: 5px; color: #666;">${site.lastUpdated}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="webring-section">
                    <h3 style="text-align: center; color: #0000FF; margin: 0 0 10px 0;">
                        📊 Banner Exchange 📊
                    </h3>
                    <div class="banner-exchange">
                        <a href="#" class="banner-88x31" onclick="window.webRingManager.clickBanner('GeoCities')">
                            GeoCities<br>Free Sites
                        </a>
                        <a href="#" class="banner-88x31" onclick="window.webRingManager.clickBanner('Angelfire')" 
                           style="background: linear-gradient(45deg, #FF1493, #FF69B4);">
                            Angelfire<br>Express
                        </a>
                        <a href="#" class="banner-88x31" onclick="window.webRingManager.clickBanner('Tripod')"
                           style="background: linear-gradient(45deg, #32CD32, #00FF32);">
                            Tripod<br>Builder
                        </a>
                        <a href="#" class="banner-88x31" onclick="window.webRingManager.clickBanner('Yahoo')"
                           style="background: linear-gradient(45deg, #8A2BE2, #9370DB);">
                            Yahoo!<br>Pages
                        </a>
                        <a href="#" class="banner-88x31" onclick="window.webRingManager.clickBanner('Netscape')"
                           style="background: linear-gradient(45deg, #000080, #0000FF);">
                            Netscape<br>Now!
                        </a>
                        <a href="#" class="banner-88x31" onclick="window.webRingManager.clickBanner('WebTV')"
                           style="background: linear-gradient(45deg, #FF4500, #FF6347);">
                            WebTV<br>Network
                        </a>
                    </div>
                </div>
                
                <div class="join-webring">
                    <h4 style="margin: 0 0 5px 0; color: #008000;">Want to Join Our WebRing?</h4>
                    <p style="margin: 5px 0; font-size: 11px;">
                        Add our HTML code to your site and become part of the community!
                    </p>
                    <button class="join-btn" onclick="window.webRingManager.showJoinInfo()">
                        🔗 Join WebRing
                    </button>
                    <button class="join-btn" onclick="window.webRingManager.showHTMLCode()">
                        📝 Get HTML Code
                    </button>
                </div>
            </div>
        `;
    }

    renderWebRing(ring) {
        return `
            <div class="webring-section">
                <h3 style="text-align: center; color: #0000FF; margin: 0 0 10px 0;">
                    ${ring.name}
                </h3>
                <div class="webring-description">
                    ${ring.description}
                </div>
                
                <div class="webring-stats">
                    <div class="stat-box">
                        <b>Your Position:</b><br>
                        #${ring.memberNumber} of ${ring.totalMembers.toLocaleString()}
                    </div>
                    <div class="stat-box">
                        <b>Established:</b><br>
                        ${ring.established}
                    </div>
                </div>
                
                <div class="webring-nav">
                    <p style="margin: 0 0 10px 0; font-size: 12px; color: #333;">
                        <b>Navigate the ${ring.name}:</b>
                    </p>
                    
                    <a href="#" class="webring-btn" onclick="window.webRingManager.navigateRing('${ring.id}', 'previous')">
                        ⏮️ Previous Site
                    </a>
                    
                    <a href="#" class="webring-btn" onclick="window.webRingManager.navigateRing('${ring.id}', 'random')">
                        🎲 Random Site
                    </a>
                    
                    <a href="#" class="webring-btn" onclick="window.webRingManager.navigateRing('${ring.id}', 'next')">
                        Next Site ⏭️
                    </a>
                    
                    <br><br>
                    
                    <a href="#" class="webring-btn" onclick="window.webRingManager.navigateRing('${ring.id}', 'list')"
                       style="background: linear-gradient(45deg, #FF6600, #FFAA00);">
                        📋 View All Sites
                    </a>
                    
                    <a href="#" class="webring-btn" onclick="window.webRingManager.navigateRing('${ring.id}', 'stats')"
                       style="background: linear-gradient(45deg, #9932CC, #BA55D3);">
                        📊 Ring Stats
                    </a>
                </div>
            </div>
        `;
    }

    switchRing(ringId, tabElement) {
        // Update active tab
        document.querySelectorAll('.ring-tab').forEach(tab => tab.classList.remove('active'));
        tabElement.classList.add('active');
        
        // Find and render the selected ring
        const ring = this.webrings.find(r => r.id === ringId);
        if (ring) {
            document.getElementById('current-webring-content').innerHTML = this.renderWebRing(ring);
        }
    }

    navigateRing(ringId, direction) {
        const ring = this.webrings.find(r => r.id === ringId);
        const destinations = {
            'previous': ['CyberKid1999\'s Pokémon Page', 'StarWarsGeek97\'s Jedi Academy', 'MusicLover99\'s MP3 Paradise'],
            'next': ['TechnoWiz98\'s Computer Lab', 'GameFreak2000\'s ROM Collection', 'AnimeForever97\'s Otaku Zone'],
            'random': ['SkaterDude99\'s Radical Ramps', 'BookWorm98\'s Library', 'MovieBuff99\'s Reviews', 'ArtistGirl97\'s Gallery']
        };

        let message = '';
        let destination = '';

        switch (direction) {
            case 'previous':
                destination = destinations.previous[Math.floor(Math.random() * destinations.previous.length)];
                message = `🔙 Navigating to previous site in ${ring.name}:\n\n"${destination}"\n\nLoading... (This would normally take you to the previous member site!)`;
                break;
            case 'next':
                destination = destinations.next[Math.floor(Math.random() * destinations.next.length)];
                message = `🔜 Navigating to next site in ${ring.name}:\n\n"${destination}"\n\nLoading... (This would normally take you to the next member site!)`;
                break;
            case 'random':
                destination = destinations.random[Math.floor(Math.random() * destinations.random.length)];
                message = `🎲 Taking you to a random site in ${ring.name}:\n\n"${destination}"\n\nSurprise! (This would normally take you to a random member site!)`;
                break;
            case 'list':
                message = `📋 Opening ${ring.name} member directory...\n\nThis would show all ${ring.totalMembers.toLocaleString()} member sites!\n\n(Feature available on the actual WebRing admin site)`;
                break;
            case 'stats':
                message = `📊 ${ring.name} Statistics:\n\n• Total Members: ${ring.totalMembers.toLocaleString()}\n• Established: ${ring.established}\n• Your Rank: #${ring.memberNumber}\n• Category: ${ring.category}\n• Admin: ${ring.adminEmail}\n\n(Real stats would be pulled from WebRing servers!)`;
                break;
        }

        alert(message);
    }

    visitSite(siteName) {
        const brokenSites = ['PokemonMaster2000', 'AnimeForever97'];
        const movedSites = ['GameFreak2000'];

        if (brokenSites.includes(siteName)) {
            alert(`💔 ERROR 404 - Site Not Found!\n\n"${siteName}" appears to be down or has been deleted.\n\nThis was a common occurrence in the 90s! 😢\n\n(Try again later or check for a new URL)`);
        } else if (movedSites.includes(siteName)) {
            alert(`📦 Site Moved!\n\n"${siteName}" has moved to a new location.\n\nThe webmaster forgot to update their WebRing links!\n\n(This was SO common in the 90s! 🙄)`);
        } else {
            alert(`🌐 Visiting "${siteName}"...\n\nLoading awesome 90s content!\n\n(This would normally take you to their homepage with blinking text, MIDI music, and under construction GIFs! 🎵✨)`);
        }
    }

    clickBanner(service) {
        const messages = {
            'GeoCities': '🏠 Welcome to GeoCities!\n\nGet your FREE homepage in our virtual neighborhoods!\n\n• 2MB of web space\n• Easy SiteBuilder tools\n• Join thousands of neighbors\n\n(This was THE place to build your first website!)',
            'Angelfire': '🔥 Angelfire - Express Yourself!\n\nCreate your personal space on the web!\n\n• Free web hosting\n• Templates and tools\n• Community features\n\n(Another popular free hosting choice!)',
            'Tripod': '🎯 Tripod - Build Something!\n\nYour website building experience starts here!\n\n• Free homepage hosting\n• Website builder tools\n• Member communities\n\n(Great alternative to GeoCities!)',
            'Yahoo': '🌟 Yahoo! Pages\n\nCreate your presence on the world\'s #1 portal!\n\n• Integrated with Yahoo! Mail\n• Professional templates\n• Search engine optimization\n\n(When Yahoo! ruled the internet!)',
            'Netscape': '🌐 Netscape Navigator\n\nThe web browser that started it all!\n\n• Best HTML compatibility\n• Built-in email client\n• Advanced security features\n\n(Download the latest version!)',
            'WebTV': '📺 WebTV Networks\n\nSurf the web from your living room!\n\n• No computer required\n• Easy remote control\n• Affordable internet access\n\n(The future of web browsing!)'
        };

        alert(messages[service] || 'Opening banner link...');
    }

    showJoinInfo() {
        alert(`🔗 Join the WebRing Community!\n\nTo join our WebRing:\n\n1. Add our HTML code to your homepage\n2. Email the webmaster with your site URL\n3. Wait for approval (usually 24-48 hours)\n4. Start getting visitors from the ring!\n\nRequirements:\n• Family-friendly content only\n• Must be an active website\n• Include ring navigation on homepage\n• No adult or commercial content\n\n(This was how communities formed online!)`);
    }

    showHTMLCode() {
        const htmlCode = `<!-- WebRing Navigation Code -->
<table border="2" cellpadding="5" bgcolor="#FFFF00">
<tr><td align="center">
<font size="2"><b>🔗 CyberKids WebRing 🔗</b><br>
<a href="webring.cgi?action=prev&id=1337">Previous</a> |
<a href="webring.cgi?action=random&id=1337">Random</a> |
<a href="webring.cgi?action=next&id=1337">Next</a><br>
Member #1337 of 42,069 sites
</font></td></tr></table>
<!-- End WebRing Code -->`;

        alert(`📝 Copy this HTML code to your homepage:\n\n${htmlCode}\n\n(Paste this between your <body> tags, usually at the bottom of your page!)\n\nDon't forget to change the member ID number!`);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.webRingManager = new WebRingManager();
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    window.webRingManager = new WebRingManager();
}