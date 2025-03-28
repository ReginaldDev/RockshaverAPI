# RockshaverAPI - Testes Automatizados com Cypress

Este repositório contém testes automatizados para a API Rockshaver, utilizando o framework [Cypress](https://www.cypress.io/) para validação de endpoints.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework para testes automatizados
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Mocha](https://mochajs.org/) e [Chai](https://www.chaijs.com/) - Estrutura e asserções para os testes

## Instalação

Antes de rodar os testes, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório:
   ```sh
   git clone https://github.com/ReginaldDev/RockshaverAPI.git
   cd RockshaverAPI
   ```

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```

## Como Executar os Testes

Para rodar os testes via terminal, utilize o seguinte comando:
```sh
npx cypress run
```

Se desejar abrir a interface interativa do Cypress:
```sh
npx cypress open
```

## Executando com Docker

Caso deseje rodar os testes em um ambiente isolado com Docker, utilize o `docker-compose`.

1. Certifique-se de ter o Docker instalado em sua máquina.
2. No diretório raiz do projeto, execute o seguinte comando:
   ```sh
   docker-compose up -d
   ```
3. Aguarde as imagens serem baixadas e os containers serem iniciados.
4. Para rodar os testes dentro do container, utilize:
   ```sh
   docker exec -it rockshaver-api-tests npx cypress run
   ```
5. Para encerrar os containers:
   ```sh
   docker-compose down
   ```

Isso garantirá que todos os testes rodem em um ambiente configurado corretamente, evitando problemas de dependências.

## Estrutura do Projeto

```
RockshaverAPI/
├── cypress/
│   ├── e2e/                 # Testes de API
│   │   ├── delete.cy.js     # Testes para operações de exclusão
│   │   ├── get.cy.js        # Testes para operações de recuperação de dados
│   │   ├── lembrete.cy.js   # Testes relacionados a lembretes
│   │   ├── post.cy.js       # Testes para operações de criação
│   ├── fixtures/            # Dados simulados para os testes
│   ├── support/             # Configurações adicionais e comandos customizados
├── cypress.config.js        # Configuração do Cypress
├── package.json             # Dependências e scripts do projeto

```

## Contribuição

Se desejar contribuir com o projeto:
1. Fork este repositório
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o repositório remoto (`git push origin minha-feature`)
5. Abra um Pull Request

## Contato

Caso tenha dúvidas ou sugestões, entre em contato pelo [GitHub](https://github.com/ReginaldDev).

---

Este README foi criado para documentar os testes automatizados da API Rockshaver. Fique à vontade para sugerir melhorias!
