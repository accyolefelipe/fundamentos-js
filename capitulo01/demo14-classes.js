class Heroi {
    atacar() {
        console.log(`atacou!!`)
    }
    defender() {
        console.log(`defendeu!!`)
    }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    atacar() {
        console.log(`o ${this.nome} atacou!!`);
    }
}

const heroi2 = new Heroi2 ('Flash', 22);
heroi2.atacar();

class Heroi3 {
    static anoNascimento(idade){
        return new Date().getFullYear() - idade;
    }
}

const anoNascimento = Heroi3.anoNascimento(31);
console.log(`o ano de nascimento do Heroi é: ${anoNascimento}`);