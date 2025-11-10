# Portfólio — Daniel Morais

Aplicação de portfólio construída com React + Vite, focada em desempenho, organização e UX. Inclui seções de apresentação, habilidades (soft e hard), projetos em destaque e outros projetos, contato e download de currículo.

## ✨ Principais recursos

- **Internacionalização (i18n)**: Suporte completo a Português (PT-BR) e Inglês (EN) com seletor de idioma no header e no footer
- **Tema claro/escuro**: Sistema de temas com estilos adaptativos por seção e componentes
- **Navegação inteligente**: Header fixo com indicador de seção ativa e menu mobile responsivo
- **Seção Skills**
  - Soft-skills e hard-skills em abas com animação
  - Cards clicáveis com efeito shimmer e modal dedicado
  - Modais com conteúdo rico, responsivos e adaptados ao tema
- **Seção Projects**
  - Cards com imagem de capa acima do título
  - Modal de projeto com carrossel de imagens e descrição
  - Link externo "Visitar site" quando disponível
  - Ícones da stack com contraste automático por tema
- **Componentes reutilizáveis**: CSS Modules com variáveis globais e hooks customizados
- **Qualidade de código**: Padrões de commit, linting e formatação automática configurados

## 🧰 Stack

- **Frontend**: React 19 + Vite
- **Estilização**: CSS Modules + variáveis globais (`src/styles/_variables.css`)
- **Ícones**: React Icons
- **Internacionalização**: Sistema customizado de i18n com Context API
- **Qualidade**: ESLint, Prettier, Husky, Commitlint, lint-staged

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

### Features
- `src/features/Hero/` — seção inicial, ícones com cor adaptativa ao tema
- `src/features/Skills/` — abas de soft/hard skills, `SkillCard` com modal
- `src/features/Projects/`
  - `Projects.jsx` — listas de destaques e outros projetos
  - `components/ProjectCard.jsx` — card com capa e badges/ícones de stack
  - `components/ProjectModal.jsx` — modal com carrossel e link externo
  - `components/ImageCarousel.jsx` — carrossel simples e responsivo
- `src/features/About/` — seção sobre mim com download de CV

### Componentes
- `src/components/layout/Header/` — header fixo com navegação, seletor de idioma e tema
- `src/components/layout/Footer/` — rodapé com link para topo
- `src/components/common/Modal/` — modal genérico (usado no contato)
- `src/components/common/Container/` — container responsivo

### Hooks e Utilitários
- `src/hooks/useTheme.js` — gerenciamento de tema claro/escuro
- `src/hooks/useLanguage.js` — gerenciamento de idioma (PT/EN)
- `src/hooks/useScrollSpy.js` — detecção de seção ativa no scroll
- `src/i18n/index.js` — traduções e hook `useT()` para textos

### Estilos
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
- As imagens devem estar em formato WebP e organizadas em pastas dentro de `src/assets/images/`

## 🌐 Internacionalização

O projeto suporta Português (PT-BR) e Inglês (EN). Para adicionar/editar traduções:

1. Edite `src/i18n/index.js`
2. Adicione as chaves no objeto `translations.pt` e `translations.en`
3. Use o hook `useT()` nos componentes para acessar as traduções:

```jsx
import { useT } from '../i18n';

function MyComponent() {
  const { t } = useT();
  return <h1>{t.nav.home}</h1>;
}
```

O idioma é gerenciado pelo hook `useLanguage()` e persistido no localStorage.

## 🎨 Tema claro/escuro

O tema é gerenciado pelo hook `useTheme()` e persistido no localStorage. Para usar em componentes:

```jsx
import { useTheme } from '../hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <div className={theme === 'dark' ? styles.dark : styles.light}>...</div>;
}
```

## 📝 Scripts disponíveis

- `npm run dev` — inicia servidor de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — pré-visualiza o build de produção
- `npm run lint` — executa o ESLint

## 🔗 Links úteis

- Projeto Limas & Pacheco: `https://limaspacheco.vercel.app/`

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

Você é livre para usar, modificar e distribuir este código, desde que mantenha o aviso de copyright original.
