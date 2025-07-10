<script>
          document.addEventListener("DOMContentLoaded", () => {
            const buttons = document.querySelectorAll('.loja-categorias button');
            const produtos = document.querySelectorAll('.loja-lista .produto');
        
            buttons.forEach(button => {
              button.addEventListener('click', () => {
                // Remove a classe active de todos os botões
                buttons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe active ao botão clicado
                button.classList.add('active');
        
                const category = button.textContent.trim();
        
                produtos.forEach(produto => {
                  if (category === 'Todos' || produto.dataset.category === category) {
                    produto.style.display = '';
                  } else {
                    produto.style.display = 'none';
                  }
                });
              });
            });
          });
    </script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const botoes = document.querySelectorAll(".loja-categorias button");
        const produtos = document.querySelectorAll(".loja-lista .produto");
    
        botoes.forEach(botao => {
          botao.addEventListener("click", () => {
            // Remover a classe 'active' de todos os botões
            botoes.forEach(btn => btn.classList.remove("active"));
            botao.classList.add("active");
    
            const categoria = botao.textContent.trim();
    
            produtos.forEach(produto => {
              const produtoCategoria = produto.getAttribute("data-category");
              if (categoria === "Todos" || produtoCategoria === categoria) {
                produto.style.display = "block";
              } else {
                produto.style.display = "none";
              }
            });
          });
        });
      });
</script>

<script>
  document.addEventListener("DOMContentLoaded", () => {
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

    // Troca de depoimento a cada 3 segundos
    mostrarDepoimento();
    setInterval(mostrarDepoimento, 4000);
  });
</script>

<script>
function gerarOrcamento() {
  const selecionados = document.querySelectorAll('.chk-servico:checked');
  let html = '<table style="width:100%;border-collapse:collapse;"><tr><th style="border:1px solid #ccc;padding:8px;">Serviço</th><th style="border:1px solid #ccc;padding:8px;">Valor</th><th style="border:1px solid #ccc;padding:8px;">Prazo</th></tr>';
  let total = 0;

  selecionados.forEach(chk => {
    const row = chk.closest('tr');
    const cols = row.querySelectorAll('td');
    const servico = cols[1].innerText;
    const valor = cols[2].innerText;
    const prazo = cols[3].innerText;
    html += `<tr><td style="border:1px solid #ccc;padding:8px;">${servico}</td><td style="border:1px solid #ccc;padding:8px;">${valor}</td><td style="border:1px solid #ccc;padding:8px;">${prazo}</td></tr>`;
    const valorNum = parseFloat(valor.replace('R$', '').replace(',', '.'));
    if (!isNaN(valorNum)) total += valorNum;
  });

  html += `</table><p style="text-align:right; font-weight:bold; margin-top:15px;">Total: R$ ${total.toFixed(2)}</p>`;
  html += `<p style="text-align:center; margin-top:20px;">Contato: (88) 99713-9954 • atendimento@dtechinformatica.com.br</p>`;
  document.getElementById('orcamento-conteudo').innerHTML = html;
  document.getElementById('orcamento-gerado').style.display = 'block';
}
</script>

<script>
function imprimirOrcamento() {
  const conteudo = document.getElementById("orcamento-gerado").innerHTML;
  const janela = window.open('', '', 'width=800,height=600');
  janela.document.write('<html><head><title>Orçamento Dtech</title>');
  janela.document.write('<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">');
  janela.document.write('<style>body{font-family:Montserrat,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:8px;text-align:left;}th{background:#409FDA;color:#fff;} img{max-height:100px;}
.btn-loja {
  display: inline-block;
  width: 160px;
  padding: 10px 14px;
  text-align: center;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.btn-loja:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.btn-whatsapp { background: #25d366; }
.btn-online { background: #28a745; }
.btn-comprar { background: #409FDA; border: none; cursor: pointer; font-size: 0.95rem; }
.btn-loja:hover {
  opacity: 0.85;
}
.btn-whatsapp { background: #25d366; }
.btn-online { background: #28a745; }
.btn-comprar { background: #409FDA; border: none; cursor: pointer; }

</style>');
  janela.document.write('</head><body>');
  janela.document.write(conteudo);
  janela.document.write('</body></html>');
  janela.document.close();
  janela.focus();
  janela.print();
  janela.close();
}
</script>
document.addEventListener("DOMContentLoaded", function () {
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



