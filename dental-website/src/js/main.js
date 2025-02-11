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
});