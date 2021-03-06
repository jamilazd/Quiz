const quizContainer = document.querySelector(".quiz"); 
const submitButton = document.querySelector(".submit");
const resultsContainer = document.querySelector(".modal-content"); 


const myQuestions = [

	{
		question: '1) Gruyere is a cheese from which country?',
		answerA:  'Switzerland',
		answerB:  'Austria',
        answerC:  'France',
        correctAnswer: 'France', 
        
    },
    
	{
		question: '2) Which of these is NOT a type of mushroom?',
        answerA: 'King Oyster',
        answerB: 'Chicken of the woods',
        answerC: `Lion's mane`, 
        correctAnswer: 'Chicken of the woods', 

    },
    
    {
        question: '3) Bobotie is the national dish of which country?',
        answerA: 'South Africa',
        answerB: 'Ethiopia',
        answerC: 'Kenya', 
		correctAnswer: 'South Africa', 

    }, 

    {
        question: '4) Which flower does the spice Saffron come from?',
        answerA: 'Poppy',
        answerB: 'Orchid',
        answerC: 'Crocus',
        correctAnswer: 'Crocus',

    }, 

];


function createQuiz () {
    const allTheQuestions = []; 
    for (const questions of myQuestions) {
        allTheQuestions.push(
           `<div>
             <p>${questions.question}</p>
             <input type="checkbox" name="checkbox" value="Answer1">
             <label for="checkbox" class="test" onclick="myFunction()">${questions.answerA}</label>

             <input type="checkbox" name="checkbox" value="Answer2">
             <label for="checkbox" onclick="myFunction()">${questions.answerB}</label><br>

             <input type="checkbox" name="checkbox" value="Answer3">
             <label for="checkbox">${questions.answerC}</label> 
             <hr>
           </div>`
        ); 
           
    }

   quizContainer.innerHTML = allTheQuestions.join('')  
  
}

createQuiz() 


createResults = () => {
    const allTheResults = []; 
    for (const {question,correctAnswer} of myQuestions) {
        allTheResults.push(
           `<div class="modal-content">
               <p>${question}</p>
               <p>${correctAnswer}</p>
          </div>`
        );     
    }

  resultsContainer.innerHTML = allTheResults.join('')   

} 
submitButton.addEventListener('click', createResults); 




/*
function showResults () {
    const userAnswer = (myQuestions.answers); 
    if (userAnswer === correctAnswer) {
        correctAnswer.style.color = 'lightgreen';
    }

}
	
function colorCorrectAnswer() {
    myQuestions.style.color = "red";
}
submitButton.addEventListener('click', colorCorrectAnswer); 
*/

