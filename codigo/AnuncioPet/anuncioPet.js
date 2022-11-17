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
  };

  localStorage.setItem("pet", JSON.stringify(auxCadastro));
  objPets.pets.push(auxCadastro);
  localStorage.setItem("objPets", JSON.stringify(objPets));
}
