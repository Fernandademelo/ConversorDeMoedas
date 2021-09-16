function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value; 
	var valorEmDolarNumerico = parseFloat(valor);

 //a conta per se
  var valorEmReal = valorEmDolarNumerico * 5.2;
  console.log(valorEmReal);
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  
  var valorConvertido = "O Resultado em Real é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
  
}
