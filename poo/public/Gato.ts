import Animal from './Animal';

class Gato extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    miar() {
        console.log(`${this.nome} mia: Miau! Miau!`);
    }
}

export default Gato;
