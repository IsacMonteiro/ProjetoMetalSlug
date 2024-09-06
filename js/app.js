// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

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
    let tags = "";

    // Itera sobre a lista de personagens
    for (let dado of personagensMetalSlug) {
        let nome = removerAcentos(dado.nome.toLowerCase());
        let historia = removerAcentos(dado.historia.toLowerCase());
        let primeiraAparicao = removerAcentos(dado.primeiraAparicao.toLowerCase());
        let veiculoFavorito = removerAcentos(dado.veiculoFavorito.toLowerCase());
        let tags = removerAcentos(dado.tags.toLowerCase());

        // Verifica se o campo de pesquisa corresponde ao nome, história, primeira aparição, veículo favorito ou tags
        if (nome.includes(campoPesquisa) ||
            historia.includes(campoPesquisa) ||
            primeiraAparicao.includes(campoPesquisa) ||
            veiculoFavorito.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)) {

            // Cria um novo elemento HTML para cada resultado encontrado
            resultados += `
                <div class="item-resultado">
                    <div class="imagem-container">
                        <img src="${dado.imagem}" alt="Imagem de ${dado.nome}" />
                    </div>
                    <div class="descricao-container">
                        <h2 class="titulo">${dado.nome}</h2>
                        <p><strong>História:</strong> ${dado.historia}</p>
                        <p><strong>Primeira Aparição:</strong> ${dado.primeiraAparicao}</p>
                        <p><strong>Veículo Favorito:</strong> ${dado.veiculoFavorito}</p>
                        <a class="link" href=${dado.wiki} target="_blank">Mais informações</a>
                    </div>
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
};