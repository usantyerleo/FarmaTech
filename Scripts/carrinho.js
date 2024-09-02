document.addEventListener("DOMContentLoaded", () => {
    // Carregar o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.querySelector(".produtos");
    const totalElement = document.getElementById("total");

    // Atualizar a exibição do carrinho e o total
    atualizarCarrinho(cart);
});

function adicionarAoCarrinho(nome, preco, img) {
    // Cria um objeto para o item do carrinho
    const item = { id: Date.now(), nome, preco, img };

    // Recupera o carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem("cart")) || [];

    // Adiciona o item ao carrinho
    carrinho.push(item);

    // Atualiza o localStorage
    localStorage.setItem("cart", JSON.stringify(carrinho));

    // Atualiza a exibição do carrinho
    atualizarCarrinho(carrinho);
}

function removerDoCarrinho(id) {
    // Recupera o carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem("cart")) || [];

    // Filtra o carrinho para remover o item com o id fornecido
    carrinho = carrinho.filter(item => item.id !== id);

    // Atualiza o localStorage
    localStorage.setItem("cart", JSON.stringify(carrinho));

    // Atualiza a exibição do carrinho
    atualizarCarrinho(carrinho);
}

function atualizarCarrinho(carrinho) {
    const carrinhoContainer = document.querySelector('.produtos');
    carrinhoContainer.innerHTML = ''; // Limpa o carrinho exibido

    let total = 0;

    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.setAttribute('data-id', item.id);

        div.innerHTML = `
            <img src="/FarmaTech/Imagens/${item.img}" alt="${item.nome}">
            <span class="nome-produto">${item.nome}</span>
            <span class="preco-produto">R$ ${item.preco.toFixed(2)}</span>
            <a href="#" class="remover" onclick="removerDoCarrinho(${item.id})">
                <img src="/FarmaTech/Imagens/botaoRemover.jpeg" alt="Remover Item" class="icone-remover">
            </a>
        `;

        carrinhoContainer.appendChild(div);
        total += item.preco;
    });

    // Atualiza o valor total
    const totalElement = document.getElementById("total");
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}
