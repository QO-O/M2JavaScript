const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function evergreenStem(xPos, yPos, width, height) {
    g.beginPath();
    g.rect(xPos, yPos, width, height);
    g.strokeStyle = "rgba(120, 71, 40, 1)";
    g.fillStyle = "rgba(120, 71, 40, 1)";
    g.stroke();
    g.fill();
}

function drawTriangle(xPos, yPos, width, height) {
    g.beginPath();
    g.moveTo(xPos, yPos);
    g.lineTo(xPos + width / 2, yPos - height);
    g.lineTo(xPos + width, yPos);
    g.closePath();
    g.fillStyle = "rgba(106, 128, 112, 1)";
    g.fill();
}

function christmasBall(xPos, yPos, size, color) {
    g.fillStyle = color;
    g.beginPath();
    g.arc(xPos, yPos, size, 0, 2 * Math.PI);
    g.closePath();
    g.fill();
    g.strokeStyle = "white";
    g.stroke();
}

function drawHouse(xPos, yPos, width, height, roofColor, houseColor) {
    
    g.fillStyle = houseColor;
    g.fillRect(xPos, yPos, width, height);

    g.beginPath();
    g.moveTo(xPos, yPos);
    g.lineTo(xPos + width, yPos);
    g.lineTo(xPos + width / 2, yPos - height / 2);
    g.closePath();
    g.fillStyle = roofColor;
    g.fill();
}

function drawAssignment() {
    g.fillStyle = "lightblue";
    g.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;

    evergreenStem(centerX - 30, 400, 60, 100);

    drawTriangle(centerX - 150, 400, 300, 200); 
    drawTriangle(centerX - 100, 300, 200, 150);
    drawTriangle(centerX - 50, 200, 100, 100);

    christmasBall(centerX - 100, 350, 12, "rgba(0, 0, 0, 1)");
    christmasBall(centerX + 100, 350, 12, "rgba(0, 0, 0, 1)");
    christmasBall(centerX - 50, 300, 12, "rgba(172, 151, 70, 1)");
    christmasBall(centerX + 50, 300, 12, "rgba(172, 151, 70, 1)");
    christmasBall(centerX, 275, 12, "rgba(103, 12, 142, 1)");
    christmasBall(centerX - 25, 250, 12, "rgba(149, 148, 150, 1)");
    christmasBall(centerX + 25, 250, 12, "rgba(149, 148, 150, 1)");
    christmasBall(centerX, 200, 12, "rgba(255, 255, 255, 1)");

    drawHouse(centerX - 275, 450, 100, 80, "white", "brown");
    drawHouse(centerX - 155, 450, 100, 80, "white", "brown");
    drawHouse(centerX - 35, 450, 100, 80, "white", "brown");
    drawHouse(centerX + 85, 450, 100, 80, "white", "brown");
}
drawAssignment();
