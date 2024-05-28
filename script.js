document.addEventListener("DOMContentLoaded", function () {
    const questionsContainer = document.getElementById('questionsContainer');

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.innerText = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionTitle);

        question.choices.forEach((choice, choiceIndex) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${index}`;
            radio.value = choiceIndex;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(choice));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        questionsContainer.appendChild(questionDiv);
    });
});

function submitQuiz() {
    let score = 0;
    let totalQuestions = questions.length;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const answer = parseInt(selectedOption.value);
            if (answer === question.correctAnswer) {
                score++;
            } else {
                const wrongAnswer = document.createElement('p');
                wrongAnswer.innerHTML = `Question ${index + 1}: Wrong (You answered: ${question.choices[answer]}, Correct: ${question.choices[question.correctAnswer]})`;
                wrongAnswer.style.color = 'red';
                resultDiv.appendChild(wrongAnswer);
            }
        } else {
            const noAnswer = document.createElement('p');
            noAnswer.innerHTML = `Question ${index + 1}: No answer selected`;
            noAnswer.style.color = 'orange';
            resultDiv.appendChild(noAnswer);
        }
    });

    const scoreMessage = document.createElement('p');
    scoreMessage.innerHTML = `You scored ${score} out of ${totalQuestions}`;
    scoreMessage.style.fontWeight = 'bold';
    resultDiv.appendChild(scoreMessage);
}

