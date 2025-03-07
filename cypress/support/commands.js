Cypress.Commands.add('login', (user, pass) => { 
    cy.get('#username').type(user)
    cy.get('#password').type(pass)
    cy.get('.woocommerce-form > .button').click()
 })


Cypress.Commands.add('preCadastro', (mail, pass, firstName, lastName) => {
    cy.get('#reg_email').type(mail)
    cy.get('#reg_password').type(pass)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()

})

Cypress.Commands.add('detalhesConta', (firstName, lastName, user) => {
    cy.get('#account_first_name').clear()
    cy.get('#account_first_name').type(firstName)

    cy.get('#account_last_name').clear()
    cy.get('#account_last_name').type(lastName)

    cy.get('#account_display_name').clear()
    cy.get('#account_display_name').type(user)
    
    cy.get('.woocommerce-Button').click()
})