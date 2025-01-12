            #language: pt

            Funcionalidade: Tela de cadastro - Checkout
            Como cliente da EBAC-SHOP
            Quero fazer concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que eu acesse a página de Checkout da loja virtual EBAC-SHOP

            Esquema do Cenário: Campos obrigatórios em branco
            Quando deixar o campo obrigatório <campo> em branco
            Então deve exibir a mensagem "Necessário preencher todos os campos identificados com *"

            Exemplos:
            | campo     |
            | nome      |
            | sobrenome |
            | país      |
            | endereco  |
            | cidade    |
            | cep       |
            | telefone  |
            | e-mail    |

            Esquema do Cenário: Validaçao do formato do e-mail
            Quando preencher o campo e-mail com o <email>
            Então deve exibir a mensagem <mensagem>

            | email                          | mensagem                                 |
            | cliente_valido@ebacshop.com.br | "Finalizando compra. Por favor, aguarde" |
            | cliente_valido@ebacshop.com    | "Finalizando compra. Por favor, aguarde" |
            | cliente@.com                   | "E-mail inválido."                       |
            | cliente@ebacshop.br            | "E-mail inválido."                       |
            | @ebacshop.com.br               | "E-mail inválido."                       |
            | clienteebacshop.com.br         | "E-mail inválido"                        |