# cypress-poc

#### via ~/cypress/integration/sample_spec.js
`describe` and `it` come from Mocha.
`expect` comes from Chai.
Both are tools that Cypress has baked in by default.

#### Best Practices
* "Given, When, Then" => "Arrange, Act, Assert".
  * First, put your application in a specific state. Then you take some action in the application that causes it to change. Finally, we check the resulting application state.
