
# Projeto SCF Brazil 

![Logo](./img/logo.png)

Este projeto contém 6 desafios propostos pelo SCF Brazil. Ele é construído usando Node.js e Express para o servidor e Nodemon para teste de servidor.


## Instalação

Instalar meu projeto com npm

1. Clone o repositório:
```bash
git clone https://github.com/otaviobenedicto/vaga-scf-brazil.git
```

2. Navegue até o diretório do projeto:
```bash
cd vaga-scf-brasil
```

3. Instale as dependências:
```bash
npm install
```


    
## Teste de servidor

Para testar o servidor usando Nodemon, execute o seguinte comando:

```bash
  npm run test
```


## Uso

1. Iniciar servidor: `npm start`
2. O servidor estará rodando em `http://localhost:3000`


## Rotas

### Teste 1: GET em /user e /users

Alteração do for para metodo find para melhorar a performace. 

### Desafio 2: POST em /users

Adicionando valores ao FakeData.js com metodos de validação do corpo da requisição. 

### Desafio 3: DELETE em /users
Utiliza um middleware que valida os dados do usuário antes de deletar o usuario pelo nome. 

OBS: Se o job for igual a 'Desenvolvedor' a acão não será permitida

### Desafio 4: PUT em /users

Utiliza um middleware que valida os dados do usuário antes de alterar o usuario pelo nome.

OBS: Se o job for igual a 'Desenvolvedor' a acão não será permitida

### Desafio 5: GET em /users/access

Utiliza um metodo o core module fs (fileStorage) para armazenar as requisições do método GET em /user?name=Name Example em stats.json, e retorna a quantidade de requisções por usuário.

### Desafio 6: Middleware

Middleware que faz uma verifica a permissão do usúario para modificar.