// Função para calcular o preço do cliente
function calcularPreco() {
    // Obter os valores inseridos nos campos
    let precoColetado = parseFloat(document.getElementById("preco-coletado").value);
    let pesoColetado = parseFloat(document.getElementById("peso-coletado").value);
    let pesoSolicitado = parseFloat(document.getElementById("peso-solicitado").value);

    // Validar se todos os campos foram preenchidos corretamente
    if (isNaN(precoColetado) || isNaN(pesoColetado) || isNaN(pesoSolicitado)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcular o preço do cliente utilizando a regra de 3
    let precoCliente = (precoColetado * pesoSolicitado) / pesoColetado;

    // Exibir o resultado
    document.getElementById("preco-cliente").style.display = "block";
    document.getElementById("valor-preco-cliente").textContent = precoCliente.toFixed(2); // Formata o preço com 2 casas decimais
}
