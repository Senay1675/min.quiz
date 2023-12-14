let score = 0; //definierat default värden 
let answeredQuestions = 0; //värdet alltid är 0 på en obesvarad fråga. 

function checkAnswer(answer, questionId) { //en funktion för att kolla svaren och där har jag implementerat två knappar som ska ”kolla svaren”. 
	                                          // Om svaren är rätt går värdet upp alltså de plussen du ser. 
											  //Om du får fel svar då händer ingenting. Då forsätter värdet va 0
  const question = document.getElementById(questionId);
  const buttons = question.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.remove("selected");
  }

  if (answer) {
    score++;
  }

  answeredQuestions++;

  const totalQuestions = 10;

  if (answeredQuestions === totalQuestions) {
    const resultPopup = document.getElementById("resultPopup");
    const resultMessage = document.getElementById("resultMessage");
    const scoreDisplay = document.getElementById("score");

    const showResultButton = document.getElementById("showResultButton");
    showResultButton.disabled = false; 

    showResultButton.onclick = function() { //Slutligen har jag en funktion som visar när alla frågor är ifyllda. 
		                                    //Det är den med === där har du en funktion som kalkyler 
		                                   //totala värdet och baserat på procentuellt rätta svar får du dem svaren som står dä
      const percentage = (score / totalQuestions) * 100;

      if (percentage >= 75) {
        resultMessage.textContent = "All those hours you've spent on movies have not been in vain. Excellent!";
        resultPopup.style.backgroundColor = "#4CAF50";
      } else if (percentage >= 50) {
        resultMessage.textContent = "You have passed. Well done!";
        resultPopup.style.backgroundColor = "#FFA500";
      } else {
        resultMessage.textContent = "Sorry, you have failed. Step your game up!";
        resultPopup.style.backgroundColor = "#FF0000";
      }

      scoreDisplay.textContent = score;
      resultPopup.style.display = "flex";
      showResultButton.disabled = true; 
    };
  }
}

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
 }










	
