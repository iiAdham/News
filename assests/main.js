// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// Get Number Of Slides
var slidesCount = sliderImages.length;
// Set Current Slide
var currentSlide = 1;
// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Trigger The Checker Function
theChecker();
// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains('disabled')) {
    // Do Nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains('disabled')) {
    // Do Nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // Remove All Active Classes
  removeAllActive();
  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');
  // Check if Current Slide is The First
  if (currentSlide == 1) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');
  }
  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {
    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');
  }
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  });
}