const cinema = [
  {
    nacional: {
      /*Filme Tropa de Elite*/
      question: "Qual filme é esse?",
      image:
        "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/wagner-moura-tropa-de-elite.jpg?w=1200&h=1200&crop=1",
      imageAlt: "Homem do BOPE segurando fuzil.",
      answers: [
        "Carandiru: O Filme",
        "Tropa de Elite",
        "Cidade de Deus",
        "Central do Brasil",
      ],
      correct: 1,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /*Filme Homem Aranha*/
      question: "Que personagem de filme é esse?",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
      imageAlt: "Homem com fantasia vermelha e azul com teia de aranha no peito.",
      answers: [
        "Homem Aranha",
        "Graça Aranha",
        "Homem Formiga",
        "Homem Libélula",
      ],
      correct: 0,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /*Filme Cidade de Deus*/
      question: "Qual filme é esse?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOecpBVeL8FSXW8UWzPvIO88RfS3FQGpuUlfNK-csdxqBcq8kzqRsW7a8&s=10",
      imageAlt: "Garoto com cabelo raspado em frente a um grupo de bandidos armados ao fundo.",
      answers: [
        "Carandiru: O Filme",
        "Tropa de Elite",
        "Cidade de Deus",
        "Bacurau",
      ],
      correct: 2,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Clube da Luta */
      question: "Qual filme é esse?",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/770d6a7911d4a31aed034d4c3abe049962b09fa3dec49defe9866a90fc869000._SX1080_FMjpg_.jpg",
      imageAlt: "Homem encarando a câmera com olheiras.",
      answers: [
        "Clube da Luta",
        "Bastardos Inglórios",
        "Se7en",
        "American History X",
      ],
      correct: 0,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Central do Brasil */
      question: "Qual filme brasileiro é esse?",
      image:
        "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/central-do-brasil-fernanda-montenegro.png?w=720",
      imageAlt:
        "Mulher idosa interpretada por Fernanda Montenegro deitada no colo de garoto.",
      answers: [
        "Central do Brasil",
        "O Auto da Compadecida",
        "Eu Sei Que Vou Te Amar",
        "Pixote",
      ],
      correct: 0,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Forrest Gump */
      question: "Qual filme é esse?",
      image:
        "https://www.elhombre.com.br/wp-content/uploads/2021/06/forrest-gump-1.jpg",
      imageAlt: "Homem sentado em banco de praça com caixa de chocolates",
      answers: ["Cast Away", "Big", "Forrest Gump", "Philadelphia"],
      correct: 2,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* O Auto da Compadecida */
      question: "Qual filme brasileiro é esse?",
      image:
        "https://s2-techtudo.glbimg.com/oHJiZY7IFO4HKh5L_IFdL6Xm69s=/0x0:984x647/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/n/8/xgGpCmRISJiICEWE0ppg/chico-selton-mello-e-joao-grilo-matheus-nachtergaele-o-auto-da-compadecida.webp",
      imageAlt: "Dois homens com chapéu de cangaceiro no sertão nordestino",
      answers: [
        "Lisbela e o Prisioneiro",
        "O Auto da Compadecida",
        "Baile Perfumado",
        "Abril Despedaçado",
      ],
      correct: 1,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Matrix */
      question: "Qual filme é esse?",
      image:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/57CA/production/_122247422_pills.jpg",
      imageAlt: "Duas mãos segurando pílulas vermelha e azul, respectivamente",
      answers: [
        "Matrix",
        "Take Your Pills",
        "O Exterminador do Futuro",
        "Blade Runner",
      ],
      correct: 0,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Bacurau */
      question: "Qual filme brasileiro é esse?",
      image: "https://www.brasildefato.com.br/wp-content/uploads/2024/09/image_processing20210311-29999-15vm7ea.jpeg",
      imageAlt: "Grupo de pessoas armadas apontando para uma cova no chão. Pássaros negros voando ao fundo.",
      answers: [
        "Aquarius",
        "Bacurau",
        "Democracia em Vertigem",
        "Neighbouring Sounds",
      ],
      correct: 1,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Parasita */
      question: "Qual filme é esse?",
      image:
        "https://media.newyorker.com/photos/5da4a5c756dcd400082a63ba/16:9/w_2559,h_1439,c_limit/Brody-Parasite.jpg",
      imageAlt: "Família coreana reunida em volta de uma caixa de pizza.",
      answers: ["Minari", "Parasita", "Burning", "A Criada"],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Carandiru */
      question: "Qual filme brasileiro é esse?",
      image: "https://static.mostra.org/_img/_jornal/2240_t.jpg",
      imageAlt:
        "Médico passando em um corredor de um complexo penitenciário com presos ao fundo.",
      answers: ["Carandiru", "Tropa de Elite 2", "Memórias do Cárcere", "Pixote"],
      correct: 0,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Interestelar */
      question: "Qual filme é esse?",
      image:
        "https://variety.com/wp-content/uploads/2014/10/interstellar-6.jpg?w=1000",
      imageAlt:
        "Astronauta andando em planeta desértico com céu estrelado ao fundo.",
      answers: ["Gravidade", "Interestelar", "Ad Astra", "A Chegada"],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Aquarius */
      question: "Qual filme brasileiro é esse?",
      image:
        "https://static01.nyt.com/images/2016/10/13/multimedia/movies-10142016-aqua/movies-10142016-aqua-superJumbo.jpg",
      imageAlt: "Mulher madura sozinha andando numa viela de Recife",
      answers: ["Aquarius", "Que Horas Ela Volta?", "Divã", "A Vida Invisível"],
      correct: 0,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Titanic */
      question: "Qual filme é esse?",
      image:
        "https://cdn.prod.website-files.com/610c5007d3b7ee36cc3e07c1/63dcfec1c7bd554623aac800_Titanic-1.jpeg",
      imageAlt: "Casal jovem na proa de um navio transatlântico",
      answers: [
        "Pearl Harbor",
        "Titanic",
        "O Náufrago",
        "Master and Commander",
      ],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Que Horas Ela Volta? */
      question: "Qual filme brasileiro é esse?",
      image:
        "https://awfj.org/awards-intelligencer/wp-content/uploads/sites/5/2015/08/CaseMichael.jpg",
      imageAlt:
        "Trabalhadora doméstica acariciando os cabelos de um jovem em seu colo.",
      answers: ["Que Horas Ela Volta?", "Doméstica", "Aquarius", "Casa Grande"],
      correct: 0,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Coringa */
      question: "Qual filme é esse?",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjJhYmJkZmQtMmIxZS00NTc0LWEzOWMtNWMyYzZlMWRiNTI0XkEyXkFqcGc@._V1_.jpg",
      imageAlt: "Homem de maquiagem de palhaço descendo escadaria dançando",
      answers: ["Máscara", "Coringa", "Batman", "O Cavaleiro das Trevas"],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Eu Sei Que Vou Te Amar */
      question:
        "Qual atriz é protagonista de: Eu sei que vou te amar?",
      image:
        "https://cinemateca.org.br/wp-content/uploads/2025/01/cbs_id_eu_sei_que_vou_te_amar.jpg",
      imageAlt: "Atriz brasileira consagrada em cena dramática",
      answers: [
        "Glória Pires",
        "Fernanda Montenegro",
        "Sônia Braga",
        "Fernanda Torres",
      ],
      correct: 3, 
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* De Volta Para o Futuro */
      question: "Qual filme é esse?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysYUdJ1b5p4jRiUfBxcy9IAaDDSmPhBFuE_17Vey5TG13xk7yals_bTGK&s=10",
      imageAlt: "Carro esportivo prata com chamas saindo dos pneus",
      answers: [
        "De Volta Para o Futuro",
        "O Exterminador do Futuro",
        "Tron",
        "Short Circuit",
      ],
      correct: 0,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Tropa de Elite 2 */
      question: "Qual filme brasileiro é esse?",
      image: "https://i.ytimg.com/vi/126YLdFgKJo/maxresdefault.jpg",
      imageAlt: "Coronel depondo em frente a uma mesa com microfone.",
      answers: [
        "Tropa de Elite",
        "Tropa de Elite 2",
        "O Mecanismo",
        "Carandiru",
      ],
      correct: 1,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Senhor dos Anéis */
      question: "Qual filme é esse?",
      image: "https://www.intofilm.org/intofilm-production/scaledcropped/870x489https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3930-the-lord-of-the-rings-the-fellowship-of-the-ring--hi_res-a207bd11.jpg/film__3930-the-lord-of-the-rings-the-fellowship-of-the-ring--hi_res-a207bd11.jpg",
      imageAlt:
        "Grupo de personagens de fantasia caminhando por paisagem montanhosa",
      answers: ["Hobbit", "Senhor dos Anéis", "Narnia", "História sem Fim"],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Pixote */
      question: "Qual filme brasileiro é esse?",
      image: "https://jornal.usp.br/wp-content/uploads/20170307_00_pixote.jpg",
      imageAlt: "Criança de touca em ambiente penitenciário com outros jovens ao fundo.",
      answers: [
        "Moleque Tião",
        "Pixote",
        "Cidade de Deus",
        "Pequeno Dicionário Amoroso",
      ],
      correct: 1,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Pulp Fiction */
      question: "Qual filme é esse?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaM1cYOdfu9vegVLapYhoAcOikekc_ZZ7nvFFZnm7da6RHkuvVzu-_aE&s=10",
      imageAlt: "Dois homens de terno preto e gravata fina apontando uma arma para frente.",
      answers: [
        "Reservoir Dogs",
        "Pulp Fiction",
        "Bastardos Inglórios",
        "Django Livre",
      ],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* A Vida Invisível */
      question: "Qual filme brasileiro é esse?",
      image: "https://ims.com.br/wp-content/uploads/2019/11/A-vida-invis%C3%ADvel03_1920x1080.jpg",
      imageAlt: "Duas irmãs jovens no Rio de Janeiro dos anos 1950",
      answers: [
        "Flores Raras",
        "A Vida Invisível",
        "Eu Sei Que Vou Te Amar",
        "Olga",
      ],
      correct: 1,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* La La Land */
      question: "Qual filme é esse?",
      image: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZsasO09j8Jm38swALhu_iu7yvRYG9yuF3e-k5rpg7KSu5ueUD-qAfH5nCnKvStnuFQx-F0OQGqUzxEkcG2PCf9oP5XFCb7FJQxi.jpg?r=ada",
      imageAlt: "Casal dançando sob estrelas em mirante de Los Angeles",
      answers: ["La La Land", "Moulin Rouge", "Chicago", "Mamma Mia"],
      correct: 0,
      tema: "cinema",
      nacional: false,
    },
  },
  {
    nacional: {
      /* Menino Maluquinho */
      question: "Qual filme brasileiro é esse?",
      image: "https://media.bcc.org.br/imagem/fotografia/jpg/FN_38856.jpg",
      imageAlt: "Criança sorrindo em uma cena do filme",
      answers: [
        "Turma da Mônica: Laços",
        "Chico Bento e a Goiabeira Maraviósa",
        "Menino Maluquinho",
        "Castelo Rá-Tim-Bum, o Filme",
      ],
      correct: 2,
      tema: "cinema",
      nacional: true,
    },
    internacional: {
      /* Escola de Rock */
      question: "Qual filme é esse?",
      image:
        "https://i0.wp.com/valkirias.com.br/wp-content/uploads/2018/07/Escola-de-Rock_2.png?resize=740%2C416",
      imageAlt: "Professor dando aula de música para crianças na escola",
      answers: [
        "Adorável Professor",
        "Escola de Rock",
        "Whiplash: Em Busca da Perfeição",
        "Rock 'n' Roll High School",
      ],
      correct: 1,
      tema: "cinema",
      nacional: false,
    },
  },
];

/* MODELO DOC
const [TEMA] = [
    {
        nacional: {
            question: "[PERGUNTA]",
            image: "[IMAGEM]",
            alt: "[IMAGE_ALT]",
            answers: [
                "Resposta1",
                "Resposta2",
                "Resposta3",
                "Resposta4",
            ],
            correct: 0 - 3,
            nacional: true
        },
        internacional: {
            question: "[PERGUNTA]",
            image: "[IMAGEM]",
            alt: "[IMAGE_ALT]",
            answers: [
                "Resposta1",
                "Resposta2",
                "Resposta3",
                "Resposta4",
            ],
            correct: 0 - 3,
            nacional: false
        }
    }
]
*/
