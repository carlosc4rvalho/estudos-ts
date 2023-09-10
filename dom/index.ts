// Selecionando elementos do DOM
const meuElemento: HTMLElement | null = document.getElementById("meu-elemento");
const elementos: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName("minha-classe");
const paragrafos: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p");

// Manipulando elementos do DOM
if (meuElemento) {
  meuElemento.textContent = "Texto modificado com TypeScript";
}

const imagem: HTMLImageElement | null = document.querySelector("img");
if (imagem) {
  imagem.src = "nova-imagem.jpg";
}

const meuParagrafo: HTMLParagraphElement | null = document.querySelector("p");
if (meuParagrafo) {
  meuParagrafo.style.color = "blue";
}

// Manipulando eventos do DOM
const botao = document.getElementById("meu-botao");

if (botao) {
  botao.addEventListener("click", (event: MouseEvent) => {
    alert("Botão clicado!");
  });
}

// Trabalhando com formulários
const meuForm = document.getElementById("meu-form") as HTMLFormElement;

meuForm.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const inputNome = document.getElementById("nome") as HTMLInputElement;

  if (inputNome.value.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
  }
});

// Criando elementos dinamicamente
const novoElemento = document.createElement("div");
novoElemento.textContent = "Novo elemento criado com TypeScript";
document.body.appendChild(novoElemento);

// Usando tipos opcionais em interfaces
interface Pessoa {
  nome: string;
  idade?: number; // A propriedade 'idade' é opcional
}

function saudacao(pessoa: Pessoa) {
  if (pessoa.idade !== undefined) {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
  } else {
    return `Olá, ${pessoa.nome}!`;
  }
}

const pessoa1: Pessoa = { nome: "Alice" };
const pessoa2: Pessoa = { nome: "Bob", idade: 30 };

console.log(saudacao(pessoa1)); // Saída: "Olá, Alice!"
console.log(saudacao(pessoa2)); // Saída: "Olá, Bob! Você tem 30 anos."

// Usando '!' para afirmar que uma variável não é nula
let valorNaoNulo: string | null = getValorDoBancoDeDados();
console.log(valorNaoNulo!.length); // Nenhum erro agora
