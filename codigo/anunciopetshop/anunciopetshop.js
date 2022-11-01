function salvarps() {
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    var options = document.getElementById("options");
    var description = document.getElementById("description");
    
    var petshop = JSON.parse(localStorage.getItem("dadosPetshop"));
  
    if(petshop == null){
      localStorage.setItem("petShops", "[]");
      petshop = [];
    }
  
    var auxCadastrops = {
      name: name.value,
      address: address.value,
      phone: phone.value,
      options: options.value,
      description: description.value,
    };
  
    petshop.push(auxCadastrops);
  
    localStorage.setItem("petShops", JSON.stringify(petshop));
  }