function adjustTextForScreenSize() {
    if (window.innerWidth < 1330) {
      document.getElementById('name_title').textContent = 'ЛЦНПУБД';
    } else {
      document.getElementById('name_title').textContent = 'Львівський центр надання послуг учасникам бойових дій';
    }
  }
  
  // Add event listener for window resize
  window.addEventListener('resize', adjustTextForScreenSize);
  
  // Call the function on initial load
  adjustTextForScreenSize();


  var menu = document.querySelector(".menu");
  var toggle = document.querySelector(".menu-toggle");
  
  function toggleMenu() {
    menu.classList.toggle("active");
    toggle.classList.toggle("menu-open");
  }
  
  // Toggle the menu on click on the menu-toggle button
  toggle.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action if necessary
    toggleMenu();
  }, false);
  
  // Close the menu when a menu item is clicked
  var menuLinks = document.querySelectorAll(".menu a[href^='#']"); // Select all menu links that link to an anchor
  
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      // Close the menu
      if(menu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor link behavior
  
      // The target element that you want to scroll to
      var target = document.querySelector(this.getAttribute('href'));
  
      // Calculate the top offset with a 40px adjustment
      var offsetTop = target.offsetTop - 40;
  
      // Scroll to the target element using smooth behavior
      // And the adjusted top offset
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': offsetTop
      });
    });
  });




  // Access the video element
var video = document.querySelector('video');

// Set the playback rate: 0.5 is half the normal speed, 1 is normal speed, 2 is double speed, etc.
video.playbackRate = 0.0625;

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.querySelector('video');
    video.play().catch(error => {
      // Autoplay was prevented.
      // Show a play button so the user can start playback manually.
    });
  });
  







// Function to synchronize the slider and the text field
function synchronizeValues(source, target) {
    target.value = source.value;
}

// Get references to the elements
const slider = document.getElementById('slider');
const quantity = document.getElementById('quantity');

// Synchronize from slider to text field
slider.addEventListener('input', function() {
    synchronizeValues(slider, quantity);
});

// Synchronize from text field to slider
quantity.addEventListener('input', function() {
    synchronizeValues(quantity, slider);
});

// Initial synchronization in case the default values are set dynamically or change
document.addEventListener('DOMContentLoaded', function() {
    synchronizeValues(slider, quantity);
});
  

document.querySelectorAll('img').forEach(img => img.setAttribute('loading', 'lazy'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
