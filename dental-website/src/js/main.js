// This file contains JavaScript functionality for interactive elements on the website, such as form validation or dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    // Function to set the dark mode
    function setDarkMode(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            darkModeIcon.textContent = '🌞';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.documentElement.classList.remove('dark');
            darkModeIcon.textContent = '🌜';
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Check for saved dark mode preference or use system preference
    if (localStorage.getItem('darkMode') === 'enabled' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    });

    // Update clock
    function updateClock() {
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString();
        }
    }

    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial update
});