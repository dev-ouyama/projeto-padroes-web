const questions = [
  {
    question: "Qual filme é esse?",
    image: "/assets/imgs/homem-aranha.jpg",
    answers: ["Spider-Man", "Tropa de Elite", "Minha Mãe é uma Peça", "Shrek"],
    correct: 0,
  },
  {
    question: "Qual filme é esse?",
    image: "/assets/imgs/tropa-de-elite.jpg",
    answers: [
      "Velozes e Furiosos",
      "Tropa de Elite",
      "Cidade de Deus",
      "Matrix",
    ],
    correct: 1,
  },
  {
    question: "Qual filme é esse?",
    image: "/assets/imgs/tropa-de-elite.jpg",
    answers: [
      "Velozes e Furiosos",
      "Tropa de Elite",
      "Cidade de Deus",
      "Matrix",
    ],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const form = document.getElementById("quiz-form");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const imageEl = document.getElementById("quiz-image");
const slideEl = document.getElementById("slide");

function animateNextQuestion(callback) {
  // Sai a pergunta velha
  slideEl.classList.remove("slide-active");
  slideEl.classList.add("slide-out");

  setTimeout(() => {
    callback(); // troca conteúdo

    // Prepara entrada da proxima questão
    slideEl.classList.remove("slide-out");
    slideEl.classList.add("slide-in");

    setTimeout(() => {
      slideEl.classList.remove("slide-in");
      slideEl.classList.add("slide-active");
    }, 50);
  }, 400);
}

function loadQuestion() {
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];

  questionEl.textContent = q.question;

  imageEl.src = q.image;

  q.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.classList.add("answer-option");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = index;

    input.addEventListener("change", () => {
      const answerIndex = Number(input.value);

      userAnswers[currentQuestion] = answerIndex;

      const isLastQuestion = currentQuestion === questions.length - 1;

      // Última pergunta → sem animação lateral
      if (isLastQuestion) {
        loadQuestion();
        renderNavigator();
        return;
      }

      // Perguntas normais → animação
      animateNextQuestion(() => {
        currentQuestion++;

        loadQuestion();
        renderNavigator();
      });
    });

    const span = document.createElement("span");
    span.textContent = answer;

    label.appendChild(input);
    label.appendChild(span);
    answersEl.appendChild(label);
  });

  if (userAnswers[currentQuestion] !== null) {
    const radios = document.querySelectorAll('input[name="answer"]');
    radios[userAnswers[currentQuestion]].checked = true;
  }

  updateResultsButton();
}

const popup = document.getElementById("popup");

popup.addEventListener("click", (e) => {
  const rect = popup.getBoundingClientRect();

  const clickedInDialog =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;

  if (!clickedInDialog) {
    popup.close();
  }
});

// Função para mostrar o popup de confirmação ao voltar das pergunta do Quiz
function showPopup() {
  popup.showModal();
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreEl.textContent = `Você acertou ${score} de ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  // resetar respostas do usuário
  userAnswers = new Array(questions.length).fill(null);

  shuffleArray(questions);

  resultContainer.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  loadQuestion();
  renderNavigator();
}

let userAnswers = new Array(questions.length).fill(null);
const navigatorEl = document.getElementById("navigator");

function renderNavigator() {
  navigatorEl.innerHTML = "";

  questions.forEach((_, index) => {
    const item = document.createElement("div");
    item.classList.add("nav-item");
    item.textContent = index + 1;

    if (index === currentQuestion) {
      item.classList.add("active");
    }

    if (userAnswers[index] !== null) {
      item.classList.add("answered");
    }

    item.addEventListener("click", () => {
      goToQuestion(index);
    });

    navigatorEl.appendChild(item);
  });
}

function goToQuestion(index) {
  animateNextQuestion(() => {
    currentQuestion = index;
    loadQuestion();
    renderNavigator();
  });
}

const resultsButton = document.getElementById("results-button");

//Mostra o botão caso seja a ultima pergunta
function updateResultsButton() {
  const isLastQuestion = currentQuestion === questions.length - 1;

  resultsButton.style.display = isLastQuestion ? "block" : "none";
}

/**
 * Função que permite o usuario ver os resultados, porém somente se tiver respondido todas as perguntas
 * Caso contrário, mostrará quais perguntas ainda precisam de respostas
 **/
resultsButton.addEventListener("click", () => {
  const unanswered = userAnswers
    .map((answer, index) => (answer === null ? index + 1 : null))
    .filter((item) => item !== null);
  console.log(unanswered);
  if (unanswered.length > 0) {
    alert(
      `Você ainda precisa responder as perguntas: ${unanswered.join(", ")}`,
    );

    return;
  }

  score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      score++;
    }
  });

  showResult();
});

slideEl.classList.add("slide-active");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function shuffleQuestionsAndAnswers(questions) {
  questions.forEach((q) => {
    /** guarda a resposta correta antes de embaralhar
        embaralha as respostas
        e atualiza o índice da resposta correta 
     ****************************************/

    const correctAnswer = q.answers[q.correct];
    shuffleArray(q.answers);
    q.correct = q.answers.indexOf(correctAnswer);
  });

  // embaralha a ordem das perguntas
  shuffleArray(questions);
}

shuffleQuestionsAndAnswers(questions);

loadQuestion();
renderNavigator();
