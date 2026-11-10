// Tema: análise de destinos do EcoTrip.
// Entrada: quantidade mínima de vagas e nomes de destinos para consulta.
// Processamento: classificar os destinos, separar por tipo e resumir as vagas.
// Saída: mensagens no console e uma tabela com os dados analisados.
//
// Pseudocódigo:
// 1. Criar uma lista com os destinos do EcoTrip.
// 2. Pedir a quantidade mínima de vagas e validar a entrada.
// 3. Percorrer a lista e classificar cada destino.
// 4. Usar o tipo para mostrar uma informação sobre cada destino.
// 5. Contar destinos, somar vagas e encontrar o maior valor.
// 6. Permitir consultar destinos até a pessoa digitar "sair".
// 7. Mostrar o resumo e a tabela no console.

const destinos = [
  { nome: "Chapada dos Veadeiros", tipo: "Trilha", vagas: 8 },
  { nome: "Fernando de Noronha", tipo: "Praia", vagas: 3 },
  { nome: "Floresta Amazônica", tipo: "Ecoturismo", vagas: 12 },
  { nome: "Pantanal", tipo: "Ecoturismo", vagas: 0 },
  { nome: "Lençóis Maranhenses", tipo: "Praia", vagas: 5 }
];

let entrada = prompt("Digite a quantidade mínima de vagas para a análise (1 a 100):");

if (entrada === null) {
  console.log("Análise cancelada.");
} else if (entrada.trim() === "") {
  console.log("Digite um número. A análise não foi realizada.");
} else {
  const minimoVagas = Number(entrada);

  if (Number.isNaN(minimoVagas) || minimoVagas < 1 || minimoVagas > 100) {
    console.log("Valor inválido. Digite um número entre 1 e 100.");
  } else {
    let totalDestinos = 0;
    let totalVagas = 0;
    let maiorNumeroVagas = 0;
    const destinosAnalisados = [];

    console.log(`Destinos com pelo menos ${minimoVagas} vagas:`);

    for (const destino of destinos) {
      let situacao;

      if (destino.vagas === 0) {
        situacao = "Sem vagas";
      } else if (destino.vagas <= 5) {
        situacao = "Poucas vagas";
      } else {
        situacao = "Vagas disponíveis";
      }

      let informacaoTipo;

      switch (destino.tipo) {
        case "Trilha":
          informacaoTipo = "Ideal para quem gosta de caminhadas";
          break;
        case "Praia":
          informacaoTipo = "Experiência próxima ao mar";
          break;
        case "Ecoturismo":
          informacaoTipo = "Contato com a natureza";
          break;
        default:
          informacaoTipo = "Tipo de passeio não informado";
          break;
      }

      if (destino.vagas >= minimoVagas) {
        console.log(`${destino.nome}: ${situacao} — ${informacaoTipo}.`);
        totalDestinos++;
        totalVagas += destino.vagas;

        if (destino.vagas > maiorNumeroVagas) {
          maiorNumeroVagas = destino.vagas;
        }
      }

      destinosAnalisados.push({
        nome: destino.nome,
        tipo: destino.tipo,
        vagas: destino.vagas,
        situacao: situacao
      });
    }

    console.log(`\nResumo: ${totalDestinos} destino(s) atendem ao filtro.`);
    console.log(`Total de vagas nos destinos selecionados: ${totalVagas}.`);
    console.log(`Maior quantidade de vagas: ${maiorNumeroVagas}.`);
    console.table(destinosAnalisados);

    // Teste de mesa: primeiras três voltas do laço principal.
    // Destino                  | Vagas | Situação             | Entra no filtro (mínimo 4)
    // Chapada dos Veadeiros    | 8     | Vagas disponíveis    | Sim
    // Fernando de Noronha      | 3     | Poucas vagas          | Não
    // Floresta Amazônica       | 12    | Vagas disponíveis    | Sim

    let consulta = prompt("Digite o nome de um destino para consultar ou 'sair' para encerrar:");

    while (consulta !== null && consulta.toLowerCase() !== "sair") {
      const nomeDigitado = consulta.trim().toLowerCase();
      const destinoEncontrado = destinos.find(function (item) {
        return item.nome.toLowerCase() === nomeDigitado;
      });

      if (destinoEncontrado) {
        console.log(`${destinoEncontrado.nome} possui ${destinoEncontrado.vagas} vaga(s) disponível(is).`);
      } else {
        console.log("Destino não encontrado. Confira o nome e tente novamente.");
      }

      consulta = prompt("Digite outro destino ou 'sair' para encerrar:");
    }

    console.log("Consulta encerrada. Obrigado por conhecer o EcoTrip!");
  }
}
