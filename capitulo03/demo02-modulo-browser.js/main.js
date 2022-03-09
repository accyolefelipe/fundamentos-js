window.onload = () => {
    const btn = document.getElementById('btnCalcular');
    btn.onclick = click;

    function obterValorInput(id) {
        const item = document.getElementById(id);
        return item.value;
    }
    function calcular(tipoOperacao, valor1, valor2){
        return  Matematica[tipoOperacao](valor1, valor2);
    }

    function exibiRetorno(variavelRetorno, tipoOperacao, valor1, valor2, resultado){
        return variavelRetorno.innerText = `
        A operação ${tipoOperacao}, entre ${valor1} e ${valor2} resulta em: ${resultado}
        `
    }

    function click() {
        const tipoOperacao = obterValorInput('tipoOperacao');
        const valor1 = obterValorInput('valor1');
        const valor2 = obterValorInput('valor2');
        
        const resultado = calcular(tipoOperacao, valor1, valor2)
        
        const variavelRetorno = document.getElementById('resultado')
        exibiRetorno(variavelRetorno, tipoOperacao, valor1, valor2, resultado);

    };
    
}