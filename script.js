let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Dark Mode + Image Switch
let darkModeIcon = document.querySelector('#darkMode-icon');
let profileImage = document.getElementById('profileImage');   // Make sure your <img> has this id

// Your two images (change these paths to your actual images)
const lightImage = "home.png";   // Your current photo
const darkImage  = "home2.png";    // Dark mode version of your photo

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    // Change profile image when dark mode is toggled
    if (document.body.classList.contains('dark-mode')) {
        if (profileImage) profileImage.src = darkImage;
    } else {
        if (profileImage) profileImage.src = lightImage;
    }
};

// Scroll Effects (Active Link + Sticky Header)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    // Active navbar links
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    // Sticky Header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu when scrolling
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize AOS (Animation On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Optional: Save dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.add('bx-sun');
    if (profileImage) profileImage.src = darkImage;
}

// Save preference when toggled
darkModeIcon.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});