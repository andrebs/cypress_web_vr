/// <reference types="cypress" />
const url = Cypress.config("baseUrl")

describe('acessa área Pra você', () => {

    beforeEach(() => {
        cy.visit(url)
        cy.get('.vr-main-navigation__holder')
        .contains('Pra Você')
        .click()
    })

    it('exibe google maps quando eu consultar onde posso usar meu cartão vr', () => {
        cy.get('.vr-hero__actions')
        .contains('Onde usar meu cartão VR?')
        .click()
        cy.get('#mapSection')
        .should('be.visible')
        cy.get('#map')
        .should('be.visible')
    })


})