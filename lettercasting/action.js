const stringLength = 10;
var strings = [];

function castStrings() {
    for (let n = 0; n < 5; n++) {
        var tempString = "";
        for (let i = 0; i < stringLength; i++) {
            tempString += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        strings.push(tempString);
    }
}