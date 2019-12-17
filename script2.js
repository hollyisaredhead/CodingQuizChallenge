var currentQuestionsIndex = 0;

var questionsEl = document.getElementById("questions");
var start = document.getElementById("startBtn")
var optionsEl = document.getElementById("options")
var submitEl = document.getElementById("submit")
var choicesEl = document.getElementById("choices")

function beginQuiz() {
    var startPageEl = document.getElementById("startPage");
    startPageEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class", "hide")

    function MyTimer(callback, val) {
        val = val || 75; 
        var timer=setInterval(function() { 
            callback(val);
            if(val-- <= 0) { 
                clearInterval(timer); 
            } 
        }, 1000);
    }
    new MyTimer(function(val) {
        var timerMsg = "Timer: " + (val >= 10 ? val : "0" + val);
        document.getElementById("timer").textContent = timerMsg; 
    });
    
    getQuestions();
};

function getQuestions() {
 
    var currentQuestions = questions[currentQuestionsIndex];
  
    // update title with current question
    var titleEl = document.getElementById("questionsTitle");
    titleEl.textContent = currentQuestions.title;
  
    // clear out any old question choices
    choicesEl.innerHTML = "";
  
    // loop over choices
    currentQuestions.choices.forEach(function(choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choices");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    });
}

function questionClick() {
    if (this.value !== [currentQuestionsIndex].answer);
    time -= 15;

    if (timer < 0) {    
        timer = 0;
    }
        
}
  
//will begin quiz
start.onclick = beginQuiz;