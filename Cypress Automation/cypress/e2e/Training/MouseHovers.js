/// <reference types="cypress"/>

describe('My First Test Suite', function() {
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //MouseHover
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click()

        cy.wait(1000)

        //to hit Invisible Element
        cy.contains('Top').click({force:true})

        //verify Url
        cy.url().should('include','top')
    })
})