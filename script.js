<script>
document.addEventListener("DOMContentLoaded", () => {
  const botoesComprar = document.querySelectorAll(".produto .btn-carrinho");
  botoesComprar.forEach(btn => {
    btn.addEventListener("click", () => {
      const produto = btn.closest(".produto");
      const nome = produto.querySelector("h4").textContent;
      const preco = parseFloat(produto.querySelector("p").textContent.replace("R$", "").replace(",", "."));
      const item = { nome, preco };

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push(item);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      alert(`${nome} adicionado ao carrinho!`);
    });
  });
});
</script>
