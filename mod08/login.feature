            #language: pt

            Funcionalidade: Tela de Login
            Como aluno do Portal Ebac
            Quero me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de autenticaçao do Portal Ebac

            Cenario: Autenticaçao Válida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "senha@123"
            Entao deve exibir uma mensagem de boas vindas "Olá Joao"

            Cenário: Usuário inexistente
            Quando eu digitar o usuario "ada1sasdaxa@ebac.com.br"
            E a senha "senha@123"
            Entao deve exibir uma mensagem de alerta "Usuario inexistente"

            Cenario: Usuario com senha inválida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "1211231231@123"
            Entao deve exibir uma mensagem de boas vindas "Usuário ou senha inválidos"

            Esquema do Cenário: Autenticar múltiplos usuários
            Quando eu digitar o usuário <usuario>
            E a senha <senha>
            Entao deve exibir a <mensagem> de sucesso

            Exemplos:
            | usuario             | senha       | mensagem    |
            | "joao@ebac.com.br"  | "senha@123" | "Olá João"  |
            | "maria@ebac.com.br" | "pass123!"  | "Olá Maria" |

