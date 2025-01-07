let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section, .slideshow-container'); // For scroll functionality
let navLinks = document.querySelectorAll('header nav a'); // For active link highlighting

// Toggle navbar menu on menu icon click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Optional: Add active class to the icon itself if needed for styling
});

// Highlight active section while scrolling
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust the offset based on your layout
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

    // Remove menu and icon active class when scrolling
    navbar.classList.remove('active');
    menuIcon.classList.remove('active');
};

// Smooth scroll to section with offset for "projects"
const projectLink = document.querySelector('header nav a[href="#projects"]');
if (projectLink) {
    projectLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector('#projects');
        window.scrollTo({
            top: target.offsetTop - 210, // Offset the scroll by 200px to account for the heading outside the slideshow
            behavior: 'smooth',
        });
    });
}

// Slideshow logic
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

