let totalCarrinho = 1400;  //Começa com R$1400, já que há um celular no carrinho


//Função para adicionar produtos ao carrinho
function adicionar() {
  const selectProduto = document.getElementById('produto');
  const produtoSelecionado = selectProduto.value; //Ex: "Fone de ouvido - R$100"
  
  const quantidade = parseInt(document.getElementById('quantidade').value) || 1;  //Se não houver valor, assume 1 como padrão

  //Extrai o preço do valor (usando a parte após o "R$")
  const precoProduto = parseFloat(produtoSelecionado.split('R$')[1]);

  //Calcula o total para este produto
  const totalProduto = precoProduto * quantidade;

  //Remove o item 'Nenhum produto' se estiver presente
  const listaProdutos = document.getElementById('lista-produtos');
  const nenhumProduto = listaProdutos.querySelector('.nenhum-produto');
  if (nenhumProduto) {
    listaProdutos.removeChild(nenhumProduto);
  }

  //Adiciona o produto na lista de produtos no carrinho
  const novoProduto = document.createElement('section');
  novoProduto.classList.add('carrinho__produtos__produto');
  novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoSelecionado.split(' - ')[0]} <span class="texto-azul">R$${totalProduto.toFixed(2)}</span>`;
  listaProdutos.appendChild(novoProduto);

  //Atualiza o total do carrinho
  totalCarrinho += totalProduto;
  document.getElementById('valor-total').textContent = `R$${totalCarrinho.toFixed(2)}`;
}


//Função para limpar o carrinho
function limpar() {
  //Limpa a lista de produtos no carrinho
  const listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = ''; //Remove todo o conteúdo

  //Adiciona uma linha de carrinho vazio
  const carrinhoVazio = document.createElement('section');
  carrinhoVazio.classList.add('carrinho__produtos__produto', 'nenhum-produto');
  carrinhoVazio.innerHTML = `<span class="texto-azul">0x</span> Nenhum produto`;
  listaProdutos.appendChild(carrinhoVazio);

  //Reseta o total para zero
  totalCarrinho = 0;
  document.getElementById('valor-total').textContent = `R$${totalCarrinho.toFixed(2)}`;
}
   