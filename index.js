document.getElementById("botaoValidar").addEventListener("click", function() {
        var numeros = document.getElementById("numeros").value.split(" ");
    var crescente = true;
    var decrescente = true;


    for (var i = 1; i < numeros.length; i++) {
        if (parseInt(numeros[i]) < parseInt(numeros[i - 1])) {
            crescente = false;
        }
        if (parseInt(numeros[i]) > parseInt(numeros[i - 1])) {
            decrescente = false;
        }
    }
    const divresult =   document.getElementById("botaoValidar")

    if (numeros.length === 1) {
      $(divresult).after('<span>A sequência possui apenas um número.</span>')
    } else if (crescente && !decrescente) {
        $(divresult).after('<span>Os números são crescentes.</span>')
    } else if (!crescente && decrescente) {
        $(divresult).after('<span>Os números são decrescentes.</span>')
    } else {
        $(divresult).after('<span>A sequência não é estritamente crescente nem decrescente."</span>')
    }
});