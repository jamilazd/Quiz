// import { myQuestions } from "./quiz-questions.js"

//Create an array of objects for the quiz questions (DONE)
//Loop through this array and render the questions dynamically with js (DONE)
//Create an event listener for clicking submit results button ()
//On click of submit button, display quiz results via showResults function ()

const quizContainer = document.querySelector(".quiz"); 

const myQuestions = [
	{
		question: "Gruyere is a cheese from which country?",
		answers: {
			a: 'Switzerland',
			b: 'Austria',
			c: 'France'
		},
		correctAnswer: 'c'
    },
    
	{
		question: "Which of these is NOT a type of mushroom?",
		answers: {
			a: 'King Oyster',
			b: 'Chicken of the woods',
			c: `Lion's mane`
		},
		correctAnswer: 'b'
    },
    
    {
        question: "Bobotie is the national dish of which country?",
		answers: {
			a: 'South Africa',
			b: 'Ethiopia',
			c: 'Kenya'
		},
		correctAnswer: 'a'

    }, 

    {
        question: "Which of these chocolate bars does NOT contain nuts?",
		answers: {
			a: 'Picnic',
			b: 'Double Decker',
			c: 'Toblerone'
		},
		correctAnswer: 'b'
    },

    {
        question: "Which flower does the spice Saffron come from?",
		answers: {
			a: 'Poppy',
			b: 'Orchid',
			c: 'Crocus'
		},
		correctAnswer: 'c'
    }, 

];


function createQuiz () {
    const allTheQuestions = []; 
    for (const questions of myQuestions) {
        allTheQuestions.push(
           `<div id ="quiz">
                <p>${questions.question}</p>
                <input type="radio" id="country1" name="country" value="Switzerland">
                <label for="country1">"${questions.a}"</label>
                <input type="radio" id="country2" name="country" value="Austria">
                <label for="country2">${questions.b}</label><br>
                <input type="radio" id="country3" name="country" value="France">
                <label for="country3">${questions.c}</label>
            </div>`
        ); 
           
    }

    quizContainer.innerHTML = allTheQuestions.join('')  
  
}

createQuiz() 


