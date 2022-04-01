const readLine = require('readline');
const terminal =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


//calbacks

// terminal.question('Qual é o seu nome?\n', nome =>{
//     terminal.question('Qual é o seu telefone?\n', telefone => {
//         console.log(
//             `

//             Nome: ${nome},
//             Telefone: ${telefone}
//             `
//         )
//         terminal.close();
//     })
// })

let nome = "";
let telefone = "";
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

Promise.resolve()
    .then(() => questionAsync('Qual é seu nome?'))
    .then(respostaNome => {
        if(!respostaNome){
            throw new Error('Campo Vazio')
        }
        nome = respostaNome;
    })
    .then(() => questionAsync('Qual seu telefone?'))
    .then(respostaTelefone => {
        if(!respostaTelefone){
            throw new Error('Campo Vazio')
        }
        telefone = respostaTelefone;
    })
    .then(() => {
        console.log(`Nome: ${nome} e Telefone: ${telefone}`)
    })
    .catch(error => {
        console.error('Deu ruim', error)
    })
    .finally(() => terminal.close())