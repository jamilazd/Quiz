//create a variable for the quiz, submit and results (DONE)
// create an event listener addEventListener()
// create a build quiz function  function buildQuiz() {}
// create a show results function  function showResults(){}

/* Experimenting: 

//console.log('quiz',quizContainer); 
//console.log('submit button', submitButton); 

submitButton.addEventListener('click', () => {
	console.log('Hey')         
	const paragraph = document.createElement('h2');
	const textGreeting = document.createTextNode('Hello');  
	paragraph.appendChild(textGreeting);
	console.log('1', paragraph);
	console.log('2', textGreeting);
	
	const appendedText = paragraph.appendChild(textGreeting) 
	console.log('3', appendedText); 

	document.body.insertBefore(appendedText, submitButton); 
}); 
*/


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


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




