const canvasSize = 256;

let bgColor = [0, 0, 0];
let bgdColor = [0, 0, 0];
let fgColor = [0, 0, 0];
let olColor = [0, 0, 0];
let bgdColorOption = '';
let fgColorOption = '';
let olColorOption = '';


function randomColors () {
    bgColor = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
    fgColor = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
    olColor = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
}
window.randomColors = randomColors;

function circularBG () {

}

function setup() {
    let canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent('canvasContainer');

}

function draw() {
    background(bgColor);
}

document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('randColors');
    if (colorButton) {
        colorButton.addEventListener('click', () => {
        randomColors()})
    }
});
