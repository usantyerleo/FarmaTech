document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões de adicionar ao carrinho
    const buttons = document.querySelectorAll(".adicionar");

    // Adiciona um event listener para cada botão
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");

            // Adiciona o produto ao carrinho
            addToCart(productId);
             
            
        });
    });
});

function addToCart(productId) {
    // Lista de produtos com seus detalhes
    const products = [
        { id: 0, nome: "cloridrato", preco: 10.99, img: "cloridrato.png" },
        { id: 1, nome: "Paracetamol", preco: 8.99, img: "paracetamo.png" },
        { id: 2, nome: "Dipirona", preco: 12.99, img: "dipirona.png" },
        { id: 3, nome: "Dorflex", preco: 12.99, img: "dorflex.png" },
        { id: 4, nome: "Ibuprofeno", preco: 15.99, img: "ibuprofeno.png" },
        { id: 5, nome: "naproxeno", preco: 8.99, img: "naproxeno.png" },
        { id: 6, nome: "neosaldina", preco: 12.99, img: "neosaldina.png" },
        { id: 7, nome: "novalgina", preco: 10.99, img: "novalgina.png" }
    ];

    // Encontra o produto baseado no ID fornecido
    const product = products.find(p => p.id == productId);

    if (product) {
        // Recupera o carrinho do localStorage ou cria um novo se não existir
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        // Adiciona o produto ao carrinho
        cart.push(product);
        // Atualiza o localStorage com o novo carrinho
        localStorage.setItem("cart", JSON.stringify(cart));
 
    }
    alert(`Produto adicionado ao carrinho:\nNome: ${product.nome}\nPreço: R$ ${product.preco.toFixed(2)}`);
}

