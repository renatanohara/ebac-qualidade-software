/// <reference types="cypress" />

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.user, login.pass)
        })
    });

    it('Deve completar detalhes da conta com suscesso', () => {
        cy.detalhesConta('Renata', 'N.', 'renata.qa')
    });

});