// produto.ts

export class Produto {
    constructor(public nome: string, public preco: number) {}
    
    exibirDetalhes(): void {
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}`);
    }
}
