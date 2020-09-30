// import { myQuestions } from "./quiz-questions.js"

//Create an array of objects for the quiz questions (DONE)
//Loop through this array and render the questions dynamically with js (DONE)
//Create an event listener for clicking submit results button ()
//On click of submit button, display quiz results via showResults function ()

const quizContainer = document.querySelector(".quiz"); 

const myQuestions = [

	{
		question: "Gruyere is a cheese from which country?",
		answerA: 'Switzerland',
		answerB: 'Austria',
		answerC: 'France',
		correctAnswer: 'c', 
    },
    
	{
		question: "Which of these is NOT a type of mushroom?",
        answerA: 'King Oyster',
        answerB: 'Chicken of the woods',
        answerC: `Lion's mane`, 
		correctAnswer: 'b', 
    },
    
    {
        question: "Bobotie is the national dish of which country?",
        answerA: 'South Africa',
        answerB: 'Ethiopia',
        answerC: 'Kenya', 
		correctAnswer: 'a', 

    }, 

    {
        question: "Which of these chocolate bars does NOT contain nuts?",
        answerA: 'Picnic',
        answerB: 'Double Decker',
        answerC: 'Toblerone', 
		correctAnswer: 'b', 
    },

    {
        question: "Which flower does the spice Saffron come from?",
        answerA: 'Poppy',
        answerB: 'Orchid',
        answerC: 'Crocus',
        correctAnswer: 'c', 
    }, 

];


function createQuiz () {
    const allTheQuestions = []; 
    for (const questions of myQuestions) {
        allTheQuestions.push(
           `<div id ="quiz">
                <p>${questions.question}</p>
                <input type="radio" id="country1" name="country" value="Switzerland">
                <label for="country1">${questions.answerA}</label>
                <input type="radio" id="country2" name="country" value="Austria">
                <label for="country2">${questions.answerB}</label><br>
                <input type="radio" id="country3" name="country" value="France">
                <label for="country3">${questions.answerC}</label>
            </div>`
        ); 
           
    }

    quizContainer.innerHTML = allTheQuestions.join('')  
  
}

createQuiz() 


