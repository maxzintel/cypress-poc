# cypress-poc
https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#
#### via ~/cypress/integration/sample_spec.js
`describe` and `it` come from Mocha.
`expect` comes from Chai.
Both are tools that Cypress has baked in by default.

#### Best Practices
* "Given, When, Then" => "Arrange, Act, Assert".
  * First, put your application in a specific state. Then you take some action in the application that causes it to change. Finally, we check the resulting application state.

#### Default Assertions
* https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Default-Assertions
* With many of Cypress' commands we know whether everything is okay without making any separate assertions.
* Cypress is build to fail if they don't find what they are expecting to find.
* Ex: `cy.visit()` will fail if the website returns anything other than a 200.
* Additionally, Cypress will automatically wait for elements to appear. This eliminates the need to explicitly wait for various elements to appear before running our tests.

#### Code Completion and Custom Command Reference
* https://docs.cypress.io/guides/tooling/intelligent-code-completion.html#Set-up-in-your-Dev-Environment
`// type definitions for Cypress object "cy"`
`/// <reference types="cypress" />`
`// type definitions for custom commands like "createDefaultTodos"`
`/// <reference types="../support" />`
* The /support example refers to custom commands we may write. We just need to create typescript definitions for them and refer to them with the /// here.
  * https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax

#### More Cool Features
* For `.click`, Cypress will automatically show the element it clicks by highlighting it with a red pin.
  * It also takes snapshots of the page's state before and after the click action is executed.

