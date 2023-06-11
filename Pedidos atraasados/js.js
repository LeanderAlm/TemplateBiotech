
var pedidos = {
  "123": {
    dataSolicitacao: new Date("2023-05-10")
  },
  "321": {
    dataSolicitacao: new Date("2023-04-15")
  },
  "111": {
    dataSolicitacao: new Date("2023-05-27")
  }
};

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();
var dataFormatada = ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
document.querySelector('.data').innerHTML = dataFormatada;

function preencherDataSolicitacao() {
  var numeroPedido = document.getElementById('numeroPedido').value;
  var dataSolicitacaoInput = document.getElementById('dataSolicitacao');

  if (numeroPedido in pedidos) {
    var dataSolicitacao = pedidos[numeroPedido].dataSolicitacao;
    var dia = dataSolicitacao.getDate();
    var mes = dataSolicitacao.getMonth() + 1;
    var ano = dataSolicitacao.getFullYear();
    var dataFormatada = ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
    dataSolicitacaoInput.value = dataFormatada;
  } else {
    dataSolicitacaoInput.value = '';
  }
}

function verificarDiferenca() {
  var numeroPedido = document.getElementById('numeroPedido').value;
  
  if (numeroPedido === "id1") {
    preencherDataSolicitacao();
  }
  
  var dataSolicitacaoInput = document.getElementById('dataSolicitacao');
  var dataSolicitacaoParts = dataSolicitacaoInput.value.split('/');
  var dataSolicitacao = new Date(
    parseInt(dataSolicitacaoParts[2]),  //
    parseInt(dataSolicitacaoParts[1]) - 1,  
    parseInt(dataSolicitacaoParts[0])  
  );
  
  var dataAtualInput = document.getElementById('dataAtual');
  var dataAtual = new Date();
  dataAtualInput.value = dataAtual.toISOString().split('T')[0]; 
  
  var diferencaDias = Math.floor((dataAtual.getTime() - dataSolicitacao.getTime()) / (1000 * 60 * 60 * 24));
  var mensagemElemento = document.getElementById('mensagem');
  
  if (diferencaDias > 7) {
    var diasVencidos = diferencaDias - 7;
    mensagemElemento.innerHTML = "O exame está vencido há " + diasVencidos + " dias";
  } else if (diferencaDias < 0) {
    mensagemElemento.innerHTML = "A data de solicitação é posterior à data atual";
  } else {
    var diasRestantes = 7 - diferencaDias;
    mensagemElemento.innerHTML = "Faltam " + diasRestantes + " dias para o exame vencer";
  }
  
  mensagemElemento.style.marginTop = "20px";
}
  