function salvar() {
    var name = document.getElementById("name");
    var type = document.getElementById("type");
    var site = document.getElementById("site");
    var description = document.getElementById("description");
  
    let objDicasCuriosidades = JSON.parse(localStorage.getItem("objDicasCuriosidades"));
    
    if(objDicasCuriosidades == null){
        objDicasCuriosidades = { dicasCuriosidades:[]};
    }

    var auxCadastro = {
      name: name.value,
      type: type.value,
      site: site.value,
      description: description.value,
    };
  
    localStorage.setItem("dicasCuriosidades", JSON.stringify(auxCadastro));
    objDicasCuriosidades.dicasCuriosidades.push(auxCadastro);
    localStorage.setItem("objDicasCuriosidades", JSON.stringify(objDicasCuriosidades));
    alert("Cadastro concluido!!!")
}
