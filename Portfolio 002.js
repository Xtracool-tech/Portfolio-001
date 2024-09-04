
/*SEARCH ICON*/
const searchContainer = document.querySelector('.search-bar-container');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

// Search Bar Toggle
searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('open');
    searchInput.focus();
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});






/*ANIMATION EASE UP ANIMATION*/
const sections = document.querySelectorAll('.hidden');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in the viewport
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the animation
            entry.target.classList.add('visible');
            // Optional: Stop observing once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger the animation when 10% of the element is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});





/* big CAROUSEL CODE */

const carousel = document.querySelector('.caro');
const carouselItems = document.querySelectorAll('.caro-item2');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const totalItems = carouselItems.length;
const itemsToShow = 5; // Number of items to show at once
let currentIndex = itemsToShow; // Start after the cloned initial set

// Clone first and last few items for infinite loop effect
carouselItems.forEach(item => {
    carousel.appendChild(item.cloneNode(true)); // Clone to the end
    carousel.insertBefore(item.cloneNode(true), carousel.firstChild); // Clone to the start
});

// Adjust the carousel's initial position
carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;

prevBtn.addEventListener('click', () => {
    currentIndex--;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
    if (currentIndex === 0) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }, 500);
    }
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
    if (currentIndex === totalItems * 5) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }, 500);
    }
});
