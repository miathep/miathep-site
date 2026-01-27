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

const notifyForm = document.getElementById("notifyForm");

if (notifyForm) {
  notifyForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const now = new Date();
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

    const formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });

    document.getElementById("notifyForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    const popupHeader = document.getElementById("popupHeader");
    if (popupHeader) popupHeader.style.display = "none";
  });
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

if (hamburgerBtn && mobileNav) {
  hamburgerBtn.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "block" ? "none" : "block";
  });
}

const contactPopup = document.getElementById("contactPopup");
const openContactPopupDesktop = document.getElementById("openContactPopup");
const openContactPopupMobile = document.getElementById("openContactPopupMobile");
const closeContactPopup = document.getElementById("closeContactPopup");
const contactForm = document.getElementById("contactForm");

if (openContactPopupDesktop && contactPopup) {
  openContactPopupDesktop.addEventListener("click", function(e) {
    e.preventDefault();
    contactPopup.style.display = "flex";
  });
}

if (openContactPopupMobile && contactPopup) {
  openContactPopupMobile.addEventListener("click", function(e) {
    e.preventDefault();
    if (mobileNav) {
      mobileNav.style.display = "none";
    }
    contactPopup.style.display = "flex";
  });
}

if (closeContactPopup && contactPopup) {
  closeContactPopup.addEventListener("click", function() {
    contactPopup.style.display = "none";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      mode: "no-cors"
    });

    document.getElementById("contactHeader").style.display = "none";
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactThankYou").style.display = "block";
  });
}
