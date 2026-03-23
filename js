function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const divResultado = document.getElementById('resultado');

    if (!peso || !altura) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(1);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    divResultado.innerHTML = `Seu IMC é ${imc} (${classificacao})`;
    divResultado.classList.remove('hidden');
}
