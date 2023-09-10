// Tipos Primitivos
const isTrue: boolean = true; // Variável booleana
const NumberI: number = 25; // Variável numérica inteira
const numberD: number = 3.14159; // Variável numérica decimal
const nome: string = "Layara"; // Variável de texto
const array: number[] = [1, 2, 3, 4, 5]; // Array de números
const nomes: Array<string> = ["Alice", "Bob", "Charlie"];// array de strings 

let indefinido: undefined = undefined; // Variável indefinida
let nulo: null = null; // Variável nula
let value: any = 42; // Variável de tipo 'any' pode receber qualquer valor ou tipo

// Declaração de Tipo (Type Alias)
type Garota = { nome: string; idade: number; };

// Criando um objeto que segue a estrutura do tipo
const pessoaObjeto: Garota = { nome: "Alice", idade: 30, };

// Acessando propriedades do objeto
console.log(pessoaObjeto.nome); // Saída: Alice
console.log(pessoaObjeto.idade); // Saída: 30

// array de objetos
const pessoas: Array<{ nome: string; idade: number }> = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
];

// Tipos Complexos
let numeroOuTexto: number | string = 42; // 'numeroOuTexto' pode ser número ou texto
let Garoto: { nome: string; idade: number } = { nome: "Alice", idade: 30 }; // Objeto com propriedades nome e idade

// União de Tipos
type Funcionario = { cargo: string };
type Cliente = { categoria: string };
type Usuario = Funcionario | Cliente;

let usuario1: Usuario = { cargo: "Gerente" }; // Usuário do tipo Funcionário
let usuario2: Usuario = { categoria: "Premium" }; // Usuário do tipo Cliente

// Tipos de Função
type FuncaoSoma = (a: number, b: number) => number; // Tipo de função que recebe dois números e retorna um número

let somar: FuncaoSoma = (a, b) => a + b; // Função de soma

// Inferência de Tipo Condicional
let numeroOuTextoCond = true ? 42 : "Olá"; // 'numeroOuTexto' é inferido como 'number | string'

// Type Guards (Guardas de Tipo)
function isString(valor: any): valor is string {
    return typeof valor === "string";
}

let valorGuardaTipo: any = "Isso é uma string";
if (isString(valorGuardaTipo)) {
    // 'valorGuardaTipo' é tratado como 'string' dentro deste bloco
    console.log(valorGuardaTipo.length); // Acessando a propriedade 'length' da string
}

// Definindo um enum para representar níveis de educação
enum Graduacao {
    Bacharelado,
    Mestrado,
    Doutorado,
}

// Declarando uma tupla para representar informações sobre um aluno
let aluno: [string, number, Graduacao];

// Atribuindo valores à tupla
aluno = ["João", 25, Graduacao.Mestrado];

// Acessando e exibindo os valores da tupla
console.log(`Nome: ${aluno[0]}`);
console.log(`Idade: ${aluno[1]}`);
console.log(`Nível de Educação: ${Graduacao[aluno[2]]}`);
