// Custom scripts for CETI webpage

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle active class on navbar items
    const navItems = document.querySelectorAll('.navbar-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simple form validation example (if needed)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value) {
                    e.preventDefault();
                    alert('Please fill all required fields');
                }
            });
        });
    }

    // Add animation to menu items on scroll
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Call once to check initial state
});