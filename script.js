let numeroDeterminado = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  tentativas++;
  const palpite = parseInt(document.getElementById("palpite").value);
  const dica = document.getElementById("dica");
  const ElementTentativa = document.getElementById("tentativas");

  if (palpite === numeroDeterminado) {
    dica.textContent = ` Parabéns! Voce acertou com ${tentativas} tentativas`;
    dica.style.color = "white";
  } else if (palpite < numeroDeterminado) {
    dica.textContent = `O número é maior. Tente novamente`;
    dica.style.color = "yellow";
  } else {
    dica.textContent = `O número é menor. Tente novamente`;
    dica.style.color = "orange";
  }

  ElementTentativa.textContent = `Tentativas: ${tentativas}`;
});
