import Animal from './Animal';

class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} (raça ${this.raca}) late: Woof! Woof!`);
    }
}

export default Cachorro;
