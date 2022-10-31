/// <reference types="cypress"/>

describe('My First Test Suite', function() {
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Child Tab
        cy.get('#opentab').invoke('removeAttr','target').click()

        //Go back
        cy.go('back')

        //Go Forward
        cy.go('forward')
    })
})