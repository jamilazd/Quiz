const quizContainer = document.querySelector(".quiz"); 
const resultsContainer = document.querySelector(".modal-content"); 
const submitButton = document.querySelector(".submit");

const myQuestions = [

	{
		question: 'Gruyere is a cheese from which country?',
		answerA:  'Switzerland',
		answerB:  'Austria',
        answerC:  'France',
        correctAnswer: 'C', 
        
    },
    
	{
		question: 'Which of these is NOT a type of mushroom?',
        answerA: 'King Oyster',
        answerB: 'Chicken of the woods',
        answerC: `Lion's mane`, 
        correctAnswer: 'B', 

    },
    
    {
        question: 'Bobotie is the national dish of which country?',
        answerA: 'South Africa',
        answerB: 'Ethiopia',
        answerC: 'Kenya', 
		correctAnswer: 'A', 

    }, 

    {
        question: 'Which of these chocolate bars does NOT contain nuts?',
        answerA: 'Picnic',
        answerB: 'Double Decker',
        answerC: 'Toblerone', 
        correctAnswer: 'B',

    },

    {
        question: 'Which flower does the spice Saffron come from?',
        answerA: 'Poppy',
        answerB: 'Orchid',
        answerC: 'Crocus',
        correctAnswer: 'C',

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





/*makeGreen = () => {
    for(const {correctAnswer} of myQuestions) {
        console.log(`${correctAnswer}`)
    }
}*/ 

//submitButton.addEventListener('click', makeGreen); 
//document.querySelector().style.color = "#ff0000";


/* function myFunction() {
    document.querySelector('.test').style.color = "red";
}
submitButton.addEventListener('click', myFunction); 
*/ 




