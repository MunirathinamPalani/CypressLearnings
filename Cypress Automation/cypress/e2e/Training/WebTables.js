/// <reference types="cypress"/>

describe('My First Test Suite', function() {
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            const OutVal=$el.text()
            if(OutVal.includes('SQL + Agile'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(Output) {
                    const Price = Output.text()
                    cy.log(Price)
                    expect(Price).to.equal('25')
                })
            }
        })
    })
})