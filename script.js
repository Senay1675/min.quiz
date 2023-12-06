
const questions = [
    {
        question: "1: In The Matrix, does Neo take the blue pill or the red pill?",
        type: "btnAns",
        alt: {
            answerA: "red",
            answerB: "blue",
            
        },
        ans:"answerA"

    },
    {
        question: "2: What did Zach Galifianakis call the baby in The Hangover?",
        type: "btnAns",
        alt: {
            answerA: "Charlie",
            answerB: "Carlos",
            answerC: "Jose"
        },
        ans: "answerB"

    },
    {
        question: "In what thriller does Robert De Niro famously say You talkin' to me?",
        type: "btnAns",
        alt: {
            answerA: "Casino",
            answerB: "Goodfellas",
            answerC: "Taxi driver"
        },
        ans: "answerC"

    },
    {
        question: "4: If you watch the Marvel movies in chronological order, which movie would you start with?",
        type: "btnAns",
        alt: {
            answerA: "Captian America",
            answerB: "Iron man",
            answerC: "Thor",
            answerD: "Hulk"

        },
        ans: "answerA",

    },
    {
        question: "5:  What was in the box in Se7en?",
        type: "btnAns",
        alt: {
            answerA: "Mills's (Brad Pitt) wife's head",
            answerB: "Mills's (Brad Pitt) wife's hand",

        },
        ans: "answerA",

    },
    {
        question: "6: In the lord of the rings What is the name of Saruman’s fortress?",
        type: "btnAns",
        alt: {
            answerA: "Mordor",
            answerB: "Isengard",
            answerC: "Isildur",
            answerD: "Moria"

        },
        ans: "answerA",

    }
];

//nu har vi kopplat varje knapp med javascripten

const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const titelFråga = document.querySelector("h2");

// Nu har vi console loggat första frågan på objektet
//här börjar räkna vilken fråga vi är på
let currentQuestIndex = 0;
// Koden sätter currentQuestIndex till 0 och hämtar 
// den första frågan från arrayen questions, lagrar den
// i currentQuest och loggar den till konsolen.
let currentQuest = questions[currentQuestIndex];
console.log(currentQuest);
titelFråga.textContent = currentQuest.question;
const allAnswer = document.querySelectorAll("[id^=answer]");
console.log(allAnswer);

const log = (btn) => {
    console.log(btn);
}

allAnswer.forEach(btn => (
     btn.addEventListener("click", (event) => log(event.target))) 

);

 


