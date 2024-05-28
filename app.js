//set current index to first image
let currentImageIndex = 0;

// Select element having blog-image class with img tag 
const images = document.querySelectorAll('.blog-image img');

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

// Start the auto-slide interval
const intervalId = setInterval(showNextImage, 2000);
