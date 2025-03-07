/// <reference types="cypress" />
import loginPage from '../support/page_objects/login.page';
import productPage from '../support/page_objects/product.page';
import checkoutPage from '../support/page_objects/checkout.page';
import { faker, fakerEL } from '@faker-js/faker';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    before(() => {
        loginPage.logIn()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // Variável para definir quantos produtos diferetes vou comprar
        let productCount = 4;

        // looping para navegar a até a página do produto e adicionar ao carrinho
        cy.fixture('products').then(product => {
            for (let x = 0; x < productCount; x ++) {
                productPage.navigateToProduct(product[x].productName);
                productPage.addProductToCart(
                    product[x].size,
                    product[x].color,
                    product[x].qtd
                );
                cy.get('.woocommerce-message').should('contain', (product[x].productName))
            }

            // Acessa meu carrinho de compras > checkout
            checkoutPage.navigateToCheckout();

            // looping para conferir os produtos e quantidades na página de Billing Details
            for (let x  = 0; x < productCount; x++) {
                cy.get(`tbody > :nth-child(${x + 1}) > .product-name`).should('contain', product[x].productName);
                cy.get(`tbody > :nth-child(${x + 1}) > .product-name > .product-quantity`).should('contain', product[x].qtd);
            }
        });

        // Preenche os dados do consumidor
        cy.fixture('billingDetails').then(address => {
            checkoutPage.billingDetails(
                address[0].firstName,
                address[0].lastName,
                address[0].company,
                address[0].coutry,
                address[0].address,
                address[0].secondaryAddress,
                address[0].city,
                address[0].state,
                address[0].cep,
                address[0].phone,
                address[0].email
            )
        });

        // Adiciona uma nota
        checkoutPage.additionalInformation(faker.lorem.text());

        // Finaliza a ordem
        checkoutPage.purchase();

        // Sei que não é boa prática, mas a internet aqui não está boa
        // estava falhando pois não dava tempo da página carregar
        cy.wait(2000);

        // Looping para validar os produtos e suas respectivas cores, tamanhos e quantidades
        cy.fixture('products').then(product => {
            checkoutPage.checkOrder(productCount, product);
        });

        // Valida o endereço
        cy.fixture('billingDetails').then(address => {
            checkoutPage.checkAddress(0, address)
        });
    });
})
