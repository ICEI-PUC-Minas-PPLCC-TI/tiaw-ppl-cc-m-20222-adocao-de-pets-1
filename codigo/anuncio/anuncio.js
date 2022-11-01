function salvar() {
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var type = document.getElementById("type");
    var age = document.getElementById("age");
    var description = document.getElementById("description");
  
    var pets = JSON.parse(localStorage.getItem("dadosPet"));
  
    if(pets == null){
      localStorage.setItem("pet", "[]");
      pets = [];
    }
  
    var auxCadastro = {
      name: name.value,
      address: address.value,
      type: type.value,
      age: age.value,
      description: description.value,
    };
  
    pets.push(auxCadastro);
  
    localStorage.setItem("pet", JSON.stringify(pets));
  }