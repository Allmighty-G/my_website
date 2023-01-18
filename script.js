let images = ['image4.1.jpeg', 'image3.jpeg', 'image2.jpeg'];
let imageIndex = 0;

let background = document.getElementById('background');

function updateBodyBackground() {
  background.style.backgroundImage = `url(${images[imageIndex]})`;
  imageIndex = (imageIndex + 1) % images.length;
}

setInterval(updateBodyBackground, 8000);

function openPdf() {
  window.open("ScibelliSpeisekarte.pdf", "_blank");
}