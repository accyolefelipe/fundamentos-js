const readLine = require('readline');
const terminal =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg=> {
            !!msg ? resolve(msg) : reject(new Error('O Campo não pode ser vazio'))
        })
    })
}

async function main(){
    try {
        const nome = await questionAsync('Qual o seu nome?')
        const telefone = await questionAsync('Qual o seu telefone?')
        console.log(`Nome: ${nome} Telefone:${telefone}`)
    } catch (error){
        console.log('Deu ruim', error.stack)
    }
    finally {
        terminal.close()
    }
}
main()

// let nome = "";
// let telefone = "";
// Promise.resolve()
//     .then(() => questionAsync('Qual é seu nome?'))
//     .then(respostaNome => {
//         if(!respostaNome){
//             throw new Error('Campo Vazio')
//         }
//         nome = respostaNome;
//     })
//     .then(() => questionAsync('Qual seu telefone?'))
//     .then(respostaTelefone => {
//         if(!respostaTelefone){
//             throw new Error('Campo Vazio')
//         }
//         telefone = respostaTelefone;
//     })
//     .then(() => {
//         console.log(`Nome: ${nome} e Telefone: ${telefone}`)
//     })
//     .catch(error => {
//         console.error('Deu ruim', error)
//     })
//     .finally(() => terminal.close())