var outcome = "";
var rand = Math.round(Math.random());

if (rand == 0) {
    outcome = "Tails";
} else {
    outcome = "Heads";
}

document.getElementById("outcome").innerText = outcome;