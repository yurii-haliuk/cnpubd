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