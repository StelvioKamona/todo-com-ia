**1. Introdução — Tema e Objetivo**

“O que o nosso grupo se predispôs a fazer foi desenvolver uma aplicação moderna de lista de tarefas — ou ToDo List — integrada com funcionalidades de Inteligência Artificial, com o objetivo de melhorar a organização pessoal do utilizador.”

“A proposta vai muito além de uma simples lista. Queremos transformar a forma como as pessoas gerem o seu tempo e as suas tarefas diárias, utilizando recursos inteligentes como sugestões automáticas, priorização com base em hábitos e análise de produtividade.”

“Tudo isto de forma personalizada, adaptando-se ao comportamento de cada utilizador, graças à integração com algoritmos de aprendizado de máquina e interações em linguagem natural.”

“Este projeto foi desenvolvido pelos seguintes membros do grupo: Adilson Gougel, Eliseu Chimbaia, Manuel Chibia, Stélvio Kamona e Francisco Pondua Kuñala.”

**⚙️**

**2. Funcionamento da Aplicação (Resumo Guiado)**

“Na prática, a aplicação funciona da seguinte forma:”

- Ao iniciar, o utilizador é recebido com uma página de boas-vindas que explica brevemente o propósito da plataforma.
- O utilizador pode então registar-se ou iniciar sessão através do módulo de autenticação conectado ao Firebase.
- Uma vez autenticado, o utilizador acede ao Dashboard, onde pode visualizar o seu perfil, os seus calçados cadastrados, os seus interesses e adicionar novas tarefas (ou calçados, no caso de um modelo adaptado).
- A inteligência artificial entra em ação ao analisar o histórico de tarefas do utilizador, sugerindo novas com base em padrões anteriores e ajudando a priorizar o que é mais importante.
- A base de dados é dinâmica e interativa, refletindo em tempo real qualquer atualização feita pelo utilizador, graças à integração com o Firebase.”

**💻**

**3. Estrutura do Código-Fonte**

“A estrutura da aplicação foi cuidadosamente organizada da seguinte forma:”

- Pasta src: contém todo o código-fonte.
    - global.css: ficheiro com os estilos globais, como o menu que aparece em várias páginas.
    - index.html: ponto de entrada onde todos os componentes da aplicação são injetados.
    - main.ts: ficheiro principal que inicia a aplicação e carrega as credenciais do Firebase.
    - app/: contém os componentes da aplicação, como home, login, registro, dashboard, etc.
        - Cada componente tem:
            - .html → estrutura do conteúdo
            - .scss (ou .css) → estilo
            - .ts → lógica do componente
        - 
    - 
    - services/: onde está implementada a lógica de interação com o Firebase, como:
        - adicionarTarefa()
        - listarTarefa()
        - getUsuariosTarefasPerfeitas()
    - 
- 

“Além disso, o repositório no GitHub possui um README completo, com as instruções de instalação, execução e detalhes técnicos do projeto.”

**📲**

**4. Conclusão — Propósito Final da Aplicação**

“O nosso propósito com esta aplicação é claro: criar uma ToDo List inteligente, eficiente e verdadeiramente útil, capaz de se adaptar ao utilizador e facilitar o seu dia a dia.”

“Com este projeto, queremos demonstrar como a inteligência artificial pode ser aplicada de forma prática e acessível no cotidiano, através de ferramentas simples, mas poderosas.”

# 📌 ToDo List com Inteligência Artificial

Aplicação desenvolvida com o objetivo de melhorar a organização pessoal dos utilizadores através de uma lista de tarefas inteligente e personalizada. A aplicação integra funcionalidades de Inteligência Artificial para sugerir tarefas, priorizar atividades com base nos hábitos do utilizador e analisar a sua produtividade ao longo do tempo.

---

## 🎯 Objetivo do Projeto

Transformar a experiência de gestão de tarefas numa solução mais eficiente e adaptável, utilizando tecnologias como Firebase, Angular (ou Ionic) e algoritmos de IA, oferecendo:

- Sugestões automáticas baseadas no comportamento do utilizador
- Priorização inteligente de tarefas
- Análise de produtividade
- Interação em linguagem natural

---

## 👥 Integrantes do Grupo

- Adilson Gougel
- Eliseu Chimbaia
- Manuel Chibia
- Stélvio Kamona
- Francisco Pondua Kuñala

---

## 🧠 Funcionalidades Principais

- Registo e login de utilizadores via **Firebase Authentication**
- Dashboard com:
    - Perfil do utilizador
    - Tarefas registadas
    - Lista de interesses
    - Cadastro de novas tarefas
- Sistema inteligente de sugestões e organização
- Base de dados em tempo real com **Firebase Realtime Database**

---

## 🧩 Estrutura do Código-Fonte

A aplicação está organizada da seguinte forma:

src/

│

├── global.css           # Estilos globais da aplicação

├── index.html           # Página base onde o app é injetado

├── main.ts              # Ponto de entrada do projeto, carrega credenciais Firebase

│

├── app/                 # Componentes principais

│   ├── home/            # Página inicial

│   ├── login/           # Componente de login

│   ├── registro/        # Componente de registo

│   ├── dashboard/       # Página principal do utilizador

│   ├── sobre/           # Página sobre o app

│   └── outros…

│

└── services/            # Comunicação com Firebase

└── tarefa.service.ts

Cada componente é composto por:

- `.html` – estrutura da interface
- `.scss` – estilos locais do componente
- `.ts` – lógica e funcionalidade do componente

---

## 🔐 Segurança e Firebase

As credenciais do Firebase **não foram incluídas no repositório**, por questões de segurança. Para correr o projeto localmente, é necessário configurar o Firebase manualmente com as suas próprias credenciais no ficheiro `environment.ts`.

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Iniciar a aplicação (em ambiente de desenvolvimento)
ionic serve
```

**Observação Final**

Este projeto é uma demonstração prática de como a inteligência artificial pode ser aplicada no quotidiano para aumentar a produtividade pessoal. Foi construído com foco em simplicidade, escalabilidade e eficiência.
