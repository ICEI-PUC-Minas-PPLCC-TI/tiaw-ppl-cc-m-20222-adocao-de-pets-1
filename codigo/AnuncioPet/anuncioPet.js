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

function salvar() {
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var type = document.getElementById("type");
  var age = document.getElementById("age");
  var description = document.getElementById("description");

  let objPets = JSON.parse(localStorage.getItem("objPets"));

  if(objPets == null){
     objPets = { pets:[]};
  }

  var auxCadastro = {
    name: name.value,
    address: address.value,
    type: type.value,
    age: age.value,
    description: description.value,
    image: localStorage.getItem("image")
  };

  localStorage.setItem("pet", JSON.stringify(auxCadastro));
  objPets.pets.push(auxCadastro);
  localStorage.setItem("objPets", JSON.stringify(objPets));
  alert("Cadastro concluido!!!")
}
