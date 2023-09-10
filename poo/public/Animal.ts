class Animal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}

export default Animal;
