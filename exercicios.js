import { produtos } from "./produtos.js";

/* ****************************** INSTRUÇÕES ******************************* 

1- Importe o array de produtos do arquivo "produtos.js" para o arquivo "exercicios.js" para realizar as operações necessárias. 
2- Todas as soluções devem ser implementadas utilizando FUNÇÕES (com ou sem parâmetros, de acordo com a necessidade).
3- Ao finalizar os exercícios, você deve criar um repositório público no Github chamado "arrays" e enviar o link no grupo do WhatsApp ou através do email: tiago.guimaraes@sp.senai.br

Data da entrega: até 19/03/2026 */

// ******************************** CENÁRIO *******************************

/* O supermercado Care4 deseja implementar um sistema de gerenciamento de estoque para otimizar suas operações. O sistema deve ser capaz de listar os produtos com base em sua rotatividade (alta, média ou baixa) e curva ABC (A, B ou C). Além disso, o sistema deve identificar quais produtos precisam ser repostos com base em critérios específicos, como rotatividade alta e curva ABC A. O objetivo é garantir que os produtos mais importantes estejam sempre disponíveis para os clientes, evitando faltas e otimizando o espaço de armazenamento.

******************************** Critérios para reposição *******************************
- Produtos de alta rotatividade e curva ABC A: Estoque mínimo: 100 unidades.
- Produtos de alta rotatividade e curva ABC B: Estoque mínimo: 80 unidades.
- Produtos de alta rotatividade e curva ABC C: Estoque mínimo: 50 unidades.

- Produtos de média rotatividade e curva ABC A: Estoque mínimo: 80 unidades.
- Produtos de média rotatividade e curva ABC B: Estoque mínimo: 60 unidades.
- Produtos de média rotatividade e curva ABC C: Estoque mínimo: 30 unidades.

- Produtos de baixa rotatividade e curva ABC A: Estoque mínimo: 50 unidades.
- Produtos de baixa rotatividade e curva ABC B: Estoque mínimo: 30 unidades.
- Produtos de baixa rotatividade e curva ABC C: Estoque mínimo: 10 unidades.

*/

// ******************************** EXERCÍCIOS *******************************

//? 1- Crie uma função que liste todos os Id's e momes. V

//? 2- Crie uma função que liste todos os produtos em estoque, de acordo com a curva ABC (A, B ou C) selecionada pelo usuário. V

//? 3- Crie uma função que liste todos os produtos em estoque, de acordo com a rotatividade selecionada pelo usuário. V

//? 4- Crie uma função que liste todos os produtos com base na seleção de rotatividade (alta, média ou baixa) e curva ABC (A, B ou C) pelo usuário. V

//? 5- Crie uma função que identifique quais produtos precisam ser repostos com base nos critérios de rotatividade e curva ABC mencionados acima.

//? 6- Crie uma função que calcule o valor total do estoque, considerando o preço de compra e a quantidade em estoque de cada produto.

//? 7- Crie uma função que aplique um desconto de 10% no preço de venda de todos os produtos de baixa rotatividade e curva C e exiba a nova lista de produtos com os preços atualizados.

//? 8- Crie uma função que permita ao usuário adicionar um novo produto ao estoque, solicitando as informações necessárias (nome, preço de compra, preço de venda, quantidade em estoque, rotatividade e curva ABC).

//? 9- Crie uma função que permita ao usuário remover um produto do estoque, solicitando o id a ser removido.

//? 10- Crie uma função que permita ao usuário atualizar as informações de um produto existente no estoque, solicitando o id do produto e as novas informações a serem atualizadas.


//!Exercicio 1 - Solução Giulia
/*
function IdNome() {
    let ListarProdutos = produtos.map((produto) => ({id: produto.id, nome: produto.nome }))
return ListarProdutos;
}

;
console.table(IdNome());
*/

//!Exercicio 2 - Solução professor

/*
function EstoqueABC(curva) {
    let produtoCuva = produtos.filter((produto) => produto.curva_abc === curva.toUpperCase())
    return produtoCuva;
}

console.table(EstoqueABC("A"))

*/

//!Exercicio 3 - Solução do professor

/*
function ListarRotatividade(Rotatividade) {
    let ProdutoRotatividade = produtos.filter((produto) => produto.rotatividade === Rotatividade.toLowerCase())
    return ProdutoRotatividade;
}

console.table(ListarRotatividade("alta"))

*/

//!Exercicio 4 - Minha solução

/*

function ListarRotatividadeeCurva(Rotatividade, Curva) {
    let ProdutoRotatividadeeCurva = produtos.filter((produto) => (produto.rotatividade) + (produto.curva_abc) === (Rotatividade.toLowerCase()) + (Curva.toUpperCase()))
    return ProdutoRotatividadeeCurva;
}

console.table(ListarRotatividadeeCurva("alta", "A"))

*/



//? 5- Crie uma função que identifique quais produtos precisam ser repostos com base nos critérios de rotatividade e curva ABC mencionados acima.
//!Exercicio 5 - 
/*
- Produtos de alta rotatividade e curva ABC A: Estoque mínimo: 100 unidades.
- Produtos de alta rotatividade e curva ABC B: Estoque mínimo: 80 unidades.
- Produtos de alta rotatividade e curva ABC C: Estoque mínimo: 50 unidades.

- Produtos de média rotatividade e curva ABC A: Estoque mínimo: 80 unidades.
- Produtos de média rotatividade e curva ABC B: Estoque mínimo: 60 unidades.
- Produtos de média rotatividade e curva ABC C: Estoque mínimo: 30 unidades.

- Produtos de baixa rotatividade e curva ABC A: Estoque mínimo: 50 unidades.
- Produtos de baixa rotatividade e curva ABC B: Estoque mínimo: 30 unidades.
- Produtos de baixa rotatividade e curva ABC C: Estoque mínimo: 10 unidades.
*/



// function EstoqueRotatividadeeCurva(Rotatividade, Curva, Estoque) {
   
   // let ProdutoRotatividadeeCurva = produtos.filter((produto) => (produto.estoque) + (produto.rotatividade) + (produto.curva_abc) === (Rotatividade.toLowerCase()) + Curva.toUpperCase())
 
   /*
    let EstoqueMinimo = [
    {rotatividade: "alta", curva: "A", estoque: 100},
    {rotatividade: "alta", curva: "B", estoque: 80},
    {rotatividade: "alta", curva: "C", estoque: 50},
    {rotatividade: "média", curva: "A", estoque: 80},
    {rotatividade: "média", curva: "B", estoque: 60},
    {rotatividade: "média", curva: "C", estoque: 30},
    {rotatividade: "baixa", curva: "A", estoque: 50},
    {rotatividade: "baixa", curva: "B", estoque: 30},
    {rotatividade: "baixa", curva: "C", estoque: 10},
 ]


let minimoEncontrado = EstoqueMinimo.find((item) => item.rotatividade === Rotatividade && item.curva === Curva)

let produtosAbaixo = produtos.filter((produto) => produto.estoque < minimoEncontrado.estoque && produto.rotatividade === Rotatividade && produto.curva_abc === Curva)

 return produtosAbaixo
}

console.table(EstoqueRotatividadeeCurva("alta", "B"))

    
    
*/




//!Exercicio 7 - Solução professor

function promocaoCurvaBaixa() {
    let selecaoProdutos = produtos.filter((produto) => produto.rotatividade == "baixa" && produto.curva_abc == "C").map ((produto) => ({...produto, desconto: produto.preco_venda * 0.9})); 
return selecaoProdutos


}

console.table(promocaoCurvaBaixa());

