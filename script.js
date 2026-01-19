/*NOTIFY POPUP (original)*/

// POPUP LOGIC
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

if (openPopup) {
  openPopup.onclick = () => {
    popup.style.display = "flex";
  };
}

if (closePopup) {
  closePopup.onclick = () => {
    popup.style.display = "none";
  };
}

// FORM SUBMISSION (Zoho + AJAX + Thank You Swap)
const notifyForm = document.getElementById("notifyForm");

if (notifyForm) {
  notifyForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const now = new Date();

    // Fill date fields
    const day = String(now.getDate()).padStart(2, "0");
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();
    document.getElementById("dateField").value = `${day}-${month}-${year}`;

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, "0");

    document.getElementById("hourField").value = hours;
    document.getElementById("minuteField").value = minutes;
    document.getElementById("ampmField").value = ampm;

    // Build form data
    const formData = new FormData(this);

    // Send to Zoho WITHOUT redirect
    fetch(this.action, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });

    // Swap form → thank you message
    document.getElementById("notifyForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Hide the original heading + description
    const popupHeader = document.getElementById("popupHeader");
    if (popupHeader) popupHeader.style.display = "none";
  });
}


/* GET IN TOUCH POPUP */

const contactPopup = document.getElementById("contactPopup");
const openContactPopup = document.getElementById("openContactPopup");
const closeContactPopup = document.getElementById("closeContactPopup");
const contactForm = document.getElementById("contactForm");

// OPEN CONTACT POPUP
if (openContactPopup) {
  openContactPopup.addEventListener("click", function(e) {
    e.preventDefault();
    contactPopup.style.display = "flex";
  });
}

// CLOSE CONTACT POPUP
if (closeContactPopup) {
  closeContactPopup.addEventListener("click", function() {
    contactPopup.style.display = "none";
  });
}

// CONTACT FORM SUBMISSION
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("contactHeader").style.display = "none";
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactThankYou").style.display = "block";
  });
}
