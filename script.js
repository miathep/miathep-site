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
      mode: "no-cors"
    });
  
    // Swap form → thank you message
    document.getElementById("notifyForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  
    // Hide the original "Get Notified" heading + description
    const popupBox = document.querySelector(".popup-box");
    const originalHeading = popupBox.querySelector("h2");
    const originalParagraph = popupBox.querySelector("p");
  
    if (originalHeading) originalHeading.style.display = "none";
    if (originalParagraph) originalParagraph.style.display = "none";
  });
  