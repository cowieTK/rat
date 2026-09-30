const examScores = [67, 78, 45, 89, 94,56, 72, 81, 63, 90];
const pass = 50;

// tehtävä 1
for (const [oppilas, score] of examScores.entries()) {
    if (score >= pass) {
        console.log(`oppilas ${oppilas + 1} : pass (${score})`);
    } else {
        console.log(`oppilas ${oppilas + 1}: fail (${score})`);
    }
}


// tehtävä 2
const studentIds = ["STU001","STU002","STU003","STU004","STU005","STU006", "STU007","STU008","STU009",

"STU010"];


let highest = {id: "", score: 0};
let lowest = {id: "", score: 100};
let average = 0;

for (const [oppilas, score] of examScores.entries()) {

    console.log(`${studentIds[oppilas]} score: ${score}`);

    const id = studentIds[oppilas].toUpperCase();

    if (score > highest.score) {
        highest = {id, score};
    }

    if (score < lowest.score) {
        lowest = {id, score}
    }

    average += score
}

console.log(`highest: ${highest.id} ${highest.score} `)
console.log(`lowest: ${lowest.id} ${lowest.score}`)
console.log(`avg: ${average / examScores.length}`)

// rottatestaaja for fun
const scoreInput = document.getElementById('rottachecker'); 
const checkBtn = document.getElementById('check-btn'); 
const resultText = document.getElementById('result-text');  

function rottatestaaja() {

    const score = scoreInput.value;

    if (scoreInput.value === '') {
        resultText.textContent = "anna joku oikee luku tähä uknow";
        resultText.style.color = "red";
        return;
    }
    if (score >= pass) {
        resultText.textContent = "ROTTA PÄÄSI LÄPI JIHUU";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "ROTTA JÄI LUOKALLE";
        resultText.style.color = "red";
    }
}

checkBtn.addEventListener('click', rottatestaaja);

