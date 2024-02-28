document.addEventListener('DOMContentLoaded', function() {
    // Get the time taken from the URL query parameter 
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var timeTaken = urlParams.get('time');
  
    // Display the time taken
    var timeTakenDisplay = document.getElementById('timeTaken');
    timeTakenDisplay.textContent = formatTime(parseInt(timeTaken));
  
    // Get the user's answers from the URL query parameter 
    var answers = urlParams.get('answers');
    var answersList = document.getElementById('answers');
  
    // Split the answers string into an array of individual answers
    var answersArray = answers.split(';');
  
    // Loop through each answer and add it to the answers list
    answersArray.forEach(function(answer) {
      var question = answer.split(':')[0];
      var selectedOption = answer.split(':')[1];
      var listItem = document.createElement('li');
      listItem.textContent = 'Question ' + question.slice(1) + ': ' + selectedOption;
      answersList.appendChild(listItem);
    });
  });
  
  // Function to format time in MM:SS format
  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
  }
  