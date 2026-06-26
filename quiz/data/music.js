const music = [
  {
    nacional: {
      question: "Qual é essa cantora brasileira?",
      image: "../../../assets/imgs/music/elza-soares.jpg",
      imageAlt: "Mulher negra idosa com cabelos volumosos brancos e expressão intensa.",
      answers: [
        "Alcione",
        "Elza Soares",
        "Dona Ivone Lara",
        "Clementina de Jesus",
      ],
      correct: 1,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é essa cantora de jazz e soul?",
      image: "../../../assets/imgs/music/nina-simone.jpg",
      imageAlt: "Mulher negra ao piano com expressão serena e cabelos curtos.",
      answers: [
        "Billie Holiday",
        "Ella Fitzgerald",
        "Nina Simone",
        "Sarah Vaughan",
      ],
      correct: 2,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse músico brasileiro, rei do baião?",
      image: "../../../assets/imgs/music/luiz-gonzaga.jpg",
      imageAlt: "Homem idoso com chapéu de cangaceiro segurando sanfona.",
      answers: [
        "Jackson do Pandeiro",
        "Dominguinhos",
        "Sivuca",
        "Luiz Gonzaga",
      ],
      correct: 3,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse músico jamaicano?",
      image: "../../../assets/imgs/music/bob-marley.jpg",
      imageAlt: "Homem negro com dreads longos cantando em show ao ar livre.",
      answers: [
        "Peter Tosh",
        "Bunny Wailer",
        "Jimmy Cliff",
        "Bob Marley",
      ],
      correct: 3,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse cantor brasileiro, pioneiro do soul nacional?",
      image: "../../../assets/imgs/music/tim-maia.jpg",
      imageAlt: "Homem negro corpulento sorrindo com camisa colorida aberta.",
      answers: [
        "Jorge Ben Jor",
        "Erasmo Carlos",
        "Tim Maia",
        "Gilberto Gil",
      ],
      correct: 2,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse cantor americano, pai do funk?",
      image: "../../../assets/imgs/music/james-brown.jpg",
      imageAlt: "Homem negro em palco com terno brilhante e cabelo alisado.",
      answers: [
        "Marvin Gaye",
        "James Brown",
        "Otis Redding",
        "Wilson Pickett",
      ],
      correct: 1,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse músico brasileiro experimental?",
      image: "../../../assets/imgs/music/hermeto-pascoal.jpg",
      imageAlt: "Homem branco com cabelos e barba longos e brancos tocando flauta.",
      answers: [
        "Egberto Gismonti",
        "Hermeto Pascoal",
        "Paulo Moura",
        "Sivuca",
      ],
      correct: 1,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse trompetista americano, ícone do jazz?",
      image: "../../../assets/imgs/music/miles-davis.jpg",
      imageAlt: "Homem negro de perfil tocando trompete com olhos fechados.",
      answers: [
        "Chet Baker",
        "Dizzy Gillespie",
        "Clifford Brown",
        "Miles Davis",
      ],
      correct: 3,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse cantor baiano, ícone da Tropicália?",
      image: "../../../assets/imgs/music/caetano-veloso.jpg",
      imageAlt: "Homem branco de meia idade com cabelos grisalhos e sorriso suave.",
      answers: [
        "Gilberto Gil",
        "Caetano Veloso",
        "Chico Buarque",
        "Milton Nascimento",
      ],
      correct: 1,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse cantor britânico, ícone do glam rock?",
      image: "../../../assets/imgs/music/david-bowie.jpg",
      imageAlt: "Homem branco com cabelo ruivo alaranjado e maquiagem extravagante.",
      answers: [
        "Elton John",
        "Marc Bolan",
        "David Bowie",
        "Freddie Mercury",
      ],
      correct: 2,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é essa cantora brasileira, a Pimentinha?",
      image: "../../../assets/imgs/music/elis-regina.jpg",
      imageAlt: "Mulher branca jovem com cabelos curtos cantando com microfone.",
      answers: [
        "Nana Caymmi",
        "Gal Costa",
        "Maria Bethânia",
        "Elis Regina",
      ],
      correct: 3,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é essa cantora britânica de soul e jazz?",
      image: "../../../assets/imgs/music/amy-winehouse.jpg",
      imageAlt: "Mulher branca com coque alto e delineado marcante cantando.",
      answers: [
        "Duffy",
        "Adele",
        "Amy Winehouse",
        "Lily Allen",
      ],
      correct: 2,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse cantor e compositor brasileiro?",
      image: "../../../assets/imgs/music/chico-buarque.jpg",
      imageAlt: "Homem branco de meia idade com expressão pensativa e violão.",
      answers: [
        "Milton Nascimento",
        "Ivan Lins",
        "Chico Buarque",
        "Djavan",
      ],
      correct: 2,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse cantor e poeta canadense?",
      image: "../../../assets/imgs/music/leonard-cohen.jpg",
      imageAlt: "Homem branco idoso com chapéu fedora e terno escuro.",
      answers: [
        "Bob Dylan",
        "Leonard Cohen",
        "Paul Simon",
        "Nick Cave",
      ],
      correct: 1,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse músico baiano, ex-ministro da cultura?",
      image: "../../../assets/imgs/music/gilberto-gil.jpg",
      imageAlt: "Homem negro sorridente com dreads grisalhos e violão.",
      answers: [
        "Caetano Veloso",
        "Carlinhos Brown",
        "Gilberto Gil",
        "Djavan",
      ],
      correct: 2,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse músico americano, ícone do funk e pop dos anos 80?",
      image: "../../../assets/imgs/music/prince.jpg",
      imageAlt: "Homem negro baixo com cabelo volumoso e roupa roxa extravagante.",
      answers: [
        "Michael Jackson",
        "Prince",
        "Rick James",
        "Morris Day",
      ],
      correct: 1,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse cantor brasileiro, o Rei?",
      image: "../../../assets/imgs/music/roberto-carlos.jpg",
      imageAlt: "Homem branco idoso sorrindo com cabelos brancos bem penteados.",
      answers: [
        "Erasmo Carlos",
        "Roberto Carlos",
        "Agnaldo Timóteo",
        "Nelson Ned",
      ],
      correct: 1,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse cantor americano, o Rei do Rock?",
      image: "../../../assets/imgs/music/elvis-presley.jpg",
      imageAlt: "Homem branco jovem com topete e macacão branco com pedras.",
      answers: [
        "Eddie Cochran",
        "Buddy Holly",
        "Elvis Presley",
        "Jerry Lee Lewis",
      ],
      correct: 2,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é essa cantora baiana, rainha do axé?",
      image: "../../../assets/imgs/music/ivete-sangalo.jpg",
      imageAlt: "Mulher loira sorridente em cima de trio elétrico com microfone.",
      answers: [
        "Claudia Leitte",
        "Daniela Mercury",
        "Bell Marques",
        "Ivete Sangalo",
      ],
      correct: 3,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é essa cantora americana?",
      image: "../../../assets/imgs/music/beyonce.jpg",
      imageAlt: "Mulher negra em show com figurino dourado e cabelos longos.",
      answers: [
        "Rihanna",
        "Beyoncé",
        "Alicia Keys",
        "Jennifer Hudson",
      ],
      correct: 1,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é essa cantora carioca de funk e pop?",
      image: "../../../assets/imgs/music/anitta.jpg",
      imageAlt: "Mulher jovem morena em clipe colorido com dançarinos ao fundo.",
      answers: [
        "Ludmilla",
        "MC Kevinho",
        "Lexa",
        "Anitta",
      ],
      correct: 3,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse cantor americano, o Rei do Pop?",
      image: "../../../assets/imgs/music/michael-jackson.jpg",
      imageAlt: "Homem negro com luva branca e fedora em pose icônica de dança.",
      answers: [
        "Prince",
        "Usher",
        "Michael Jackson",
        "James Brown",
      ],
      correct: 2,
      tema: "music",
      nacional: false
    }
  },
  {
    nacional: {
      question: "Qual é esse cantor e ator carioca?",
      image: "../../../assets/imgs/music/seu-jorge.jpg",
      imageAlt: "Homem negro com chapéu e violão em show intimista.",
      answers: [
        "Marcelo D2",
        "Seu Jorge",
        "Criolo",
        "BNegão",
      ],
      correct: 1,
      tema: "music",
      nacional: true
    },
    internacional: {
      question: "Qual é esse cantor americano, o Homem de Preto?",
      image: "../../../assets/imgs/music/johnny-cash.jpg",
      imageAlt: "Homem branco idoso todo vestido de preto com violão.",
      answers: [
        "Waylon Jennings",
        "Kris Kristofferson",
        "Willie Nelson",
        "Johnny Cash",
      ],
      correct: 3,
      tema: "music",
      nacional: false
    }
  }
];