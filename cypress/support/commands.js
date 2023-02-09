
Cypress.Commands.add('login', () => {

    cy.visit("https://agent-cannect-development.oscarintelligence.net/login");
    cy.get('#uid-11-email').type('akshay.kumar@infostride.com')
    cy.get('#uid-11-password').type("Ak-3847287493");
    cy.wait(3000)
    cy.get('.bg-blue-500').click();
})

Cypress.Commands.add('logout', () => {
  cy.xpath('(//button[@aria-expanded="false"])[2]').click();
  cy.xpath("(//a[@role='menuitem'])[3]").click();
  })


  
