let salarioAmigo = 1000;
let meuSalario = "2999";
let meuSalarioConvertido = Number(meuSalario);


console.log(typeof(salarioAmigo), salarioAmigo);
console.log(typeof(meuSalario), meuSalario);
console.log(typeof(meuSalarioConvertido), meuSalarioConvertido);

console.log(salarioAmigo + meuSalarioConvertido);
console.log(isNaN(meuSalario));

let minhaString = "hello";
let minhaStringNova = "hello2";
let juncaoDeString = `Minhas Strings são: ${minhaString} e ${minhaStringNova}`;
console.log(juncaoDeString);