const questions = [
    {
        question:"What is the capital of USA?",
        choices:["st.louis","Washington DC","Newyork City","Seattle"],
        indexAnswer:1
    },
    {
        question:"What is the capital of France?",
        choices:["Paris","London","Lyon","Nice"],
        indexAnswer:0
    },
    {
        question:"What is the capital of India?",
        choices:["New Delhi","Hyderabad","Mumbai","Pune"],
        indexAnswer:0
    },
    {
        question:"What is the capital of Canada?",
        choices:["Quebec city","Toronto","Ottawa","Vancouer"],
        indexAnswer:2
    }
];
//Getting DOM elements
 
const questionText = document.getElementById("question");
const answerbtns = [document.getElementById("answer0"),
                    document.getElementById("answer1"),
                    document.getElementById("answer2"),
                    document.getElementById("answer3")];
const feedback = document.getElementById("feedback");
const nextQuestion = document.getElementById("next-question");
//display questions
let currentQuestionIndex = 0;
function displayQuestion(){
    //clean up previous state
     feedback.textContent = "";
     nextQuestion.style.display="none";
     //getting current question
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent=currentQuestion.question;

    //populating the answer buttons
    for(let i=0;i<answerbtns.length;i++){
        answerbtns[i].textContent = currentQuestion.choices[i];
        answerbtns[i].disabled = false; //reenabling buttons when a new question loads.
    }
    
}
function handleAnswerSelection(clickedIndex){
    const currentQuestion = questions[currentQuestionIndex];
     if(clickedIndex === currentQuestion.indexAnswer){
            feedback.textContent="Correct Answer!";
        }else{
            feedback.textContent = "Sorry, Wrong Answer";
        }

      // 2. Disable all buttons to prevent multiple clicks
    answerbtns.forEach(button => {
        button.disabled = true;
    });
    nextQuestion.style.display="block";
}

function displayThankYou(){
    questionText.textContent =""
    
     for(let i=0;i<answerbtns.length;i++){
        answerbtns[i].style.display="none";
}
    
 feedback.textContent = "Thank You for Partcipating";
     nextQuestion.style.display="none";
}
//handling next question button
function handleNextQuestion(){
   // nextQuestion.addEventListener("click",() => {
    console.log("Current quetion index",currentQuestionIndex)
        console.log("questions.length",questions.length)

    if(currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        displayQuestion(); 
    }else{
       displayThankYou();
    }
//})
}

//handling events
// loop through the answer buttons and check which answer is selected
for(let i=0; i<answerbtns.length;i++){
    answerbtns[i].addEventListener("click", () =>{
        handleAnswerSelection(i);
    })
}

//what happens when next question button is clicked
nextQuestion.addEventListener("click",()=>{
    handleNextQuestion();
})
//Initialization: Start the quiz when the script loads
displayQuestion();

