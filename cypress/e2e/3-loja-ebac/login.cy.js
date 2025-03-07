/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    // afterEach(() => {
    //     cy.screenshot()
    // });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(perfil.user)
        cy.get('#password').type(perfil.pass)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ebac_qa (não é ebac_qa? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('usuario_invalido@malinator.com')
        cy.get('#password').type(perfil.pass)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')    
    });

    
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type(perfil.user)
        cy.get('#password').type('xHycQ376R')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail ebac_qa@malinator.com está incorreta. Perdeu a senha?')    
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.user, {log: false})
            cy.get('#password').type(dados.pass, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ebac_qa (não é ebac_qa? Sair)')    
        })
    });

    it.only('Deve fazer login com sucesso utilizando dados customizados', () => {
        cy.login('ebac_qa@malinator.com', 'xHycQd4isbg376R')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ebac_qa (não é ebac_qa? Sair)')
    })

})

