            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse a página de autenticaçao da loja virtual EBAC-SHOP

            Cenario: Autenticaçao Válida
            Quando eu digitar o usuário "usuario_valido@ebacshop.com.br"
            E a senha "senha_valida@123"
            Entao deve redirecionar para tela de checkout da conta logada


            Cenario: Autenticaçao Inválida
            Quando eu digitar o usuário <usuario>
            E a senha <senha>
            Entao deve exibir a alerta <alerta>

            | usuario                            | senha                  | alerta                       |
            | "usuario_valido@ebacshop.com.br"   | "senhava_invalida@123" | "Usuário ou senha inválidos" |
            | "usuario_invalido@ebacshop.com.br" | "senha_valida@123"     | "Usuário ou senha inválidos" |
