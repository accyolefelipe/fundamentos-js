class JogoDaMemoria {
    //se mandar um obj com varias propriedades
    //vai ignorar as demais e pegar apenas tela
    constructor({ tela }){
        this.tela = tela;

        //caminho sempre relativo ao index.html
        this.pokemonsIniciais = [
            {
                img: './arquivos/squirtle.jpg',
                name: 'squirtle',
                nick: 'Squirtle Sedutor'
            },
            {
                img: './arquivos/piplup.jpg',
                name: 'piplup',
                nick: 'Piplup com Sono'
            },
            {
                img: './arquivos/buba.jpg',
                name: 'buba',
                nick: 'Buba Safadão'
            },
            {
                img: './arquivos/rowlet.jpg',
                name: 'rowlet',
                nick: 'Rowlet Confuso'
            }
        ]
        this.imagemPadrao = './arquivos/psy.jpg';
        this.pokemonsEscondidos = [];
    }

    //para usar o this, nao pode ser funcao static
    inicializar(){
        //pega todas as funcoes da classe tela
        //coloca todos os pokemons na tela
        this.tela.atualizarImagens(this.pokemonsIniciais);
        //forca a tela a usar o this do jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
        const copias = this.pokemonsIniciais
        //duplica os itens
        .concat(this.pokemonsIniciais)
        //cria uma nova propriedade para cada item
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        //ordena aleatoriamente
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias);
        //esperar para atualizar a tela
        setTimeout(() => {
            this.esconderpokemons(copias)
        }, 2000)
    }

    esconderpokemons(pokemons) {
        //troca a imagem original pela imagem padrao
        //como no contrutor, extraimos so o necessario
        //usando a sintaxe ({chave: 1 }), retornaremos
        //o que tiver dentro do parenteses
        //quando nao usamos : (exemplo do id) o js entende que
        //o nome é o mesmo do valor. ex id? id, vira id,
        const pokemonsOcultos = pokemons.map(({id,nome}) => ({
            id,
            nome,
            nick : '??????????',
            img : this.imagemPadrao
        }));
        //atualizamos a tela com os poke ocultos
        this.tela.atualizarImagens(pokemonsOcultos);
        //guardamos os pokemonsOcultos
        this.pokemonsOcultos = pokemonsOcultos;
    }

    jogar(){
        this.embaralhar();
    }

}