function detalhamento() {
    var id = localStorage.getItem("id");
    var objDicasCuriosidades = JSON.parse(localStorage.getItem("objDicasCuriosidades"));
    var dicasCuriosidades = objDicasCuriosidades.dicasCuriosidades[id];
  
    var detailBox = document.getElementById("detailBox");
    var strHtml = '';
    strHtml += `
      <form id="formAnuncio" class="formAnuncio" >
      <h1>Detalhe PetShop</h1>
      <div class="formInputContainer">
      <label>Nome:</label>
      <input type="text" id="name" class="formInput" placeholder="Bob" value="${dicasCuriosidades.name}" required>
  </div>
  <div class="formInputContainer">
  <label>Tipo:</label>
  <select type="text" id="type" class="formInput" option="${dicasCuriosidades.Type}" required>
      <option value="curiosidades">Curiosidade</option>
      <option value="dicas">Dica</option>
  </select>
  </div>
  <div class="formInputContainer">
  <label>Site:</label>
  <input type="text" id="site" class="formInput" placeholder="www.adotz.com.br" value="${dicasCuriosidades.site}">
</div>
  <div class="formInputContainer">
      <label>Descrição:</label>
      <input type="text" id="description" class="formInputDescription" placeholder="Encontrado na rua, vacinado, muito bem tratado, carinhoso" value="${dicasCuriosidades.description}">
  </div>
      <button type="submit" id="save" onclick="update(${id})" class="buttonSlvr">Salvar</button>
      <button type="submit" id="delet" onclick="deleted(${id})" class="buttonSlvr">Deletar</button>
  </form>
  </div>
  `
  ;
    detailBox.innerHTML = strHtml;
  }
  function update(id){
      var name = document.getElementById("name");
      var description = document.getElementById("description");
      var site = document.getElementById("site");
    
      let objDicasCuriosidades = JSON.parse(localStorage.getItem("objDicasCuriosidades"));
    
      var auxCadastro = {
        name: name.value,
        type: type.value,
        site: site.value,
        description: description.value,
      };
      objDicasCuriosidades.dicasCuriosidades[id] = auxCadastro;
      localStorage.setItem("objDicasCuriosidades", JSON.stringify(objDicasCuriosidades));
      window.location.href = "../ExibirDicas/exibirDicas.html";
      alert("Atualizado com sucesso!!");
      
  }
  function deleted(id){

    let objDicasCuriosidades = JSON.parse(localStorage.getItem("objDicasCuriosidades"));
  
    var auxCadastro = {
      name: "",
      address: "",
      description: "",
      site: "",
      image: ""
    };
    objDicasCuriosidades.dicasCuriosidades[id] = auxCadastro;
    localStorage.setItem("objDicasCuriosidades", JSON.stringify(objDicasCuriosidades));
    window.location.href = "../ListaDicas/listaDicas.html";
    alert("Atualizado com sucesso!!");
  }