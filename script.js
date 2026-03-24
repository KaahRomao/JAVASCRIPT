import { produtos } from "./produtos.js";

const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
  btnlistarTodos: document.getElementById("#ListaTodos"),
};

console.log(btnlistarTodos);

console.log(elemento.containerDisplay);

elemento.btnCurva.forEach((item) => {
  item.addEventListener("click", (evento) => {
    // console.log(evento.target.id);
    EstoqueABC(evento.target.id);
  });
});

function EstoqueABC(curva) {
  let produtoCurva = produtos.filter(
    (produto) => produto.curva_abc === curva.toUpperCase(),
  );
  inserirDadosCurvaABC(produtoCurva);
}

function inserirDadosCurvaABC(dados) {
  elemento.containerDisplay.innerHTML = "";
  //Cria um objeto para gerar os paragrafos (Ainda sem dados)
  let colunasGRID = {
    id: document.createElement("p"),
    nome: document.createElement("p"),
    preco_venda: document.createElement("p"),
    estoque: document.createElement("p"),
  };

  colunasGRID.id.innerText = "ID";
  colunasGRID.nome.innerText = "NOME";
  colunasGRID.preco_venda.innerText = "PREÇO";
  colunasGRID.estoque.innerText = "ESTOQUE";

  elemento.containerDisplay.append(
    colunasGRID.id,
    colunasGRID.nome,
    colunasGRID.preco_venda,
    colunasGRID.estoque,
  );

  console.table(dados);
  // Variavel para receber ados do tipo de curva ABC selecionado

  let dadosFiltrados = dados;

  dadosFiltrados.forEach((item) => {
    let produto = {
      id: item.id,
      nome: item.nome,
      preco_venda: item.preco_venda,
      estoque: item.estoque,
    };

    let id = document.createElement("p");
    let nome = document.createElement("p");
    let preco_venda = document.createElement("p");
    let estoque = document.createElement("p");

    id.innerText = produto.id;
    nome.innerText = produto.nome;
    preco_venda.innerText = produto.preco_venda;
    estoque.innerText = produto.estoque;

    elemento.containerDisplay.append(id, nome, preco_venda, estoque);
  });

  elemento.btnlistarTodos.addEventListener("click", (evento) => {
    console.log(evento);
  });

  let ListarTodos = produtos.map((produtos) => {
    return {
      id: produtos.id,
      nome: produtos.nome,
    };
  });
}
