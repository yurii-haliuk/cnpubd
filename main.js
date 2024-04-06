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


var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);