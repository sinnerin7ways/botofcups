const whiteBalls = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69"];
const redPowerballs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];
var drawing = [];
var str = "";

function draw(group) {
    let shuffle = Math.floor(Math.random() * group.length);
    return group.splice(shuffle, 1)[0]; // Return the first (and only) removed element
}

for (var i = 0; i < 5; i++) {
    drawing.push(draw(whiteBalls));
}
drawing.push(draw(redPowerballs) + "pb");

for (var i = 0; i < drawing.length; i++) {
    str += drawing[i];
    str += " ";
}

document.getElementById("drawing").innerText = str;