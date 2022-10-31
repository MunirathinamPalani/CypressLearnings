/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My First Test Suite', function() {
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Loading Frames
        cy.frameLoaded("#courses-iframe")

        //handling Frames
        cy.iframe().find('div.login-btn').eq(0).click()
    })
})