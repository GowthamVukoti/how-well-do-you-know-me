var readlineSync = require("readline-sync")
var userName = readlineSync.question("enter your name ");
var score = 0;
console.log("welcome!!!! " + userName);
console.log("lets see how much you know me");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("woah!! didnt expect you knew that");
    score += 1;
  } else {
    console.log("oops! no probs you dont know :)");
    score -= 1;
  }
}
console.log("Answer with all LOWER cases ");
console.log("lets see how much you get out of 10 ")
var questions = [
  {
    question: "Where do i study right now  ",
    answer: "tirupati"
  },
  {
    question: "Am i older than 19 ",
    answer: "yes"
  },
  {
    question: "do i watch anime ",
    answer: "yes"
  },
  {
    question: "my favourite singer ",
    answer: "taylor swift"
  },
  {
    question: "do i play bgmi? ",
    answer: "yes"
  },
  {
    question: "do i drink? ",
    answer: "no"
  },
  {
    question: "do i smoke? ",
    answer: "no"
  },
  {
    question: "am i taller than you? ",
    answer: "yes"
  },
  {
    question: "am i a vegan? ",
    answer: "no"
  },
  {
    question: "do i have specatacles? ",
    answer: "yes"
  }]
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("--------------");
  console.log("");
}
if (score < 0) {
  console.log("wow you've got negative score,10 people were better than you your score is: ", score);
} else if (score > 0 && score < 5) {
  console.log("yeah! you've tried pretty ~Average: ", score)
} else if (score > 5 && score < 8) {
  console.log("Good!, but not best score: ", score)
} else if (score == 8) {
  console.log("wow you've answered all correct except one question, you used google right! your score is: ", score);
} else if (score == 10) {
  console.log("youve googled all the questions right youve got full marks: ", score)
} else {
  console.log("thank you for answering :) ");
}
console.log("Thank you for wasting your time and answering this useless trivia")
