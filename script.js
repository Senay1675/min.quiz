

const myQuestions = [
    {
        question: "1: In The Matrix, does Neo take the blue pill or the red pill?",
        answers: {
            A: "red",
            B: "blue",
            
        },
        correctAnswer:"A"

    },
    {
        question: "2: What did Zach Galifianakis call the baby in The Hangover?",
        answers: {
            A: "Charlie",
            B: "Carlos",
            C: "Jose"
        },
        correctAnswer: "B"

    },
    {
        question: "In what thriller does Robert De Niro famously say You talkin' to me?",
    
        answers: {
            A: "Casino",
            B: "Goodfellas",
            C: "Taxi driver"
        },
        correctAnswer: "C"

    },
    {
        question: "4: If you watch the Marvel movies in chronological order, which movie would you start with?",
        
        answers: {
            A: "Captian America",
            B: "Iron man",
            C: "Thor",
            D: "Hulk"

        },
        correctAnswer: "A",

    },
    {
        question: "5:  What was in the box in Se7en?",
        
        answers: {
            A: "Mills's (Brad Pitt) wife's head",
            B: "Mills's (Brad Pitt) wife's hand",

        },
        correctAnswer: "A",

    },
    {
        question: "6: In the lord of the rings What is the name of Saruman’s fortress?",
        
        answers: {
            A: "Mordor",
            B: "Isengard",
            C: "Isildur",
            D: "Moria"

        },
        correctAnswer: "A",

    }
];
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
        // we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){
            

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
        // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}





//nu har vi kopplat varje knapp med javascripten

// const answerA = document.querySelector("#answerA");
// const answerB = document.querySelector("#answerB");
// const answerC = document.querySelector("#answerC");
// const answerD = document.querySelector("#answerD");

// const titelFråga = document.querySelector("h2");

// // Nu har vi console loggat första frågan på objektet
// //här börjar räkna vilken fråga vi är på
// let currentQuestIndex = 0;
// // Koden sätter currentQuestIndex till 0 och hämtar 
// // den första frågan från arrayen questions, lagrar den
// // i currentQuest och loggar den till konsolen.
// let currentQuest = questions[currentQuestIndex];
// console.log(currentQuest);
// titelFråga.textContent = currentQuest.question;
// const allAnswer = document.querySelectorAll("[id^=answer]");
// console.log(allAnswer);
// currentQuestIndex++;



// allAnswer.forEach(btn => (
//      btn.addEventListener("click", (event) => {
//         currentQuest = (questions[currentQuestIndex])
//         console.log(currentQuest)
//     })
//   )
// )
// //answerA.addEventListener("click", (event) => console.log(currentQuest[currentQuestIndex]));
