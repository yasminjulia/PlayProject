# PlayProject 
 ____
 ## Sobre o projeto
 Projeto escrito com playwright, trata-se de um compilado de exemplos de cenários adquiridos através do curso Dominando playwright lecionado por Alan Voigt na Udemy, que ensina como automatizar testes end-to-end em js;
 As assertion corresponde ao expect que é uma biblioteca
 
## Ambiente
- Node.js
- IDE

## Comandos
- Para instalar versão mais recente:
`npm init playwright@latest`

- Iniciando um projeto:
`npm init -y para criar arquivo package.json`
`npm install playwright`
`npm install expect`

- Para rodar o script:
`npm test`
`node nome_do_arquivo.js`
- Para executar n testes de n arquivos:
`npx playwright`
- Para executar um arquivo especifico:
`npx playwright test/nomedoarquivo.js`
- Para executar uma função test dentro do script:
`npx playwright test -g "nome do cenario"`
- Para instalar jest reporter
`npm install jest-html-reporters`


- Playwright inspector - gravando ações na tela e gerando código é habilitado através do comando:
`npx playwright codegen url site`


## Plugins
* Jest
* Inspector playwright
___

 * Documentação: 
 https://playwright.dev/
 https://jestjs.io/pt-BR/docs/getting-started
#  
