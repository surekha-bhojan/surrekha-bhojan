// app.js
document.addEventListener("DOMContentLoaded", () => {
  const orderButton = document.getElementById("orderBtn");

  if (orderButton) {
    orderButton.addEventListener("click", () => {
      alert("आपली ऑर्डर यशस्वीरित्या नोंदवली गेली आहे! 😊");
    });
  }
});
