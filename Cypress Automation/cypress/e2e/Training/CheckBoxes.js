describe('My First Test Suite', function() {
it('My FirstTest case',function() { 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//Single Checkbox check
cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')

//Single Checkbox Uncheck
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//Double Checkbox check
cy.get('div#checkbox-example fieldset label').should('have.length','3')
cy.get('div[id=checkbox-example] fieldset label input').check(['option2','option3'])

})
})