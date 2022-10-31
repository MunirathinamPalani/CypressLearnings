/// <reference types="cypress"/>

describe('My First Test Suite', function() {
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        //Visibility of element
        cy.get('input.search-keyword').should('be.visible').type('Carrot')

        //url confirmation
        cy.url().should('include','seleniumPractise')
    })
})