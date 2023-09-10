// Definindo a interface de um objeto padrão de um Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// Usando a interface 'Livro' para criar um objeto 'livro'
const livro: Livro = {
    titulo: "Aprendendo TypeScript",
    autor: "John Doe",
    anoPublicacao: 2023
};

// Explicação:
// - Começamos definindo uma interface chamada 'Livro' que descreve a estrutura de um objeto de livro com propriedades 'titulo', 'autor' e 'anoPublicacao'.
// - Em seguida, criamos uma variável 'livro' que segue a estrutura da interface 'Livro'.

// Interfaces:

// Herança de Interfaces: As interfaces podem estender outras interfaces. Isso permite criar hierarquias de interfaces e compartilhar propriedades e métodos entre elas.
interface Animal {
    nome: string;
}

interface Ave extends Animal {
    voar: boolean;
}
// A interface 'Ave' estende a interface 'Animal' adicionando uma propriedade 'voar'.

// Implementação de Classes: As interfaces podem ser implementadas por classes. Isso é útil quando você deseja garantir que uma classe tenha um conjunto específico de propriedades e métodos.
interface IPessoa {
    nome: string;
    idade: number;
}

class Exemplo implements IPessoa {
    constructor(public nome: string, public idade: number) {}
}
// A classe 'Exemplo' implementa a interface 'IPessoa', garantindo que tenha as propriedades 'nome' e 'idade'.

// Extensão de Módulo: Você pode usar interfaces para estender módulos existentes ou adicionar métodos a objetos de módulo.
declare module "alguma-biblioteca" {
    interface AlgumaBiblioteca {
        novoMetodo(): void;
    }
}
// Aqui, estamos estendendo um módulo existente (declarado em algum lugar) adicionando o método 'novoMetodo' à interface 'AlgumaBiblioteca'.

// Explicação geral:
// As interfaces são usadas para definir contratos que as classes ou objetos devem seguir. Elas fornecem uma maneira de descrever a estrutura e o comportamento esperado dos objetos em seu código, promovendo a reutilização e a consistência.
