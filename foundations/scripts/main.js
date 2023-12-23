const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/stars_characters.png") {
    myImage.setAttribute("src", "images/stars-characters.png");
  } else {
    myImage.setAttribute("src", "images/stars_characters.png");
  }
};
