const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");


function Ball(xPos, yPos, size, color){ //creates a function, “Ball” is the name. xPos, yPos indicate you can input custom coords
    g.fillStyle = color;
    g.beginPath();
    g.arc(xPos, yPos, size, 0, 2 * Math.PI); //this creates the circle
    g.closePath();
    g.fill();
    g.stroke();
}

function RandomColor(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let color = `rgb(${r}, ${g}, ${b} )`;
    return color;
}

for(let i = 0; i < 500; i++){ //creates a loop; i = 0 is the starting amount, i++ means it will keep adding until it's 500 of that thing
    Ball(Math.random()*1200, Math.random()*900, 25, RandomColor());
}

