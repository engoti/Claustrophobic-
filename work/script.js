const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

function showSlide(index) {
    const currentSlideElement = slides[currentSlide];
    const nextSlideElement = slides[(index + slides.length) % slides.length];

    // Hide current slide
    currentSlideElement.classList.remove('active');
    
    // Show next slide
    nextSlideElement.style.display = 'flex';
    setTimeout(() => {
        nextSlideElement.classList.add('active');
    }, 50);

    // Update current slide index
    currentSlide = (index + slides.length) % slides.length;

    // Hide the previous slide after transition
    setTimeout(() => {
        if (!currentSlideElement.classList.contains('active')) {
            currentSlideElement.style.display = 'none';
        }
    }, 500);
}

leftArrow.addEventListener('click', () => showSlide(currentSlide - 1));
rightArrow.addEventListener('click', () => showSlide(currentSlide + 1));

function adjustSlideContainer() {
    const container = document.querySelector('.slide-container');
    const windowAspectRatio = window.innerWidth / window.innerHeight;

    slides.forEach(slide => {
        const img = slide.querySelector('img');
        const imgAspectRatio = img.naturalWidth / img.naturalHeight;

        if (imgAspectRatio > windowAspectRatio) {
            container.style.width = '100%';
            container.style.height = `${(window.innerWidth / imgAspectRatio)}px`;
        } else {
            container.style.height = '100%';
            container.style.width = `${(window.innerHeight * imgAspectRatio)}px`;
        }
    });
}

window.addEventListener('resize', adjustSlideContainer);
window.addEventListener('load', adjustSlideContainer);