function carregarInfo(){
    
  var id = localStorage.getItem("id");
  var objPets = JSON.parse(localStorage.getItem("objPets"));
  var objPet = objPets.pets[id];

  var exibir = document.getElementById("exibir");
  var strHtml = '';
  strHtml += `
  <img src="${JSON.parse(objPet.image)}" alt="img">
  <div class="exibirDetalhes">
      <div class="linha">
          <label class="lblTitulo">Nome:</label>
          <label class="lblConteudo">${objPet.name}</label>
      </div>
      <div class="linha">
          <label class="lblTitulo">Idade:</label>
          <label class="lblConteudo">${objPet.age}</label>
      </div>
      <div class="linha">
          <label class="lblTitulo">Raça:</label>
          <label class="lblConteudo">${objPet.type}</label>
      </div>
      <div class="linha">
          <label class="lblTitulo">Endereço:</label>
          <label class="lblConteudo">${objPet.address}</label>
      </div>
      <div class="linha">
          <label class="lblTitulo">Descrição:</label>
          <label class="lblConteudo">${objPet.description}</label>
      </div>
      <div class="linha">
    <button type="submit" id="editar" onclick="window.location.href = '../DetalhePet/detalhePet.html'" class="buttonSlvr">Editar</button>
    <button type="submit" id="voltar" onclick="window.location.href = '../ListaPet/listaPet.html'" class="buttonSlvr">Voltar</button>
</div>
</div>
`
;
exibir.innerHTML = strHtml;
}