document.querySelectorAll('.menu-item').forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from the current active button
    const currentActive = document.querySelector('.menu-item.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    
    // Add active class to the clicked button
    this.classList.add('active');
  });
});