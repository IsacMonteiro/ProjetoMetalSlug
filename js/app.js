function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of personagensMetalSlug) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <img src="${dado.imagem}" alt="${dado.nome}" />
                <p class="descricao-meta">${dado.historia}</p>
                <p class="descricao-meta"><strong>Primeira Aparição:</strong> ${dado.primeiraAparicao}</p>
                <p class="descricao-meta"><strong>Veículo Favorito:</strong> ${dado.veiculoFavorito}</p>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}