class CheckoutPage {

    navigateToCheckout() {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    }

    billingDetails(firstName, lastName, company, coutry, address1, address2, city, state, pastcode, phone, email) {
        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_company').clear().type(company)
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-results__options').contains(coutry).click();
        cy.get('#billing_address_1').clear().type(address1)
        cy.get('#billing_address_2').clear().type(address2)
        cy.get('#billing_city').clear().type(city),
            cy.get('#select2-billing_state-container').click()
        cy.get('.select2-results__option').contains(state).click();
        cy.get('#billing_postcode').clear().type(pastcode)
        cy.get('#billing_phone').clear().type(phone)
        cy.get('#billing_email').clear().type(email)
    }

    additionalInformation(additionalInformation) {
        cy.get('#order_comments').type(additionalInformation)
    }

    purchase() {
        cy.get('#terms').click();
        cy.get('#place_order').click();
    }

    checkOrder(productCount, product) {
        cy.wait(2000);
        for (let x = 0; x < productCount; x++) {
            cy.get(`tbody > :nth-child(${x + 1}) > .woocommerce-table__product-name > a`)
                .should('contain', product[x].productName)
                .should('contain', product[x].size)
                .should('contain', product[x].color);

            cy.get(`tbody > :nth-child(${x + 1}) > .woocommerce-table__product-name > .product-quantity`)
                .should('contain', product[x].qtd);
        }
    }

    checkAddress(customerIndex, address) {
        cy.get('address')
            .should('contain', address[customerIndex].firstName)
            .should('contain', address[customerIndex].lastName)
            .should('contain', address[customerIndex].company)
            .should('contain', address[customerIndex].address)
            .should('contain', address[customerIndex].secondaryAddress)
            .should('contain', address[customerIndex].city)
            .should('contain', address[customerIndex].state)
            .should('contain', address[customerIndex].cep)
            .should('contain', address[customerIndex].phone)
            .should('contain', address[customerIndex].email)
    }

}

export default new CheckoutPage();