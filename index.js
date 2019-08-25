// {
//     esversion: 6
// }

// create function question constructor
function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

var questionArray = [];

// IIFE to create questions objects
(function() {
  // Question 1
  var question1 = new Question(
    "What type of animal is a seahorse?",
    { a: "Crustacean", b: "Arachnid", c: "Fish" },
    "a"
  );

  // Question 2
  var question2 = new Question(
    "Which of the following dogs is the smallest??",
    { a: "Chihuahua", b: "Poodle", c: "Pomeranian" },
    "a"
  );
  // Question 3

  var question3 = new Question(
    "What color are zebras?",
    { a: "White with black stripes", b: "lack with white stripes", c: "None of the above" },
    "a"
  );
  // Question 4

  var question4 = new Question(
    "What existing bird has the largest wingspan?",
    { a: "Condor", b: "Swan", c: "Albatross" },
    "a"
  );

  questionArray.push(question1);
  questionArray.push(question2);
  questionArray.push(question3);
  questionArray.push(question4);

  // new Question(questionArray.push('Can a tiger be your pet?'));
  // new Question(questionArray.push('Can you ride a camel?'));
  // new Question(questionArray.push('Are fruits and vegetables healthy to eat?'));
})();

console.log(questionArray[1].choices);

// questionArray.forEach(function(element){

//     // for (property in element){
//     //     console.log(element[property]);
//     // }
// });
