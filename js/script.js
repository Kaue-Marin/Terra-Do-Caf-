const navBar = document.querySelector(".navBar");
const search = document.querySelector(".search-form");
const cartItemContainer = document.querySelector(".cart-item-container");
document.querySelector("#menuBar").onclick = () => {
  navBar.classList.toggle("active");
  search.classList.remove("active");
  cartItemContainer.classList.remove("active");
};

document.querySelector("#lupa").onclick = () => {
  search.classList.toggle("active");
  navBar.classList.remove("active");
  cartItemContainer.classList.remove("active");
};

document.querySelector("#cart").onclick = () => {
  cartItemContainer.classList.toggle("active");
  search.classList.remove("active");
  navBar.classList.remove("active");
};

window.onscroll = () => {
  cartItemContainer.classList.remove("active");
  search.classList.remove("active");
  navBar.classList.remove("active");
};

// Obtém todos os botões "adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll(".btn.adicionar");

// Itera sobre cada botão e adiciona um evento de clique
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemBox = button.closest(".box"); // Encontra o elemento pai .box
    const itemName = itemBox.querySelector("h2").textContent; // Obtém o nome do item
    const itemPrice = parseFloat(
      itemBox.querySelector(".price span").textContent
    ); // Obtém o preço do item

    // Adiciona o item ao carrinho
    add({
      productId: Math.random(), // Substitua por um ID de produto adequado
      title: itemName,
      price: itemPrice,
    });

    // Atualiza o total exibido no carrinho
    updateCartTotal();
  });
});

// Função para atualizar o total no carrinho
function updateCartTotal() {
  const cartTotal = total();
  // Atualiza o elemento no seu HTML onde você deseja exibir o total
  // Por exemplo: document.querySelector('#cart-total').textContent = cartTotal;
}
