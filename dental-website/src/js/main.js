// This file contains JavaScript functionality for interactive elements on the website, such as form validation or dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    // Additional interactive functionality can be added here
    updateTime();
    setInterval(updateTime, 1000);

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById('clock').textContent = `${dateString} ${timeString}`;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (document.body.classList.contains('dark')) {
        darkModeToggle.innerHTML = '🌞'; // Light mode icon
    } else {
        darkModeToggle.innerHTML = '🌜'; // Dark mode icon
    }
}