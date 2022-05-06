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
                nick: 'Squirtle sedutor'
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
    }

}