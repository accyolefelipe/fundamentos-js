const readLine = require('readline');
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //todo texto de saida sairá no terminal
    output: process.stdout
});

//texto do menu
const textoMenu = `
Olá, Seja bem vindo ao sistema de Media.
Digite 1 para acessar o menu inicial.
Digite 0 para Sair.
`
//texto sub-menu
const textoSubMenu = `
Digite 1 para acessar o menu de Herois.
Digite 2 para acessar o menu de Guerreiras.
Digite 0 para acessar o menu anterior.
`
// console.log(textoMenu);

// const opcao = 1;
// switch(opcao) {
//     case 1:
//         console.log('11111111')
//         break;
//     case 2:
//         console.log('22222222')
//         break;
//     default:
//         console.log('Opção Invalida!')
//         break;
// }

// terminal.question('Qual o seu nome? ', (msg) => {
//     console.log('Voce escreveu: ', msg)
//     terminal.close();
// })


const questoes = {
    menuInicial:{
        texto: textoMenu,
        funcao: menuInicial
    },
    opcao1: {
        texto: textoSubMenu,
        funcao: subMenu
    }
}

function mostrarMenuInicial(){
    terminal.question(
        questoes.menuInicial.texto,
        questoes.menuInicial.funcao
    )
}

function subMenu(valorDigitado){
    const opcao = Number(valorDigitado);
    if(isNaN(opcao)) {
        throw new Error('Não é um numero!', valorDigitado) 
    }
    switch(opcao) {
        case 0:
            console.log('Voltando...')
            mostrarMenuInicial();
            break;
        case 1:
            console.log('Herois')
            terminal.close()
            break;
        case 2:
            console.log('Guerreiras')
            terminal.close()
            break;
        default:
            console.log('Opção Invalida')
            terminal.close()
            break;
    }
}

function menuInicial(valorDigitado) {
    const opcao = Number(valorDigitado)
    if(isNaN(opcao)) {
        throw new Error('Não é um numero!', valorDigitado)
    }
    switch(opcao) {
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('Menu Inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.funcao
            )
            break;
        default:
            console.log('Opção Invalida')
            terminal.close()
            break;
    }
};

mostrarMenuInicial();



