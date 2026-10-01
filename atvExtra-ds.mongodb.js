/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */

/* Exercicio 1 */
const banco = 'bd-empresa';


/* CRIAÇÃO DA CONSTANTE COM O NOME DA COLEÇÃO DE DADOS */

/*  Exercicio 2 */
const estoque = 'estoque';


/* DEFINE O BANCO DE DADOS A SER UTILIZADO NO MONGODB */

/* Exercicio 3 */
use(banco);


/* CRIAÇÃO DA COLEÇÃO QUE ARMAZENARÁ OS PRODUTOS DO ESTOQUE */

db.createCollection(estoque);


/* DEFINE NOVAMENTE O BANCO DE DADOS QUE SERÁ UTILIZADO */

use('bd-empresa');


/* ETAPA 2 - INSERÇÃO DE DADOS */


/* A) Inserir um único produto utilizando insertOne */

db.estoque.insertOne({
    codigo: 1,
    produto: "Notebook",
    fornecedor: "Dell",
    descricao: "Notebook para uso corporativo",
    imagem: "notebook.jpg",
    valor: 3500,
    categoria: "Informática"
});


/* B) Inserir múltiplos produtos utilizando insertMany */

db.estoque.insertMany([
    {
        codigo: 2,
        produto: "Monitor",
        fornecedor: "LG",
        descricao: "Monitor para uso corporativo",
        imagem: "monitor.jpg",
        valor: 1200,
        categoria: "Informática"
    },
    {
        codigo: 3,
        produto: "Cadeira de Escritório",
        fornecedor: "Flexform",
        descricao: "Cadeira ergonômica para ambiente corporativo",
        imagem: "cadeira.jpg",
        valor: 900,
        categoria: "Mobiliário"
    },
    {
        codigo: 4,
        produto: "Teclado",
        fornecedor: "Logitech",
        descricao: "Teclado USB para computador",
        imagem: "teclado.jpg",
        valor: 150,
        categoria: "Periféricos"
    },
    {
        codigo: 5,
        produto: "Mouse",
        fornecedor: "Logitech",
        descricao: "Mouse USB para computador",
        imagem: "mouse.jpg",
        valor: 100,
        categoria: "Periféricos"
    }
]);


/* ETAPA 3 - SELEÇÕES, FILTROS E CONSULTAS */


/* A) Realizar uma consulta geral sem critérios lista todos os produtos cadastrados na coleção */

/* db.estoque.find(); */


/* B) Filtrar os produtos por uma categoria específica lista somente os produtos da categoria Informática */

/* db.estoque.find({
   categoria: "Informática"
}); */


/* C) Filtrar os produtos por um fornecedor específico lista somente os produtos fornecidos pela Logitech */

/* db.estoque.find({
    fornecedor: "Logitech"
}); */


/* D) Ocultar o campo _id no resultado da consulta o valor 0 indica que o campo _id não será exibido */

/* db.estoque.find(
    {},
    {
        _id: 0
   }
); */


/* E) Realizar uma consulta textual utilizando expressão regular procura pela palavra "corporativo" no campo descrição
   O modificador "i" permite a busca sem diferenciar
   letras maiúsculas de minúsculas */

db.estoque.find({
    descricao: /corporativo/i
});