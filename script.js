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

// FORM SUBMISSION (Zoho)
document.getElementById("notifyForm").addEventListener("submit", function() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = now.toLocaleString("en-US", { month: "short" });
  const year = now.getFullYear();
  document.getElementById("dateField").value = `${day}-${month}-${year}`;

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; //
  hours = String(hours).padStart(2, "0");

  document.getElementById("hourField").value = hours;
  document.getElementById("minuteField").value = minutes;
  document.getElementById("ampmField").value = ampm;
});
