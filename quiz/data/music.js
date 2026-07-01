const music = [
  {
    nacional: {
      question: "Qual é essa cantora brasileira?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Elza_Soares.jpg",
      imageAlt: "Cantora brasileira reconhecida pela voz marcante e pela influência no samba e na música popular brasileira.",
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
      question: "Que cantora de jazz é essa?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nina_Simone_-1969.jpg",
      imageAlt: "Pianista e cantora americana que se destacou no jazz e participou ativamente do movimento pelos direitos civis.",
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
      imageAlt: "Músico pernambucano responsável por popularizar ritmos nordestinos em todo o Brasil.",
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
      imageAlt: "Cantor jamaicano que se tornou o principal nome mundial do reggae.",
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
      imageAlt: "Cantor e compositor brasileiro conhecido por introduzir o soul e o funk na música popular do país.",
      answers: ["Jorge Ben Jor", "Erasmo Carlos", "Tim Maia", "Gilberto Gil"],
      correct: 2,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor americano, pai do funk?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/James_Brown_Live_Hamburg_1973_1702730029.jpg",
      imageAlt: "Cantor americano frequentemente considerado uma das figuras mais importantes da história do funk.",
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
        "Instrumentista e compositor brasileiro conhecido pelas experimentações musicais.",
      answers: ["Egberto Gismonti", "Hermeto Pascoal", "Paulo Moura", "Sivuca"],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse trompetista americano, ícone do jazz?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Miles_Davis_%28Antibes_Juan-les-Pins_1963%29.jpg",
      imageAlt: "Trompetista americano que influenciou profundamente a evolução do jazz moderno.",
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
      imageAlt: "Cantor e compositor baiano associado ao movimento tropicalista e à renovação da música brasileira.",
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
      imageAlt: "Artista britânico conhecido pelas constantes reinvenções visuais e musicais ao longo da carreira.",
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
      imageAlt: "Cantora brasileira considerada uma das maiores intérpretes da música popular do país.",
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
      imageAlt: "Compositor e escritor brasileiro reconhecido pelas letras sofisticadas e pelo engajamento político e social.",
      answers: ["Milton Nascimento", "Ivan Lins", "Chico Buarque", "Djavan"],
      correct: 2,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor e poeta canadense?",
      image:"https://19930cd4.delivery.rocketcdn.me/wp-content/uploads/2021/11/articles-3qs2d3xVbZp8WoP.jpg",
      imageAlt: "Poeta, escritor e cantor canadense conhecido pelas letras introspectivas e melancólicas",
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
      imageAlt: "Cantor, compositor e ex-ministro brasileiro com forte participação na música e na cultura do país.",
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
      imageAlt: "Músico americano conhecido pela versatilidade instrumental e pela mistura de funk, rock e pop.",
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
      imageAlt: "Cantor brasileiro com uma das carreiras mais longas e bem-sucedidas da música nacional.",
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
      imageAlt: "Cantora americana reconhecida pela carreira solo de sucesso e pelas performances de grande escala.",
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
      imageAlt: "Cantora brasileira responsável pela internacionalização recente do funk e do pop nacional.",
      answers: ["Ludmilla", "MC Kevinho", "Lexa", "Anitta"],
      correct: 3,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor americano, o Rei do Pop?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Michael_Jackson_in_1988.jpg",
      imageAlt: "Artista americano conhecido pelo impacto mundial na música pop, na dança e nos videoclipes.",
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
      imageAlt: "Cantor e ator brasileiro conhecido pelo trabalho na música popular e no cinema.",
      answers: ["Marcelo D2", "Seu Jorge", "Criolo", "BNegão"],
      correct: 1,
      tema: "music",
      nacional: true,
    },
    internacional: {
      question: "Qual é esse cantor americano, o Homem de Preto?",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Johnny_Cash_1977.jpg",
      imageAlt: "Cantor americano cuja carreira se tornou uma referência da música country e folk.",
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
