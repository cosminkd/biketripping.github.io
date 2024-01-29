const myImage = document.querySelector("img");
const myHeader = document.querySelector("h1")

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/me.jpeg") {
    myImage.setAttribute("src", "images/pexels.jpg");
    myHeader.textContent = "Bike tripping"
    myHeader.style.fontSize = "60px"
  } else {
    myImage.setAttribute("src", "images/me.jpeg");
    myHeader.textContent = "And the adventure of Cosmin&Martin";
    myHeader.style.fontSize = "30px"
  }
};