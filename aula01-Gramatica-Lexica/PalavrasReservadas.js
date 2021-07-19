/*
Há uma lista de palavras-chave que o JavaScript usa como recursos próprios da linguagem e que não podem ser usados como identificadores de variáveis, funções, etc.
Se tentarmos usar alguma delas, receberemos o erro de sintaxe "Token inesperado", pois o JavaScript acha que estamos querendo usar o recurso da linguagem que usa essa palavra-chave.
*/

// Nesse exemplo, tentamos usar a palavra "function" como identificador de variável, porém "function" é uma palavra reservada no JS.
var function = "Função";