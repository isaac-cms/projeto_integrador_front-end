# Atividade 05 — HTML5 Canvas e SVG

## Desenvolvimento Front-end para Web

### HTML5 — Recursos Gráficos (Canvas e SVG)

Esta atividade dá continuidade ao projeto **EcoTrip**, desenvolvido nas atividades anteriores. Depois de trabalhar com fundamentos do desenvolvimento web, estrutura HTML5, semântica, formulários, acessibilidade e multimídia, esta etapa introduz recursos gráficos desenhados pelo próprio navegador.

O projeto aplica, em um tema próprio de turismo sustentável, os dois paradigmas apresentados na aula: **SVG (vetorial / retained mode)** e **Canvas (raster / immediate mode)**.

> **Observação:** a demonstração do professor utiliza um Catálogo de Filmes. Esta implementação usa um tema próprio e diferente, mantendo a técnica ensinada, conforme orientado no material da Aula 05.

## 🎯 Objetivos

- Diferenciar imagens raster e vetoriais.
- Implementar um SVG funcional, escalável e acessível.
- Utilizar `viewBox` para manter proporções do desenho.
- Implementar um gráfico em `<canvas>` com JavaScript.
- Aplicar `clearRect()` antes de redesenhar cada frame.
- Utilizar `requestAnimationFrame()` para uma animação sincronizada.
- Aplicar recursos de acessibilidade em SVG e Canvas.
- Relacionar Canvas ao **immediate mode** e SVG ao **retained mode**.
- Integrar os novos recursos ao tema visual do EcoTrip.

## 📁 Estrutura

```text
Atividade 05 — HTML5 Canvas e SVG/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## 🧩 O que foi desenvolvido

### 1. SVG — Indicador vetorial

Foi criado um selo visual de **Turismo Consciente** e um gráfico de indicadores em SVG.

O SVG utiliza:

- `viewBox`;
- `role="img"`;
- `<title>`;
- `<desc>`;
- formas geométricas como `circle`, `rect`, `line`, `path` e `text`;
- integração visual com o tema EcoTrip.

As formas permanecem como elementos do SVG/DOM, podendo ser estilizadas e manipuladas sem transformar o desenho em uma imagem raster fixa.

### 2. Canvas — Gráfico animado

Foi criado um gráfico de barras com três indicadores:

| Indicador | Valor |
|---|---:|
| Transporte coletivo | 78% |
| Comércio local | 64% |
| Redução de resíduos | 52% |

A animação utiliza `requestAnimationFrame()` e redesenha o gráfico progressivamente.

Antes de cada novo frame é utilizado:

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Isso evita o acúmulo visual dos frames anteriores e demonstra a característica de **immediate mode** do Canvas.

## ♿ Acessibilidade

O projeto aplica tratamento específico para os dois recursos gráficos.

### SVG

O gráfico possui:

- `role="img"`;
- `aria-labelledby`;
- `<title>` com nome acessível;
- `<desc>` com descrição do conteúdo.

### Canvas

O gráfico possui:

- `role="img"`;
- `aria-labelledby`;
- `aria-describedby`;
- conteúdo textual alternativo dentro do `<canvas>` com os dados apresentados.

Isso é importante porque as formas desenhadas no Canvas são pixels e não elementos individuais disponíveis no DOM para a árvore de acessibilidade.

## 🧠 Conceitos aplicados

### Raster x vetor

O Canvas gera o resultado como uma grade de pixels. O SVG representa formas por meio de informações vetoriais, que podem ser recalculadas em diferentes tamanhos.

### Immediate mode

No Canvas, os comandos de desenho são executados sobre os pixels. Para alterar o estado visual durante uma animação, o código limpa e redesenha o quadro.

### Retained mode

No SVG, as formas continuam presentes como elementos. Alterar um atributo de uma forma existente permite que o navegador atualize a cena.

### `viewBox`

O `viewBox` estabelece o sistema de coordenadas interno do SVG, permitindo que o desenho seja redimensionado mantendo suas proporções.

### Pipeline de renderização

O projeto também considera que tanto Canvas quanto SVG precisam chegar a pixels na tela. O navegador passa pelo processo de estilo, layout, pintura, rasterização e composição para apresentar o resultado final.

## ⚠️ Boas práticas demonstradas

- Definir `width` e `height` reais do Canvas como atributos HTML.
- Usar CSS para redimensionamento visual adicional, quando necessário.
- Limpar o Canvas antes de redesenhar frames.
- Preferir SVG para elementos vetoriais informativos e que se beneficiam da estrutura do DOM.
- Fornecer nome e descrição acessíveis para gráficos.
- Usar `requestAnimationFrame()` em animações de Canvas.
- Manter HTML, CSS e JavaScript separados.
- Utilizar caminhos relativos para os arquivos do projeto.
- Manter a atividade isolada em sua própria pasta.

## 📚 Relação com as atividades anteriores

- **Atividade 01:** fundamentos do desenvolvimento web e Git/GitHub.
- **Atividade 02:** estrutura HTML5 e conceitos web.
- **Atividade 03:** HTML5 semântico, formulários e acessibilidade.
- **Atividade 04:** HTML5 multimídia com vídeo, fontes alternativas e legendas.
- **Atividade 05:** recursos gráficos com Canvas e SVG.

Assim, esta atividade representa a continuidade natural do projeto, sem substituir ou misturar os trabalhos anteriores.

## 📖 Referência principal

Material didático: **Desenvolvimento Front-end para Web — Aula 05 — HTML5: Recursos Gráficos (Canvas e SVG)**, Unidade 1 — HTML5 (1.4), carga horária de 3h20.

## 🔗 Referências indicadas no material

- MDN Web Docs — Canvas API.
- MDN Web Docs — SVG: Scalable Vector Graphics.
- Paul Adam — HTML Canvas Accessibility.
- A11Y Collective — Accessible SVG Elements.
- Google Chrome Developers — RenderingNG architecture.
- Google Chrome Developers — Inside look at modern web browser, parte 3.
- SitePoint — Canvas vs SVG.
- LogRocket — Canvas, immediate mode x retained mode.
- Microsoft Learn — Retained Mode Versus Immediate Mode.
- MDN Web Docs — `requestAnimationFrame()`.

## ✅ Checklist da atividade

- [x] SVG funcional.
- [x] SVG com `viewBox`.
- [x] SVG com nome acessível.
- [x] Canvas funcional.
- [x] Gráfico sem acúmulo visual indevido.
- [x] Animação com `requestAnimationFrame()`.
- [x] Fallback/conteúdo textual no Canvas.
- [x] ARIA aplicada aos recursos gráficos.
- [x] HTML, CSS e JavaScript separados.
- [x] Tema próprio integrado ao EcoTrip.
- [x] Documentação detalhada no README.
