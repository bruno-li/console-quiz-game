/*jshint esversion: 6 */ 


// create function question constructor
function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

var questionArray = [];
init();

// create questions objects
function init() {
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
    { a: "Chihuahua", b: "Poodle", c: "Pomeranian" },
    "a"
  );
  questionArray.push(question2);

  // Question 3

  var question3 = new Question(
    "What color are zebras?",
    {
      a: "White with black stripes",
      b: "lack with white stripes",
      c: "None of the above"
    },
    "a"
  );
  questionArray.push(question3);

  // Question 4
  var question4 = new Question(
    "What existing bird has the largest wingspan?",
    { a: "Condor", b: "Swan", c: "Albatross" },
    "a"
  );
  questionArray.push(question4);
}

// generates random question when quiz starts
function randomQuestion(){
  // pick a random question
    var currentQuestion = questionArray[Math.floor((Math.random() * questionArray.length))];
  // log question to console
    console.log(currentQuestion.question);
  // log the answers to be picked
    for (var choice in currentQuestion.choices){
      console.log(`${choice}: ${currentQuestion.choices[choice]}`);
    }
}

// console.log(questionArray);

randomQuestion();