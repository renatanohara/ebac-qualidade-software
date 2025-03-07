class LoginPage {

    navigateToLogin(){
        cy.visit('minha-conta')
    }

    logIn(nomeProduto){
        this.navigateToLogin()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    }

}

export default new LoginPage();