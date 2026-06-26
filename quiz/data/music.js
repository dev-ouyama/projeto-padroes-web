const music = [
  {
    nacional: {
      question: "Qual é essa cantora brasileira?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Elza_Soares.jpg",
      imageAlt: "Elza Soares em foto em preto e branco.",
      answers: [
        "Alcione",
        "Elza Soares",
        "Dona Ivone Lara",
        "Clementina de Jesus",
      ],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nina_Simone_-1969.jpg",
      imageAlt: "Nina Simone em 1969.",
      answers: [
        "Billie Holiday",
        "Ella Fitzgerald",
        "Nina Simone",
        "Sarah Vaughan",
      ],
      correct: 2,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse músico brasileiro, rei do baião?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Luiz_Gonzaga_%281957%29.jpg/960px-Luiz_Gonzaga_%281957%29.jpg",
      imageAlt: "Luiz Gonzaga com sanfona em 1957.",
      answers: [
        "Jackson do Pandeiro",
        "Dominguinhos",
        "Sivuca",
        "Luiz Gonzaga",
      ],
      correct: 3,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse músico jamaicano?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bob_Marley_1976_press_photo.jpg",
      imageAlt: "Bob Marley em foto promocional de 1976.",
      answers: ["Peter Tosh", "Bunny Wailer", "Jimmy Cliff", "Bob Marley"],
      correct: 3,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse cantor brasileiro, pioneiro do soul nacional?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/TIM_MAIA_SONIA_D%27ALMEIDA_1987.jpg",
      imageAlt: "Tim Maia em foto de 1987.",
      answers: ["Jorge Ben Jor", "Erasmo Carlos", "Tim Maia", "Gilberto Gil"],
      correct: 2,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor americano, pai do funk?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/James_Brown_Live_Hamburg_1973_1702730029.jpg",
      imageAlt: "James Brown no palco em Hamburgo, 1973.",
      answers: ["Marvin Gaye", "James Brown", "Otis Redding", "Wilson Pickett"],
      correct: 1,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse músico brasileiro experimental?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/HermetoBsAs78-Arturo-Encina.jpg",
      imageAlt:
        "Homem branco com cabelos e barba longos e brancos tocando flauta.",
      answers: ["Egberto Gismonti", "Hermeto Pascoal", "Paulo Moura", "Sivuca"],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse trompetista americano, ícone do jazz?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Miles_Davis_%28Antibes_Juan-les-Pins_1963%29.jpg",
      imageAlt: "Homem negro de perfil tocando trompete com olhos fechados.",
      answers: [
        "Chet Baker",
        "Dizzy Gillespie",
        "Clifford Brown",
        "Miles Davis",
      ],
      correct: 3,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse cantor baiano, ícone da Tropicália?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caetano_Veloso_(cropped).jpg",
      imageAlt: "Caetano Veloso em entrevista em São Paulo, 2022.",
      answers: [
        "Gilberto Gil",
        "Caetano Veloso",
        "Chico Buarque",
        "Milton Nascimento",
      ],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor britânico, ícone do glam rock?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/David_Bowie_in_Lavapies_-_Madrid_01.jpg",
      imageAlt: "David Bowie em foto de rua em Madri.",
      answers: ["Elton John", "Marc Bolan", "David Bowie", "Freddie Mercury"],
      correct: 2,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é essa cantora brasileira, a Pimentinha?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Elis_Regina_1972.tif/lossless-page1-960px-Elis_Regina_1972.tif.png",
      imageAlt: "Mulher sorrindo segurando em um microfone.",
      answers: ["Nana Caymmi", "Gal Costa", "Maria Bethânia", "Elis Regina"],
      correct: 3,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é essa cantora britânica de soul e jazz?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Amy_Winehouse_f4962007_crop.jpg",
      imageAlt:
        'Mulher branca com cabelo preto e maquiagem pesada. Tatuagens nos braços, e cabelo estilo "Beehinve" dos anos 60. Cantando com microfone em um palco.',
      answers: ["Duffy", "Adele", "Amy Winehouse", "Lily Allen"],
      correct: 2,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse cantor e compositor brasileiro?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chico_Buarque_in_2023.jpg",
      imageAlt: "Chico Buarque em 2023.",
      answers: ["Milton Nascimento", "Ivan Lins", "Chico Buarque", "Djavan"],
      correct: 2,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor e poeta canadense?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Leonard_Cohen_1_2013.jpg",
      imageAlt: "Leonard Cohen em 2013.",
      answers: ["Bob Dylan", "Leonard Cohen", "Paul Simon", "Nick Cave"],
      correct: 1,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse músico baiano, ex-ministro da cultura?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gilberto_Gil_(5142820705)_(cropped).jpg",
      imageAlt: "Gilberto Gil em foto de palco.",
      answers: ["Caetano Veloso", "Carlinhos Brown", "Gilberto Gil", "Djavan"],
      correct: 2,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question:
        "Qual é esse músico americano, ícone do funk e pop dos anos 80?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Prince_at_Coachella_(cropped).jpg",
      imageAlt: "Prince no Coachella.",
      answers: ["Michael Jackson", "Prince", "Rick James", "Morris Day"],
      correct: 1,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse cantor brasileiro, o Rei?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Roberto_Carlos_Pr%C3%AAmio_Amazonas_2023.jpg",
      imageAlt: "Roberto Carlos em 2023.",
      answers: [
        "Erasmo Carlos",
        "Roberto Carlos",
        "Agnaldo Timóteo",
        "Nelson Ned",
      ],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: 'Qual é esse cantor americano, o "Rei do Rock"?',
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/Elvis_Presley_first_national_television_appearance_1956.jpg",
      imageAlt:
        "Homem branco jovem com topete e macacão com lantejoulas tocando guitarra.",
      answers: [
        "Eddie Cochran",
        "Buddy Holly",
        "Elvis Presley",
        "Jerry Lee Lewis",
      ],
      correct: 2,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é essa cantora baiana, rainha do axé?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ivete_Sangalo_2012.jpg",
      imageAlt:
        "Mulher loira sorridente em cima de trio elétrico com microfone.",
      answers: [
        "Claudia Leitte",
        "Daniela Mercury",
        "Bell Marques",
        "Ivete Sangalo",
      ],
      correct: 3,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é essa cantora americana do pop e R&B?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Beyonc%C3%A9_Knowles_GMA_Run_the_World_cropped.jpg",
      imageAlt: "Beyoncé em show.",
      answers: ["Rihanna", "Beyoncé", "Alicia Keys", "Jennifer Hudson"],
      correct: 1,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é essa cantora carioca de funk e pop?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anitta_for_Attractive_Mindset_podcast_02.jpg",
      imageAlt: "Anitta em foto de podcast.",
      answers: ["Ludmilla", "MC Kevinho", "Lexa", "Anitta"],
      correct: 3,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor americano, o Rei do Pop?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Michael_Jackson_in_1988.jpg",
      imageAlt: "Michael Jackson em 1988.",
      answers: ["Prince", "Usher", "Michael Jackson", "James Brown"],
      correct: 2,
      tema: "music",
      nacional: false,
    },
  },
  {
    nacional: {
      question: "Qual é esse cantor e ator carioca?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Seu_Jorge.jpg",
      imageAlt: "Seu Jorge em foto de divulgação.",
      answers: ["Marcelo D2", "Seu Jorge", "Criolo", "BNegão"],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor americano, o Homem de Preto?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Johnny_Cash_1977.jpg",
      imageAlt: "Johnny Cash em 1977.",
      answers: [
        "Waylon Jennings",
        "Kris Kristofferson",
        "Willie Nelson",
        "Johnny Cash",
      ],
      correct: 3,
      tema: "music",
      nacional: false,
    },
  },
];
