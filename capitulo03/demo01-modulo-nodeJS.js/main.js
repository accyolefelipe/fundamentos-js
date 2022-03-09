const Matematica = require('./matematica');
// console.log(Matematica.somar(1,5));

const readLine = require('readline');
const terminal =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question('Insira o primeiro valor:\n', valor1 => {
    terminal.question('Insira o segundo valor:\n', valor2 => {
        terminal.question('Insira a operação:\n', operacao => {
            if(!Matematica[operacao]){
                throw new Error(`${operacao} não é uma operação possivel`) 
            }
            const resultado = Matematica[operacao](Number(valor1), Number(valor2))
            console.log(`a operação ${operacao} entre ${valor1} e ${valor2} resulta em: ${resultado}`);
            terminal.close();  
        })
    })
})