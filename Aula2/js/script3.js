var nome = prompt("Digite o nome do produto", "");
alert(nome);
n1 = prompt("Coloque o valor do produto", "");
n2 = prompt("Escolha o desconto", "");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
desconto = (n1 * n2) / 100;
preçocomdesconto = n1 - desconto;

console.log(desconto);
console.log(preçocomdesconto);
console.log(nome);
