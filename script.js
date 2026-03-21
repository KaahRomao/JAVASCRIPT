import { produtos } from "./produtos.js";

const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
};

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
}
