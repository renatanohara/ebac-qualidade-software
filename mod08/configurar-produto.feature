            #language: pt

            Funcionalidade: Configurar produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que eu esteja na página do produto da EBAC-SHOP que desejo adicionar ao carrinho

            Esquema do Cenário: Configurar produto
            Quando eu selecionar o tamanho <tamanho>
            E a cor <cor>
            E a quantidade <quantidade>
            E clicar me "Adicionar ao carrinho"
            Entao o sistema irá exibir a <mensagem>

            Exemplos:

            | tamanho | cor    | quantidade | mensagem                                      |
            | null    | null   | null       | "Necessário selecionar um tamanho"            |
            | "S"     | Null   | 5          | "Necessário selecionar uma cor"               |
            | "XL"    | "Red"  | 11         | "São permitdas apenas 10 unidades por pedido" |
            | "M"     | "Blue" | 1          | "Item adicionado ao carrinho!"                |
            | "XS"    | Orange | 10         | "Item adicionado ao carrinho!"                |