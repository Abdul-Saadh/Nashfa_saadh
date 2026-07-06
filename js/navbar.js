// Navigation bar functionality

function initNavbar() {
    const navbar = document.querySelector('#navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = '-100px';
        } else {
            // Scrolling up
            navbar.style.top = '0';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
