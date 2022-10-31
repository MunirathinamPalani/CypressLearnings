/// <reference types="cypress"/>

describe('My First Test Suite', function() {
it('My FirstTest case',function() { 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
console.log('this is console Output');
cy.log('this is log out')
})
})