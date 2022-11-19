# Boas-vindas ao repositório do projeto CRUD-projects!
 - Uma API para gerenciamentos de projetos.
 - Permite a criação de usuário.
 - E aplica um CRUD de projetos.
 - No frontend uma aplicação que permite criar ususário, login e gerenciar projetos.

## Intuito do projeto
  - Desafio técnico para uma vaga desenvolvedor back-end pleno.
  - Desenvolver um CRUD em node.js
  - Desenvolver frontend em Reactjs

## Features

- [x] Criação de usuário
- [ ] Efetuar login
- [x] Criar, ler, atualizar e deletar projetos
- [ ] Marcar projetos como lido

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

- Cadastro de usuário - username é enviado para o headers
> http://localhost:3001/users
~~~Java
Corpo da requisição:

{
"name": "Deivid Borges",
"username": "deivid.borges2",
"password": "minhasenha"
}
~~~

- Cadastro de projetos - requer token e username válidos.
> http://localhost:3001/project
~~~Java
Corpo da requisição:

{
"title": "Meu_Projeto1",
"zipCode": 88010400,
"cost": 9500,
"done": false,
"deadline": "2022-09-31T00:00:00.000Z"
}
~~~

### 🚧 Restante do README em construção... 🚧