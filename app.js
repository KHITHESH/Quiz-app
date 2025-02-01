const Questions = [
    {
        question : "What is the capital of India?",
        answers :[
            { text:"Kerala", correct : false},
            { text:"Delhi", correct : true},
            { text:"Mumbai", correct :false},
            { text:"Banglore", correct : false}
        ]
    },
    {
        question : "What is the largest country in the World by area??",
        answers :[
            { text:"Japan", correct : false},
            { text:"China", correct : false },
            { text:"Russia", correct :true},
            { text:"India", correct : false}
        ]
    },
    {
        question : "What is the Longest river in the World?",
        answers :[
            { text:"Yellow River", correct : false},
            { text:"Ganga River", correct : false},
            { text:"Congo River", correct :false},
            { text:"Nile River", correct : true}
        ]
    },
    {
        question : "What is the Tallest building in the world?",
        answers :[
            { text:"Burz Khalifa", correct : true},
            { text:"Kingdom Towers", correct : false},
            { text:"Rise Towers", correct :false},
            { text:"Willis Towers", correct : false}
        ]
    },
    {
        question : "What is the tallest mountain in the world?",
        answers :[
            { text:"Manaslu", correct : false},
            { text:"Makalu", correct : false},
            { text:"Mount Everest", correct :true},
            { text:"K2", correct : false}
        ]
    },
    {
        question : "What is the coldest country in the World?",
        answers :[
            { text:"Russia", correct : false},
            { text:"Mogolia", correct : false},
            { text:"Norway", correct :false},
            { text:"Canada", correct : true}
        ]
    },
    {
        question : "How many countries in the world?",
        answers :[
            { text:"196", correct : false},
            { text:"195", correct : true},
            { text:"194", correct :false},
            { text:"190", correct : false}
        ]
    },
    {
        question : "How many planets are in solar system?",
        answers :[
            { text:"6", correct : false},
            { text:"7", correct : false},
            { text:"8", correct :true},
            { text:"9", correct : false}
        ]
    },
    {
        question : "What is the largest state in India by area?",
        answers :[
            { text:"Kerala", correct : false},
            { text:"Rajasthan", correct : true},
            { text:"Mumbai", correct :false},
            { text:"Banglore", correct : false}
        ]
    },
    {
        question : "How many bones are in human body?",
        answers :[
            { text:"206", correct : true},
            { text:"207", correct : false},
            { text:"306", correct :false},
            { text:"307", correct : false}
        ]
    }
]
const questionElement = document.getElementById('question');
const answerbuttons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0
let score = 0 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = 'none'
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${Questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
    nextButton.style.position = 'none'
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < Questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener('click',() => {
    if(currentQuestionIndex < Questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();