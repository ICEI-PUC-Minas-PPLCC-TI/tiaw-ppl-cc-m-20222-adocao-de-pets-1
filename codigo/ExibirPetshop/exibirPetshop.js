function carregarInfo(){
    
    var id = localStorage.getItem("id");
    var objPetshop = JSON.parse(localStorage.getItem("objPetshop"));
    var petshop = objPetshop.petshop[id];
  
    var exibir = document.getElementById("exibir");
    var strHtml = '';
    strHtml += `
    <img src="${JSON.parse(petshop.image)}" alt="img">
    <div class="exibirDetalhes">
        <div class="linha">
            <label class="lblTitulo">Nome:</label>
            <label class="lblConteudo">${petshop.name}</label>
        </div>
        <div class="linha">
            <label class="lblTitulo">Site:</label>
            <a class="lblConteudo" href="${petshop.site}">${petshop.site}</a>
        </div>
        <div class="linha">
            <label class="lblTitulo">Endereço:</label>
            <label class="lblConteudo">${petshop.address}</label>
        </div>
        <div class="linha">
            <label class="lblTitulo">Descrição:</label>
            <label class="lblConteudo">${petshop.description}</label>
        </div>
    
    <div class="linha">
      <button type="submit" id="editar" onclick="window.location.href = '../DetalhePetshop/detalhePetshop.html'" class="buttonSlvr">Editar</button>
      <button type="submit" id="voltar" onclick="window.location.href = '../ListaPetshop/listaPetshop.html'" class="buttonSlvr">Voltar</button>
  </div>
  </div>
  `
  ;
  exibir.innerHTML = strHtml;
  }