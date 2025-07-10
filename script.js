document.addEventListener("DOMContentLoaded", () => {
  // Filtro por categoria
  const buttons = document.querySelectorAll('.loja-categorias button');
  const produtos = document.querySelectorAll('.loja-lista .produto');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.textContent.trim();
      produtos.forEach(produto => {
        const categoria = produto.getAttribute("data-category");
        if (category === "Todos" || categoria === category) {
          produto.style.display = "";
        } else {
          produto.style.display = "none";
        }
      });
    });
  });

  // Depoimentos rotativos
  const depoimentos = document.querySelectorAll('.depoimento');
  let atual = 0;
  function mostrarDepoimento() {
    depoimentos.forEach((dep, index) => {
      dep.classList.remove('ativo');
      if (index === atual) {
        dep.classList.add('ativo');
      }
    });
    atual = (atual + 1) % depoimentos.length;
  }
  mostrarDepoimento();
  setInterval(mostrarDepoimento, 4000);

  // Inserir ao Carrinho
  const botoesComprar = document.querySelectorAll(".btn-comprar");
  botoesComprar.forEach(botao => {
    botao.addEventListener("click", function () {
      const produtoElement = botao.closest(".produto");
      const nome = produtoElement.querySelector("h4")?.innerText || "Produto";
      const precoTexto = produtoElement.querySelector("p")?.innerText || "R$ 0,00";
      const precoNum = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

      const item = {
        nome: nome,
        preco: isNaN(precoNum) ? 0 : precoNum,
        quantidade: 1
      };

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push(item);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      alert("✅ Produto adicionado ao carrinho!");
    });
  });
});



