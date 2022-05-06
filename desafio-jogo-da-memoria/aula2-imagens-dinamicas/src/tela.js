const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 75% ">
                <img src="${item.img}" name="${item.nome}" class="card-img-top  img-thumbnail   " alt="...">
                <div class="row d-flex justify-content-center">
                    <div class="card-title mb-2 text-muted">
                    ${item.nick}
                    </div>  
                </div>
            </div>  
        </div>
        `
    }

    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO);
        conteudo.innerHTML = codigoHtml;
    }

    static gerarStringHtmlPelaImagem(itens) {
        //para cada item executa a funcao e concatena em uma string
        return itens.map(Tela.obterCodigoHtml).join('');
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens);
        Tela.alterarConteudoHTML(codigoHtml);
    }
}