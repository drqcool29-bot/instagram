/**
 * EXACT INSTAGRAM CLONE - CORE LOGIC & RICH DUMMY DATA
 */

// ============================================================================
// CONFIGURATION: PUT YOUR LOGIN REDIRECT LINK HERE
// ============================================================================
const LOGIN_REDIRECT_URL = ""; // <-- REPLACE THIS WITH YOUR CUSTOM LINK

const VERIFIED_SVG = `<svg aria-label="Verified" class="verified-badge" fill="#0095f6" height="14" viewBox="0 0 40 40" width="14"><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.904h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"></path></svg>`;

// ============================================================================
// INITIAL MOCK DATASET (12+ RICH POSTS & DIVERSE ACCOUNTS)
// ============================================================================
const INITIAL_STATE = {
    theme: 'light',
    user: {
        username: 'alex_design',
        fullName: 'Alex Morgan ✨',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        bio: 'Designing vibrant web layouts & AI visual experiments 🎨🚀\n📍 San Francisco / Tokyo\n🔗 github.com/alexdesign',
        postsCount: 14,
        followersCount: '14.2k',
        followingCount: 384,
        verified: true
    },
    savedPostIds: [2, 4, 7, 10],
    stories: [
        {
            id: 's1',
            username: 'elena_dev',
            verified: true,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
            seen: false,
            segments: [
                { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80', time: '2h' },
                { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80', time: '1h' }
            ]
        },
        {
            id: 's2',
            username: 'marco_photo',
            verified: true,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
            seen: false,
            segments: [
                { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80', time: '4h' }
            ]
        },
        {
            id: 's3',
            username: 'sarah.codes',
            verified: false,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
            seen: false,
            segments: [
                { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80', time: '5h' }
            ]
        },
        {
            id: 's4',
            username: 'cyber_art',
            verified: true,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
            seen: true,
            segments: [
                { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80', time: '12h' }
            ]
        },
        {
            id: 's5',
            username: 'tokyo_vibes',
            verified: false,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
            seen: true,
            segments: [
                { url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80', time: '14h' }
            ]
        },
        {
            id: 's6',
            username: 'natgeo_wild',
            verified: true,
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
            seen: true,
            segments: [
                { url: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&auto=format&fit=crop&q=80', time: '18h' }
            ]
        }
    ],
    posts: [
        {
            id: 1,
            author: {
                username: 'elena_dev',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Silicon Valley, CA',
            mediaUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-normal',
            likes: 1243,
            liked: false,
            caption: 'Late night debugging sessions fueled by double espresso ☕️👨‍💻 React 19 compiler is changing the game! What is your current frontend stack?',
            time: '2 HOURS AGO',
            comments: [
                { id: 'c1', username: 'marco_photo', verified: true, text: 'Clean workspace!! 🔥' },
                { id: 'c2', username: 'sarah.codes', verified: false, text: 'Coffee is mandatory 💯' }
            ]
        },
        {
            id: 2,
            author: {
                username: 'cyber_art',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Neo Tokyo',
            mediaUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-clarendon',
            likes: 3890,
            liked: true,
            caption: 'Abstract neon dimensions. Created using generative neural shaders and custom WebGL post-processing 🎨✨ #aiart #3d #design #future',
            time: '4 HOURS AGO',
            comments: [
                { id: 'c3', username: 'alex_design', verified: true, text: 'The colors here are unreal! 😍 Can I use this for a UI concept?' },
                { id: 'c3_2', username: 'cyber_art', verified: true, text: '@alex_design Absolutely! Go ahead 🚀' }
            ]
        },
        {
            id: 3,
            author: {
                username: 'marco_photo',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Swiss Alps',
            mediaUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-lark',
            likes: 8420,
            liked: false,
            caption: 'Breathe in the alpine air 🏔️ Nothing beats morning golden hour in the mountains. Shot on Sony A7IV 24-70mm f/2.8 GM.',
            time: '6 HOURS AGO',
            comments: [
                { id: 'c4_1', username: 'natgeo_wild', verified: true, text: 'Stunning composition!' }
            ]
        },
        {
            id: 4,
            author: {
                username: 'alex_design',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Design Studio',
            mediaUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-juno',
            likes: 1512,
            liked: true,
            caption: 'Working on a fresh UI system for next-gen spatial apps! Focusing on glassmorphism and micro-interactions. Let me know your thoughts 👇✨',
            time: '1 DAY AGO',
            comments: [
                { id: 'c4', username: 'elena_dev', verified: true, text: 'Love the typography choice!' },
                { id: 'c5', username: 'tokyo_vibes', verified: false, text: 'Super clean design!' }
            ]
        },
        {
            id: 5,
            author: {
                username: 'tokyo_vibes',
                verified: false,
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Shibuya Crossing, Tokyo',
            mediaUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-valencia',
            likes: 4210,
            liked: false,
            caption: 'Midnight neon rain in Shibuya 🌧️🗼 The energy of this city never ceases to amaze me. #tokyo #japan #nightphotography',
            time: '1 DAY AGO',
            comments: [
                { id: 'c6', username: 'marco_photo', verified: true, text: 'Blade Runner vibes 💯' }
            ]
        },
        {
            id: 6,
            author: {
                username: 'foodie_cravings',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Kyoto, Japan',
            mediaUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-normal',
            likes: 6540,
            liked: false,
            caption: 'Authentic Tonkotsu Ramen with 12-hour pork broth 🍜 Signature soft-boiled egg and fresh green onions. Worth the 2 hour wait!',
            time: '2 DAYS AGO',
            comments: [
                { id: 'c7', username: 'sarah.codes', verified: false, text: 'Now I am starving!! 🤤' }
            ]
        },
        {
            id: 7,
            author: {
                username: 'alex_design',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
            },
            location: 'San Francisco, CA',
            mediaUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-moon',
            likes: 2310,
            liked: true,
            caption: 'Minimalist architecture study. Less is always more. 🏛️🖤 #architecture #minimalism #design #bw',
            time: '3 DAYS AGO',
            comments: []
        },
        {
            id: 8,
            author: {
                username: 'natgeo_wild',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Serengeti National Park',
            mediaUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-normal',
            likes: 19420,
            liked: true,
            caption: 'Majestic leopard resting on an acacia tree during the peak heat of the afternoon. 🐆 Photographed by @david_wildlife.',
            time: '3 DAYS AGO',
            comments: [
                { id: 'c8', username: 'elena_dev', verified: true, text: 'Incredible shot! Look at those eyes 🐾' }
            ]
        },
        {
            id: 9,
            author: {
                username: 'sarah.codes',
                verified: false,
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Home Office',
            mediaUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-gingham',
            likes: 980,
            liked: false,
            caption: 'Upgraded to a mechanical 75% keyboard with custom lubed switches! Typing speed jumped by 15 WPM ⌨️🚀 #setup #keyboard #coding',
            time: '4 DAYS AGO',
            comments: []
        },
        {
            id: 10,
            author: {
                username: 'alex_design',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Big Sur, California',
            mediaUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-clarendon',
            likes: 3105,
            liked: true,
            caption: 'Pacific ocean blues 🌊 Taking a weekend tech detox to recharge creative energy.',
            time: '5 DAYS AGO',
            comments: [
                { id: 'c9', username: 'marco_photo', verified: true, text: 'Best coast!! Enjoy the weekend 🏖️' }
            ]
        },
        {
            id: 11,
            author: {
                username: 'coffee_addict',
                verified: false,
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Seattle, WA',
            mediaUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-lark',
            likes: 1420,
            liked: false,
            caption: 'Pour-over oat milk latte with rosetta latte art ☕️🌱 Perfect rainy morning companion.',
            time: '6 DAYS AGO',
            comments: []
        },
        {
            id: 12,
            author: {
                username: 'fashion_forward',
                verified: true,
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
            },
            location: 'Milan, Italy',
            mediaUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
            filter: 'filter-normal',
            likes: 11200,
            liked: false,
            caption: 'Streetwear essentials autumn collection 🧥✨ Oversized silhouettes meeting minimalist neutral tones.',
            time: '1 WEEK AGO',
            comments: []
        }
    ],
    suggestions: [
        { username: 'design_daily', verified: true, fullName: 'UI/UX Inspiration', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
        { username: 'tech_insider', verified: true, fullName: 'Tech News & Reviews', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
        { username: 'minimal_setup', verified: false, fullName: 'Desk Setups', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
        { username: 'react_daily', verified: true, fullName: 'Frontend Developers', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' }
    ],
    chats: [
        {
            id: 'chat1',
            contact: {
                username: 'elena_dev',
                verified: true,
                name: 'Elena Rostova',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                online: true
            },
            messages: [
                { id: 'm1', sender: 'elena_dev', text: 'Hey Alex! Did you check out the latest React 19 specs?', time: '10:30 AM' },
                { id: 'm2', sender: 'me', text: 'Yes! The server actions and compiler optimizations look incredible.', time: '10:32 AM' },
                { id: 'm3', sender: 'elena_dev', text: 'Totally agree. Let me know when you want to collaborate on a test build!', time: '10:35 AM' }
            ]
        },
        {
            id: 'chat2',
            contact: {
                username: 'marco_photo',
                verified: true,
                name: 'Marco Rossi',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                online: false
            },
            messages: [
                { id: 'm4', sender: 'marco_photo', text: 'Awesome presets on your last photo!', time: 'Yesterday' }
            ]
        },
        {
            id: 'chat3',
            contact: {
                username: 'sarah.codes',
                verified: false,
                name: 'Sarah Jenkins',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
                online: true
            },
            messages: [
                { id: 'm5', sender: 'me', text: 'Are we still doing the code review tomorrow?', time: '2 days ago' },
                { id: 'm6', sender: 'sarah.codes', text: 'Yes, 2 PM PST works for me 👍', time: '2 days ago' }
            ]
        },
        {
            id: 'chat4',
            contact: {
                username: 'cyber_art',
                verified: true,
                name: 'Kai Takahashi',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                online: true
            },
            messages: [
                { id: 'm7', sender: 'cyber_art', text: 'Sending you the 3D shader files on Discord!', time: '3 days ago' }
            ]
        }
    ]
};

// State Manager & Icon Helper
let state = { ...INITIAL_STATE };

function safeCreateIcons() {
    if (window.lucide) {
        try { lucide.createIcons(); } catch (e) { console.error('Lucide error:', e); }
    } else {
        setTimeout(safeCreateIcons, 250);
    }
}
window.addEventListener('load', safeCreateIcons);

function loadState() {
    const saved = localStorage.getItem('ig_exact_clone_state_v3_rich');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.stories && parsed.posts && parsed.user) {
                state = parsed;
            }
        } catch (e) {
            console.error('Failed to parse localStorage state:', e);
        }
    }
    applyTheme(state.theme || 'light');
}

function saveState() {
    localStorage.setItem('ig_exact_clone_state_v3_rich', JSON.stringify(state));
}

// ============================================================================
// CORE ROUTER
// ============================================================================
function initRouter() {
    const navLinks = document.querySelectorAll('[data-nav]');
    const views = document.querySelectorAll('.view');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = link.getAttribute('data-nav');
            if (!targetView) return;

            // Update active link classes
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.mobile-nav-item').forEach(el => el.classList.remove('active'));
            
            document.querySelectorAll(`[data-nav="${targetView}"]`).forEach(el => {
                if (el.classList.contains('nav-item') || el.classList.contains('mobile-nav-item')) {
                    el.classList.add('active');
                }
            });

            // Switch view
            views.forEach(v => v.classList.remove('active'));
            const activeSection = document.getElementById(`view-${targetView}`);
            if (activeSection) {
                activeSection.classList.add('active');
            }

            // Trigger specific view setups
            if (targetView === 'profile') renderProfileView();
            if (targetView === 'explore') renderExploreView();
            if (targetView === 'reels') renderReelsView();
            if (targetView === 'messages') renderMessagesView();

            // Refresh icons
            if (window.lucide) lucide.createIcons();
        });
    });
}

// ============================================================================
// THEME CONTROLLER
// ============================================================================
function applyTheme(themeName) {
    state.theme = themeName;
    if (themeName === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        document.documentElement.removeAttribute('data-theme');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
    }
    if (window.lucide) lucide.createIcons();
}

document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    saveState();
});

// ============================================================================
// FEED CONTROLLER
// ============================================================================
function renderStories() {
    const tray = document.getElementById('stories-tray');
    if (!tray) return;

    // First story is "Add Story"
    let html = `
        <div class="story-item" id="add-story-btn">
            <div class="story-ring" style="background: transparent; border: 2px dashed var(--border-color); position: relative;">
                <img src="${state.user.avatar}" alt="Your Story" class="story-avatar">
                <div style="position: absolute; bottom: 0; right: 0; background: var(--btn-primary-bg); color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid var(--bg-primary);">
                    <i data-lucide="plus" style="width: 12px; height: 12px;"></i>
                </div>
            </div>
            <span class="story-username">Your story</span>
        </div>
    `;

    state.stories.forEach((story, idx) => {
        html += `
            <div class="story-item" data-story-idx="${idx}">
                <div class="story-ring ${story.seen ? 'seen' : ''}">
                    <img src="${story.avatar}" alt="${story.username}" class="story-avatar">
                </div>
                <div class="username-row" style="justify-content: center;">
                    <span class="story-username">${story.username}</span>
                </div>
            </div>
        `;
    });

    tray.innerHTML = html;
    if (window.lucide) lucide.createIcons();

    // Bind click events
    tray.querySelectorAll('[data-story-idx]').forEach(el => {
        el.addEventListener('click', () => {
            openStoryViewer(parseInt(el.getAttribute('data-story-idx')));
        });
    });

    document.getElementById('add-story-btn')?.addEventListener('click', () => {
        alert('Story creation mockup: Select an image from your computer in the Create tab!');
        document.getElementById('nav-create')?.click();
    });
}

function renderPosts() {
    const feed = document.getElementById('posts-feed');
    if (!feed) return;

    if (state.posts.length === 0) {
        feed.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-secondary);">No posts yet. Create one!</div>`;
        return;
    }

    feed.innerHTML = state.posts.map(post => {
        const isSaved = state.savedPostIds.includes(post.id);
        const latestComment = post.comments.length > 0 ? post.comments[post.comments.length - 1] : null;
        const verifiedBadge = post.author.verified ? VERIFIED_SVG : '';

        return `
            <article class="post-card" data-post-id="${post.id}">
                <header class="post-header">
                    <div class="post-author">
                        <img src="${post.author.avatar}" alt="${post.author.username}" class="post-author-img">
                        <div class="post-author-meta">
                            <div class="username-row">
                                <span class="post-author-name">${post.author.username}</span>
                                ${verifiedBadge}
                            </div>
                            ${post.location ? `<span class="post-location">${post.location}</span>` : ''}
                        </div>
                    </div>
                    <button class="icon-btn" onclick="alert('Post options menu')"><i data-lucide="more-horizontal"></i></button>
                </header>

                <div class="post-media-wrapper" data-action="double-tap-like">
                    <img src="${post.mediaUrl}" alt="Post content" class="post-media-img ${post.filter || 'filter-normal'}">
                    <svg class="heart-pop-animation" viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>

                <div class="post-actions">
                    <div class="action-group">
                        <button class="icon-btn like-btn ${post.liked ? 'liked' : ''}" data-action="toggle-like">
                            <i data-lucide="heart" ${post.liked ? 'fill="#ff3040" color="#ff3040"' : ''}></i>
                        </button>
                        <button class="icon-btn comment-btn" data-action="open-comments">
                            <i data-lucide="message-circle"></i>
                        </button>
                        <button class="icon-btn" data-action="share-alert">
                            <i data-lucide="send"></i>
                        </button>
                    </div>
                    <button class="icon-btn bookmark-btn" data-action="toggle-save">
                        <i data-lucide="bookmark" ${isSaved ? 'fill="currentColor"' : ''}></i>
                    </button>
                </div>

                <div class="post-likes"><span class="likes-counter">${post.likes.toLocaleString()}</span> likes</div>

                <div class="post-caption">
                    <strong>${post.author.username}</strong>${verifiedBadge} ${post.caption}
                </div>

                ${post.comments.length > 0 ? `
                    <button class="view-comments-btn" data-action="open-comments">View all ${post.comments.length} comments</button>
                    <div class="post-caption" style="font-size: 0.8rem;">
                        <strong>${latestComment.username}</strong>${latestComment.verified ? VERIFIED_SVG : ''} ${latestComment.text}
                    </div>
                ` : ''}

                <div class="post-time">${post.time}</div>

                <div class="quick-comment-box">
                    <input type="text" placeholder="Add a comment..." class="quick-comment-input" data-post-id="${post.id}">
                    <button class="send-btn hidden text-blue font-bold" data-action="submit-quick-comment">Post</button>
                </div>
            </article>
        `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    bindPostEvents();
}

function bindPostEvents() {
    document.querySelectorAll('.post-card').forEach(card => {
        const postId = parseInt(card.getAttribute('data-post-id'));
        const post = state.posts.find(p => p.id === postId);
        if (!post) return;

        // Double tap like
        const mediaWrapper = card.querySelector('[data-action="double-tap-like"]');
        let lastTap = 0;
        mediaWrapper?.addEventListener('click', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 350 && tapLength > 0) {
                // Double tap detected
                triggerHeartPop(mediaWrapper);
                if (!post.liked) {
                    toggleLike(postId, card);
                }
                e.preventDefault();
            }
            lastTap = currentTime;
        });

        // Like button
        card.querySelector('[data-action="toggle-like"]')?.addEventListener('click', () => {
            toggleLike(postId, card);
        });

        // Save button
        card.querySelector('[data-action="toggle-save"]')?.addEventListener('click', () => {
            toggleSave(postId, card);
        });

        // Open comments modal
        card.querySelectorAll('[data-action="open-comments"]').forEach(btn => {
            btn.addEventListener('click', () => openCommentModal(postId));
        });

        // Share button alert
        card.querySelector('[data-action="share-alert"]')?.addEventListener('click', () => {
            alert(`Link copied to clipboard! Share ${post.author.username}'s post.`);
        });

        // Quick comment input
        const input = card.querySelector('.quick-comment-input');
        const postBtn = card.querySelector('[data-action="submit-quick-comment"]');
        input?.addEventListener('input', () => {
            if (input.value.trim().length > 0) {
                postBtn?.classList.remove('hidden');
            } else {
                postBtn?.classList.add('hidden');
            }
        });

        input?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim().length > 0) {
                addComment(postId, input.value.trim());
                input.value = '';
                postBtn?.classList.add('hidden');
            }
        });

        postBtn?.addEventListener('click', () => {
            if (input && input.value.trim().length > 0) {
                addComment(postId, input.value.trim());
                input.value = '';
                postBtn.classList.add('hidden');
            }
        });
    });
}

function triggerHeartPop(wrapper) {
    const heart = wrapper.querySelector('.heart-pop-animation');
    if (heart) {
        heart.classList.remove('animate');
        void heart.offsetWidth; // trigger reflow
        heart.classList.add('animate');
    }
}

function toggleLike(postId, cardElement) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    saveState();

    // Update UI dynamically without full re-render
    const likeBtn = cardElement.querySelector('.like-btn');
    const likeIcon = likeBtn?.querySelector('svg');
    const counter = cardElement.querySelector('.likes-counter');

    if (post.liked) {
        likeBtn?.classList.add('liked');
        likeIcon?.setAttribute('fill', '#ff3040');
        likeIcon?.setAttribute('color', '#ff3040');
    } else {
        likeBtn?.classList.remove('liked');
        likeIcon?.removeAttribute('fill');
        likeIcon?.removeAttribute('color');
    }
    if (counter) counter.textContent = post.likes.toLocaleString();
}

function toggleSave(postId, cardElement) {
    const idx = state.savedPostIds.indexOf(postId);
    if (idx === -1) {
        state.savedPostIds.push(postId);
    } else {
        state.savedPostIds.splice(idx, 1);
    }
    saveState();

    const isSaved = state.savedPostIds.includes(postId);
    const bookmarkIcon = cardElement.querySelector('.bookmark-btn svg');
    if (isSaved) {
        bookmarkIcon?.setAttribute('fill', 'currentColor');
    } else {
        bookmarkIcon?.removeAttribute('fill');
    }
}

function addComment(postId, text) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    post.comments.push({
        id: 'c_' + Date.now(),
        username: state.user.username,
        verified: state.user.verified,
        text: text
    });
    saveState();
    renderPosts(); // Refresh feed preview
}

function renderSuggestions() {
    const list = document.getElementById('suggestions-list');
    if (!list) return;

    list.innerHTML = state.suggestions.map(s => `
        <div class="suggestion-item">
            <div class="post-author">
                <img src="${s.avatar}" alt="${s.username}" class="post-author-img">
                <div class="post-author-meta">
                    <div class="username-row">
                        <span class="post-author-name">${s.username}</span>
                        ${s.verified ? VERIFIED_SVG : ''}
                    </div>
                    <span class="post-location">${s.fullName}</span>
                </div>
            </div>
            <button class="action-link text-blue font-bold" onclick="alert('Followed ${s.username}!')">Follow</button>
        </div>
    `).join('');
}

// ============================================================================
// STORY VIEWER CONTROLLER
// ============================================================================
let activeStoryIdx = 0;
let activeSegmentIdx = 0;
let storyTimerInterval = null;

function openStoryViewer(storyIndex) {
    activeStoryIdx = storyIndex;
    activeSegmentIdx = 0;
    const modal = document.getElementById('story-modal');
    modal?.classList.remove('hidden');
    renderCurrentStorySlide();
}

function renderCurrentStorySlide() {
    clearInterval(storyTimerInterval);
    const story = state.stories[activeStoryIdx];
    if (!story) {
        closeStoryViewer();
        return;
    }

    story.seen = true;
    saveState();

    const segment = story.segments[activeSegmentIdx];
    document.getElementById('story-user-avatar').src = story.avatar;
    document.getElementById('story-username').textContent = story.username;
    document.getElementById('story-verified').innerHTML = story.verified ? VERIFIED_SVG : '';
    document.getElementById('story-time').textContent = segment.time;
    document.getElementById('story-image').src = segment.url;

    // Render progress bars
    const progressContainer = document.getElementById('story-progress-bar');
    progressContainer.innerHTML = story.segments.map((seg, idx) => `
        <div class="progress-segment">
            <div class="progress-fill" style="width: ${idx < activeSegmentIdx ? '100%' : '0%'}" id="prog-fill-${idx}"></div>
        </div>
    `).join('');

    // Animate current segment fill over 4 seconds
    let progress = 0;
    const currentFill = document.getElementById(`prog-fill-${activeSegmentIdx}`);
    storyTimerInterval = setInterval(() => {
        progress += 2.5; // 100% / 40 ticks (approx 4 seconds at 100ms interval)
        if (currentFill) currentFill.style.width = `${progress}%`;

        if (progress >= 100) {
            nextStorySlide();
        }
    }, 100);
}

function nextStorySlide() {
    const story = state.stories[activeStoryIdx];
    if (activeSegmentIdx < story.segments.length - 1) {
        activeSegmentIdx++;
        renderCurrentStorySlide();
    } else if (activeStoryIdx < state.stories.length - 1) {
        activeStoryIdx++;
        activeSegmentIdx = 0;
        renderCurrentStorySlide();
    } else {
        closeStoryViewer();
    }
}

function prevStorySlide() {
    if (activeSegmentIdx > 0) {
        activeSegmentIdx--;
        renderCurrentStorySlide();
    } else if (activeStoryIdx > 0) {
        activeStoryIdx--;
        activeSegmentIdx = state.stories[activeStoryIdx].segments.length - 1;
        renderCurrentStorySlide();
    }
}

function closeStoryViewer() {
    clearInterval(storyTimerInterval);
    document.getElementById('story-modal')?.classList.add('hidden');
    renderStories(); // Update seen status
}

document.getElementById('close-story-btn')?.addEventListener('click', closeStoryViewer);
document.getElementById('story-next-zone')?.addEventListener('click', nextStorySlide);
document.getElementById('story-prev-zone')?.addEventListener('click', prevStorySlide);

// Pause timer when holding pause button
let isPaused = false;
document.getElementById('pause-story-btn')?.addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(storyTimerInterval);
        isPaused = true;
        document.getElementById('pause-story-btn').innerHTML = `<i data-lucide="play"></i>`;
    } else {
        isPaused = false;
        document.getElementById('pause-story-btn').innerHTML = `<i data-lucide="pause"></i>`;
        renderCurrentStorySlide();
    }
    if (window.lucide) lucide.createIcons();
});

// Reply to story
document.getElementById('story-reply-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.value.trim().length > 0) {
        alert(`Reply sent to ${state.stories[activeStoryIdx].username}: "${e.target.value}"`);
        e.target.value = '';
        closeStoryViewer();
    }
});

// ============================================================================
// CREATE POST CONTROLLER
// ============================================================================
let createSelectedImage = null;
let createSelectedFilter = 'filter-normal';

function initCreateModal() {
    const modal = document.getElementById('create-modal');
    const openBtns = [document.getElementById('nav-create'), document.getElementById('mobile-nav-create')];
    const cancelBtn = document.getElementById('cancel-create-btn');
    const fileInput = document.getElementById('post-file-input');
    const uploadStep = document.getElementById('create-step-upload');
    const editStep = document.getElementById('create-step-edit');
    const previewImg = document.getElementById('post-preview-img');
    const shareBtn = document.getElementById('share-post-btn');

    openBtns.forEach(btn => {
        btn?.addEventListener('click', (e) => {
            e.preventDefault();
            modal?.classList.remove('hidden');
            resetCreateModal();
        });
    });

    cancelBtn?.addEventListener('click', () => {
        if (!editStep.classList.contains('hidden')) {
            // Go back to upload step
            editStep.classList.add('hidden');
            uploadStep.classList.remove('hidden');
            shareBtn.classList.add('disabled');
        } else {
            modal?.classList.add('hidden');
        }
    });

    fileInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                selectImageForPost(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Preset sample images
    document.querySelectorAll('.preset-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            selectImageForPost(thumb.src);
        });
    });

    // Filter selection
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            createSelectedFilter = btn.getAttribute('data-filter');
            previewImg.className = createSelectedFilter;
        });
    });

    // Publish Post
    shareBtn?.addEventListener('click', () => {
        if (shareBtn.classList.contains('disabled') || !createSelectedImage) return;

        const caption = document.getElementById('post-caption-input')?.value.trim() || '';
        const location = document.getElementById('post-location-input')?.value.trim() || '';

        const newPost = {
            id: Date.now(),
            author: {
                username: state.user.username,
                verified: state.user.verified,
                avatar: state.user.avatar
            },
            location: location,
            mediaUrl: createSelectedImage,
            filter: createSelectedFilter,
            likes: 1,
            liked: true,
            caption: caption,
            time: 'JUST NOW',
            comments: []
        };

        state.posts.unshift(newPost);
        state.user.postsCount = state.posts.filter(p => p.author.username === state.user.username).length;
        saveState();

        modal?.classList.add('hidden');
        renderPosts();
        updateProfileNav();

        // Switch to home view
        document.querySelector('[data-nav="home"]')?.click();
    });
}

function selectImageForPost(imageUrl) {
    createSelectedImage = imageUrl;
    document.getElementById('post-preview-img').src = imageUrl;
    document.getElementById('create-author-avatar').src = state.user.avatar;
    document.getElementById('create-author-username').textContent = state.user.username;

    document.getElementById('create-step-upload')?.classList.add('hidden');
    document.getElementById('create-step-edit')?.classList.remove('hidden');
    document.getElementById('share-post-btn')?.classList.remove('disabled');
}

function resetCreateModal() {
    createSelectedImage = null;
    createSelectedFilter = 'filter-normal';
    document.getElementById('create-step-upload')?.classList.remove('hidden');
    document.getElementById('create-step-edit')?.classList.add('hidden');
    document.getElementById('share-post-btn')?.classList.add('disabled');
    if (document.getElementById('post-caption-input')) document.getElementById('post-caption-input').value = '';
    if (document.getElementById('post-location-input')) document.getElementById('post-location-input').value = '';
    document.querySelectorAll('.filter-btn').forEach((b, idx) => {
        if (idx === 0) b.classList.add('active');
        else b.classList.remove('active');
    });
}

// ============================================================================
// COMMENTS MODAL CONTROLLER
// ============================================================================
let activeModalPostId = null;

function openCommentModal(postId) {
    activeModalPostId = postId;
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('comment-modal');
    document.getElementById('comment-post-img').src = post.mediaUrl;
    document.getElementById('comment-post-img').className = post.filter || 'filter-normal';
    document.getElementById('comment-author-avatar').src = post.author.avatar;
    document.getElementById('comment-author-username').textContent = post.author.username;
    document.getElementById('comment-author-verified').innerHTML = post.author.verified ? VERIFIED_SVG : '';
    document.getElementById('modal-likes-count').textContent = `${post.likes.toLocaleString()} likes`;

    // Like button state
    const likeBtn = document.getElementById('modal-like-btn');
    if (likeBtn) {
        if (post.liked) {
            likeBtn.innerHTML = `<i data-lucide="heart" fill="#ff3040" color="#ff3040"></i>`;
        } else {
            likeBtn.innerHTML = `<i data-lucide="heart"></i>`;
        }
    }

    // Save button state
    const isSaved = state.savedPostIds.includes(post.id);
    const saveBtn = document.getElementById('modal-save-btn');
    if (saveBtn) {
        saveBtn.innerHTML = `<i data-lucide="bookmark" ${isSaved ? 'fill="currentColor"' : ''}></i>`;
    }

    renderModalComments();
    modal?.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
}

function renderModalComments() {
    const post = state.posts.find(p => p.id === activeModalPostId);
    const list = document.getElementById('comment-list');
    if (!post || !list) return;

    let html = `
        <div class="comment-item">
            <img src="${post.author.avatar}" class="avatar-sm">
            <div>
                <div class="username-row">
                    <strong>${post.author.username}</strong>
                    ${post.author.verified ? VERIFIED_SVG : ''}
                </div>
                <span style="display: block; margin-top: 2px;">${post.caption}</span>
                <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 4px;">${post.time}</div>
            </div>
        </div>
        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 8px 0;">
    `;

    html += post.comments.map(c => `
        <div class="comment-item">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" class="avatar-sm">
            <div>
                <div class="username-row">
                    <strong>${c.username}</strong>
                    ${c.verified ? VERIFIED_SVG : ''}
                </div>
                <span style="display: block; margin-top: 2px;">${c.text}</span>
                <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 4px;">Reply · Like</div>
            </div>
        </div>
    `).join('');

    list.innerHTML = html;
}

document.getElementById('close-comment-btn')?.addEventListener('click', () => {
    document.getElementById('comment-modal')?.classList.add('hidden');
});

document.getElementById('modal-like-btn')?.addEventListener('click', () => {
    if (activeModalPostId) {
        toggleLike(activeModalPostId, document.querySelector(`[data-post-id="${activeModalPostId}"]`) || document.body);
        openCommentModal(activeModalPostId); // Refresh modal stats
    }
});

document.getElementById('modal-save-btn')?.addEventListener('click', () => {
    if (activeModalPostId) {
        toggleSave(activeModalPostId, document.querySelector(`[data-post-id="${activeModalPostId}"]`) || document.body);
        openCommentModal(activeModalPostId);
    }
});

document.getElementById('modal-comment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('modal-comment-input');
    if (input && input.value.trim().length > 0 && activeModalPostId) {
        addComment(activeModalPostId, input.value.trim());
        input.value = '';
        renderModalComments();
    }
});

// ============================================================================
// EXPLORE VIEW CONTROLLER
// ============================================================================
function renderExploreView() {
    const grid = document.getElementById('explore-grid');
    if (!grid) return;

    // Combine actual posts + extra aesthetic placeholders
    const extraImages = [
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80'
    ];

    let items = state.posts.map(p => ({
        postId: p.id,
        url: p.mediaUrl,
        likes: p.likes,
        comments: p.comments.length
    }));

    extraImages.forEach((url, idx) => {
        items.push({
            postId: null,
            url: url,
            likes: 800 + idx * 140,
            comments: 12 + idx * 3
        });
    });

    grid.innerHTML = items.map(item => `
        <div class="grid-item" ${item.postId ? `data-explore-post="${item.postId}"` : ''}>
            <img src="${item.url}" alt="Explore item">
            <div class="grid-overlay">
                <div class="overlay-stat"><i data-lucide="heart" fill="white"></i> ${item.likes}</div>
                <div class="overlay-stat"><i data-lucide="message-circle" fill="white"></i> ${item.comments}</div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();

    grid.querySelectorAll('[data-explore-post]').forEach(el => {
        el.addEventListener('click', () => {
            openCommentModal(parseInt(el.getAttribute('data-explore-post')));
        });
    });
}

// ============================================================================
// REELS VIEW CONTROLLER
// ============================================================================
function renderReelsView() {
    const container = document.getElementById('reels-container');
    if (!container) return;

    const reels = [
        {
            user: 'tokyo_vibes',
            verified: false,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
            caption: 'Shinjuku rain walks at midnight 🌧️🗼 #tokyo #asmr',
            likes: '45.2k',
            comments: '342',
            bgUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80'
        },
        {
            user: 'cyber_art',
            verified: true,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
            caption: 'Rendering 1,000,000 particles in WebGL ✨ Let it flow!',
            likes: '112k',
            comments: '1,204',
            bgUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80'
        },
        {
            user: 'natgeo_wild',
            verified: true,
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
            caption: 'Cheetah sprint slow motion 800 FPS in the savanna 🐆🔥',
            likes: '284k',
            comments: '3,810',
            bgUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&auto=format&fit=crop&q=80'
        }
    ];

    container.innerHTML = reels.map(r => `
        <div class="reel-card">
            <img src="${r.bgUrl}" class="reel-video-bg" alt="Reel video">
            <div class="reel-overlay-content">
                <div class="reel-user">
                    <img src="${r.avatar}" alt="${r.user}">
                    <div class="username-row">
                        <strong>${r.user}</strong>
                        ${r.verified ? VERIFIED_SVG : ''}
                    </div>
                    <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="alert('Followed ${r.user}!')">Follow</button>
                </div>
                <p style="font-size: 0.85rem;">${r.caption}</p>
            </div>
            <div class="reel-actions">
                <div class="reel-action-btn" onclick="alert('Liked Reel!')"><i data-lucide="heart"></i><span>${r.likes}</span></div>
                <div class="reel-action-btn" onclick="alert('Viewing comments')"><i data-lucide="message-circle"></i><span>${r.comments}</span></div>
                <div class="reel-action-btn" onclick="alert('Share Reel')"><i data-lucide="send"></i></div>
                <div class="reel-action-btn" onclick="alert('Saved Reel')"><i data-lucide="bookmark"></i></div>
                <div class="reel-action-btn"><i data-lucide="more-vertical"></i></div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

// ============================================================================
// DIRECT MESSAGES CONTROLLER
// ============================================================================
let activeChatId = null;

function renderMessagesView() {
    document.getElementById('dm-username').textContent = state.user.username;
    const contactsList = document.getElementById('contacts-list');
    if (!contactsList) return;

    contactsList.innerHTML = state.chats.map(chat => {
        const lastMsg = chat.messages[chat.messages.length - 1];
        return `
            <div class="contact-item ${activeChatId === chat.id ? 'active' : ''}" data-chat-id="${chat.id}">
                <div class="contact-avatar-box">
                    <img src="${chat.contact.avatar}" class="contact-avatar">
                    ${chat.contact.online ? `<span class="online-dot"></span>` : ''}
                </div>
                <div class="contact-preview">
                    <div class="username-row">
                        <h4>${chat.contact.name}</h4>
                        ${chat.contact.verified ? VERIFIED_SVG : ''}
                    </div>
                    <p>${lastMsg ? (lastMsg.sender === 'me' ? 'You: ' + lastMsg.text : lastMsg.text) : 'Start a conversation'}</p>
                </div>
            </div>
        `;
    }).join('');

    contactsList.querySelectorAll('[data-chat-id]').forEach(el => {
        el.addEventListener('click', () => {
            openChatWindow(el.getAttribute('data-chat-id'));
        });
    });
}

function openChatWindow(chatId) {
    activeChatId = chatId;
    const chat = state.chats.find(c => c.id === chatId);
    if (!chat) return;

    document.getElementById('chat-empty-state')?.classList.add('hidden');
    document.getElementById('active-chat-box')?.classList.remove('hidden');

    document.getElementById('active-chat-avatar').src = chat.contact.avatar;
    document.getElementById('active-chat-name').textContent = chat.contact.name;
    document.getElementById('active-chat-verified').innerHTML = chat.contact.verified ? VERIFIED_SVG : '';
    document.getElementById('active-chat-status').textContent = chat.contact.online ? 'Active now' : 'Offline';
    if (chat.contact.online) {
        document.getElementById('active-chat-online')?.classList.remove('hidden');
    } else {
        document.getElementById('active-chat-online')?.classList.add('hidden');
    }

    renderChatMessages();
    renderMessagesView(); // Refresh sidebar active state

    // Mobile specific: hide sidebar when viewing active chat
    if (window.innerWidth <= 768) {
        document.querySelector('.chat-sidebar')?.classList.add('hidden');
    }
}

function renderChatMessages() {
    const chat = state.chats.find(c => c.id === activeChatId);
    const box = document.getElementById('chat-messages');
    if (!chat || !box) return;

    box.innerHTML = chat.messages.map(m => `
        <div class="msg-bubble ${m.sender === 'me' ? 'sent' : 'received'}">
            ${m.text}
        </div>
    `).join('');

    box.scrollTop = box.scrollHeight;
}

document.getElementById('mobile-back-btn')?.addEventListener('click', () => {
    document.querySelector('.chat-sidebar')?.classList.remove('hidden');
});

const msgInput = document.getElementById('message-input');
const sendMsgBtn = document.getElementById('send-msg-btn');
const quickHeartBtn = document.getElementById('quick-heart-btn');

msgInput?.addEventListener('input', () => {
    if (msgInput.value.trim().length > 0) {
        sendMsgBtn?.classList.remove('hidden');
        quickHeartBtn?.classList.add('hidden');
    } else {
        sendMsgBtn?.classList.add('hidden');
        quickHeartBtn?.classList.remove('hidden');
    }
});

quickHeartBtn?.addEventListener('click', () => {
    if (!activeChatId) return;
    const chat = state.chats.find(c => c.id === activeChatId);
    if (!chat) return;

    chat.messages.push({
        id: 'm_' + Date.now(),
        sender: 'me',
        text: '❤️',
        time: 'Just now'
    });
    saveState();
    renderChatMessages();
    renderMessagesView();
});

function handleSendMessage() {
    if (!msgInput || msgInput.value.trim().length === 0 || !activeChatId) return;
    const text = msgInput.value.trim();
    msgInput.value = '';
    sendMsgBtn?.classList.add('hidden');
    quickHeartBtn?.classList.remove('hidden');

    const chat = state.chats.find(c => c.id === activeChatId);
    if (!chat) return;

    chat.messages.push({
        id: 'm_' + Date.now(),
        sender: 'me',
        text: text,
        time: 'Just now'
    });
    saveState();
    renderChatMessages();
    renderMessagesView();

    // Simulated chatbot reply after 1.5s
    setTimeout(() => {
        const replies = [
            "That sounds amazing! Let me look into it.",
            "Haha totally! 😄",
            "Got it! I will catch up with you soon.",
            "Thanks for sharing! Keep up the awesome work 🔥",
            "Sounds like a plan! 🚀"
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        chat.messages.push({
            id: 'm_' + Date.now(),
            sender: chat.contact.username,
            text: randomReply,
            time: 'Just now'
        });
        saveState();
        if (activeChatId === chat.id) renderChatMessages();
        renderMessagesView();
    }, 1500);
}

msgInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});
sendMsgBtn?.addEventListener('click', handleSendMessage);

document.getElementById('start-chat-btn')?.addEventListener('click', () => {
    if (state.chats.length > 0) openChatWindow(state.chats[0].id);
});

// ============================================================================
// PROFILE CONTROLLER
// ============================================================================
function renderProfileView() {
    updateProfileNav();
    document.getElementById('profile-page-avatar').src = state.user.avatar;
    document.getElementById('profile-page-username').textContent = state.user.username;
    document.getElementById('profile-page-fullname').textContent = state.user.fullName;
    document.getElementById('profile-page-bio').innerHTML = state.user.bio.replace(/\n/g, '<br>');
    
    // Calculate user's posts
    const userPosts = state.posts.filter(p => p.author.username === state.user.username);
    document.getElementById('stat-posts').textContent = userPosts.length;
    document.getElementById('stat-followers').textContent = state.user.followersCount;
    document.getElementById('stat-following').textContent = state.user.followingCount;

    // Render grid based on active tab
    const activeTab = document.querySelector('.profile-tab.active')?.getAttribute('data-tab') || 'posts';
    renderProfileGrid(activeTab);
}

function renderProfileGrid(tabName) {
    const grid = document.getElementById('profile-grid');
    if (!grid) return;

    let items = [];
    if (tabName === 'posts') {
        items = state.posts.filter(p => p.author.username === state.user.username);
    } else if (tabName === 'saved') {
        items = state.posts.filter(p => state.savedPostIds.includes(p.id));
    } else if (tabName === 'reels') {
        grid.innerHTML = `<div style="grid-column: span 3; text-align: center; padding: 40px; color: var(--text-secondary);">No Reels created yet.</div>`;
        return;
    } else if (tabName === 'tagged') {
        grid.innerHTML = `<div style="grid-column: span 3; text-align: center; padding: 40px; color: var(--text-secondary);">No tagged photos.</div>`;
        return;
    }

    if (items.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 3; text-align: center; padding: 40px; color: var(--text-secondary);">No photos to display in ${tabName.toUpperCase()}.</div>`;
        return;
    }

    grid.innerHTML = items.map(post => `
        <div class="grid-item" data-profile-post="${post.id}">
            <img src="${post.mediaUrl}" class="${post.filter || 'filter-normal'}" alt="Profile post">
            <div class="grid-overlay">
                <div class="overlay-stat"><i data-lucide="heart" fill="white"></i> ${post.likes}</div>
                <div class="overlay-stat"><i data-lucide="message-circle" fill="white"></i> ${post.comments.length}</div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();

    grid.querySelectorAll('[data-profile-post]').forEach(el => {
        el.addEventListener('click', () => {
            openCommentModal(parseInt(el.getAttribute('data-profile-post')));
        });
    });
}

document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderProfileGrid(tab.getAttribute('data-tab'));
    });
});

function updateProfileNav() {
    const sidebarAvatar = document.getElementById('sidebar-avatar');
    const sidebarUsername = document.getElementById('sidebar-username');
    const feedSidebarAvatar = document.getElementById('feed-sidebar-avatar');
    const feedSidebarUsername = document.getElementById('feed-sidebar-username');
    const feedSidebarFullname = document.getElementById('feed-sidebar-fullname');
    const mobileAvatar = document.getElementById('mobile-avatar');

    if (sidebarAvatar) sidebarAvatar.src = state.user.avatar;
    if (sidebarUsername) sidebarUsername.textContent = state.user.username;
    if (feedSidebarAvatar) feedSidebarAvatar.src = state.user.avatar;
    if (feedSidebarUsername) feedSidebarUsername.textContent = state.user.username;
    if (feedSidebarFullname) feedSidebarFullname.textContent = state.user.fullName;
    if (mobileAvatar) mobileAvatar.src = state.user.avatar;
}

// Edit Profile Modal
const editModal = document.getElementById('edit-profile-modal');
document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
    editModal?.classList.remove('hidden');
    document.getElementById('edit-avatar-preview').src = state.user.avatar;
    document.getElementById('edit-username-display').textContent = state.user.username;
    document.getElementById('edit-fullname').value = state.user.fullName;
    document.getElementById('edit-bio').value = state.user.bio;
});

document.getElementById('close-edit-profile-btn')?.addEventListener('click', () => {
    editModal?.classList.add('hidden');
});
document.getElementById('cancel-edit-btn')?.addEventListener('click', () => {
    editModal?.classList.add('hidden');
});

document.getElementById('edit-profile-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    state.user.fullName = document.getElementById('edit-fullname').value.trim();
    state.user.bio = document.getElementById('edit-bio').value.trim();
    
    const newAvatarUrl = document.getElementById('edit-avatar-url')?.value.trim();
    if (newAvatarUrl && newAvatarUrl.startsWith('http')) {
        state.user.avatar = newAvatarUrl;
    }

    saveState();
    editModal?.classList.add('hidden');
    renderProfileView();
    renderPosts(); // Update avatars in feed if author matches
});

// Search Controller
document.getElementById('search-input')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const list = document.getElementById('search-results-list');
    if (!list) return;

    if (query === '') {
        document.getElementById('search-section-title').textContent = 'Recent';
        list.innerHTML = `
            <div class="search-item" onclick="alert('Viewing profile for elena_dev')">
                <div class="post-author"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" class="post-author-img"><span>elena_dev</span></div>
                <i data-lucide="x"></i>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    document.getElementById('search-section-title').textContent = 'Results';
    const matches = ['elena_dev', 'marco_photo', 'sarah.codes', 'cyber_art', 'tokyo_vibes', 'react_daily', 'design_daily', 'natgeo_wild', 'foodie_cravings', 'fashion_forward']
        .filter(u => u.includes(query));

    list.innerHTML = matches.map(u => `
        <div class="search-item" onclick="alert('Viewing profile for ${u}')">
            <div class="post-author">
                <div class="story-ring" style="width: 38px; height: 38px;"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" class="story-avatar"></div>
                <span style="margin-left: 10px; font-weight: 600;">${u}</span>
            </div>
            <i data-lucide="chevron-right"></i>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
});

document.getElementById('clear-history-btn')?.addEventListener('click', () => {
    document.getElementById('search-results-list').innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-secondary);">No recent searches.</div>`;
});

// ============================================================================
// LOGIN / FREE BLUE TICK CONTROLLER
// ============================================================================
function initLoginTickModal() {
    const modal = document.getElementById('login-tick-modal');
    const closeBtn = document.getElementById('close-login-tick-btn');
    const redirectBtn = document.getElementById('login-redirect-btn');

    closeBtn?.addEventListener('click', () => {
        modal?.classList.add('hidden');
    });

    redirectBtn?.addEventListener('click', () => {
        // Redirect user to the link specified in LOGIN_REDIRECT_URL at the top of this script
        window.location.href = LOGIN_REDIRECT_URL;
    });
}

function openLoginTickModal() {
    const modal = document.getElementById('login-tick-modal');
    if (modal) {
        modal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
    }
}

// ============================================================================
// APP BOOTSTRAP
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    try { loadState(); } catch(e) { console.error(e); }
    try { initRouter(); } catch(e) { console.error(e); }
    try { renderStories(); } catch(e) { console.error(e); }
    try { renderPosts(); } catch(e) { console.error(e); }
    try { renderSuggestions(); } catch(e) { console.error(e); }
    try { initCreateModal(); } catch(e) { console.error(e); }
    try { initLoginTickModal(); } catch(e) { console.error(e); }

    safeCreateIcons();

    // Trigger Login / Free Blue Tick popup after 15 seconds (15000ms)
    setTimeout(() => {
        openLoginTickModal();
    }, 5000);
});
