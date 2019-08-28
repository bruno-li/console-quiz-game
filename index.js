/*jshint esversion: 6 */ 


// create function question constructor
function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

init();

function init(){
    var currentQuestion = randomQuestion();
    var userAnswer = prompt("Please select a, b or c to answer the question!");

    if(userAnswer === currentQuestion.answer){
        console.log("Correct Answer!");
    } else {
        console.log('Meh, sorry you got the wrong answer!');
    }
}

// create questions objects
function questions() {
    var questionArray = [];
  // Question 1
  var question1 = new Question(
    "What type of animal is a seahorse?",
    { a: "Crustacean", b: "Arachnid", c: "Fish" },
    "a"
  );
  questionArray.push(question1);

  // Question 2
  var question2 = new Question(
    "Which of the following dogs is the smallest??",
    { a: "Poodle", b: "Chihuahua", c: "Pomeranian" },
    "b"
  );
  questionArray.push(question2);

  // Question 3
  var question3 = new Question(
    "What color are zebras?",
    {
      a: "White with black stripes",
      b: "Black with white stripes",
      c: "None of the above"
    },
    "a"
  );
  questionArray.push(question3);

  // Question 4
  var question4 = new Question(
    "What existing bird has the largest wingspan?",
    { a: "Condor", b: "Swan", c: "Albatross" },
    "c"
  );
  questionArray.push(question4);

  return questionArray;
}


// generates random question when quiz starts
function randomQuestion(){
    var questionArray = questions();
  // pick a random question
    var currentQuestion = questionArray[Math.floor((Math.random() * questionArray.length))];
  // log question to console
    console.log(currentQuestion.question);
  // log the answers to be picked
    for (var choice in currentQuestion.choices){
      console.log(`${choice}: ${currentQuestion.choices[choice]}`);
    }

    return currentQuestion;
}


