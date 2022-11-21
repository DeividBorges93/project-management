# Boas-vindas a API CRUD-projects!
 - Uma API para gerenciamentos de projetos.
 - Permite a criação de usuário.
 - E aplica um CRUD de projetos.

## Intuito do projeto
  - Desafio técnico para uma vaga desenvolvedor back-end pleno.
  - Desenvolver um CRUD em node.js

## Features

- [x] Criação de usuário
- [x] Efetuar login
- [x] Criar, ler, atualizar e deletar projetos
- [x] Marcar projetos como lido

## Pré-requisitos para rodar a aplicação Backend

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [![Git Badge](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)](https://git-scm.com) [![Nodejs Badge](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)](https://nodejs.org/en/)

- Clone o repositório
~~~Java
git@github.com:DeividBorges93/CRUD-projects.git
~~~

- Entre na pasta do backend
~~~Java
cd /CRUD-projects/backend
~~~

- Instale as dependencias
~~~Java
npm install
~~~

- Cri um arquivo .env contendo a chave API_PORT
~~~Java
ex: API_PORT=3001
~~~

- Inicie a aplicação
~~~Java
npm start
~~~

- Teste as rotas usando o projeto pronto na pasta thunderClient ou use um de sua preferência e crie as rotas

~~~Java
backend/thunderClient
~~~

## End points

- POST - Cadastro de usuário - username é enviado para o headers
> http://localhost:3001/users
~~~Java
Corpo da requisição:

{
"name": "Deivid Borges",
"username": "deivid.borges2",
"password": "minhasenha"
}
~~~

- POST - Login de usuário - requer username válido.
> http://localhost:3001/login - usuário e senha no mínimo 8 caracters
~~~Java
Corpo da requisição:
{
"username": "seu.usuario",
"password": "sua.senha"
}
~~~

 POST - Cadastro de projetos - requer token e username válidos.
> http://localhost:3001/project
~~~Java
Corpo da requisição:

{
"title": "Meu_Projeto1",
"zipCode": 88010400,
"cost": 9500,
"deadline": "2022-09-31T00:00:00.000Z"
}
~~~

GET - Lista de projetos pelo username - requer token e username válidos.
> http://localhost:3001/projects
~~~Java
Resposta da requisição:

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

GET - Lista projeto pelo id - requer token e username válidos.
> http://localhost:3001/project/:id
~~~Java
Resposta da requisição:

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

PUT - Atualiza informações do projeto - requer token e username válidos.
> http://localhost:3001/projects/:id
~~~Java
Corpo da requisição:

  {
    "title": "projeto top",
    "zipCode": 11111111,
    "cost": 148453,
    "deadline": "2021-10-16T00:00:00.000Z"
  }
~~~

PATCH - Seta o campo done para true - requer token e username válidos.
> http://localhost:3001/projects/:id/done
~~~Java
Corpo da requisição:

  {
    "done": true
  }
~~~

DELETE - Exclui o projeto pelo ID - requer token e username válidos.
> http://localhost:3001/projects/:id