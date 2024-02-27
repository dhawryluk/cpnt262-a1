const images = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
  "./images/pic6.jpg",
  "./images/pic7.jpg",
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
  imageContainer.innerHTML = `<img src=${currentImage} alt="" />`;
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

// const navToggle = document.getElementsByClassName("toggle");
// const popup = document.querySelector("#popup");

// function hamToggle() {
//   navToggle.addEventListener("click", (e) => {
//     popup.classList.toggle("hidden");
//   });
// }

// hamToggle();
