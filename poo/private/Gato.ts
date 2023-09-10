import Animal from './Animal';

class Gato extends Animal {
    miar(): void {
        console.log(`${this.getNome()} mia: Miau! Miau!`);
    }
}

export default Gato;