/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidades: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        // .first()
        // .last()
        // .eq(2)
        .contains('Argus All-Weather Tank')
        .click()
        cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
    });
});