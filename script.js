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

// FORM SUBMISSION (Zoho + AJAX + Thank You Swap)
document.getElementById("notifyForm").addEventListener("submit", function(e) {
  e.preventDefault(); // STOP the redirect

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
    mode: "no-cors" // required for Zoho
  });

  // Swap form → thank you message
  document.getElementById("notifyForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
});
