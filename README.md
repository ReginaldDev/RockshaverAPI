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

## Estrutura do Projeto

```
RockshaverAPI/
│── cypress/
│   ├── e2e/               # Testes de API
│   │   ├── users.spec.js   # Testes relacionados a usuários
│   │   ├── products.spec.js # Testes relacionados a produtos
│   ├── fixtures/          # Dados simulados para os testes
│   ├── support/          # Configurações adicionais e comandos customizados
│── cypress.config.js      # Configuração do Cypress
│── package.json          # Dependências e scripts do projeto
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

