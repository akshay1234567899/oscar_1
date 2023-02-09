
class Newdealpage {
  
NewdealButton="//a[contains(text(),'New deal')]"
purchase="(//input[@class='form-control'])[1]"
Down_Payment="(//input[@type='tel'])[2]"
Purchase_percentage="//input[@placeholder='Enter percentage']"
Click_DoneDeal="//button[@class='btn mx-1 btn-primary']"
Create_Applicant="(//button[@class='btn px-0 align-baseline btn-link'])[2]"
First_Name="//input[@placeholder='First Name']"
Last_Name="//input[@placeholder='Last Name']"
role_sec="(//select[@class='custom-select'])[3]/option[1]"
Role="//select[@data-test-target='E2E-intake-PRIMARY']/option[1]"
Annual_Income="(//input[@class='text-16 form-control'])[1]"
Credit_score="(//input[@type='radio'])[3]"
Applicant_click="(//div[@class='py-1'])[1]"



applicant_details(purchase,purchase_percentage,downpayment,firstname,lastname,annual_Income){
    
    cy.xpath(this.NewdealButton).click();
    cy.wait(5000)
    cy.xpath(this.purchase).type(purchase)
    cy.xpath(this.Down_Payment).type(downpayment);
    cy.xpath(this.Purchase_percentage).type(purchase_percentage);
    cy.xpath(this.Click_DoneDeal).click();
    cy.xpath(this.Create_Applicant).click();
    cy.xpath(this.First_Name).click().type(firstname);
    cy.xpath(this.Last_Name).click().type(lastname);
    cy.xpath(this.Annual_Income).click().type()
}

}
export default Newdealpage