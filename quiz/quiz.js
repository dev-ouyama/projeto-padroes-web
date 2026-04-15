const questions = [
  {
    question: "Qual filme é esse?",
    answers: ["Spider-Man", "Tropa de Elite", "Minha Mãe é uma Peça", "Shrek"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  answersEl.innerHTML = "";
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  // Se acertar a resposta aumenta o score
  if (index === questions[currentQuestion].correct) {
    score++;
  }

  // Permite ir pra próxima pergunta
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
});

function showResult() {
  // Mostra resultado final de pontuação
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreEl.textContent = `Você acertou ${score} de ${questions.length}`;
}

function restartQuiz() {
  // Reinicia as variáveis e troca da tela de resultados para a tela de quiz
  currentQuestion = 0;
  score = 0;
  resultContainer.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
}

nextBtn.disabled = true;
loadQuestion();
