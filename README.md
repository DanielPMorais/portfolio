# Portfólio — Daniel Morais

Aplicação de portfólio construída com React + Vite, focada em desempenho, organização e UX. Inclui seções de apresentação, habilidades (soft e hard), projetos em destaque e outros projetos, contato e download de currículo.

## ✨ Principais recursos

- Tema claro/escuro com estilos adaptativos por seção e componentes
- Seção Skills
  - Soft-skills e hard-skills em abas com animação
  - Cards clicáveis com efeito shimmer e modal dedicado
  - Modais com conteúdo rico, responsivos e adaptados ao tema
- Seção Projects
  - Cards com imagem de capa acima do título
  - Modal de projeto com carrossel de imagens e descrição
  - Link externo “Visitar site” quando disponível
  - Ícones da stack com contraste automático por tema
- Componentes reutilizáveis e CSS Modules com variáveis globais
- Padrões de commit e linting configurados

## 🧰 Stack

- React 19 + Vite
- CSS Modules + variáveis globais (`src/styles/_variables.css`)
- React Icons
- ESLint, Prettier, Husky, Commitlint

## 🚀 Começando

Pré-requisitos: Node.js 18+ e npm.

Instalar dependências:

```bash
npm install
```

Rodar ambiente de desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualização do build:

```bash
npm run preview
```

## 📁 Estrutura relevante

- `src/features/Hero/` — seção inicial, ícones com cor adaptativa ao tema
- `src/features/Skills/` — abas de soft/hard skills, `SkillCard` com modal
- `src/features/Projects/`
  - `Projects.jsx` — listas de destaques e outros projetos
  - `components/ProjectCard.jsx` — card com capa e badges/ícones de stack
  - `components/ProjectModal.jsx` — modal com carrossel e link externo
  - `components/ImageCarousel.jsx` — carrossel simples e responsivo
- `src/components/common/Modal/` — modal genérico (usado no contato)
- `src/styles/` — reset, globais e tokens (`_variables.css`)

## 🧩 Como adicionar/editar projetos

Edite `src/features/Projects/Projects.jsx` nas arrays:

- `featuredProjectsData` (Destaques)
- `otherProjectsData` (Outros projetos)

Campos suportados por projeto:

- `id`, `title`, `techs: string[]`, `cover?: string`, `images: string[]`, `description: string`, `url?: string`

Observações:

- O card usa `cover` como capa; se ausente, usa `images[0]`
- O modal exibe um carrossel com `images` e, ao final, o link `url` (quando informado)

## 🔗 Links úteis

- Projeto Limas & Pacheco: `https://limaspacheco.vercel.app/`

## 📜 Licença

Uso pessoal/estudo. Ajuste conforme sua necessidade.
