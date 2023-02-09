
class ShowFilter {

    burgermenu = "//button[@aria-label='Open the menu']"
    all_search = "//a[@href='/deals/withFilter/All-Deals']"
    showfilter_button = "//button[contains(text(),'Show filters')]"
    Fieldtoshow = "//div[@data-test-target='E2E-deals-dealFilterModal-selectDealFilter-selectFilter']"
    totalAssets = "//span[@data-test-target='E2E-deals-dealFilterModal-selectDealFilter-Total assets']"
    FieldtoshowBar = "//h3[contains(text(),'Fields to show')]"
    sort_1 = '//div[@data-test-target="E2E-deals-multiselect-sort1Column1"]'
    Sort1_button = '//div[@data-test-target="E2E-deals-multiselect-sort1Column1"]'
    Select_totalAssets = '//div[@data-test-target="E2E-filterConditions-selectColumnDropdown-"]'
    compaire_value = "(//dt[contains(text(),'Total assets')]/following-sibling::dd[@data-test-target])[1]"
    select_column = "//div[@data-test-target='E2E-filterConditions-selectColumnDropdown-']"
    slect_Total_assets_value = "(//span[contains(text(),'Total assets')])[3]"
    select_column_1 = "//div[@data-test-target='E2E-filterConditions-selectColumnDropdown-3']"
    select_column_2 = "//div[@data-test-target='E2E-filterConditions-selectColumnDropdown-4']"
    filter_compare = "(//dd[@data-test-target='E2E-dealCard-Total assets Text'])[1]"
    save = "(//button[contains(text(),'Save')])[1]";
    Enter_assets_value = "//input[@data-test-target='E2E-filterConditions-inputValue-3']"
    filter_button = "//button[@data-test-target='E2E-dealFilterModal-filterButton']";
    Condition_1 = '//input[@data-test-target="E2E-filterConditions-inputValue-3"]'
    showFilter = '//button[@data-test-target="E2E-deals-showFilterButton"]'
    Condition_2 = '//input[@data-test-target="E2E-filterConditions-inputValue-4"]'
    RadioButton = '(//input[@data-test-target="E2E-filterConditions-checkbox"])[1]'
    is = "//p[contains(text(),'There are no deals in your pipeline')]"
    is_notvalue = '(//dd[@data-test-target="E2E-dealCard-Total assets Text"])[1]'
    is_greatervalue = '(//dd[@data-test-target="E2E-dealCard-Total assets Text"])[1]'
    is_lessthan = '(//dd[@data-test-target="E2E-dealCard-Total assets Text"])[1]'
    is_in_range = '(//dd[@data-test-target="E2E-dealCard-Total assets Text"])[1]'
    exists = '(//dd[@data-test-target="E2E-dealCard-Total assets Text"])[1]'
    close = "//button[@aria-label='Close']"

    //is filter coding here 
    ShowFilter_Details(filter_name) {

        cy.xpath(this.burgermenu).click();
        cy.xpath(this.all_search).click();
        cy.xpath(this.showfilter_button).click();
        cy.xpath(this.Fieldtoshow).click()
        cy.xpath(this.totalAssets).click()
        cy.xpath(this.FieldtoshowBar).click()
        cy.wait(6000)
        cy.xpath(this.Sort1_button).click()
        cy.xpath(this.Select_totalAssets).type(filter_name).type('{enter}')
        cy.xpath(this.filter_button).click()
        cy.wait(5000)
        cy.xpath(this.filter_compare).then(($text) => {
            const TotalAssets = $text.text()
            cy.log(TotalAssets)
        })
    }

    filter_all_condition(filter_name1) {
        let TotalAssetsLength = ["is", "is not", "is greater than", "is less than", "is in range", "exists"]
        let InputValue = 70000 + Math.floor(Math.random() * 300000)
        let inputvalue1 = 500000 + Math.floor(Math.random() * 300000)
        cy.xpath(this.burgermenu).click();
        cy.xpath(this.all_search).click();
        cy.xpath(this.showfilter_button).click();
        cy.xpath(this.Fieldtoshow).click()
        cy.xpath("//span[@data-test-target='E2E-deals-dealFilterModal-selectDealFilter-" + filter_name1 + "']").click()
        cy.xpath(this.FieldtoshowBar).click()
        cy.wait(6000)
        // cy.xpath(this.Sort1_button).click()
        cy.xpath(this.Sort1_button).type(filter_name1).type('{enter}')
        cy.xpath(this.Select_totalAssets).click().type(filter_name1).type('{enter}')
        TotalAssetsLength.forEach(element => {
            cy.xpath(this.select_column_1).click().clear().type(element).type('{enter}')
            if (element == "exists") {
                cy.xpath(this.RadioButton).first().check({ force: true })
            } else {
                cy.xpath(this.Condition_1).click().clear().type(InputValue).type('{enter}')
                if (element == "is in range") {
                    cy.xpath(this.Condition_2).type(inputvalue1);
                }
            }

            cy.xpath(this.filter_button).click()
            cy.wait(4000)

            switch (element) {
                case "is":
                    if (cy.xpath("//p[contains(text(),'Found')]").then(($text) => {
                        const TotalAssets = $text.text()
                        cy.log(TotalAssets)
                    })) {
                    }
                    else {
                        cy.xpath(this.is).then(($text) => {
                            const TotalAssets = $text.text()
                            cy.log(TotalAssets)
                            expect(TotalAssets).to.be.equal(InputValue)
                        })
                    }
                    break;
                case "is not":
                    cy.log("is not")
                    cy.xpath('(//dd[@data-test-target="E2E-dealCard-' + filter_name1 + ' Text"])[' + 1 + ']').then(($text) => {
                        const TotalAssets = $text.text()
                        cy.log(TotalAssets)
                        expect(TotalAssets).to.not.equal(InputValue)
                    })

                    break;
                case "is greater than":
                    cy.log("is greater then")
                    cy.xpath('(//dd[@data-test-target="E2E-dealCard-' + filter_name1 + ' Text"])[1]').then(($text) => {
                        const TotalAssets = $text.text()
                        cy.log(TotalAssets)
                    })
                    break;
                case "is less than":
                    cy.log("is less than")
                    cy.xpath('(//dd[@data-test-target="E2E-dealCard-' + filter_name1 + ' Text"])[1]').then(($text) => {
                        const TotalAssets = $text.text()
                        cy.log(TotalAssets)
                    })
                    break;

                case "is in range":
                    if (cy.xpath("//p[contains(text(),'Found')]").then(($text) => {
                        const TotalAssets = $text.text()
                        cy.log(TotalAssets)
                    })) {
                    }
                    else {
                        cy.xpath('(//dd[@data-test-target="E2E-dealCard-' + filter_name1 + ' Text"])[1]').then(($text) => {
                            const TotalAssets = $text.text()
                            cy.log(TotalAssets)
                        })
                        cy.log("is in range")

                    }

                    break;
                // cy.xpath('(//dd[@data-test-target="E2E-dealCard-'+filter_name1+' Text"])[1]').then(($text) => {const TotalAssets = $text.text()
                // cy.log(TotalAssets)})
                // cy.log("is in range")
                // break;

                case "exists":
                    cy.xpath('(//dd[@data-test-target="E2E-dealCard-' + filter_name1 + ' Text"])[1]').then(($text) => {
                        const TotalAssets = $text.text()
                        cy.log(TotalAssets)
                    })
                    cy.log("exists");
                    break;
                default:
                    cy.log("Default")
            }

            cy.xpath(this.showFilter).click()
            cy.wait(4000)

        })
        cy.xpath(this.close).click()
    }

    filter_all_purpose(filter) {
        let PurposeLength = ["is One Of", "is not One Of",  "Exists"]
        let dealTypes = ["Purchase", "Refinance", "HomeEquitylone","Renewal/Switch/Transfer"]
        cy.xpath(this.burgermenu).click();
        cy.xpath(this.all_search).click();
        cy.xpath(this.showfilter_button).click();
        cy.xpath(this.Fieldtoshow).click()
        cy.xpath(this.FieldtoshowBar).click()
        cy.wait(6000)
        cy.xpath(this.Sort1_button).click()
        cy.xpath(this.Sort1_button).type(filter).type('{enter}')
        cy.xpath(this.Select_totalAssets).click().type(filter).type('{enter}')
        PurposeLength.forEach(element => {
            cy.xpath(this.select_column_1).click().type(element).type('{enter}')
            if (element == "exists") {
                cy.xpath(this.RadioButton).first().check({ force: true })
            } 
            else{
                dealTypes.forEach(element1 => {
                    cy.xpath(this.select_column_2).click().type('{backspace}').type(element1).type('{enter}')

            cy.xpath(this.filter_button).click()
            cy.wait(4000)
//                  //dl/div/div/parent::div
            switch (element) {
                case "is One Of":
                    if (cy.xpath("(//dd[@data-test-target='E2E-dealCard-Purpose Text'])['+i+']").then(($text) => {
                        const Purpose = $text.text()
                        cy.log(Purpose)
                    })) {
                    }
                    else {
                        cy.xpath(this.is).then(($text) => {
                            const Purpose = $text.text()
                            cy.log(Purpose)
                            expect(Purpose).to.be.equal(InputValue)
                        })
                    }
                    break;

                case "is not One Of":
                    cy.log("is not One of")
                    if(cy.xpath("(//dd[@data-test-target='E2E-dealCard-Purpose Text'])['+i+']").then(($text) => {
                        const Purpose = $text.text()
                        cy.log(Purpose)
                    
                    })){

                    }
                    else {
                        cy.xpath(this.is).then(($text) => {
                            const Purpose = $text.text()
                            cy.log(Purpose)
                            expect(Purpose).to.be.equal(InputValue)
                        })
                    }
                    break;
                
                case "exists":
                    cy.xpath('//input[@data-test-target="E2E-filterConditions-checkbox"])[1]').then(($text) => {
                        const Purpose = $text.text()
                        cy.log(Purpose)
                    })
                    cy.log("exists");
                    break;
                default:
                    cy.log("Default")
            }

            cy.xpath(this.showFilter).click()
            cy.wait(4000)
        })
     }
        })
        cy.xpath(this.close).click()
    }
}
export default ShowFilter


