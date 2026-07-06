// Countdown timer functionality

function initCountdown() {
    // Set the wedding date
    const weddingDate = new Date('2024-12-25T18:00:00').getTime();

    // Update countdown every second
    setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
} else {
    initCountdown();
}
