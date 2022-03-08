let termoDeParada = true;
let contador = 0;
let length = 0;

while(termoDeParada){
    termoDeParada = contador < 10
    if(contador % 2 === 0 && contador !== 0){
        length++
        console.log('Numero Par' , contador)
        
    }
    contador++
}
console.log('Quantidade numeros pares' , length)

do {
    console.log('so vai rodar uma vez pois o termo de parada é : ', termoDeParada)
}while(termoDeParada);