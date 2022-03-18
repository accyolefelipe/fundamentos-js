//modulo do file system
const fs = require('fs');

fs.readFile('./arquivos/arq1.txt', (errorArq1, respostaArq1) => {
    if(errorArq1){
        console.error('Deu ruim arquivo 1', errorArq1.stack)
        return;
    }
    fs.readFile('./arquivos/arq2.txt', (errorArq2, respostaArq2) => {
        if(errorArq2){
            console.error('Deu ruim arquivo 2', errorArq2.stack)
            return;
        }
        fs.readFile('./arquivos/arq3.txt', (errorArq3, respostaArq3) => {
            if(errorArq3){
                console.error('Deu ruim arquivo 3', errorArq3.stack)
                return;
            }
            
            const respostaConcatenada = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
            console.log(respostaConcatenada);
            fs.writeFile('./arquivos/concatenado.txt', respostaConcatenada, (errorWrite, respostaWrite) => {
                if(errorWrite){
                    console.log('Não foi Possivel concatenar os arquivos', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso!')
            })
        })
    })
})
