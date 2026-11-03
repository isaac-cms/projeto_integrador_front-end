# Atividade 07 — CSS3: Pseudo-classes, Flexbox e Grid

## Objetivo

Aplicar os conceitos da Aula 07 em uma página temática do EcoTrip, utilizando pseudo-classes, Flexbox e CSS Grid para organizar os elementos e adaptar o layout a diferentes tamanhos de tela.

## O que foi aplicado

- **Pseudo-classes de estado:** `:hover`, `:active`, `:visited` e `:focus-visible`.
- **Pseudo-classes estruturais:** `:nth-child(odd)`.
- **Flexbox:** navegação horizontal, alinhamento dos itens e demonstração de `flex-grow`, `flex-shrink` e `flex-basis`.
- **CSS Grid:** organização geral da página com `grid-template-areas` e grade de destinos com `repeat(auto-fit, minmax(...))`.
- **Grid responsivo:** as colunas se ajustam conforme a largura disponível.
- **Performance:** exemplo de separação entre leitura e escrita de medidas para evitar layout thrashing.
- **Acessibilidade:** foco visível por teclado, textos alternativos e respeito à preferência por movimento reduzido.

## Demonstração do cálculo Flexbox

O exemplo utiliza um container de 1000px e três itens com `flex-basis: 150px` e fatores de crescimento 1, 3 e 1.

1. Soma dos flex-basis: 150 + 150 + 150 = 450px.
2. Espaço livre: 1000 - 450 = 550px.
3. Soma dos fatores de crescimento: 1 + 3 + 1 = 5.
4. Itens A e C recebem 550 × (1/5) = 110px extras cada.
5. Item B recebe 550 × (3/5) = 330px extras.

Tamanhos finais: A = 260px, B = 480px e C = 260px.

## Estrutura

```text
Atividade 07 — CSS3 Pseudo-classes Flexbox e Grid/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Como visualizar

Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no Visual Studio Code.

## Observação

O tema EcoTrip mantém a continuidade visual das atividades anteriores, mas a implementação desta aula foi construída em uma pasta independente para facilitar a avaliação e a identificação dos conteúdos da Aula 07.
