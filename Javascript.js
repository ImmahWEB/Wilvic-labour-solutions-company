// Dynamic image fetching from the Pexels API (example)
const API_KEY = 'glCDCvJj3pnhRXvpAmSBp76Oe2TVdsExJinfFQc9Uj7sSlLLySqWtRZC'; // Replace with your own API key
const imagesContainer = document.querySelector('.hero'); // Image container

// Function to fetch images based on a query
async function fetchImages(query) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=5`, {
        headers: {
            Authorization: API_KEY
        }
    });
    const data = await response.json();
    return data.photos;
}

// Display the images dynamically in the hero section
async function displayImages() {
    const images = await fetchImages('workplace'); // Search for workplace images
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src.medium;
        img.alt = 'Workplace Image';
        img.classList.add('dynamic-img');
        imagesContainer.appendChild(img);
    });
}

// Call the display images function
displayImages();

// Form Validation for Contact Form
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function (e) {
    const name = document.querySelector('#contact-name');
    const email = document.querySelector('#contact-email');
    const message = document.querySelector('#contact-message');
    
    // Reset error messages
    clearErrors();

    if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Prevent form submission
        displayError('All fields are required.');
    } else if (!validateEmail(email.value)) {
        e.preventDefault();
        displayError('Please enter a valid email address.');
    }
});

// Helper function to clear error messages
function clearErrors() {
    const errorContainer = document.querySelector('#contact .error-message');
    if (errorContainer) {
        errorContainer.remove();
    }
}

// Helper function to display errors
function displayError(message) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message');
    errorContainer.textContent = message;
    contactForm.insertBefore(errorContainer, contactForm.firstChild);
}

// Helper function to validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Toggle the mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Add event listener for job/employee request form submission
const jobRequestForm = document.querySelector('.request-form form');
jobRequestForm.addEventListener('submit', function (e) {
    const name = document.querySelector('#request-name');
    const email = document.querySelector('#request-email');
    const requestDetails = document.querySelector('#request-details');
    
    // Reset error messages
    clearErrors();

    if (!name.value || !email.value || !requestDetails.value) {
        e.preventDefault(); // Prevent form submission
        displayError('All fields are required.');
    } else if (!validateEmail(email.value)) {
        e.preventDefault();
        displayError('Please enter a valid email address.');
    }
});

// Modal functionality for forms
const modals = document.querySelectorAll('.modal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const modalId = this.dataset.modal;
        const modal = document.querySelector(`#${modalId}`);
        modal.style.display = 'block';
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal if clicked outside of modal content
window.addEventListener('click', function (e) {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
