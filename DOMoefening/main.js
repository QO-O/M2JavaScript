const imgElement = document.getElementById("image");

const saturationButton = document.getElementById("saturation");
function saturationButtonClicked(){
    imgElement.classList.toggle("saturation");
}
saturationButton.addEventListener("click", saturationButtonClicked);

const blurButton = document.getElementById("blur");
function blurButtonClicked(){
    imgElement.classList.toggle("blur");
}
blurButton.addEventListener("click", blurButtonClicked);

const rotationButton = document.getElementById("rotation");
function rotationButtonClicked(){
    imgElement.classList.toggle("rotation");
}
rotationButton.addEventListener("click", rotationButtonClicked);

