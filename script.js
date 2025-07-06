<script>
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const tbody = document.querySelector("#tabela-carrinho tbody");
    const totalEl = document.getElementById("total");

    function renderCarrinho() {
      tbody.innerHTML = "";
      let total = 0;
      carrinho.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.nome}</td>
          <td>R$ ${item.preco.toFixed(2)}</td>
          <td><button class="remover-btn" onclick="removerItem(${index})">Remover</button></td>
        `;
        tbody.appendChild(tr);
        total += item.preco;
      });
      totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    function removerItem(index) {
      carrinho.splice(index, 1);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      renderCarrinho();
    }

    function limparCarrinho() {
      carrinho = [];
      localStorage.removeItem("carrinho");
      renderCarrinho();
    }

    function finalizarCompra() {
      const forma = document.querySelector('input[name="forma"]:checked').value;
      let mensagem = `Olá! Quero finalizar minha compra na Dtech:\n\n`;
      let total = 0;
      carrinho.forEach(item => {
        mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
        total += item.preco;
      });
      mensagem += `\nTotal: R$ ${total.toFixed(2)}\nForma de compra: ${forma}`;
      const link = "https://wa.me/5588999999999?text=" + encodeURIComponent(mensagem);
      window.open(link, "_blank");
    }

    renderCarrinho();
  </script>
