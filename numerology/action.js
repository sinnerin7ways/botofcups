const numbers = [
    {num: "1", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-1/"},
    {num: "2", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-2/"},
    {num: "3", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-3/"},
    {num: "4", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-4/"},
    {num: "5", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-5/"},
    {num: "6", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-6/"},
    {num: "7", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-7/"},
    {num: "8", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-8/"},
    {num: "9", wiki:"https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-9/"},
];
let selections = [];
function drawNums() {
selections.push(numbers[Math.floor(Math.random()*numbers.length)]);
selections.push(numbers[Math.floor(Math.random()*numbers.length)]);
selections.push(numbers[Math.floor(Math.random()*numbers.length)]);
document.getElementById("num1").innerHTML = selections[0].num;
document.getElementById("num1").href = selections[0].wiki;
document.getElementById("num2").innerHTML = selections[1].num;
document.getElementById("num2").href = selections[1].wiki;
document.getElementById("num3").innerHTML = selections[2].num;
document.getElementById("num3").href = selections[2].wiki;
}