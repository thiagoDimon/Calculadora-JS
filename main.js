function insert(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function voltar() {
    const apagar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length - 1);
}

function calcular () {
    const resultado = document.getElementById('resultado').innerHTML;	
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } 
}