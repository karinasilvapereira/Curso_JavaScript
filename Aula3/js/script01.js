function corFundo() {
  var cor = prompt("Digite a cor preto para aplicar ao fundo");

  /* Transformar os caracteres em maiúscula usamos o comando
  toUpperCase e para minúscula usamos o comando toLowerCase
  */
  cor = cor.toLowerCase();

  if (cor == "preto") {
    document.bgColor = "#000000";
  }
}
function corFundo2() {
  var cor = prompt("Digite a cor vermelho ou preto para o fundo");
  cor = cor.toLowerCase();
  if (cor == "preto") {
    document.bgColor = "black";
  } else if (cor == "vermelho") {
    document.bgColor = "red";
  } else {
    document.bgColor = "yellow";
  }
}

function mudaCor() {
  if (document.forms[0].cor[0].checked) {
    document.bgColor = "purple";
  } else if (document.forms[0].cor[1].checked) {
    document.bgColor = "green";
  } else if (document.forms[0].cor[2].checked) {
    document.bgColor = "grey";
  } else if (document.forms[0].cor[3].checked) {
    document.bgColor = "blue";
  } else if (document.forms[0].cor[4].checked) {
    document.bgColor = "#4a4a63";
  } else {
    alert("Escolha uma cor abaixo ☺");
  }
}
/* Se eu for no arquivo html e atribuir a função corFundo2 no body
eu terei o primeiro exemplo feito nessa aula
  */

function mudaCor2() {
  console.log(document.forms[0].cor.value);
  switch (document.forms[0].cor.value) {
    case "Roxo":
      document.bgColor = "purple";
      break;

    case "Verde":
      document.bgColor = "green";
      break;

    case "Cinza":
      document.bgColor = "grey";
      break;

    case "Azul":
      document.bgColor = "blue";
      break;

    case "Chumbo":
      document.bgColor = "#4a4a63";
      break;

    default:
      alert("Escolha uma cor abaixo ☺");
      break;
  }
}
