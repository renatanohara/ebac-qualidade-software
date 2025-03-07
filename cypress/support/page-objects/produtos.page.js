class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
        cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
    }


    visitarProduto(nomeProduto) {
        // cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    adicionarProdutoCarrinho(tamamho, cor, quantidade){
        cy.get('.button-variable-item-' + tamamho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage();