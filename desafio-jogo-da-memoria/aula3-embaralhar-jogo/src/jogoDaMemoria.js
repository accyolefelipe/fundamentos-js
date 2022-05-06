class JogoDaMemoria {
    //se mandar um obj com varias propriedades
    //vai ignorar as demais e pegar apenas tela
    constructor({ tela }){
        this.tela = tela;

        //caminho sempre relativo ao index.html
        this.heroisIniciais = [
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
    }

    //para usar o this, nao pode ser funcao static
    inicializar(){
        //pega todas as funcoes da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais);
        //forca a tela a usar o this do jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
        const copias = this.heroisIniciais
        //duplica os itens
        .concat(this.heroisIniciais)
        //cria uma nova propriedade para cada item
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        //ordena aleatoriamente
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias);
    }

    jogar(){
        this.embaralhar();
    }

}