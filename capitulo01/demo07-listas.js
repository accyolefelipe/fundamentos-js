const minhaLista = [];
const minhaListaDeTarefas = [
    'lavar roupas',
    'limpar a casa',
    'cozinhar',
    'fazer feira',
    'lavar carro',
    'pagar contas'
];

//retornar posicao especifica
console.log(minhaListaDeTarefas[0]);

//retornar tamanho da lista
console.log(minhaListaDeTarefas.length);

//adicionar item ao fim da lista
minhaListaDeTarefas.push('dar banho no cachorro');

//remover ultimo item da lista
const ultimo = minhaListaDeTarefas.pop();
console.log('ultimo item da lista que foi removido: ', ultimo);

//remover primeiro item da lista
const primeiro = minhaListaDeTarefas.shift();
console.log('primeiro item da lista que foi removido: ', primeiro);

//remover indice especifico
//parametro 1 é a posicao
//parametro 2 é a quantidade apartir da posicao a remover
const especificado = minhaListaDeTarefas.splice(2, 1);
console.log('item especifico ou items da lista que foi removido: ', especificado);

console.log('resto do array: ', minhaListaDeTarefas);

const itens = ['livro', 2 , 0.5];
//verifica se é array
console.log(Array.isArray(itens));

//ordenando lista
const desordenados = ['x', 'z', 'a', 'g', 'y'];
const desordenados2 = [99, 0, 7, 3, 2, 1];

const ordenados = desordenados.sort()
const ordenados2 = desordenados2.sort();
console.log(ordenados.sort(), ordenados2.sort());

//junção de arrays
const itens2 = ['xicara', 77];
const novo = itens.concat(itens2);
console.log(novo);

//concatenando indices em uma string
console.log(novo.join(', '));

//retornando posicao apartir de valor
const index = novo.indexOf('xicara');
console.log(novo[index]);



