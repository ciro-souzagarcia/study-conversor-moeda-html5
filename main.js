function chamarApi(){
	// console.log("chamando API");
	const endpoint = "https://api.exchangeratesapi.io/latest";
	$.get(endpoint, callback);
}

function callback(resultado){
	 console.log(resultado);
	 
	 var sMoedaDestino = $("#moeda_destino").val();
	 var fValor = resultado.rates[sMoedaDestino];
	$("#valor_destino2").text(fValor);
	$("#moeda_destino2").text(sMoedaDestino);
}