// Tema: vagas dos passeios do EcoTrip.
// Padrão da atividade: processar -> classificar -> mostrar na página.

// Dados: cada passeio tem nome, tipo, vagas totais e inscritos.
const passeios = [
  { nome: "Chapada dos Veadeiros", tipo: "Trilha", vagas: 20, inscritos: 12 },
  { nome: "Fernando de Noronha", tipo: "Praia", vagas: 10, inscritos: 9 },
  { nome: "Floresta Amazônica", tipo: "Ecoturismo", vagas: 15, inscritos: 6 },
  { nome: "Pantanal", tipo: "Ecoturismo", vagas: 12, inscritos: 12 },
  { nome: "Lençóis Maranhenses", tipo: "Praia", vagas: 16, inscritos: 15 },
  { nome: "Bonito", tipo: "Aventura", vagas: 8, inscritos: 3 }
];

// Cada faixa tem uma classe no CSS para mudar a cor do cartão.
const classesDasFaixas = {
  "Esgotado": "esgotado",
  "Últimas vagas": "ultimas-vagas",
  "Disponível": "disponivel"
};

// Função que processa: calcula as vagas que sobraram.
// Se os inscritos não forem informados, o valor padrão é 0.
function calcularVagasRestantes(vagas, inscritos = 0) {
  return vagas - inscritos;
}

// Função que classifica: devolve o rótulo da faixa.
// A ordem importa: primeiro testamos o caso mais restrito.
function classificarDisponibilidade(vagasRestantes, limiteUltimasVagas = 3) {
  if (vagasRestantes <= 0) {
    return "Esgotado";
  } else if (vagasRestantes <= limiteUltimasVagas) {
    return "Últimas vagas";
  } else {
    return "Disponível";
  }
}

// Exemplos testados no console antes de ligar na página:
// calcularVagasRestantes(20, 12)      -> 8
// calcularVagasRestantes(10)          -> 10
// classificarDisponibilidade(0)       -> "Esgotado"
// classificarDisponibilidade(2)       -> "Últimas vagas"
// classificarDisponibilidade(8)       -> "Disponível"
// classificarDisponibilidade(5, 5)    -> "Últimas vagas"

// Usa o map para criar uma nova lista, sem alterar o array original.
function analisarPasseios(lista) {
  return lista.map((passeio) => {
    const vagasRestantes = calcularVagasRestantes(passeio.vagas, passeio.inscritos);

    return {
      nome: passeio.nome,
      tipo: passeio.tipo,
      vagasRestantes: vagasRestantes,
      faixa: classificarDisponibilidade(vagasRestantes)
    };
  });
}

// Usa o filter para contar os passeios com vagas
// e o reduce para somar as vagas livres.
function gerarResumo(lista) {
  const passeiosComVagas = lista.filter((passeio) => passeio.vagasRestantes > 0);
  const totalVagasLivres = lista.reduce((total, passeio) => total + passeio.vagasRestantes, 0);

  return `Resumo: ${totalVagasLivres} vagas livres em ${passeiosComVagas.length} de ${lista.length} passeios.`;
}

// Monta o cartão de um passeio e devolve o elemento.
function criarCartao(passeio) {
  const cartao = document.createElement("article");
  const titulo = document.createElement("h3");
  const tipo = document.createElement("p");
  const vagas = document.createElement("p");
  const selo = document.createElement("span");

  titulo.textContent = passeio.nome;
  tipo.textContent = "Tipo de passeio: " + passeio.tipo;
  vagas.textContent = "Vagas restantes: " + passeio.vagasRestantes;
  selo.textContent = passeio.faixa;
  selo.classList.add("selo");

  cartao.classList.add("cartao", classesDasFaixas[passeio.faixa]);
  cartao.append(titulo, tipo, vagas, selo);

  return cartao;
}

// Escolhe os lugares da página e insere o resultado.
function mostrarNaPagina(lista, textoResumo) {
  const areaResultado = document.querySelector("#area-resultado");
  const areaResumo = document.querySelector("#area-resumo");

  if (areaResultado === null || areaResumo === null) {
    console.log("Não encontrei as áreas do resultado na página.");
    return;
  }

  areaResumo.textContent = textoResumo;

  for (const passeio of lista) {
    areaResultado.append(criarCartao(passeio));
  }
}

const passeiosAnalisados = analisarPasseios(passeios);
const textoResumo = gerarResumo(passeiosAnalisados);

mostrarNaPagina(passeiosAnalisados, textoResumo);
