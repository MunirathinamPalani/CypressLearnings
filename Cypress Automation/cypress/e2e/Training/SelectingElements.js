/// <reference types="cypress"/>

describe('My First Test Suite', function() {
it('My FirstTest case',function() { 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('input.search-keyword').type("be")
cy.wait(3000)
//validating overall locators available
cy.get('div.product').should('have.length','6')

//validating visible locators
cy.get('div.product:visible').should('have.length','5')

//parent child chaining
cy.get('div.products').find('div.product').should('have.length','5')

//index text
cy.get('div.products').find('div.product').eq(4).contains('ADD TO CART')

//selecting the element based on the item we want to purchase
cy.get('div.products').find('div.product').each(($el,index,$list) => {
    const Out=$el.find('h4.product-name').text()
    if(Out.includes('Strawberry'))
    {
        cy.wrap($el).contains('ADD TO CART').click()
        cy.wrap($el).get('.product-price')
        const Price = $el.find('.product-price').text()
        cy.log(Price)
    }
    cy.log(Out)
})

//aliasing
cy.get('div.brand.greenLogo').as('PageIconText')
cy.get('@PageIconText').should('have.text','GREENKART')

//Promise handling
cy.get('@PageIconText').then(function(Output) {
    cy.log(Output.text())
})
})
})