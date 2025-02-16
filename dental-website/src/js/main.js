// This file contains JavaScript functionality for interactive elements on the website.

// Wait for all content to load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    // Function to set the dark mode
    function setDarkMode(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
        
        // Update icon if it exists
        const icon = document.querySelector('#dark-mode-toggle');
        if (icon) {
            icon.innerHTML = isDark ? '🌞' : '🌜';
        }
    }

    // Initialize dark mode from localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled' || 
        (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(darkModeEnabled);

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            setDarkMode(!isDark);
        });
    }

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