// Função para formatar o campo de preço com vírgula antes dos dois últimos dígitos
function formatarPreco(input) {
    let valor = input.value.replace(/\D/g, ""); // remove tudo que não for dígito

    if (valor.length < 3) {
        valor = valor.padStart(3, "0"); // garante pelo menos 3 dígitos
    }

    let reais = valor.slice(0, -2);
    let centavos = valor.slice(-2);

    input.value = `${reais},${centavos}`;
}

// Função para calcular o preço do cliente
function calcularPreco() {
    let precoColetadoStr = document.getElementById("preco-coletado").value.replace(",", ".");
    let precoColetado = parseFloat(precoColetadoStr);
    let pesoColetado = parseFloat(document.getElementById("peso-coletado").value);
    let pesoSolicitado = parseFloat(document.getElementById("peso-solicitado").value);

    if (isNaN(precoColetado) || isNaN(pesoColetado) || isNaN(pesoSolicitado)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let precoCliente = (precoColetado * pesoSolicitado) / pesoColetado;

    document.getElementById("preco-cliente").style.display = "block";
    document.getElementById("valor-preco-cliente").textContent =
        precoCliente.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

