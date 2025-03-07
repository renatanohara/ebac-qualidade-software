/// <reference types="cypress" />
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidades: Produtos', () => {

    beforeEach(() => {
        // cy.visit('produtos')
        produtosPage.visitarUrl()
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

    it('Deve selecionar um produto da lista utilizando Page-object', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve SweatshirtTem um cara')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Selene Yoga Hoodie';
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        // produtosPage.visitarProduto('lucia-cross-fit-bra')
        let produto = 'Lucia Cross-Fit Bra'
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').should('contain', produto)

    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Cassia Funnel Sweatshirt'
        let qtd = 7
        produtosPage.buscarProduto(produto)
        produtosPage.adicionarProdutoCarrinho('M', 'White', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Cassia Funnel Sweatshirt” foram adicionados no seu carrinho.' )
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.adicionarProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)
    
            cy.get('.woocommerce-message').should('contain', (dados[1].nomeProduto))
        })
    });
});