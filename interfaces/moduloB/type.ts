// Definindo um objeto do tipo 'Pessoa' usando 'type' com atributos 'nome' e 'idade'
type Pessoa = {
    nome: string;
    idade: number;
};

// Criando uma variável 'pessoa' que segue a estrutura da 'Pessoa'
const pessoa: Pessoa = { nome: "Alice", idade: 30 };

// Explicação:
// - Usamos 'type' para criar um tipo chamado 'Pessoa' que descreve a estrutura de um objeto com 'nome' e 'idade'.
// - Em seguida, criamos uma variável 'pessoa' do tipo 'Pessoa' e atribuímos um objeto que segue essa estrutura.

// União e Interseção de Tipos: 'type' permite criar tipos complexos usando uniões (|) e interseções (&).
// Isso é útil para criar tipos que representam cenários mais avançados.

// Exemplo de União de Tipos:
type NumeroOuTexto = number | string;
// 'NumeroOuTexto' pode ser do tipo 'number' ou 'string'.

// Exemplo de Interseção de Tipos:
type Humano = { nome: string; idade: number };
type Aluno = Pessoa & { matricula: string };
// 'Aluno' é uma interseção de 'Pessoa' e um objeto com 'matricula'.
// Isso significa que 'Aluno' deve ter todas as propriedades de 'Pessoa' e 'matricula'.

// Aliases de Tipos: 'type' é frequentemente usado para criar alias (apelidos) para tipos complexos,
// o que pode tornar o código mais legível.

// Exemplo de Alias de Tipo:
type Coordenadas = [number, number];
// 'Coordenadas' é um alias para um array com dois números.
type ResultadoDaAPI = { sucesso: boolean; dados: any };
// 'ResultadoDaAPI' é um alias para um objeto com 'sucesso' e 'dados'.

// Pode representar primitivos e literais: 'type' pode representar tipos primitivos e literais,
// o que permite criar tipos específicos.

// Exemplo de Tipo Literal:
type Cor = "vermelho" | "azul" | "verde";
// 'Cor' é um tipo que pode ser "vermelho", "azul" ou "verde".

// Exemplo de Tipo Literal com várias opções:
type DiaDaSemana = "segunda" | "terça" | "quarta" | "quinta" | "sexta" | "sabado" | "domingo";
// 'DiaDaSemana' é um tipo que pode ser qualquer dia da semana.

// Explicação:
// - Usamos 'type' para criar tipos complexos, como uniões, interseções e alias de tipos.
// - Isso ajuda a tornar o código mais expressivo e legível, descrevendo melhor os tipos de dados que estamos usando.
