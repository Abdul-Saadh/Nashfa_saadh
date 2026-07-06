// Maps integration (Google Maps or similar)

function initMap() {
    // Initialize map functionality
    console.log('Map initialized');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
