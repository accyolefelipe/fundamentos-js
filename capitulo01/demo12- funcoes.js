function nomeDaFuncao(parametro1){
    //bloco
}

function diaDeHoje(){
    const hoje = new Date().getDate();
    return console.log(hoje);
}
diaDeHoje();

function soma(parametro1, parametro2){
    return console.log(`a soma de ${parametro1} + ${parametro2} é:`, parametro1 + parametro2);
}
soma(10, 12);
soma(3, -1);

function soma2(parametro1, parametro2) {
    return parametro1 + parametro2
}
const idade = 20;
const tamanho = 10;
const resultado = soma2(idade, tamanho);
console.log('resultado', resultado);

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}
console.log(`o resultado da multiplicação é:`, multiplicar(10,30));

const funcionario1 = {
    nome: 'Maria',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'João',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

function calculaSalario(desconto, salarioBruto) {
    return salarioBruto - (desconto * salarioBruto);
}

funcionario1.salarioLiquido =  calculaSalario(funcionario1.desconto, funcionario1.salarioBruto);
console.log(funcionario1.salarioLiquido);
funcionario2.salarioLiquido =  calculaSalario(funcionario2.desconto, funcionario2.salarioBruto)
console.log(funcionario2.salarioLiquido);

