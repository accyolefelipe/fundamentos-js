function onLoad() {
    const dependencias = {
        tela: Tela //a classe global
    }

    // iniciamos o jogo
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar();
    
}
window.onload = onLoad;
