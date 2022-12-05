function carregarInfo(){
    
    var id = localStorage.getItem("id");
    var objDicasCuriosidades = JSON.parse(localStorage.getItem("objDicasCuriosidades"));
    var dicasCuriosidades = objDicasCuriosidades.dicasCuriosidades[id];
  
    var exibir = document.getElementById("exibir");
    var strHtml = '';
    strHtml += `
    <div class="exibirDetalhes">
        <div class="linha">
            <label class="lblTitulo">Nome:</label>
            <label class="lblConteudo">${dicasCuriosidades.name}</label>
        </div>
        <div class="linha">
            <label class="lblTitulo">Site:</label>
            <a class="lblConteudo" href="${dicasCuriosidades.site}">${dicasCuriosidades.site}</a>
        </div>
        <div class="linha">
            <label class="lblTitulo">Tipo:</label>
            <label class="lblConteudo">${dicasCuriosidades.type}</label>
        </div>
        <div class="linha">
            <label class="lblTitulo">Descrição:</label>
            <label class="lblConteudo">${dicasCuriosidades.description}</label>
        </div>
    <div class="linha">
      <button type="submit" id="editar" onclick="window.location.href = '../DetalhesDicas/detalhesDicas.html'" class="buttonSlvr">Editar</button>
      <button type="submit" id="voltar" onclick="window.location.href = '../ListaDicas/listaDicas.html'" class="buttonSlvr">Voltar</button>
    </div>
  </div>
  `
  ;
  exibir.innerHTML = strHtml;
  }