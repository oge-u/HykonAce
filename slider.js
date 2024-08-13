let slideIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.getElementsByClassName("slide-card");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the selected slide
    slides[index].style.display = "flex";
}

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function startAutoSlide() {
    slideInterval = setInterval(showNextSlide, 10000); // Change slide every 10 seconds (adjust as needed)
}

function pauseAutoSlide() {
    clearInterval(slideInterval);
}

function resumeAutoSlide() {
    pauseAutoSlide();
    startAutoSlide();
}

const slides = document.getElementsByClassName("slide-card");
showSlide(slideIndex);
startAutoSlide();

// Add click event listeners to the next and previous icons
document.querySelector(".next-icon").addEventListener("click", () => {
    pauseAutoSlide();
    showNextSlide();
});

document.querySelector(".prev-icon").addEventListener("click", () => {
    pauseAutoSlide();
    showPrevSlide();
});

// Pause and resume auto-slide when the slider wrapper is clicked
const sliderWrapper = document.querySelector(".slider-wrapper");
sliderWrapper.addEventListener("click", () => {
    if (slideInterval) {
        pauseAutoSlide();
    } else {
        resumeAutoSlide();
    }
});
