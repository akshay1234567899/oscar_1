
import Newdealpage from "../Page/Newdeal";
const faker = require('faker');

describe('Loginpage_test', function () {
  const purchase = faker.random.number(150000)
  const purchase_percentage = faker.random.number(15)
  const downpayment= faker.random.number(67000)
  const firstname= faker.Name.firstName()
  const lastname= faker.Name.lastName()
  const annual_Income= faker.random.number(67090)
  const newdealpage = new Newdealpage();



  beforeEach(function () {
    cy.fixture("example.json").then(function (data) {
      this.data = data;
    })
  })

  it(' test Login page functionality of the application', function () {
    cy.login(this.data.email, this.data.Password)
  })

  it('Verify user is login succefully or not', () => {
    cy.xpath('(a[@data-test-target="E2E-intake-newDealButton"])[2]').should('contain.text', 'New deal')
  })


  it('Verify the functionality of the user is able to create a new deal', function () {
    newdealpage.applicant_details(purchase,purchase_percentage,downpayment,firstname,lastname,annual_Income)
  })

    it('Verify Logout functionality of the application',function (){
      cy.logout();
    })
})