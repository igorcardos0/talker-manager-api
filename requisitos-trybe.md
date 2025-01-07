# Requisitos do Projeto: API de Gerenciamento de Palestrantes

## Requisitos Obrigatórios

1 - **GET /talker**

- Retornar status 200 e array com todos os palestrantes cadastrados.
- Se não houver, retornar array vazio.

2 - **GET /talker/:id**

- Retornar status 200 e palestrante com base no ID.
- Se não encontrado, retornar status 404.

3 - **POST /login**

- Receber email e password, retornar um token aleatório de 16 caracteres.

4 - **Validações para o endpoint /login**

- Validar email e password. Retornar status 400 se inválidos.

5 - **POST /talker**

- Criar um novo palestrante com os dados fornecidos no corpo da requisição.

6 - **PUT /talker/:id**

- Atualizar dados de um palestrante com base no ID.

7 - **DELETE /talker/:id**

- Excluir palestrante com base no ID.

8 - **GET /talker/search?q=searchTerm**

- Buscar palestrantes com base no termo de busca.

## Requisitos Bônus

9 - **GET /talker/search?rate=rateNumber**

- Filtrar palestrantes por avaliação (rate).

10 - **GET /talker/search?date=watchedDate**

- Filtrar palestrantes pela data da palestra.

11 - **PATCH /talker/rate/:id**

- Alterar a avaliação (rate) de um palestrante.

12 - **GET /talker/db**

- Retornar palestrantes do banco de dados MySQL.
- Retornar status 200 e array atualizado com os dados.
