var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();
var dataFormatada = dia + "/" + mes + "/" + ano;
document.querySelector('.data').innerHTML = dataFormatada;