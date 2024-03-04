"strict";

const images = [
  { src: "./images/pic1.jpg", alt: "coffee beans" },
  { src: "./images/pic2.jpg", alt: "coffee beans" },
  { src: "./images/pic3.jpg", alt: "coffee beans" },
  { src: "./images/pic4.jpg", alt: "coffee beans" },
  { src: "./images/pic5.jpg", alt: "coffee beans" },
  { src: "./images/pic6.jpg", alt: "coffee beans" },
  { src: "./images/pic7.jpg", alt: "coffee beans" },
];

// console.log(images);

let currentIndex = 0;
// console.log(currentIndex);
function displayCurrentImage() {
  // console.log("anything");
  const currentImage = images[currentIndex];
  // console.log(currentImage);
  const imageContainer = document.getElementById("carousel-container");
  // console.log(imageContainer);
  imageContainer.innerHTML = `<img src=${currentImage.src} alt=${currentImage.alt}  class="w-full max-w-full md:h-svh"/>`;
}

function nextImage() {
  // console.log(currentIndex);
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  displayCurrentImage();
}

function previousImage() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }
  displayCurrentImage();
}
displayCurrentImage();
document.getElementById("next-image").addEventListener("click", nextImage);
document
  .getElementById("previous-image")
  .addEventListener("click", previousImage);

document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};

const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("change", themeChange);

function themeChange() {
  if (darkToggle.checked == true) {
    document.getElementById("body").classList.add("dark");
    document.getElementById("body").classList.remove("light");
  } else {
    document.getElementById("body").classList.add("light");
    document.getElementById("body").classList.remove("dark");
  }
}
