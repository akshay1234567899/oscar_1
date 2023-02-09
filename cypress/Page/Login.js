class Loginpage{

    enterusername='//input[@data-test-target="E2E-login-enterEmail"]'
    enterpassword='//input[@data-test-target="E2E-login-enterPassword"]'
    LogintoOscar='//button[@data-test-target="E2E-login-loginButton"]'
    
    ClickOnLoginbutton(email, Password){
        cy.xpath(this.enterusername).click().type(email);
        cy.xpath(this.enterpassword).click().type(Password);
        cy.xpath(this.LogintoOscar).click();
    }
    }
    export default Loginpage