🎓 SIGESTE - Sistema de Gestão Escolar

SIGESTE é uma aplicação web completa para gestão acadêmica, desenvolvida como um projeto prático para solidificar e demonstrar conhecimentos avançados no ecossistema React. A aplicação permite o gerenciamento completo de Alunos, Turmas, Professores e Disciplinas, além de apresentar um dashboard com métricas visuais.



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

Styled Components (CSS-in-JS): Para criar componentes de UI com estilos escopados localmente, eliminando conflitos de CSS global e permitindo estilização dinâmica baseada em props.

ThemeProvider: Utilizado para centralizar o design system da aplicação (cores, sombras, etc.), garantindo consistência visual.

Padrões de Código:

Componentização e Reutilização: Criação de componentes genéricos (<Table />, <Button />, <Card />) para seguir o princípio DRY (Don't Repeat Yourself).

Imutabilidade: A lógica dos reducers segue estritamente o princípio da imutabilidade para garantir um fluxo de estado previsível e performático.

📂 Estrutura de Pastas

O projeto segue uma arquitetura de pastas semântica e escalável:

/src
├── /components/      # Componentes de UI genéricos e reutilizáveis (Button, Table, etc.)
├── /contexts/        # Provedores de Contexto para cada entidade (AlunoContext, etc.)
├── /features/        # Componentes específicos de uma funcionalidade (ex: dashboard)
├── /pages/           # Componentes que representam as páginas da aplicação
├── /reducers/        # Lógica pura de manipulação de estado para cada entidade
├── /routers/         # Configuração centralizada do React Router
├── /styles/          # Estilos globais e o ficheiro de tema (theme.ts)
└── /types/           # Definições de interfaces TypeScript (Aluno, Turma, etc.)


🏁 Como Executar o Projeto

Siga os passos abaixo para clonar e executar o projeto na sua máquina local.

Pré-requisitos

Node.js (versão 18 ou superior)

npm ou yarn

Instalação

Clone o repositório:

git clone [https://github.com/andreviictorx/Sistema-de-Gestao-Escolar.git](https://github.com/andreviictorx/Sistema-de-Gestao-Escolar)


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

