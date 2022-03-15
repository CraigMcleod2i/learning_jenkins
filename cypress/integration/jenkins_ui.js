/// <reference types="cypress" />


describe('Run some arbitrary UI tests', () => {
    
    before(() => {
        cy.visit('http://localhost:8081')
    })

    it('has an input', () => {
        cy.get('#post-field').should('have.attr', 'type', 'text')
    })
    it('adds a new record via the input', () => {
        cy.get('#post-field').type('12345')
        cy.get('#main button').click().wait(100)
        cy.get('p').last().contains('12345')
    })
    it('cleans up the database', () => {
        cy.get('p').last().should('have.attr', 'value')
            .then(res => {
                cy.request('DELETE', 'http://localhost:3010/test/'+res)
                cy.reload()
                cy.get('p').last().should('not.have.attr', 'value', res)
            })
        
    })

})