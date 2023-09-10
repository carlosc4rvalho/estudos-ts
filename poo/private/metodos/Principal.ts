import Metodos from './Metodos';

class Principal {
    static run() {
        const exemplo = new Metodos();

        exemplo.metodoSemRetorno(); // Chama o método sem retorno

        const numero: number = exemplo.getMetodoComRetornoNumber(); // Chama o método com retorno de número
        console.log(numero); // Imprime o número (42)

        const texto: string = exemplo.getMetodoComRetornoString(); // Chama o método com retorno de string
        console.log(texto); // Imprime a string ("Olá, mundo!")

        const booleano: boolean = exemplo.getMetodoComRetornoBoolean(); // Chama o método com retorno de booleano
        console.log(booleano); // Imprime o booleano (true)

        const arrayNumeros: number[] = exemplo.getMetodoComRetornoArray(); // Chama o método com retorno de array de números
        console.log(arrayNumeros); // Imprime o array ([1, 2, 3, 4, 5])

        // Exemplo de uso dos métodos set
        exemplo.setValorComRetornoNumber(99);
        console.log(exemplo.getMetodoComRetornoNumber()); // Imprime o novo número (99)
    }
}

Principal.run();
