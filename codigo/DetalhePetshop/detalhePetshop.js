function detalhamento() {
    var id = localStorage.getItem("id");
    var objPetshop = JSON.parse(localStorage.getItem("objPetshop"));
    var petshop = objPetshop.petshop[id];
  
    var detailBox = document.getElementById("detailBox");
    var strHtml = '';
    strHtml += `
      <form id="formAnuncio" class="formAnuncio" >
      <h1>Detalhe PetShop</h1>
      <div class="formInputContainer">
      <label>Nome:</label>
      <input type="text" id="name" class="formInput" placeholder="Bob" value="${petshop.name}" required>
  </div>
  <div class="formInputContainer">
      <label>Imagem:</label>
      <div class="boxImg"><img id="img" src="${JSON.parse(petshop.image)}" alt="imgs"></div>
      <input type="file" id="image" onchange="mudarImagem()" value="${petshop.image}"/><br>
  </div>
  <div class="formInputContainer">
      <label>Endereço:</label>
      <input type="text" id="address" class="formInput" placeholder="Rodovia Anel Rodoviário Celso Mello Azevedo" value="${petshop.address}" required>
  </div>
  <div class="formInputContainer">
  <label>Site:</label>
  <input type="text" id="site" class="formInput" placeholder="www.adotz.com.br" value="${petshop.site}">
</div>
  <div class="formInputContainer">
      <label>Descrição:</label>
      <input type="text" id="description" class="formInputDescription" placeholder="Encontrado na rua, vacinado, muito bem tratado, carinhoso" value="${petshop.description}">
  </div>
      <button type="submit" id="save" onclick="update(${id})" class="buttonSlvr">Salvar</button>
      <button type="submit" id="delet" onclick="deleted(${id})" class="buttonSlvr">Deletar</button>
  </form>
  </div>
  `
  ;
    detailBox.innerHTML = strHtml;
  }
  function mudarImagem(){
    var image = document.getElementById("image");
    const reader = new FileReader();

    reader.onload = ()=>{
        var src = reader.result;
        document.getElementById("img").setAttribute("src",reader.result);
        localStorage.setItem("image",JSON.stringify(src));
    }
    reader.readAsDataURL(image.files[0]);
    
} 
  function update(id){
      var name = document.getElementById("name");
      var address = document.getElementById("address");
      var description = document.getElementById("description");
      var site = document.getElementById("site");
    
      let objPetshop = JSON.parse(localStorage.getItem("objPetshop"));
    
      var auxCadastro = {
        name: name.value,
        address: address.value,
        description: description.value,
        site: site.value,
        image: localStorage.getItem("image")
      };
      objPetshop.petshop[id] = auxCadastro;
      localStorage.setItem("objPetshop", JSON.stringify(objPetshop));
      window.location.href = "../ExibirPetshop/exibirPetshop.html";
      alert("Atualizado com sucesso!!");
      
  }
  function deleted(id){

    let objPetshop = JSON.parse(localStorage.getItem("objPetshop"));
  
    var auxCadastro = {
      name: "",
      address: "",
      description: "",
      site: "",
      image: ""
    };
    objPetshop.petshop[id] = auxCadastro;
    localStorage.setItem("objPetshop", JSON.stringify(objPetshop));
    window.location.href = "../ListaPetshop/listaPetshop.html";
    alert("Atualizado com sucesso!!");
  }