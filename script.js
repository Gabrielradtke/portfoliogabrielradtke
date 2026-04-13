// Seleciona os elementos do formulário pelo Id
const formularioContato = document.getElementById("formularioContato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const mensagemRetorno = document.getElementById("mensagemRetorno");
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

// Função para mudar o menu em dispositivos móveis
menuBotao.addEventListener("click", function () {
  menu.classList.toggle("ativo");
});

// Função para validar e-mail
function emailValido(emailDigitado) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailDigitado);
}

// Evento de envio do formulário
formularioContato.addEventListener("submit", function (evento) {
  // Impede o envio padrão do formulário
  evento.preventDefault();

  // Remove espaços vazios no começo e no fim
  const nomeValor = nome.value.trim();
  const emailValor = email.value.trim();
  const mensagemValor = mensagem.value.trim();

  // Verifica se os campos estão preenchidos
  if (nomeValor === "" || emailValor === "" || mensagemValor === "") {
    mensagemRetorno.textContent = "Por favor, preencha todos os campos.";
    mensagemRetorno.style.color = "#b91c1c";
    return;
  }

  // Verifica se o e-mail está em formato válido
  if (!emailValido(emailValor)) {
    mensagemRetorno.textContent = "Digite um e-mail válido.";
    mensagemRetorno.style.color = "#b91c1c";
    return;
  }

  // Se estiver tudo certo, mostra mensagem de sucesso
  mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
  mensagemRetorno.style.color = "#15803d";

  // Limpa os campos após o envio
  formularioContato.reset();
});