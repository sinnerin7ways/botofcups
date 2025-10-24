const canvasSize = 256;

//bg color, dg detail color, fg color, ol color
var choices = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], 'none', 'none', 'none'];


function savePainting() {
    console.log('save');
}

function randomColors (choices) {
    choices[0] = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
    choices[1] = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
    choices[2] = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
    choices[3] = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ];
}

function circularBG (choices) {
    const minCeiled = Math.ceil(4);
    const maxFloored = Math.floor(10);
    circlesN = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    stroke(choices[1]);

    for (let i = 0; i < circlesN; i++) {
        var 
        
        drawX = Math
    }
}

window.randomColors = randomColors;
window.savePainting = savePainting;

function setup() {
    let canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent('canvasContainer');

}


function draw() {
    background(choices[0]);
}


document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('randColors');
    if (colorButton) {
        colorButton.addEventListener('click', () => {
        randomColors(choices)})
    }
    const savePNG = document.getElementById('savePNG');
    if (savePNG) {
        savePNG.addEventListener('click', () => {
        savePainting()})
    }
    const bgRadios = document.getElementsByName('bgSelect');
    bgRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            choices[4] = radio.value;
        })
    })
    const fgRadios = document.getElementsByName('fgSelect');
    fgRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            choices[5] = radio.value;
        })
    })
    const olRadios = document.getElementsByName('olSelect');
    olRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            choices[6] = radio.value;
        })
    })
});
