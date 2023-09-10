// main.ts

// Alias de importação da classe 'Produto' do arquivo './produto'
// Note que estamos usando chaves '{}' para especificar exatamente o que queremos importar do módulo 'produto.ts'
import { Produto } from './produto';


// Criando uma instância da classe 'Produto' com o nome 'Camiseta' e preço '29.99'
const meuProduto = new Produto('Camiseta', 29.99);

// Chamando o método 'exibirDetalhes()' da instância 'meuProduto'
meuProduto.exibirDetalhes();

// Neste código:

// Primeiro, estamos importando a classe Produto do arquivo produto.ts.

// Em seguida, criamos uma instância da classe Produto com o nome "Camiseta" e preço 29,99.

// Por fim, chamamos o método exibirDetalhes() da instância meuProduto, que exibirá detalhes sobre o produto no console.