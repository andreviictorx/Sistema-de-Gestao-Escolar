# React + TypeScript + Vite
🎓 SIGESTE - Sistema de Gestão Escolar

SIGESTE é uma aplicação web completa para gestão acadêmica, desenvolvida como um projeto prático para solidificar e demonstrar conhecimentos avançados no ecossistema React. A aplicação permite o gerenciamento completo de Alunos, Turmas, Professores e Disciplinas, além de apresentar um dashboard com métricas visuais.

Acesse o SIGESTE aqui

(Substitua o link acima pela URL do seu projeto após o deploy)

✨ Funcionalidades Principais

O sistema foi projetado com uma arquitetura robusta, focada em escalabilidade e manutenção, e inclui as seguintes funcionalidades:

Dashboard: Uma visão geral e centralizada com métricas importantes, como a quantidade total de alunos, professores e turmas, além de gráficos interativos.

Gestão de Alunos: CRUD completo (Criar, Ler, Atualizar, Apagar) para o cadastro de alunos.

Gestão de Turmas: CRUD completo para turmas, com a capacidade de visualizar detalhes, como a lista de alunos matriculados.

Gestão de Professores: CRUD completo para o cadastro de professores.

Gestão de Disciplinas: CRUD completo para as disciplinas oferecidas.

Dados Relacionais: A interface exibe de forma inteligente as relações entre as entidades (ex: contagem de alunos por turma, listagem de alunos em uma turma específica).

Busca e Filtros: Funcionalidade de busca em tempo real nas páginas de listagem para facilitar a navegação.

Persistência de Dados: Os dados são salvos no localStorage do navegador, simulando um banco de dados e mantendo as informações entre as sessões.

Design Responsivo: A interface se adapta a diferentes tamanhos de ecrã, garantindo uma boa experiência tanto em desktop quanto em dispositivos móveis.

🚀 Tecnologias e Arquitetura

Este projeto foi construído com uma stack moderna e profissional, demonstrando o domínio das seguintes tecnologias e padrões de arquitetura:

Frontend:

React 18: Biblioteca principal para a construção da interface de utilizador.

TypeScript: Para adicionar tipagem estática, garantindo um código mais seguro e manutenível.

Vite: Ferramenta de build extremamente rápida para um ambiente de desenvolvimento moderno.

Navegação:

React Router DOM v6: Para criar uma Single-Page Application (SPA) com rotas dinâmicas e aninhadas, utilizando a moderna API de createBrowserRouter.

Gestão de Estado:

React Context API + useReducer: Utilizado para criar um sistema de gestão de estado global, modular e performático, com um contexto separado para cada entidade (Alunos, Turmas, etc.), evitando prop drilling e re-renderizações desnecessárias.

Hooks Customizados: Abstração da lógica de consumo dos contextos (ex: useAlunos) para simplificar o uso e centralizar a lógica de acesso aos dados.

Estilização:

Styled Components (CSS-in-JS): Utilizado para criar componentes de UI com estilos escopados localmente. A migração do CSS tradicional para esta abordagem está em andamento, visando eliminar conflitos de CSS global e permitir estilização dinâmica baseada em props.

ThemeProvider: Utilizado para centralizar o design system da aplicação (cores, sombras, etc.), garantindo consistência visual.

Padrões de Código:

Componentização e Reutilização: Criação de componentes genéricos (<Table />, <Button />, <Card />) para seguir o princípio DRY (Don't Repeat Yourself).

Imutabilidade: A lógica dos reducers segue estritamente o princípio da imutabilidade para garantir um fluxo de estado previsível e performático.

📂 Estrutura de Pastas

O projeto segue uma arquitetura de pastas semântica e escalável:

/src
├── /components/      # Componentes de UI genéricos e reutilizáveis
├── /contexts/        # Provedores de Contexto para cada entidade
├── /features/        # Componentes específicos de uma funcionalidade (ex: dashboard)
├── /pages/           # Componentes que representam as páginas da aplicação
├── /reducers/        # Lógica pura de manipulação de estado
├── /routers/         # Configuração centralizada do React Router
├── /styles/          # Estilos globais e o ficheiro de tema (theme.ts)
└── /types/           # Definições de interfaces TypeScript


🛣️ Próximos Passos (Roadmap)

Este projeto está em desenvolvimento contínuo. As próximas funcionalidades planeadas são:

[ ] Autenticação: Implementar um sistema de login para diferentes perfis (Administrador, Professor, Aluno).

[ ] Lançamento de Notas e Frequência: Criar a interface para que professores possam lançar o desempenho dos alunos.

[ ] Área do Aluno: Uma visão onde o aluno possa consultar as suas próprias notas e frequência.

[ ] Migração Completa para Styled Components: Finalizar a refatoração de todo o CSS para uma arquitetura CSS-in-JS.

[ ] Testes: Adicionar testes unitários e de integração com Jest e React Testing Library.

🏁 Como Executar o Projeto

Siga os passos abaixo para clonar e executar o projeto na sua máquina local.

Pré-requisitos

Node.js (versão 18 ou superior)

npm ou yarn

Instalação

Clone o repositório:

git clone [https://github.com/andreviictorx/sigeste-react.git](https://github.com/andreviictorx/Sistema-de-Gestao-Escolar/)


Acesse a pasta do projeto:

cd sigeste-react


Instale as dependências:

npm install


Executando

Inicie o servidor de desenvolvimento:

npm run dev


Abra o seu navegador e acesse http://localhost:5173 para ver a aplicação em funcionamento.

👤 Autor

André Victor

GitHub: @andreviictorx

LinkedIn: linkedin/in/andreviictor






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
