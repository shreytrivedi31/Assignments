

 var questions = [{
    question: "Who invented Java Programming?",
    choices: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
    correctAnswer: 1
  }, {
    question: "Which component is used to compile, debug and execute the java programs?",
    choices: ["JRE", "JIT", "JDK", "JVM"],
    correctAnswer: 2
  }, {
    question: "Which one of the following is not a Java feature?",
    choices: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
    correctAnswer: 1
  }, {
    question: "Which of these cannot be used for a variable name in Java?",
    choices: ["keyword", "identifier & keyword", "identifier", "none of the mentioned"],
    correctAnswer: 0
  }, {
    question: "Which environment variable is used to set the java path?",
    choices: ["JAVA_HOME", "MAVEN_Path", "JavaPATH", "JAVA"],
    correctAnswer: 0
  }];
  
  var currentQuestion = 0;
  var correctAnswers = 0;
  var quizOver = false;
  
  $(document).ready(function() {
  
    
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
  
    
    $(this).find(".nextButton").on("click", function() {
      if (!quizOver) {
  
        value = $("input[type='radio']:checked").val();
  
        if (value == undefined) {
          $(document).find(".quizMessage").text("Please select an answer");
          $(document).find(".quizMessage").show();
        } else {
          
          $(document).find(".quizMessage").hide();
  
          if (value == questions[currentQuestion].correctAnswer) {
            correctAnswers++;
          }
  
          currentQuestion++; 
          if (currentQuestion < questions.length) {
            displayCurrentQuestion();
          } else {
            displayScore();
           
            $(document).find(".nextButton").text("Play Again?");
            quizOver = true;
          }
        }
      } else { 
        quizOver = false;
        $(document).find(".nextButton").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
    });
  
  });
  
  
  function displayCurrentQuestion() {
  
    console.log("In display current Question");
  
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
  
    
    $(questionClass).text(question);
  
    
    $(choiceList).find("li").remove();
  
    var choice;
    for (i = 0; i < numChoices; i++) {
      choice = questions[currentQuestion].choices[i];
      $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
  }
  
  function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
  }
  
  function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
  }
  
  function hideScore() {
    $(document).find(".result").hide();
  }
  