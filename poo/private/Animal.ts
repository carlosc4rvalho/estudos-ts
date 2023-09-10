class Animal {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getIdade(): number {
        return this.idade;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    fazerSom(): void {
        console.log(`${this.nome} faz um som.`);
    }
}

export default Animal;