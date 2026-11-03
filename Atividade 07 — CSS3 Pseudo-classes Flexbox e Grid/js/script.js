// Exemplo de boa prática: primeiro lemos as medidas de todos os cards;
// depois fazemos as alterações. Assim evitamos alternar leitura e escrita
// de layout dentro do mesmo loop (layout thrashing).

function ajustarAlturaDosCards() {
  const cards = document.querySelectorAll(".card-destino");

  // Primeira etapa: leitura das larguras.
  const larguras = Array.from(cards).map((card) => card.offsetWidth);

  // Segunda etapa: escrita das alturas.
  cards.forEach((card, indice) => {
    card.style.height = `${larguras[indice] * 0.6}px`;
  });
}

window.addEventListener("load", ajustarAlturaDosCards);
window.addEventListener("resize", ajustarAlturaDosCards);
