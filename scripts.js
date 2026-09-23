
let rotat = parseInt(localStorage.getItem("ratCount")) || 0;
let rottatuhannet = Math.floor(rotat / 1000) + 333;

function updateDisplay() {
    const ratDisplay = document.getElementById("rat-count");
    const ratThousands = document.getElementById("rat-thousand");
    if (ratDisplay) {
    ratDisplay.textContent = rotat;
    }
    if (ratThousands) {
    ratThousands.textContent = rottatuhannet;
    }
}

updateDisplay();

setInterval(() => {
    rotat += 1;
    localStorage.setItem("ratCount", rotat);
    localStorage.setItem("ratThousand", rottatuhannet);
    if (rotat % 1000 === 0) {
    
    rottatuhannet = Math.floor(rotat / 1000) + 333;
    console.log(`Tuhat rottaa on syntynyt. Rottia on nyt ${rottatuhannet} miljardia.`);
    }
    updateDisplay();
}, 1);

