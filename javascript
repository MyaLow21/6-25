<script src="[js name].js"></script>
  <link rel="stylesheet" href="style.css">
  let score = 0;
let answeredQuestions = 0;
const totalQuestions = 5; // Total number of questions in the quiz

// Function to check the answer
function checkAnswer(questionId, selectedAnswer) {
    const questionContainer = document.getElementById(questionId);
    const buttons = questionContainer.querySelectorAll('.answer-button');

    // Determine correct answer based on questionId
    if (questionId === 'q1' && selectedAnswer === 'a') {
        score++;
    } else if (questionId === 'q2' && selectedAnswer === 'b') {
        score++;
    } else if (questionId === 'q3' && selectedAnswer === 'a') {
        score++;
    } else if (questionId === 'q4' && selectedAnswer === 'a') {
        score++;
    } else if (questionId === 'q5' && selectedAnswer === 'c') {
        score++;
    }

    answeredQuestions++;
}

// Function to display results
function showResults() {
    if (answeredQuestions === totalQuestions) {
        const percentageScore = Math.round((score / totalQuestions) * 100);
        alert(`Quiz completed!\nYou scored ${score} out of ${totalQuestions} (${percentageScore}%).`);
    } else {
        alert('Please answer all questions before submitting.');
    }
}
