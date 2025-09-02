// Console message
console.log("सुरेखा भोजन वेबसाइट सुरू झाली आहे.");

// बटण क्लिक केल्यावर alert द्या
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("बटण क्लिक झाले");
    });
});

// आजची तारीख खाली Footer ला दिसवा
const footer = document.querySelector('footer');
if (footer) {
    const date = new Date().toLocaleDateString('mr-IN');
    const datePara = document.createElement('p');
    datePara.innerText = `🗓️ आजची तारीख: ${date}`;
    footer.appendChild(datePara);
}

// QR कोड क्लिक केल्यावर Zoom करा
const qrImg = document.querySelector('.qr img');
if (qrImg) {
    qrImg.style.cursor = 'pointer';
    qrImg.addEventListener('click', () => {
        if (qrImg.style.transform === 'scale(1.5)') {
            qrImg.style.transform = 'scale(1)';
        } else {
            qrImg.style.transform = 'scale(1.5)';
        }
        qrImg.style.transition = 'transform 0.3s ease-in-out';
    });
}
