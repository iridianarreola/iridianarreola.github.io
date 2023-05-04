var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var triangleSize = 50;
var triangleColor = "#f00" 
let triangleX = canvas.width / 2 - triangleSize / 2;
let triangleY = canvas.height / 2 - triangleSize / 2;
let triangleSpeed = 5;

function drawTriangle() {
    c.beginPath();
    c.moveTo(triangleX, triangleY);
    c.lineTo(triangleX + triangleSize, triangleY);
    c.lineTo(triangleX + triangleSize /2, triangleY + triangleSize);
    c.closePath
    c.fillStyle = triangleColor;
    c.fill();
}

function animateTriangle() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawTriangle();
    triangleY += triangleSpeed;

    if (triangleY + triangleSize > canvas.height || triangleY < 0){
        triangleSpeed = -triangleSpeed;
    }
    requestAnimationFrame(animateTriangle);
}

animateTriangle();


