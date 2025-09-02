// app.js
document.addEventListener("DOMContentLoaded", () => {
  const orderButton = document.getElementById("orderBtn");

  if (orderButton) {
    orderButton.addEventListener("click", () => {
      alert("आपली ऑर्डर यशस्वीरित्या नोंदवली गेली आहे! 😊");
    });
  }
});
// फक्त ठाण्यातील पिनकोड
const thanePincodes = ["400601", "400602", "400603", "400604", "400605", "400606", "400607"];

const form = document.getElementById("orderForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;

    if (!thanePincodes.includes(pincode)) {
        message.style.color = "red";
        message.textContent = "❌ माफ करा! सध्या फक्त ठाण्यातील पिनकोडसाठी ऑर्डर स्वीकारली जाते.";
        return;
    }

    message.style.color = "green";
    message.textContent = `✅ धन्यवाद ${name}! तुमची ऑर्डर सबमिट झाली आहे.`;

    form.reset();
});
