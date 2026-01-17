// POPUP LOGIC
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.onclick = () => {
  popup.style.display = "flex";
};

closePopup.onclick = () => {
  popup.style.display = "none";
};

// EMAILJS INITIALIZATION
emailjs.init("YTEy1s4RLjS-gY_76Z"); // Your public key

// FORM SUBMISSION
document.getElementById("notifyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Insert current date/time into hidden field
  document.getElementById("date").value = new Date().toLocaleString();

  emailjs.sendForm("service_f3xsgc6", "template_dqlcb9e", this)
    .then(() => {
      alert("Woohoo! You’ll be notified when everything goes live.");
      popup.style.display = "none";
      this.reset();
    })
    .catch((error) => {
      alert("Oops! Something went wrong.");
      console.error("EmailJS Error:", error);
    });
});
