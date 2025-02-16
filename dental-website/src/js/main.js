// This file contains JavaScript functionality for interactive elements on the website.

// Wait for all content to load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    // Dark mode functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Function to set the dark mode
    function setDarkMode(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
            if (darkModeToggle) {
                darkModeToggle.textContent = '🌞';
                darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
            }
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
            if (darkModeToggle) {
                darkModeToggle.textContent = '🌜';
                darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
            }
        }
        
        // Update icon if it exists
        const icon = document.querySelector('#dark-mode-toggle');
        if (icon) {
            icon.textContent = isDark ? '🌞' : '🌜';
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

    // Clock functionality
    function updateClock() {
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString();
        }
    }

    // Update clock every second if clock element exists
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        setInterval(updateClock, 1000);
        updateClock(); // Initial update
    }

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Send email
            const mailtoLink = `mailto:dr.emmanuel@example.com?subject=Contact%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
            window.location.href = mailtoLink;

            // Send WhatsApp message
            const whatsappLink = `https://wa.me/0789579795?text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
            window.open(whatsappLink, '_blank');
        });
    }
});