            #language: pt

            Funcionalidade: Tela de Login
            Como aluno do Portal EBAC
            Quermo me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de autenticação do partal EBAC

            Cenário: Autentição válida
            Quando eu digitar o usuário "joão@ebac.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de boas vindas "Olá João"

            Cenário: Usuário inexistente
            Quando eu digitar o usuário "xxxyyyzzz@ebac.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de alerta "Usuário inexistente"

            Cenário: Usuário com senha inválida
            Quando eu digitar o usuário "joão@ebaccom.br"
            E a senha "fadajsaa2982"
            Então deve exibir uma mensagemde alerta "Usuário ou senha inválidos"

            Esquema do Cenário: autenticar multiplos usuário
            Quando eu digitar o <usuario>
            E a <senha>
            Então deve exibir a <mensagem> de sucesso

            Exemplos:
            | usuario             | senha       | mensagem     |
            | "joao@ebac.com.br"  | "teste@123" | "Olá João!"  |
            | "maria@ebac.com.br" | "teste@123" | "Olá Maria!" |
            | "jose@ebac.com.br"  | "teste@123" | "Olá José!"  |