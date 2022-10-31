/// <reference types="cypress"/>

describe('My First Test Suite', function() {
it('My FirstTest case',function() { 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//Static Dropdown
cy.get('select#dropdown-class-example').select('Option2')

//Dynamic Dropdown
cy.get('#autocomplete').type('Amer')
cy.get('.ui-menu-item div').each(($el,index,$list) => {
    if($el.text()==="American Samoa")
    {
        cy.wrap($el).click()
    }
})

//Alert
cy.get('#alertbtn').click()
cy.on('window:alert',(str) =>
{
    expect(str).to.equal("Hello , share this practice page and share your knowledge")
})

//Confirm Alert
cy.get('#confirmbtn').click()
cy.on('window:confirm',(str) =>
{
    expect(str).include("Hello")
})
})
})