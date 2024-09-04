const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});



const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
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
    if (currentIndex === totalItems * 2) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }, 500);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        const ratingValue = parseInt(rating.dataset.rating, 10); // Assume rating is stored as a number

        stars.forEach((star, index) => {
            if (index < ratingValue) {
                star.innerHTML = '&#9733;'; // Filled star
            } else {
                star.innerHTML = '&#9734;'; // Empty star
            }
        });
    });
});


const searchContainer = document.querySelector('.search-container');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('open'); // Toggle the open class
    searchInput.focus(); // Focus the input field
});
