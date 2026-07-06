// Background music/nasheed functionality

function initMusic() {
    const audioPlayer = document.querySelector('audio');

    if (audioPlayer) {
        audioPlayer.volume = 0.3;
        // Add music controls if needed
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
} else {
    initMusic();
}
