

// const lg = new Loginpage();

// import { eq } from "cypress/types/lodash"

describe('Loginpage', function () {

    beforeEach(function () {
        cy.login()
         })
    })

    it(' test Login page functionality of the application', function (){
        cy.xpath("(//a[@data-test-target='E2E-intake-newDealButton'])[2]").contains('New deal').should('be.visible')
     })

      it('Verify Logout functionality of the application',()=>{
        cy.logout();
      })


