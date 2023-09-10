import Animal from './Animal';
import Cachorro from './Cachorro';
import Gato from './Gato';

class Main {
    static run() {
        const cachorro = new Cachorro("Rex", 3, "Labrador");
        const gato = new Gato("Whiskers", 2);

        cachorro.fazerSom();
        cachorro.latir();

        gato.fazerSom();
        gato.miar();

        // Usando get e set
        console.log(`Nome do cachorro: ${cachorro.getNome()}`);
        cachorro.setNome("Buddy");
        console.log(`Novo nome do cachorro: ${cachorro.getNome()}`);
    }
}

Main.run();
