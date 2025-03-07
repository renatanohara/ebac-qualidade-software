class ProductPage {

    navigateToProduct(productName){
        const produtctUrl = productName.replace(/ /g, '-')
        cy.visit(`produtos/${produtctUrl}`)
    }

    addProductToCart(size, color, qtd){
        cy.get(`.button-variable-item-${size}`).click()
        cy.get(`.button-variable-item-${color}`).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProductPage();