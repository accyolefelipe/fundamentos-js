const heroi = {
    nome: 'Flash',
    idade: 50,
    sexo: 'Masculino'
};

const pessoa = {
    doc: 88999775544
};

//retornam atributo especifico
console.log('nome', heroi.nome);
console.log('idade', heroi['idade']);

//setam novo atributo do heroi
heroi.id = 0001;
heroi['poder'] = 'super velocidade';
console.log(heroi);

//retorna as chaves dos atributos do heroi
console.log(Object.keys(heroi));

//retorna os valores dos atributos do heroi
console.log(Object.values(heroi));

//junção de dois objetos
const newObj = Object.assign(pessoa, heroi);

//remove atributo do objeto
delete newObj.nome;

console.log(newObj);