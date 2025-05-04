// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Add animation to burger menu
const burgerAnimation = () => {
    const lines = document.querySelectorAll('.burger div');
    lines.forEach(line => {
        line.style.transition = 'all 0.3s ease';
    });
};

burgerAnimation();

// Add scroll event listener to change navbar style
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = 'none';
    }
});

// Brands Section Drag Functionality
const brandsContainer = document.querySelector('.brands-container');
const brandsTrack = document.querySelector('.brands-track');

let isDown = false;
let startX;
let scrollLeft;

brandsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - brandsContainer.offsetLeft;
    scrollLeft = brandsContainer.scrollLeft;
    brandsTrack.classList.add('paused');
});

brandsContainer.addEventListener('mouseleave', () => {
    isDown = false;
    brandsTrack.classList.remove('paused');
});

brandsContainer.addEventListener('mouseup', () => {
    isDown = false;
    brandsTrack.classList.remove('paused');
});

brandsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - brandsContainer.offsetLeft;
    const walk = (x - startX) * 2;
    brandsContainer.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile devices
brandsContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - brandsContainer.offsetLeft;
    scrollLeft = brandsContainer.scrollLeft;
    brandsTrack.classList.add('paused');
});

brandsContainer.addEventListener('touchend', () => {
    isDown = false;
    brandsTrack.classList.remove('paused');
});

brandsContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - brandsContainer.offsetLeft;
    const walk = (x - startX) * 2;
    
    brandsContainer.scrollLeft = scrollLeft - walk;
});

// Botón Volver al Inicio
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});