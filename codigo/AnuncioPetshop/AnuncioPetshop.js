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
    var site = document.getElementById("site");
    var description = document.getElementById("description");
  
    let objPetshop = JSON.parse(localStorage.getItem("objPetshop"));
  
    if(objPetshop == null){
        objPetshop = { petshop:[]};
    }
    
    var auxCadastro = {
      name: name.value,
      address: address.value,
      site: site.value,
      description: description.value,
      image: localStorage.getItem("image")
    };
  
    localStorage.setItem("petshop", JSON.stringify(auxCadastro));
    objPetshop.petshop.push(auxCadastro);
    localStorage.setItem("objPetshop", JSON.stringify(objPetshop));
    alert("Cadastro concluido!!!")
  }