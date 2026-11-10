# Funções e DOM Básico com JavaScript

## Objetivo
Praticar funções, métodos de array e DOM usando os passeios do EcoTrip. A página mostra quantas vagas restam em cada passeio e em qual situação ele está.

## O que foi aplicado
- Array de objetos com seis passeios, cada um com nome, tipo, vagas e inscritos.
- Função que calcula as vagas restantes, com `return` e parâmetro com valor padrão.
- Função que classifica o passeio em três faixas: Esgotado, Últimas vagas e Disponível.
- `map` para criar a lista com as vagas restantes e a faixa de cada passeio, sem alterar o array original.
- `filter` para separar os passeios que ainda têm vagas.
- `reduce` para somar as vagas livres e montar o resumo.
- `querySelector` para escolher onde o resultado aparece, conferindo se o elemento existe (não é `null`).
- `createElement`, `textContent` e `append` para criar um cartão para cada passeio.
- `classList.add` para colocar a classe da faixa, e o CSS muda a cor do cartão.
- Funções que calculam separadas das funções que mexem na página, usando só `const`.

## Faixas de disponibilidade
| Vagas restantes | Faixa |
| --- | --- |
| 0 | Esgotado |
| 1 a 3 | Últimas vagas |
| 4 ou mais | Disponível |

## Como testar
1. Abra o arquivo `index.html` no navegador.
2. Confira os cartões dos passeios e o resumo no topo da lista.
3. Abra o console com F12 e veja se não aparece nenhuma mensagem de erro.
4. No console, teste as funções com outros valores, por exemplo `calcularVagasRestantes(20, 12)` (resultado 8) e `classificarDisponibilidade(2)` (resultado "Últimas vagas").

## Estrutura
```text
JavaScript — Funções e DOM Básico/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── index.html
└── README.md
```
