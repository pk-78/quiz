
  

// document.addEventListener('DOMContentLoaded', function() {
//     // Timer
//     var timerDisplay = document.getElementById('timer');
//     var totalTime = 5 * 60; // 5 minutes
//     var timerInterval = setInterval(updateTimer, 1000);
  
//     function updateTimer() {
//       var minutes = Math.floor(totalTime / 60);
//       var seconds = totalTime % 60;
//       timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  
//       if (totalTime <= 0) {
//         clearInterval(timerInterval);
//         // Redirect to Page 3 with time taken and answers
//         redirectToPage3();
//       } else {
//         totalTime--;
//       }
//     }
  
//     // Submit button
//     var submitBtn = document.getElementById('submitBtn');
//     submitBtn.addEventListener('click', function() {
//       clearInterval(timerInterval);
//       // Redirect to Page 3 with time taken and answers
//       redirectToPage3();
//     });
  
//     // Function to redirect to Page 3 with time taken and answers
//     function redirectToPage3() {
//       // Get answers
//       var answers = {};
//       var questions = document.querySelectorAll('[id^="question"]');
//       questions.forEach(function(question, index) {
//         var selectedOption = document.querySelector('input[name="q' + (index + 1) + '"]:checked');
//         if (selectedOption) {
//           answers['q' + (index + 1)] = selectedOption.value;
//         }
//       });
  
//       // Get time taken
//       var timeTaken = 5 * 60 - totalTime;
  
//       // Redirect to Page 3 with time taken and answers as URL query parameters
//       window.location.href = 'final.html?time=' + timeTaken + '&answers=' + encodeURIComponent(JSON.stringify(answers));
//     }
//   });





  document.addEventListener('DOMContentLoaded', function() {
    // Timer
    var timerDisplay = document.getElementById('timer');
    var totalTime = 5 * 60; // 5 minutes
    var timerInterval = setInterval(updateTimer, 1000);
  
    function updateTimer() {
      var minutes = Math.floor(totalTime / 60);
      var seconds = totalTime % 60;
      timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  
      if (totalTime <= 0) {
        clearInterval(timerInterval);
        // Redirect to Page 3 with time taken and answers
        redirectToPage3();
      } else {
        totalTime--;
      }
    }
  
    // Submit button
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
      clearInterval(timerInterval);
      // Redirect to Page 3 with time taken and answers
      redirectToPage3();
    });
  
    // Function to redirect to Page 3 with time taken and answers
    function redirectToPage3() {
      // Collect answers
      var answers = {};
      var questions = document.querySelectorAll('[id^="question"]');
      questions.forEach(function(question, index) {
        var selectedOption = document.querySelector('input[name="q' + (index + 1) + '"]:checked');
        if (selectedOption) {
          answers['q' + (index + 1)] = selectedOption.value;
        }
      });
  
      // Get time taken
      var timeTaken = 5 * 60 - totalTime;
  
      // Redirect to Page 3 with time taken and answers as URL query parameters
      window.location.href = 'final.html?time=' + timeTaken + '&answers=' + encodeURIComponent(JSON.stringify(answers));
    }
  });
  
  