let currentIndex = 0;

function slideGallery() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first image
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`; // Slide to the next image
}

setInterval(slideGallery, 3000); // Change image every 3 seconds