const pessoa = {
    _nome: '',
    get nome() {
        return this._nome;
    },
    set nome(valor) {
        this._nome = valor.toUpperCase();
    },

    _idade: 20,
    get podeDirigir() {
        return this._idade >= 18
    },
    set idade (valor) {
        this._idade =  valor;
    }
}

pessoa.nome = 'felipe accyole';
console.log('nome: ', pessoa['nome']);

console.log(pessoa.podeDirigir);
pessoa.idade = 16;
console.log(pessoa.podeDirigir);