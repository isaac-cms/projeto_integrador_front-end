# Atividade 06 — CSS3: Sintaxe, Seletores e Estilização Base

## 🌱 EcoTrip — Turismo Sustentável

Esta é a **sexta atividade** do Projeto Integrador de Desenvolvimento Front-end para Web.

A atividade dá continuidade às estruturas HTML construídas nas aulas anteriores e aplica **CSS3** para controlar a apresentação visual da página.

> O exemplo do professor utiliza um catálogo de filmes como template. Nesta atividade, a mesma técnica foi aplicada ao tema próprio do projeto: **EcoTrip — Turismo Sustentável**.

## 🎯 Objetivo

Praticar os fundamentos de CSS3 apresentados na Aula 06, mantendo a separação entre:

- **HTML:** estrutura e conteúdo;
- **CSS:** apresentação visual.

## 📚 Conteúdos aplicados

### 1. CSS externo

O HTML utiliza dois arquivos CSS externos:

`css/reset.css`  
`css/styles.css`

Isso mantém a apresentação separada da estrutura HTML.

### 2. Reset e box-sizing

Foi aplicado:

`box-sizing: border-box`

O reset também remove margens e espaçamentos padrão para permitir maior controle do layout.

### 3. Variáveis CSS

O arquivo `styles.css` utiliza `:root` para centralizar cores, bordas, sombras e outros valores reutilizados.

Exemplo:

`--cor-primaria`  
`--cor-texto`  
`--cor-fundo`  
`--cor-card`

### 4. Seletores

Foram utilizados:

- seletor de elemento;
- seletor de classe;
- seletor de ID;
- agrupamento;
- descendente;
- filho direto (`>`);
- irmão adjacente (`+`);
- irmão geral (`~`).

### 5. Pseudo-classes

A atividade utiliza:

- `:link`;
- `:visited`;
- `:hover`;
- `:active`;
- `:focus`;
- `:first-child`;
- `:last-child`;
- `:nth-child(even)`.

Os estados de links seguem a ordem **LoVe/HAte**:

**Link → Visited → Hover → Active**

### 6. Especificidade

O projeto possui uma demonstração prática de especificidade com:

`.destaque`

e:

`.card .destaque`

A segunda regra possui maior especificidade por utilizar duas classes.

### 7. Box Model

A caixa demonstrativa utiliza:

- content;
- padding;
- border;
- margin.

O projeto utiliza `box-sizing: border-box` para tornar o cálculo das dimensões mais previsível.

### 8. Tipografia

Os tamanhos principais de texto utilizam `rem` e `font-size` relativo sempre que adequado.

### 9. Tabela, listas, links e formulário

Também foram aplicados estilos para:

- tabela;
- cabeçalho da tabela;
- linhas alternadas;
- listas;
- links;
- campos de formulário;
- estado `:focus`;
- botão;
- fundo;
- bordas;
- sombras.

## 📁 Estrutura

```text
Atividade 06 — CSS3 Sintaxe Seletores e Estilização/
├── css/
│   ├── reset.css
│   └── styles.css
├── index.html
└── README.md
```

## 🚫 O que não foi utilizado nesta atividade

A Aula 06 trabalha o fluxo normal do documento e a estilização base. Por isso, esta atividade **não utiliza Flexbox nem CSS Grid como solução de layout**, deixando esses conteúdos para a evolução posterior do curso.

## ✅ Checklist

- [x] CSS externo
- [x] Reset CSS
- [x] `box-sizing: border-box`
- [x] Variáveis CSS
- [x] Seletores básicos
- [x] Combinadores
- [x] Pseudo-classes
- [x] Especificidade
- [x] Box Model
- [x] Tipografia
- [x] Links
- [x] Tabela
- [x] Lista
- [x] Formulário
- [x] Responsividade básica
- [x] Tema próprio do Projeto Integrador
- [x] Estrutura separada e organizada

## 🔗 Continuidade do Projeto

| Atividade | Conteúdo principal |
|---|---|
| 01 | Git, GitHub e organização |
| 02 | Estrutura HTML5 |
| 03 | Semântica, formulários e acessibilidade |
| 04 | Multimídia |
| 05 | Canvas e SVG |
| **06** | **CSS3, seletores, especificidade e estilização base** |

---

**EcoTrip — Viaje com propósito. 🌱✈️**
