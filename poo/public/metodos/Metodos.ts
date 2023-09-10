class Metodos {
    // Método que não retorna um valor (void)
    metodoSemRetorno(): void {
        console.log("Este método não retorna um valor.");
    }

    // Método que retorna um número (number)
    metodoComRetornoNumber(): number {
        return 42;
    }

    // Método que retorna uma string (string)
    metodoComRetornoString(): string {
        return "Olá, mundo!";
    }

    // Método que retorna um booleano (boolean)
    metodoComRetornoBoolean(): boolean {
        return true;
    }

    // Método que retorna um array de números (number[])
    metodoComRetornoArray(): number[] {
        return [1, 2, 3, 4, 5];
    }
}

export default Metodos;
