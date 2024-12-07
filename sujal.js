// sujal.js

// Function to toggle the sidebar contact information
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const sidebar = document.querySelector('.sidebar');
const sidebarInfoMore = document.querySelector('.sidebar-info_more');

// Toggle sidebar visibility on button click
sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle the active class to show/hide contacts
});

// Function to switch between sections in the main content
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('article');

// Add click event to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links and pages
        navLinks.forEach(nav => nav.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));

        // Add active class to the clicked link and corresponding page
        link.classList.add('active');
        const pageToShow = document.querySelector(`article[data-page="${link.textContent.toLowerCase()}"]`);
        if (pageToShow) {
            pageToShow.classList.add('active');
        }
    });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable or disable the submit button based on form validity
formInputs.forEach(input => {
    input.addEventListener("input", () => {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
});