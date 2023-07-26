const form = document.getElementById('quiz-form');
form.addEventListener('submit', checkAnswers);

function checkAnswers(e) {
  e.preventDefault();

  const answers = ['a', 'b', 'b'];
  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === answers[index]) {
      score += 1;
    }
  });

  showResults(score);
}

function showResults(score) {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result');

  const resultText = score === 3 ? 'Felicitări! Ai răspuns corect la toate întrebările.' : `Ai răspuns corect la ${score} întrebări.`;

  resultContainer.innerHTML = `<p>${resultText}</p>`;

  form.insertAdjacentElement('afterend', resultContainer);
}


