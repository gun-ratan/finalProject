// made by gunratan kaur (200551703)  & vani patel(200549486)

// Global header function to create and load the header element
function loadHeader() {
  const headerContainer = document.createElement('header');
  headerContainer.innerHTML = `
    <nav class="navbar">
      <!-- Logo and since text -->
      <div class="logo-container">
        <img src="images/logo.png" alt="Logo">
        <br>
        <span class="since-text">Since 1960</span>
      </div>
      <!-- Title and icon -->
      <div class="title">
        <i class="fa-solid fa-record-vinyl" id="icon"></i>
        <h1> The record room</h1>
      </div>
      <!-- Navigation links -->
      <div class="navbar-links">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="product.html">Product</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;

  document.body.prepend(headerContainer); // Prepend the header to the body
}

// Load header when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  loadHeader();
});

// Function to create and load the footer element
function loadFooter() {
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
    <div class="footer-content">
        <!-- Company logo -->
        <div>
            <h4>The Record Room</h4>
        </div>
        <!-- Footer navigation links -->
        <div class="footer-links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
    <!-- Copyright information -->
    <div class="footer-content">
        <p>&copy; 2023 Your Vinyl Records and Cassettes Store. All rights reserved.</p>
    </div>
  `;

  document.body.appendChild(footerContainer); // Append the footer to the body
}

// Load footer when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  loadFooter();
});

// Slide show functions for changing images
var slidePosition = 0; // Initialize slide position

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers"); // Get slide elements
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slidePosition++; // Move to the next slide
  if (slidePosition > slides.length) {slidePosition = 1} // Reset if at the end
  slides[slidePosition-1].style.display = "block"; // Display the current slide
  setTimeout(SlideShow, 5000); // Call SlideShow function every 5 seconds
}

// Initialize the slide show
SlideShow();

// Slide show functions for forward/backward controls and current slide
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function currentSlide(n) {
  SlideShow(slidePosition = n);
}

// Main slide show logic
function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers"); // Get slide elements
  var circles = document.getElementsByClassName("dots"); // Get circle elements
  if (n > slides.length) {slidePosition = 1} // Reset slide position if exceeding last slide
  if (n < 1) {slidePosition = slides.length} // Reset slide position if going before first slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", ""); // Remove "enable" class from circles
  }
  slides[slidePosition-1].style.display = "block"; // Display the current slide
  circles[slidePosition-1].className += " enable"; // Add "enable" class to the corresponding circle
}












