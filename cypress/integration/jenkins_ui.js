/// <reference types="cypress" />


describe('Run some arbitrary UI tests', () => {
    
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
    })

    it('has an checkbox', () => {
        cy.get('#checkboxes input').eq(1).check();
    })
    it('has a checked attribute true', () => {
        cy.get('#checkboxes input').should('have.attr', 'checked', true);
    })

})