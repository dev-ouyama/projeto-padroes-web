const cinema = [
    {
        nacional: {
            /*Filme Tropa de Elite*/
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/tropa-de-elite.jpg",
            imageAlt: "Homem do BOPE segurando fuzil.",
            answers: [
                "Carandiru: O Filme",
                "Tropa de Elite",
                "Cidade de Deus",
                "Central do Brasil",
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /*Filme Homem Aranha*/
            question: "Que personagem de filme é esse?",
            image: "../../../assets/imgs/homem-aranha.jpg",
            imageAlt: "",
            answers: [
                "Homem Aranha",
                "Superman",
                "Batman",
                "Homem Libélula"
            ],
            correct: 0,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /*Filme Cidade de Deus*/
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cidade-de-deus.jpg",
            imageAlt: "",
            answers: [
                "Carandiru: O Filme",
                "Tropa de Elite",
                "Cidade de Deus",
                "Bacurau",
            ],
            correct: 2,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Clube da Luta */
            question: "Qual filme é esse?",
            image: "https://m.media-amazon.com/images/S/pv-target-images/770d6a7911d4a31aed034d4c3abe049962b09fa3dec49defe9866a90fc869000._SX1080_FMjpg_.jpg",
            imageAlt: "Homem encarando a câmera com olheiras.",
            answers: [
                "Clube da Luta",
                "Bastardos Inglórios",
                "Se7en",
                "American History X"
            ],
            correct: 0,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Central do Brasil */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/central-do-brasil.jpg",
            imageAlt: "Mulher idosa sentada em frente a uma máquina de escrever em estação de trem",
            answers: [
                "Central do Brasil",
                "O Auto da Compadecida",
                "Eu Sei Que Vou Te Amar",
                "Pixote"
            ],
            correct: 0,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Forrest Gump */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/forrest-gump.jpg",
            imageAlt: "Homem sentado em banco de praça com caixa de chocolates",
            answers: [
                "Cast Away",
                "Big",
                "Forrest Gump",
                "Philadelphia"
            ],
            correct: 2,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* O Auto da Compadecida */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/auto-da-compadecida.jpg",
            imageAlt: "Dois homens com chapéu de cangaceiro no sertão nordestino",
            answers: [
                "Lisbela e o Prisioneiro",
                "O Auto da Compadecida",
                "Baile Perfumado",
                "Abril Despedaçado"
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Matrix */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/matrix.jpg",
            imageAlt: "Homem de sobretudo preto desviando de balas em câmera lenta",
            answers: [
                "Matrix",
                "Minority Report",
                "O Exterminador do Futuro",
                "Blade Runner"
            ],
            correct: 0,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Bacurau */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/bacurau.jpg",
            imageAlt: "Placa de cidade pequena no sertão com buracos de bala",
            answers: [
                "Aquarius",
                "Bacurau",
                "Democracia em Vertigem",
                "Neighbouring Sounds"
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Parasita */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/parasita.jpg",
            imageAlt: "Família coreana reunida em sala de estar de casa luxuosa",
            answers: [
                "Minari",
                "Parasita",
                "Burning",
                "A Criada"
            ],
            correct: 1,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Carandiru */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/carandiru.jpg",
            imageAlt: "Vista aérea de presídio superlotado",
            answers: [
                "Carandiru",
                "Tropa de Elite 2",
                "O Mecanismo",
                "Pixote"
            ],
            correct: 0,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Interestelar */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/interestelar.jpg",
            imageAlt: "Astronauta flutuando próximo a um buraco negro",
            answers: [
                "Gravidade",
                "Interestelar",
                "Ad Astra",
                "A Chegada"
            ],
            correct: 1,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Aquarius */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/aquarius.jpg",
            imageAlt: "Mulher madura sozinha em apartamento antigo à beira-mar",
            answers: [
                "Aquarius",
                "Que Horas Ela Volta?",
                "Divã",
                "A Vida Invisível"
            ],
            correct: 0,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Titanic */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/titanic.jpg",
            imageAlt: "Casal jovem na proa de um navio transatlântico",
            answers: [
                "Pearl Harbor",
                "Titanic",
                "O Náufrago",
                "Master and Commander"
            ],
            correct: 1,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Que Horas Ela Volta? */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/que-horas-ela-volta.jpg",
            imageAlt: "Mulher trabalhando como empregada doméstica em casa grande de São Paulo",
            answers: [
                "Que Horas Ela Volta?",
                "Doméstica",
                "Aquarius",
                "Casa Grande",
            ],
            correct: 0,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Coringa */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/coringa.jpg",
            imageAlt: "Homem de maquiagem de palhaço descendo escadaria dançando",
            answers: [
                "Máscara",
                "Coringa",
                "Batman",
                "O Cavaleiro das Trevas"
            ],
            correct: 1,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Eu Sei Que Vou Te Amar */
            question: "Qual ator é o protagonista desse clássico do cinema brasileiro?",
            image: "../../../assets/imgs/cinema/fernanda-montenegro.jpg",
            imageAlt: "Atriz brasileira consagrada em cena dramática",
            answers: [
                "Glória Pires",
                "Fernanda Montenegro",
                "Sônia Braga",
                "Regina Casé"
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* De Volta Para o Futuro */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/de-volta-para-o-futuro.jpg",
            imageAlt: "Carro esportivo prata com chamas saindo dos pneus",
            answers: [
                "De Volta Para o Futuro",
                "O Exterminador do Futuro",
                "Tron",
                "Short Circuit"
            ],
            correct: 0,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Tropa de Elite 2 */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/tropa-de-elite-2.jpg",
            imageAlt: "Coronel fardado em coletiva de imprensa com microfones",
            answers: [
                "Tropa de Elite",
                "Tropa de Elite 2",
                "O Mecanismo",
                "Carandiru"
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Senhor dos Anéis */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/senhor-dos-aneis.jpg",
            imageAlt: "Grupo de personagens de fantasia caminhando por paisagem montanhosa",
            answers: [
                "Hobbit",
                "Senhor dos Anéis",
                "Narnia",
                "História sem Fim"
            ],
            correct: 1,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* Pixote */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/pixote.jpg",
            imageAlt: "Criança de rua sozinha em calçada de cidade grande",
            answers: [
                "Moleque Tião",
                "Pixote",
                "Cidade de Deus",
                "Pequeno Dicionário Amoroso"
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* Pulp Fiction */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/pulp-fiction.jpg",
            imageAlt: "Dois homens de terno preto e gravata fina conversando",
            answers: [
                "Reservoir Dogs",
                "Pulp Fiction",
                "Bastardos Inglórios",
                "Django Livre"
            ],
            correct: 1,
            tema: "cinema",
            nacional: false
        }
    },
    {
        nacional: {
            /* A Vida Invisível */
            question: "Qual filme brasileiro é esse?",
            image: "../../../assets/imgs/cinema/a-vida-invisivel.jpg",
            imageAlt: "Duas irmãs jovens no Rio de Janeiro dos anos 1950",
            answers: [
                "Flores Raras",
                "A Vida Invisível",
                "Eu Sei Que Vou Te Amar",
                "Olga",
            ],
            correct: 1,
            tema: "cinema",
            nacional: true
        },
        internacional: {
            /* La La Land */
            question: "Qual filme é esse?",
            image: "../../../assets/imgs/cinema/la-la-land.jpg",
            imageAlt: "Casal dançando sob estrelas em mirante de Los Angeles",
            answers: [
                "La La Land",
                "Moulin Rouge",
                "Chicago",
                "Mamma Mia"
            ],
            correct: 0,
            tema: "cinema",
            nacional: false
        }
    }
];

/* MODELO
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