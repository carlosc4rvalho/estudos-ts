import Animal from './Animal';

class Cachorro extends Animal {
    private raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    getRaca(): string {
        return this.raca;
    }

    latir(): void {
        console.log(`${this.getNome()} (raça: ${this.raca}) late: Woof! Woof!`);
    }
}

export default Cachorro;
