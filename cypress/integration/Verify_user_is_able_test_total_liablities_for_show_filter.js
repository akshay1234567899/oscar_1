import ShowFilter from "../Page/Showfilter";


describe('filter page functionality', function () {
    const faker = require('faker');
    const showfilter = new ShowFilter();
    const filter_enter= faker.Name.firstName()

    
    beforeEach(function () {
        cy.fixture("example.json").then(function (data) {
            this.data = data;
    })
})

     it('test show filter functionality of the applicaton', function(){
        cy.login()
        showfilter.filter_all_condition("Total liabilities");

     })

    //  it('Verify Logout functionality of the application',()=>{
    //     cy.logout();
    //   })

    })