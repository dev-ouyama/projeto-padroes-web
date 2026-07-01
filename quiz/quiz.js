/*----------------LÓGICA---------------------------------------*/

/*A lógica será:
terão 4 pares (cada par tem uma pergunta nacional e uma internacional, as duas serão enviadas para o usuário) de perguntas pra cada tema - (sort para 4 pares em cada tema)
Dentre esses 12 pares (4 pares de todos os temas)
deverá ter um shuffle entre as perguntas na hora de ser enviada para o site*/

/*Cada tema é um array de pares de perguntas (nacional e internacional)*/
const themes = {
  cinema,
  music,
  cuisine,
};

//constantes globais para o quiz
const numPairs = 2; // número de pares de perguntas por tema
const numThemes = Object.keys(themes).length;
const numQuestions = numPairs * 2 * numThemes; //numero total de perguntas (2 perguntas por par, 3 temas)

/*---------------------------------------------------------------*/

/*-------------------MONTAGEM DAS PERGUNTAS----------------------*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Sorteia os pares de perguntas dentro de cada tema
function pickRandomPairs(arrayTheme, amount) {
  //copia o array
  const copy = [...arrayTheme];
  //embaralha o array
  shuffleArray(copy);
  let arrayReturn = [];
  for (let i = 0; i < amount; i++) {
    arrayReturn.push(copy[i]);
  }
  return arrayReturn;
}

function allQuestions() {
  // Array final contendo todas as questões a serem enviadas para o quiz do usuário
  let allQuestionsArray = [];
  let tempQuestionsArray = [];
  //let numPairs = 1;
  //Para cada tema ele irá realizar o método de pickRandomPairs e retornar 4 perguntas de cada
  Object.values(themes).forEach((element) => {
    // Para cada 'numPairs" de perguntas retornadas ele irá dividir os pares de objetos em perguntas únicas e as enviará para o array allQuestionsArray, que as embaralhará.
    tempQuestionsArray = pickRandomPairs(element, numPairs);
    tempQuestionsArray.forEach((pair) => {
      allQuestionsArray.push(pair.nacional);
      allQuestionsArray.push(pair.internacional);
    });
    tempQuestionsArray = [];
    //allQuestionsArray.push
  });
  shuffleArray(allQuestionsArray);
  return allQuestionsArray;
}

function shuffleAnswers(questions) {
  //Perguntas já vem embaralhadas, só falta embaralhar as respostas
  questions.forEach((q) => {
    /** guarda a resposta correta antes de embaralhar
        embaralha as respostas
        e atualiza o índice da resposta correta 
     ****************************************/

    const correctAnswer = q.answers[q.correct];
    shuffleArray(q.answers);
    q.correct = q.answers.indexOf(correctAnswer);
  });
}

function createQuestions() {
  // Array de questões, chama a função allQuestions para sortear todas as perguntas do banco de dados
  let questions = allQuestions();
  shuffleAnswers(questions);
  return questions;
}

/*---------------------------------------------------------------*/

/*---------------------CRIA AS PERGUNTAS-----------------------*/

let questions = createQuestions();

//Nao pode ser const pois é reatribuido em restartquiz
/*---------------------------------------------------------------*/

function loadQuestion() {
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];

  questionEl.textContent = q.question;

  // Esconde a imagem atual e só a revela quando a nova terminar de carregar,
  // evitando que a foto da pergunta anterior permaneça visível na transição.
  imageEl.style.opacity = "0";
  imageEl.onload = () => {
    imageEl.style.opacity = "1";
  };
  imageEl.onerror = () => {
    imageEl.style.opacity = "1";
  };
  imageEl.src = q.image;
  imageEl.alt = q.imageAlt;

  q.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.classList.add("answer-option");

    renderNavigator();
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
        return;
      }

      // Perguntas normais → animação
      animateNextQuestion(() => {
        currentQuestion++;

        loadQuestion();
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

const popup = document.getElementById("popup");
const backButton = document.getElementById("quiz-back-button");

backButton.addEventListener("click", showPopup);

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

var is_at_results = false;

// Função para mostrar o popup de confirmação ao voltar das pergunta do Quiz
function showPopup() {
  // Apenas abre a modal de confirmação se alguma das perguntas já tiverem sido respondidas e se não estiver na página de resultados
  if(userAnswers.filter(x => x != null).length > 0 && !is_at_results) {
    popup.showModal();
  } else {
    window.location.href = "../index.html";
  }
}

function showResult() {
  is_at_results = true;
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  resultsButton.style.display = "none";
  scoreEl.textContent = `Você acertou ${score} de ${questions.length}`;
  // RENDERIZA RADIAL
  renderRadialCharts(calcThemeScore(questions, userAnswers));
}

// Listener em button restart para chamar a funcao restarquiz
document
  .getElementById("restart-button")
  .addEventListener("click", restartQuiz);

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  // resetar respostas do usuário
  userAnswers = new Array(questions.length).fill(null);

  //cria novas questões:
  questions = createQuestions();

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

  // Faz o item ativo aparecer na área visível
  navigatorEl.querySelector(".active")?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
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
  // Checa se o usuário respondeu TODAS as perguntas, se sim, aparece o botão de ver resultados
  const todasRespondidas = userAnswers.every((answer) => answer !== null);

  resultsButton.style.display = todasRespondidas ? "block" : "none";
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

loadQuestion();

let canLeavePage = false;
let modalOpened = false;

// adiciona estado fake
function pushQuizState() {
  history.pushState({ quiz: true }, "");
}

pushQuizState();

window.addEventListener("popstate", () => {
  // se confirmou saída, deixa navegar
  if (canLeavePage) {
    return;
  }

  // evita abrir várias modais
  if (!modalOpened) {
    modalOpened = true;
    showPopup();
  }

  // recoloca estado fake
  pushQuizState();
});

popup.addEventListener("close", () => {
  modalOpened = false;
});

document.getElementById("confirm-exit").addEventListener("click", () => {
  canLeavePage = true;
  window.location.href = "../index.html";
});

/*---------------------------------------------------------------------------*/

/*RESULTADO EM FORMA RADIAL - MOSTRANDO A PORCENTAGEM DE ACERTO DO USUÁRIO EM CADA TEMA NO ESPECTRO NACIONAL E NO INTERNCIONAL*/

// Calcula a porcentagem de acerto por tema (cinema, música, culinária) separando nacional e internacional

// questions[i] a pergunta, que tem .tema(culinaria,cinema,msuica) e .nacional(flag)
// userAnswers[i]o indice que o usuário escolheu
// questions[i].correct o indice correto

function fillThemeScores(themeScores, correct, tema, nacional) {
  if (correct) {
    let origem = "nacional";
    if (nacional == false) {
      origem = "internacional";
    }
    themeScores[tema][origem]++;
  }
}

//
function calcThemeScore(questions, userAnswers) {
  let themeScores = {
    cinema: {
      nacional: 0,
      internacional: 0,
    },
    music: {
      nacional: 0,
      internacional: 0,
    },
    cuisine: {
      nacional: 0,
      internacional: 0,
    },
  };
  // contador de acertos por tema e tipo(nacional e internacional)
  questions.forEach((question, index) => {
    // verifica o usuario respondeu corretamente a pergutna, se sim, incrementa o contador de themeScores do tema e se é nacional ou nao
    if (userAnswers[index] === question.correct) {
      fillThemeScores(themeScores, true, question.tema, question.nacional);
    }
  });
  return themeScores;
}

/*----------------------------RENDER RADIAL----------------------------------*/

// funçao que cria o grafico radial (Radar Chart) usando a biblioteca Chart.js e utilizando os dados calculados por calcThemeScore

const radialChart = document.getElementById("radarChart");
// Renderiza os gráficos radiais com os resultados calculados por calcThemeScore

// renderRadialCharts(calcThemeScore(questions, userAnswers));

function renderRadialCharts(themeScores) {
  new Chart(radialChart, {
    type: "radar",
    data: {
      labels: [
        "Cinema Nacional",
        "Música Nacional",
        "Culinária Nacional",
        "Cinema Internacional",
        "Música Internacional",
        "Culinária Internacional",
      ],
      datasets: [
        {
          label: "Acertos",
          data: [
            themeScores.cinema.nacional,
            themeScores.music.nacional,
            themeScores.cuisine.nacional,
            themeScores.cinema.internacional,
            themeScores.music.internacional,
            themeScores.cuisine.internacional,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: numPairs,
          ticks: {
            stepSize: 1, //pra num inteiro
          },
        },
      },
    },
  });
}

// Radar Chart:https://www.chartjs.org/docs/latest/charts/radar.html
