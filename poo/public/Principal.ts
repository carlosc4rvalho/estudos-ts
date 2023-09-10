import Animal from './Animal';
import Cachorro from './Cachorro';
import Gato from './Gato';

class Principal {
    static run() {
        const cachorro = new Cachorro("Rex", 3, "Labrador");
        const gato = new Gato("Whiskers", 2);

        cachorro.fazerSom();
        cachorro.latir();

        gato.fazerSom();
        gato.miar();
    }
}

Principal.run();
