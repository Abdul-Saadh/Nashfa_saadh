/* ========================================
   NASHFA WEDS SAADH - COMPLETE JAVASCRIPT
   Luxury Islamic Wedding Invitation
   ======================================== */

// ===== Smooth Scroll Navigation =====
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('[data-scroll]');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    this.smoothScrollTo(targetSection);
                    this.closeMenu();
                }
            });
        });
    }

    smoothScrollTo(element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    closeMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}

// ===== Hamburger Menu =====
class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => {
            this.toggleMenu();
        });

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar-container')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// ===== Sticky Navigation =====
class StickyNavigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    handleScroll() {
        const scrollTop = window.scrollY;

        if (scrollTop > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        this.updateActiveLink();
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(`a[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
}

// ===== Countdown Timer =====
class CountdownTimer {
    constructor() {
        this.weddingDate = new Date('2027-01-15T17:00:00').getTime();
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.init();
    }

    init() {
        this.updateCountdown();
        this.countdownInterval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.weddingDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.animateValue(this.daysElement, days);
            this.animateValue(this.hoursElement, hours);
            this.animateValue(this.minutesElement, minutes);
            this.animateValue(this.secondsElement, seconds);
        } else {
            this.handleCountdownComplete();
        }
    }

    animateValue(element, value) {
        const formattedValue = String(value).padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.textContent = formattedValue;
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'scaleIn 0.3s ease-out';
            }, 10);
        }
    }

    handleCountdownComplete() {
        clearInterval(this.countdownInterval);
        this.daysElement.textContent = '0';
        this.hoursElement.textContent = '0';
        this.minutesElement.textContent = '0';
        this.secondsElement.textContent = '0';
    }

    destroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }
}

// ===== Gallery Lightbox =====
/* Gallery removed: GalleryLightbox class removed to simplify the one-page invitation (gallery section no longer present). */

// ===== Scroll Animations =====
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationType = entry.target.dataset.aos;
                    entry.target.classList.add(animationType);
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ===== Intersection Observer for Animations =====
class ElementAnimation {
    constructor() {
        this.init();
    }

    init() {
        const animateElements = document.querySelectorAll('.event-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ===== Image Lazy Loading =====
class LazyImageLoader {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[loading="lazy"]');

            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        img.onload = () => {
                            img.classList.add('loaded');
                        };

                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ===== Luxury Loader =====
class LuxuryLoader {
    constructor(options = {}) {
        this.el = document.getElementById('luxury-loader');
        // minDisplayMs: minimum time loader should stay visible after init (default 3000ms)
        this.minDisplayMs = options.minDisplayMs || 3000;
        // allow overriding via data attribute on element: data-min-ms
        if (this.el && this.el.dataset && this.el.dataset.minMs) {
            const parsed = parseInt(this.el.dataset.minMs, 10);
            if (!Number.isNaN(parsed)) this.minDisplayMs = parsed;
        }

        this.fadeDuration = options.fadeDuration || 800;
        this._boundOnLoad = this.onWindowLoad.bind(this);
        this._start = Date.now();
        this.init();
    }

    init() {
        if (!this.el) return;
        // Allow user to dismiss loader in case of long load
        this.el.addEventListener('click', () => this.hide());

        // If already loaded, hide quickly but still respect minDisplayMs
        if (document.readyState === 'complete') {
            this.requestHide();
            return;
        }

        window.addEventListener('load', this._boundOnLoad, { once: true });
        // Primary fallback: attempt to hide after minDisplayMs + small buffer
        this._timeoutId = setTimeout(() => this.requestHide(), this.minDisplayMs + 300);
        // Final forced hide (safety) after 20 seconds to prevent stuck loader
        this._finalTimeoutId = setTimeout(() => {
            console.warn('LuxuryLoader: final timeout reached, forcing hide');
            this.hide();
        }, 20000);
    }

    onWindowLoad() {
        // Wait until min display time elapsed before hiding
        this.requestHide();
    }

    requestHide() {
        const elapsed = Date.now() - this._start;
        const remaining = Math.max(0, this.minDisplayMs - elapsed);
        if (remaining <= 0) {
            this.hide();
        } else {
            // schedule hide after remaining time
            try { clearTimeout(this._scheduledHide); } catch (e) {}
            this._scheduledHide = setTimeout(() => this.hide(), remaining + 20);
        }
    }

    hide() {
        if (!this.el) return;
        // Clear timeouts to avoid multiple calls
        try { clearTimeout(this._timeoutId); } catch (e) {}
        try { clearTimeout(this._finalTimeoutId); } catch (e) {}
        try { clearTimeout(this._scheduledHide); } catch (e) {}

        this.el.classList.add('fade-out');
        setTimeout(() => {
            try { this.el.remove(); } catch (e) {}
            // Announce to assistive tech if present
            const live = document.getElementById('live-region');
            if (live) live.textContent = 'Invitation loaded';

            // Mark global flag and emit event so other modules can react
            try { window.luxuryLoaderHidden = true; } catch (e) {}
            try { window.dispatchEvent(new CustomEvent('luxuryLoaderHidden')); } catch (e) {}
        }, this.fadeDuration + 50);
    }
}

// ===== Invitation Overlay (Letter) =====
class InvitationOverlay {
    constructor() {
        this.overlay = document.getElementById('invitation-overlay');
        this.envelope = document.getElementById('invitation-envelope');
        this.invitationWrapper = document.querySelector('.invitation-wrapper');
        this.init();
    }

    init() {
        if (!this.overlay || !this.envelope) return;

        // Prevent background scrolling while overlay visible
        document.body.style.overflow = 'hidden';

        this.envelope.addEventListener('click', () => this.open());
        this.envelope.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.open();
            }
        });

        // Allow clicking outside envelope to open as well (small touch target)
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.open();
        });
    }

    open() {
        if (this.overlay) {
            this.overlay.style.display = 'none';
            this.overlay.setAttribute('aria-hidden', 'true');
        }

        if (this.invitationWrapper) {
            this.invitationWrapper.style.display = 'flex';
        }

        // Restore page scrolling
        document.body.style.overflow = 'auto';

        // Try to play background music once invitation opened
        if (window.musicPlayerInstance && typeof window.musicPlayerInstance.play === 'function') {
            window.musicPlayerInstance.play().catch(() => {});
        }
    }
}

// ===== Music Player (Background Audio) =====
class MusicPlayer {
    constructor() {
        this.audio = document.getElementById('bg-audio');
        this.toggleBtn = document.getElementById('audio-toggle');
        this.muteBtn = document.getElementById('audio-mute');
        this.statusEl = document.getElementById('audio-status');
        this.isPlaying = false;
        this.init();
    }

    init() {
        if (!this.audio) return;

        // Restore mute preference
        const muted = localStorage.getItem('nwsa_muted');
        if (muted === 'true') {
            this.audio.muted = true;
        }

        // Restore volume preference (if user previously set), otherwise set default to 35%
        const savedVol = localStorage.getItem('nwsa_volume');
        if (savedVol !== null) {
            const vol = parseFloat(savedVol);
            if (!isNaN(vol)) this.audio.volume = Math.max(0, Math.min(1, vol));
        } else {
            // Set default background music to 35% volume
            this.audio.volume = 0.35;
        }

        // Update buttons initial state
        this.updateButtons();

        // Hook events
        this.toggleBtn && this.toggleBtn.addEventListener('click', () => this.togglePlay());
        this.muteBtn && this.muteBtn.addEventListener('click', () => this.toggleMute());

        // Try to auto-play when user interacts once (some browsers require gesture)
        const onFirstGesture = () => {
            if (!this.audio.muted) {
                this.play().catch(() => {});
            }
            window.removeEventListener('pointerdown', onFirstGesture);
            window.removeEventListener('keydown', onFirstGesture);
        };

        window.addEventListener('pointerdown', onFirstGesture, { once: true });
        window.addEventListener('keydown', onFirstGesture, { once: true });

        this.audio.addEventListener('play', () => { this.isPlaying = true; this.updateButtons(); });
        this.audio.addEventListener('pause', () => { this.isPlaying = false; this.updateButtons(); });
        this.audio.addEventListener('volumechange', () => { this.updateButtons(); });
    }

    play() {
        return this.audio.play().then(() => {
            this.isPlaying = true;
            this.updateButtons();
        }).catch(err => {
            // Autoplay blocked; leave it paused until user presses play
            console.warn('Autoplay blocked or failed:', err);
        });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updateButtons();
    }

    togglePlay() {
        if (!this.audio) return;
        if (this.audio.paused) this.play(); else this.pause();
    }

    toggleMute() {
        if (!this.audio) return;
        this.audio.muted = !this.audio.muted;
        localStorage.setItem('nwsa_muted', this.audio.muted ? 'true' : 'false');
        this.updateButtons();
    }

    updateButtons() {
        if (!this.toggleBtn || !this.muteBtn || !this.statusEl || !this.audio) return;
        this.toggleBtn.textContent = this.audio.paused ? '▶️' : '⏸️';
        this.toggleBtn.setAttribute('aria-label', this.audio.paused ? 'Play background music' : 'Pause background music');
        this.muteBtn.textContent = this.audio.muted ? '🔇' : '🔊';
        this.muteBtn.setAttribute('aria-label', this.audio.muted ? 'Unmute background music' : 'Mute background music');
        this.statusEl.textContent = this.audio.muted ? 'Muted' : (this.audio.paused ? 'Paused' : 'Playing');
    }
}

// ===== Utility Functions =====
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Performance Optimization =====
class PerformanceOptimizer {
    constructor() {
        this.optimizeImages();
        this.optimizePerformance();
    }

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt) {
                img.alt = 'Wedding image';
            }
        });
    }

    optimizePerformance() {
        // Preload critical resources
        this.preloadFonts();
    }

    preloadFonts() {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = 'https://fonts.googleapis.com';
        document.head.appendChild(link);
    }
}

// ===== Form Handler (for future contact forms) =====
class FormHandler {
    constructor() {
        this.form = document.querySelector('form');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        // Handle form submission
        console.log('Form submitted');
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    validatePhone(phone) {
        const regex = /^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
        return regex.test(phone);
    }
}

// ===== Accessibility Enhancements =====
class AccessibilityHelper {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceKeyboardNavigation();
        this.improveFocusStates();
        this.announceToScreenReaders();
    }

    enhanceKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('click', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    improveFocusStates() {
        const interactiveElements = document.querySelectorAll('button, a, input');
        interactiveElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = `2px solid #B08D57`;
                this.style.outlineOffset = '2px';
            });

            el.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }

    announceToScreenReaders() {
        // Add live region for status updates
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    announce(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
        }
    }
}

// ===== Dua Interactions =====
(function() {
    function bindDuaButton() {
        const btn = document.getElementById('dua-ameen');
        const card = document.querySelector('.dua-card-inner');
        if (!btn || !card) return;

        btn.addEventListener('click', () => {
            // visual feedback
            card.classList.remove('pulse');
            // reflow to restart animation
            void card.offsetWidth;
            card.classList.add('pulse');

            // Announce to screen readers
            const live = document.getElementById('live-region');
            if (live) live.textContent = 'Ameen — thank you for your duas.';

            // small accessible toast (visual) - gentle opacity change
            btn.textContent = 'Ameen — JazakAllah';
            setTimeout(() => { btn.textContent = 'Ameen'; }, 2200);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindDuaButton);
    } else {
        bindDuaButton();
    }
})();

// ===== Mouse Glitter =====
class MouseGlitter {
    constructor() {
        this.container = document.getElementById('glitter-layer');
        this.init();
    }

    init() {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'glitter-layer';
            document.body.appendChild(this.container);
        }

        document.addEventListener('pointermove', this.handlePointerMove.bind(this), { passive: true });
        document.addEventListener('pointerleave', this.handlePointerLeave.bind(this));
    }

    createParticle(x, y) {
        if (!this.container) return;

        const particle = document.createElement('span');
        const size = (Math.random() * 4.5) + 3;
        const driftX = (Math.random() - 0.5) * 42;
        const driftY = (Math.random() - 0.5) * 36;
        const duration = 520 + (Math.random() * 760);
        const hue = 36 + (Math.random() * 28);

        particle.className = 'glitter-particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--size', `${size}px`);
        particle.style.setProperty('--drift-x', `${driftX}px`);
        particle.style.setProperty('--drift-y', `${driftY}px`);
        particle.style.setProperty('--duration', `${duration}ms`);
        particle.style.setProperty('--hue', `${hue}`);

        this.container.appendChild(particle);
        setTimeout(() => particle.remove(), duration + 180);
    }

    handlePointerMove(event) {
        if (!this.container) return;

        const burstCount = window.innerWidth < 768 ? 1 : 2;
        for (let i = 0; i < burstCount; i += 1) {
            const offsetX = (Math.random() - 0.5) * 18;
            const offsetY = (Math.random() - 0.5) * 18;
            this.createParticle(event.clientX + offsetX, event.clientY + offsetY);
        }
    }

    handlePointerLeave() {
        if (this.container) this.container.innerHTML = '';
    }
}

// ===== Wedding Live Stream Config =====
// Set this to the YouTube Live URL on the wedding day.
// Example: https://www.youtube.com/watch?v=XXXXXXXXXXX
window.WEDDING_LIVE_URL = '';

class LiveStreamHandler {
    constructor() {
        this.liveLink = document.getElementById('live-link');
        this.liveStatus = document.getElementById('live-status');
        this.liveActions = document.getElementById('live-actions');
        this.livePlayerWrap = document.getElementById('live-player-wrap');
        this.livePlayer = document.getElementById('live-player');
        this.init();
    }

    init() {
        const liveUrl = (window.WEDDING_LIVE_URL || '').trim();

        if (!liveUrl) {
            this.showDefaultState();
            return;
        }

        const videoId = this.extractYouTubeVideoId(liveUrl);

        if (!videoId) {
            this.showDefaultState();
            return;
        }

        this.renderLiveStream(liveUrl, videoId);
    }

    extractYouTubeVideoId(url) {
        try {
            const parsed = new URL(url);
            const host = parsed.hostname.replace(/^www\./, '');

            if (host === 'youtu.be') {
                return parsed.pathname.replace('/', '').split('/')[0];
            }

            if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
                if (parsed.searchParams.get('v')) return parsed.searchParams.get('v');
                if (parsed.pathname.includes('/embed/')) return parsed.pathname.split('/embed/')[1].split('/')[0];
                if (parsed.pathname.includes('/shorts/')) return parsed.pathname.split('/shorts/')[1].split('/')[0];
                if (parsed.pathname.includes('/live/')) return parsed.pathname.split('/live/')[1].split('/')[0];
            }
        } catch (err) {}
        return null;
    }

    showDefaultState() {
        if (this.liveStatus) {
            this.liveStatus.textContent = 'Live streaming link will be updated on the wedding day.';
        }

        if (this.liveActions) this.liveActions.hidden = true;
        if (this.livePlayerWrap) this.livePlayerWrap.hidden = true;
    }

    renderLiveStream(liveUrl, videoId) {
        if (this.liveStatus) {
            this.liveStatus.textContent = 'We are live now — join us!';
        }

        if (this.liveLink) {
            this.liveLink.href = liveUrl;
            this.liveLink.textContent = 'Watch Live';
        }

        if (this.liveActions) this.liveActions.hidden = false;

        if (this.livePlayer && this.livePlayerWrap) {
            this.livePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
            this.livePlayerWrap.hidden = false;
        }
    }
}
// ===== App Initialization =====
class WeddingWebsiteApp {
    constructor() {
        this.init();
    }

    async init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeModules();
            });
        } else {
            this.initializeModules();
        }
    }

    initializeModules() {
        try {
            // Show luxury loader immediately
            new LuxuryLoader();

            // Initialize non-UI helpers
            new SmoothScroll();
            new MobileMenu();
            new StickyNavigation();
            new CountdownTimer();
            new ScrollAnimations();
            new ElementAnimation();
            new MouseGlitter();
            new LiveStreamHandler();
            new LazyImageLoader();
            new PerformanceOptimizer();
            new FormHandler();
            new AccessibilityHelper();

            // Music player instance (used by invitation overlay to play on open)
            window.musicPlayerInstance = new MusicPlayer();
            // Invitation overlay shown first (keeps it global so other modules can access it)
            window.invitationOverlay = new InvitationOverlay();

            // Auto-open invitation after loader hides
            const tryAutoOpen = () => {
                try {
                    if (window.invitationOverlay && typeof window.invitationOverlay.open === 'function') {
                        setTimeout(() => {
                            window.invitationOverlay.open();
                        }, 120);
                    }
                } catch (e) { console.warn('Auto-open failed', e); }
            };

            if (window.luxuryLoaderHidden) {
                tryAutoOpen();
            } else {
                const onLoadEvent = () => {
                    tryAutoOpen();
                    window.removeEventListener('luxuryLoaderHidden', onLoadEvent);
                };
                window.addEventListener('luxuryLoaderHidden', onLoadEvent);
            }

            console.log('🎉 Nashfa Weds Saadh - Website initialized successfully!');
        } catch (error) {
            console.error('Error initializing website:', error);
        }
    }
}

// ===== Global Error Handling =====
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ===== Start Application =====
const app = new WeddingWebsiteApp();

// ===== Service Worker Registration (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker not available, continue normally
        });
    });
}

// ===== Export for Testing =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SmoothScroll,
        MobileMenu,
        StickyNavigation,
        CountdownTimer,
        ScrollAnimations,
        ElementAnimation,
        LazyImageLoader,
        PerformanceOptimizer,
        FormHandler,
        AccessibilityHelper,
        WeddingWebsiteApp
    };
}
