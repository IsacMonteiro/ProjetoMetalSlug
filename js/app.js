function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem
    if (!campoPesquisa) {
        section.innerHTML = "<p class='nada-encontrado'>Nada foi encontrado. Você precisa digitar o nome de um personagem ou veículo</p>";
        return;
    }

    // Converte o termo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let historia = "";
    let primeiraAparicao = "";
    let veiculoFavorito = "";

    // Itera sobre a lista de personagens
    for (let dado of personagensMetalSlug) {
        nome = dado.nome.toLowerCase();
        historia = dado.historia.toLowerCase();
        primeiraAparicao = dado.primeiraAparicao.toLowerCase();
        veiculoFavorito = dado.veiculoFavorito.toLowerCase();

        // Verifica se o campo de pesquisa corresponde ao nome, história, primeira aparição ou veículo favorito
        if (nome.includes(campoPesquisa) || 
            historia.includes(campoPesquisa) || 
            primeiraAparicao.includes(campoPesquisa) || 
            veiculoFavorito.includes(campoPesquisa)) {
            
            // Cria um novo elemento HTML para cada resultado encontrado
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.nome}</h2>
                    <img src="${dado.imagem}" alt="Imagem de ${dado.nome}" />
                    <p class="descricao-meta">${dado.historia}</p>
                    <p class="descricao-meta"><strong>Primeira Aparição:</strong> ${dado.primeiraAparicao}</p>
                    <p class="descricao-meta"><strong>Veículo Favorito:</strong> ${dado.veiculoFavorito}</p>
                </div>
            `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p class='nada-encontrado'>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
