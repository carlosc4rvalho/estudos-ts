class Metodos {
    private valorSemRetorno: string = "Este método não retorna um valor.";
    private valorComRetornoNumber: number = 42;
    private valorComRetornoString: string = "Olá, mundo!";
    private valorComRetornoBoolean: boolean = true;
    private valorComRetornoArray: number[] = [1, 2, 3, 4, 5];

    metodoSemRetorno(): void {
        console.log(this.valorSemRetorno);
    }

    getMetodoComRetornoNumber(): number {
        return this.valorComRetornoNumber;
    }

    getMetodoComRetornoString(): string {
        return this.valorComRetornoString;
    }

    getMetodoComRetornoBoolean(): boolean {
        return this.valorComRetornoBoolean;
    }

    getMetodoComRetornoArray(): number[] {
        return this.valorComRetornoArray;
    }
    
    setValorComRetornoNumber(novoValor: number): void {
        this.valorComRetornoNumber = novoValor;
    }

    setValorComRetornoString(novoValor: string): void {
        this.valorComRetornoString = novoValor;
    }

    setValorComRetornoBoolean(novoValor: boolean): void {
        this.valorComRetornoBoolean = novoValor;
    }

    setValorComRetornoArray(novoValor: number[]): void {
        this.valorComRetornoArray = novoValor;
    }
}

export default Metodos;
