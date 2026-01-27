document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".startBtn");
    const steps = document.querySelectorAll(".step");
  
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        steps[0].classList.remove("active"); // hide intro screen
        steps[1].classList.add("active");    // show next question
      });
    }
  });
  