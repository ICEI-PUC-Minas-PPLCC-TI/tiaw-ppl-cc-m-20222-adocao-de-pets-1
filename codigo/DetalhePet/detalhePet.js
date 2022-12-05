function detalhamento() {
  var id = localStorage.getItem("id");
  var objPets = JSON.parse(localStorage.getItem("objPets"));
  var objPet = objPets.pets[id];

  var detailBox = document.getElementById("detailBox");
  var strHtml = '';
  strHtml += `
    <form id="formAnuncio" class="formAnuncio" >
    <h1>Detalhe Pet</h1>
    <div class="formInputContainer">
    <label>Nome:</label>
    <input type="text" id="name" class="formInput" placeholder="Bob" value="${objPet.name}" required>
</div>
<div class="formInputContainer">
    <label>Imagem:</label>
    <div class="boxImg"><img id="imgs" src="${JSON.parse(objPet.image)}" alt="imgs"></div>
    <input type="file" id="image" onchange="mudarImagem()" value="${objPet.image}"/><br>
</div>
<div class="formInputContainer">
    <label>Endereço:</label>
    <input type="text" id="address" class="formInput" placeholder="Rodovia Anel Rodoviário Celso Mello Azevedo" value="${objPet.address}" required>
</div>
<div class="formInputContainer">
    <label>Raça:</label>
    <input type="text" id="type" class="formInput" placeholder="Pug" value="${objPet.type}" required>
</div>
<div class="formInputContainer">
    <label>Idade:</label>
    <input type="number" id="age" class="formInput" placeholder="5 anos" value="${objPet.age}" min="0" max="30" required>
</div>
<div class="formInputContainer">
    <label>Descrição:</label>
    <input type="text" id="description" class="formInputDescription" placeholder="Encontrado na rua, vacinado, muito bem tratado, carinhoso" value="${objPet.description}">
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
        document.getElementById("imgs").setAttribute("src",reader.result);
        localStorage.setItem("image",JSON.stringify(src));
    }
    reader.readAsDataURL(image.files[0]);
    
} 
function update(id){
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var type = document.getElementById("type");
    var age = document.getElementById("age");
    var description = document.getElementById("description");
  
    let objPets = JSON.parse(localStorage.getItem("objPets"));
  
    var auxCadastro = {
      name: name.value,
      address: address.value,
      type: type.value,
      age: age.value,
      description: description.value,
      image: localStorage.getItem("image")
    };

    objPets.pets[id] = auxCadastro;

    localStorage.setItem("objPets", JSON.stringify(objPets));
    window.location.href = '../ExibirPets/exibirPet.html';
    alert("Atualizado com sucesso!!");
}
function deleted(id){

    let objPets = JSON.parse(localStorage.getItem("objPets"));
  
    var auxCadastro = {
      name: "",
      address: "",
      description: "",
      site: "",
      image: ""
    };

    objPets.pets[id] = auxCadastro;

    localStorage.setItem("objPets", JSON.stringify(objPets));
    window.location.href = '../ListaPet/listaPet.html';
    alert("Atualizado com sucesso!!");
  }