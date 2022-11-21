# Boas-vindas ao front-end do repositório CRUD-projects!
 - Permite a criação de usuário.
 - Permite o login de usuário.

## Intuito da aplicação
  - Desenvolver um CRUD em node.js

## Features

- [x] Criação de usuário
- [x] Efetuar login
- [x] Criar, ler, atualizar e deletar projetos
- [x] Marcar projetos como lido

## Pré-requisitos para rodar a aplicação Backend

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [![Git Badge](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)](https://git-scm.com) [![npm Badge](https://img.shields.io/badge/-npm-black?style=flat-square&logo=Node.js)](https://www.npmjs.com/)

- Clone o repositório
~~~Java
git@github.com:DeividBorges93/CRUD-projects.git
~~~

- Entre na pasta do frontend
~~~Java
cd /CRUD-projects/project-manager-frontend
~~~

- Instale as dependencias
~~~Java
npm install
~~~

- Inicie a aplicação
~~~Java
npm start
~~~

## Páginas

- Cadastro de usuário - username é enviado para o headers
> /regsiter - usuário e senha no mínimo 8 caracters, nome no mínimo 12 caracteres
~~~Java
Recebe:

  "name": "Seu nome",
  "username": "seu usuario",
  "password": "sua senha"
~~~

- Login de usuário - requer username válido.
> login - usuário e senha no mínimo 8 caracters
~~~Java
Recebe:

  "username": "seu usuario",
  "password": "sua senha"
~~~

 - Cadastro de projetos - requer token e username válidos.
> /project
~~~Java
Recebe:

  "titulo": "titulo do projeto",
  "cep": 000000000,
  "custo": 45000,
  "prazo": "2022-09-31T00:00:00.000Z",
~~~

 - Lista de projetos pelo username - requer token e username válidos.
> /projects
~~~Java
Renderiza na tela:

[
  {
    "id": 1,
    "title": "Meu_Projeto1",
    "zipCode": 00000000,
    "cost": 9500,
    "done": false,
    "deadline": "2022-10-01T00:00:00.000Z",
    "username": "seu.usuario",
    "createdAt": "2022-11-19T20:33:36.056Z",
    "updatedAt": "2022-11-19T20:33:36.056Z"
  },
  {
    "id": 2,
    "title": "Meu_Projeto2",
    "zipCode": 00000000,
    "cost": 8700,
    "done": false,
    "deadline": "2022-10-01T00:00:00.000Z",
    "username": "seu.usuario",
    "createdAt": "2022-11-19T20:33:36.056Z",
    "updatedAt": "2022-11-19T20:33:36.056Z"
  }
]
~~~

- Lista projeto pelo id - requer token e username válidos.
> project/:id
~~~Java
Renderiza na tela:

  {
    "id": 1,
    "title": "Meu_Projeto1",
    "zipCode": 00000000,
    "cost": 9500,
    "done": false,
    "deadline": "2022-10-01T00:00:00.000Z",
    "username": "seu.usuario",
    "createdAt": "2022-11-19T20:33:36.056Z",
    "updatedAt": "2022-11-19T20:33:36.056Z"
  }
~~~
