let frutaExistenteNoMercado = false;
let temCPUSuficiente = true;


//valores do terminal
const args = process.argv;
const saldo = args[args.length -1]
if(isNaN(saldo)){
    console.log('Valor invalido!')
    return;
}

let tipoCliente = 'Premium';

if(saldo < 9){
    tipoCliente = 'Basic';
}
else if(saldo >= 10 && saldo < 20){
    tipoCliente = 'Ouro';
}
else {
    tipoCliente = null;
}

//null, undefined, 0 === false
if(!tipoCliente){
    tipoCliente = 'Indefinido';
}

console.log('Tipo Cliente:', tipoCliente)


const idade = 18;
const licençaDirigir = idade >= 18 ? 'Pode Dirigir!' : 'Não Pode Dirgir!'
console.log(licençaDirigir)

