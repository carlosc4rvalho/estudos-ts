// Importando o tipo personalizado
import { Pessoa } from './tipos';

// Criando uma variável do tipo 'Pessoa'
const pessoa: Pessoa = {
    nome: 'Layara',
    idade: 30,
};

// Usando a variável 'pessoa'
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
console.log(pessoa); // retorno { nome: 'Layara', idade: 30 }

// Neste exemplo:

// Primeiro, importamos o tipo Pessoa do arquivo tipos.ts.

// Em seguida, criamos uma variável pessoa do tipo Pessoa e atribuímos a ela um objeto com as propriedades nome e idade.

// Por fim, usamos a variável pessoa para acessar e exibir as informações do objeto.

// Isso ilustra como usar tipos personalizados em TypeScript para melhorar a segurança de tipo e a legibilidade do código.




