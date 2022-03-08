let textoPar = 'É Par!';
let textoImpar = 'è Impar';

for(let index = 0; index <= 10; index++){
    const resultado = index % 2 === 0 ? textoPar : textoImpar;
    console.log(index, resultado);
}

const listaHerois= [
    {
        id: Math.floor(Math.random() *50),
        nome: 'João',
        poder: 'Nenhum'
    },
    {
        id: Math.floor(Math.random() * 100),
        nome: 'José',
        poder: 'Qualquer'

    }
];

for(let index = 0; index < listaHerois.length; index++){
    let item = listaHerois[index];
    console.log(`
    id: ${item.id},
    nome: ${item.nome}
    `)
}

// nao precisa usar contador
for(const index in listaHerois){
    const item = listaHerois[index];
    console.log(`
    nome: ${item.nome}
    `)
}

//nao precisa usar index
for(const item of listaHerois){
    console.log('Poder', item.poder);
}