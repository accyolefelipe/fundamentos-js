const podeDirigir = true;
if(podeDirigir){
    console.log('pode dirigir!!')
}

const saldoEmConta = 0;
if(!saldoEmConta){
    console.log('não tem saldo!!');
}

const boolComString = 'ae rackerzinho!!';
console.log('boolComString', !!boolComString);
console.log('negação', !boolComString);
console.log('negação + forcar boolean', ! (!!boolComString))