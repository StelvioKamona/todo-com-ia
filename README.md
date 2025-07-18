
# ToDo List com Inteligência Artificial

Aplicação desenvolvida com o objetivo de melhorar a organização pessoal dos utilizadores através de uma lista de tarefas inteligente e personalizada. A aplicação integra funcionalidades de Inteligência Artificial para sugerir tarefas, priorizar atividades com base nos hábitos do utilizador e analisar a sua produtividade ao longo do tempo.

---

## Objetivo do Projeto

Transformar a experiência de gestão de tarefas numa solução mais eficiente e adaptável, utilizando tecnologias como Firebase, Angular (ou Ionic) e algoritmos de IA, oferecendo:

- Sugestões automáticas baseadas no comportamento do utilizador
- Priorização inteligente de tarefas
- Análise de produtividade
- Interação em linguagem natural

---

## Integrantes do Grupo

- Adilson Gougel
- Eliseu Chimbaia
- Manuel Chibia
- Stélvio Kamona
- Francisco Pondua Kuñala

---

## Funcionalidades Principais

- Registo e login de utilizadores via **Firebase Authentication**
- Dashboard com:
    - Perfil do utilizador
    - Tarefas registadas
    - Lista de interesses
    - Cadastro de novas tarefas
- Sistema inteligente de sugestões e organização
- Base de dados em tempo real com **Firebase Realtime Database**

---

## Estrutura do Código-Fonte

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

## Segurança e Firebase

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
