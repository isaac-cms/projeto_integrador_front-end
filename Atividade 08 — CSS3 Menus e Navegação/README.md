# Atividade 08 — CSS3: Menus e Navegação

## Objetivo
Aplicar os conceitos da Aula 08 em uma página própria do EcoTrip, criando uma navbar com Flexbox, dropdown com CSS, comportamento sticky e estrutura visual de menu hambúrguer.

## Conceitos aplicados
- **Navbar com Flexbox:** logo à esquerda e links alinhados à direita.
- **Estado ativo:** classe `.ativo` e atributo `aria-current="page"` indicam a página atual.
- **Interação:** `:hover` e `:focus-within` revelam o dropdown.
- **Dropdown:** lista aninhada com `position: absolute`; o item pai usa `position: relative`.
- **Empilhamento:** `z-index: 100` está no cabeçalho sticky, que cria o contexto de empilhamento. O dropdown usa um nível interno menor.
- **Navbar sticky:** `position: sticky`, `top: 0` e `z-index` mantêm a navegação acima do conteúdo durante a rolagem.
- **Menu hambúrguer:** botão semântico com três barras, `aria-label` e `aria-expanded="false"`, exibido em telas estreitas.
- **Acessibilidade:** foco visível por teclado e abertura do dropdown também por foco.

## Observação importante sobre o menu hambúrguer
Conforme o material da Aula 08, o botão hambúrguer foi desenvolvido somente como estrutura visual. Ele ainda não abre nem fecha o menu ao clicar, pois essa funcionalidade depende de manipulação do DOM com JavaScript, conteúdo previsto para uma aula futura.

## Diagnóstico de posicionamento
O cabeçalho é o elemento que cria o contexto de empilhamento da navegação. Por isso, a prioridade de camada é definida nele, em vez de tentar resolver conflitos aumentando indefinidamente o `z-index` do dropdown. O cabeçalho não possui ancestral com `overflow` restritivo, permitindo o comportamento sticky esperado.

## Estrutura
```text
Atividade 08 — CSS3 Menus e Navegação/
├── css/
│   └── styles.css
├── index.html
└── README.md
```

## Como visualizar
Abra `index.html` no navegador ou use a extensão Live Server no Visual Studio Code.

## Tema
A atividade utiliza o EcoTrip, mantendo a identidade visual do projeto e evitando copiar o exemplo de Catálogo de Filmes apresentado pelo professor.
