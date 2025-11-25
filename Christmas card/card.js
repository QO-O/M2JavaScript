const canvas = document.getElementById("canvasId"); 
const g = canvas.getContext("2d");


function evergreenStem(){
    g.beginPath(); g.rect(200, 200, 50, 50); //x y width length
    g.strokeStyle = brown;
    g.fillStyle = brown;
    g.stroke();
    g.fill();
}

function christmasBall(xPos, yPos, size, color){
    g.fillStyle = color;
    g.beginPath();
    g.arc(xPos, yPos, size, 0, 2 * Math.PI); //this creates the circle
    g.closePath();
    g.fill();
    g.stroke();
}


function evergreenPines(color){
    g.beginPath(); 
    g.moveTo(100, 400);
    g.lineTo(200, 400);
    g.lineTo(300, 400);
    g.closePath(); 
    g.fillStyle = color; 
    g.fill();
}

evergreenStem(200, 200, 50, 50, "brown");
evergreenPines();
christmasBall(300, 300, 50, "green");
