const cuisine = [
    {
        nacional: {
            /*Tucupi*/
            question: "Qual é esse prato típico da culinária paraense?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/TUCUPI_-_panoramio.jpg/500px-TUCUPI_-_panoramio.jpg",
            imageAlt: "Garrafa com caldo amarelo feito de mandioca brava.",
            answers: [
                "Maniçoba",
                "Açaí",
                "Tacacá",
                "Tucupi",
            ],
            correct: 3,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Pho vietnamita */
            question: "Qual é essa sopa tradicional asiática?",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg",
            imageAlt: "Tigela de sopa com macarrão fino, carne fatiada e ervas frescas.",
            answers: [
                "Ramen",
                "Laksa",
                "Pho",
                "Bún bò Huế",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Maniçoba */
            question: "Qual é esse prato típico do Pará, feito com folha de mandioca cozida por dias?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Manicoba.jpg/500px-Manicoba.jpg",
            imageAlt: "Panela escura com caldo espesso esverdeado e carnes.",
            answers: [
                "Pato no Tucupi",
                "Maniçoba",
                "Cariru",
                "Caldeirada Paraense",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Kimchi */
            question: "Qual é esse acompanhamento fermentado típico da culinária coreana?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/500px-Various_kimchi.jpg",
            imageAlt: "Pote de repolho fermentado vermelho e apimentado.",
            answers: [
                "Gochujang",
                "Doenjang",
                "Kimchi",
                "Baechu-jeon",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Baião de Dois */
            question: "Qual é esse prato típico do Nordeste brasileiro?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bai%C3%A3o_de_dois.jpg/500px-Bai%C3%A3o_de_dois.jpg",
            imageAlt: "Arroz misturado com feijão de corda, queijo coalho e linguiça.",
            answers: [
                "Arroz de Cuxá",
                "Maria Isabel",
                "Baião de Dois",
                "Cuscuz Nordestino",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Moussaka */
            question: "Qual é essa caçarola típica da culinária grega?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/MussakasMeMelitsanesKePatates01.JPG/500px-MussakasMeMelitsanesKePatates01.JPG",
            imageAlt: "Travessa com camadas de berinjela, carne moída e molho branco gratinado.",
            answers: [
                "Pastitsio",
                "Moussaka",
                "Imam Bayildi",
                "Stifado",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Arroz de Cuxá */
            question: "Qual é esse prato típico do Maranhão?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Arroz_de_cux%C3%A1.jpg/960px-Arroz_de_cux%C3%A1.jpg",
            imageAlt: "Arroz esverdeado com vinagreira, gergelim torrado e camarão seco.",
            answers: [
                "Arroz de Cuxá",
                "Arroz de Forno",
                "Maria Isabel",
                "Arroz Caldoso Nordestino",
            ],
            correct: 0,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Injera */
            question: "Qual é esse pão fermentado típico da Etiópia?",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Alicha_1.jpg",
            imageAlt: "Pão plano esponjoso e poroso servido com vários ensopados em cima.",
            answers: [
                "Chapati",
                "Kisra",
                "Injera",
                "Lahoh",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Acarajé */
            question: "Qual é essa iguaria típica da culinária baiana?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bahia_acaraje.jpg/500px-Bahia_acaraje.jpg",
            imageAlt: "Bolinho frito aberto recheado com pasta e camarão seco.",
            answers: [
                "Abará",
                "Acarajé",
                "Acaçá",
                "Mungunzá",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Hummus */
            question: "Qual é essa pasta típica da culinária do Oriente Médio?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/250px-Lebanese_style_hummus.jpg",
            imageAlt: "Pasta bege cremosa de grão-de-bico com fio de azeite e páprica.",
            answers: [
                "Baba Ganoush",
                "Labneh",
                "Mutabbal",
                "Hummus",
            ],
            correct: 3,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Vatapá */
            question: "Qual é esse prato típico da culinária afro-brasileira?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Vatap%C3%A1.jpg/500px-Vatap%C3%A1.jpg",
            imageAlt: "Creme espesso amarelado feito de pão, camarão e leite de coco.",
            answers: [
                "Caruru",
                "Vatapá",
                "Xinxim de Galinha",
                "Efó",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Paella */
            question: "Qual é esse prato típico espanhol?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Paella_de_mariscos.jpg/500px-Paella_de_mariscos.jpg",
            imageAlt: "Frigideira larga com arroz amarelo, frutos do mar e pimentão.",
            answers: [
                "Arroz Negro",
                "Fideuà",
                "Pilaf",
                "Paella",
            ],
            correct: 3,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Pão de queijo */
            question: "Qual é esse pão típico de Minas Gerais?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pao_de_queijo_brasil.jpg/500px-Pao_de_queijo_brasil.jpg",
            imageAlt: "Bolinhas assadas douradas de massa de polvilho.",
            answers: [
                "Chipa",
                "Biscoito de Polvilho",
                "Pão de Queijo",
                "Broa de Milho",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Onigiri */
            question: "Qual é esse prato típico japonês?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Onigiri_002.jpg/500px-Onigiri_002.jpg",
            imageAlt: "Bolinho de arroz envolto por uma alga.",
            answers: [
                "Temaki",
                "Onigiri",
                "Hossomaki",
                "Uramaki",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Cuca */
            question: "Qual é esse doce típico dos teuto-brasileiros?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cuca_de_banana.jpg/500px-Cuca_de_banana.jpg",
            imageAlt: "Chapa de bolo com farofa doce.",
            answers: [
                "Cuca",
                "Strudel",
                "Broa Alemã",
                "Bolo Marta Rocha",
            ],
            correct: 0,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Tiramisu */
            question: "Qual é essa sobremesa tradicional italiana feita com café e creme?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/250px-Tiramisu_-_Raffaele_Diomede.jpg",
            imageAlt: "Sobremesa em camadas polvilhada com cacau.",
            answers: [
                "Panna Cotta",
                "Tiramisu",
                "Cannoli",
                "Zuccotto",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Feijão Tropeiro */
            question: "Qual é o nome desse prato?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Feij%C3%A3o_tropeiro.jpg/500px-Feij%C3%A3o_tropeiro.jpg",
            imageAlt: "Frigideira com feijões, farinha, couve e ovos.",
            answers: [
                "Tutu de Feijão",
                "Mocotó",
                "Feijoada",
                "Feijão Tropeiro",
            ],
            correct: 3,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Quesadilla */
            question: "Qual é esse prato típico mexicano?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Quesadilla.jpg/500px-Quesadilla.jpg",
            imageAlt: "Tortilhas de milho recheadas com queijo.",
            answers: [
                "Burrito",
                "Tacos",
                "Quesadilla",
                "Enchiladas",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Coxinha */
            question: "Qual é esse salgado típico brasileiro?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lisboa_L1190475_%2825231463215%29.jpg/250px-Lisboa_L1190475_%2825231463215%29.jpg",
            imageAlt: "Salgado frito em formato de meia-lua com massa dourada.",
            answers: [
                "Risoles",
                "Coxinha",
                "Joelho",
                "Croquete",
            ],
            correct: 0,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Fish and Chips */
            question: "Qual é esse prato típico da culinária britânica?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/500px-Fish_and_chips_blackpool.jpg",
            imageAlt: "Peixe empanado frito com batatas fritas grossas.",
            answers: [
                "Battered Cod",
                "Fish and Chips",
                "Fishcake",
                "Scampi",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Churrasco */
            question: "Qual é esse corte típico do churrasco gaúcho?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Costela_no_Fogo.JPG/500px-Costela_no_Fogo.JPG",
            imageAlt: "Espeto de costela bovina assando lentamente sobre brasa.",
            answers: [
                "Fraldinha",
                "Picanha",
                "Costela",
                "Maminha",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Brisket */
            question: "Qual é esse corte típico do barbecue americano?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Brisketphoto.jpg/500px-Brisketphoto.jpg",
            imageAlt: "Carne bovina defumada e fatiada com crosta escura.",
            answers: [
                "Brisket",
                "Roast Beef",
                "Corned Beef",
                "Pastrami",
            ],
            correct: 0,
            tema: "cuisine",
            nacional: false
        }
    },
    {
        nacional: {
            /* Açaí */
            question: "Qual é essa fruta amazônica?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Starr-110330-4076-Theobroma_grandiflorum-fruit-Garden_of_Eden_Keanae-Maui_%2825081202675%29.jpg/330px-Starr-110330-4076-Theobroma_grandiflorum-fruit-Garden_of_Eden_Keanae-Maui_%2825081202675%29.jpg",
            imageAlt: "Fruta grande, marrom, elíptica no pé.",
            answers: [
                "Cupuaçu",
                "Pitanga",
                "Açaí",
                "Bacuri",
            ],
            correct: 2,
            tema: "cuisine",
            nacional: true
        },
        internacional: {
            /* Pizza Margherita */
            question: "Qual é essa pizza típica napolitana?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/1280px-Pizza_Margherita_stu_spivack.jpg",
            imageAlt: "Pizza com borda alta, molho de tomate, fatias de mussarela fresca e manjericão.",
            answers: [
                "Pizza Romana",
                "Pizza Margherita",
                "Pizza al Taglio",
                "Pizza Siciliana",
            ],
            correct: 1,
            tema: "cuisine",
            nacional: false
        }
    }
];