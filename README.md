# Wallace Antunes

## Covid Report
http://covid-report-wallaceantunes.s3-website-us-east-1.amazonaws.com/


## Tecnologias usadas
 - React
   - Usado para a criação da interface de usuário.
 - Typescript
   - Usado para tipagem e autocomplete, pois, facilita na hora de saber quais dados vão ser enviados e recebidos de uma camada (classes, servições, etc.).

## Observações
- Para que o sistema consiga rodar a API é necessário criar uma cópia do .env.local.example e renomear para .env.local e fazer a adição do seu token;
- o token deve ser obtido através da api https://brasil.io/home/
- Podem ocorrer alguns erros na API, por conta do rate limit;
- O sistema foi desenvolvido sem o auxilio de nenhum framework gráfico (Ex.: Bootstrap, Materialize, etc );

## Install
Caso não tenha o yarn 
`npm install --global yarn`

Instalar pacotes
`yarn install`

## Rodar App
Rodar aplicação
`yarn start`
