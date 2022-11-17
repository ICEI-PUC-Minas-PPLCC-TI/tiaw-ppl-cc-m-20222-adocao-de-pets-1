function filtrar(filtro) {

    var boxListaPet = document.getElementById("boxListaPet");
    var strHtml = '';
    var objPets = JSON.parse(localStorage.getItem("objPets"));

// ${objPets.pets[i].name}

if(filtro == ''){
    for(i=0;i<objPets.pets.length;i++){
        strHtml += `
        <div class="boxPetLista">
        <label>Nome: ${objPets.pets[i].name}</label>
        <label>Endereço: ${objPets.pets[i].address}</label>
        <label>Tipo: ${objPets.pets[i].type}</label>
        <label>Idade: ${objPets.pets[i].age}</label>
        <label>Descrição: ${objPets.pets[i].description}</label>
        </div>
        `
    }
}

if(filtro == 'name'){
    for(i=0;i<objPets.pets.length;i++){
        strHtml += `
        <div class="boxPetLista">
        <label>Nome: ${objPets.pets[i].name}</label>
        </div>
        `
    }
}
if(filtro == 'address'){
    for(i=0;i<objPets.pets.length;i++){
        strHtml += `
        <div class="boxPetLista">
        <label>Endereço: ${objPets.pets[i].address}</label>
        </div>
        `
    }
}
if(filtro == 'type'){
    for(i=0;i<objPets.pets.length;i++){
        strHtml += `
        <div class="boxPetLista">
        <label>Tipo: ${objPets.pets[i].type}</label>
        </div>
        `
    }
}
if(filtro == 'age'){
    for(i=0;i<objPets.pets.length;i++){
        strHtml += `
        <div class="boxPetLista">
        <label>Idade: ${objPets.pets[i].age}</label>
        </div>
        `
    }
}
if(filtro == 'description'){
    for(i=0;i<objPets.pets.length;i++){
        strHtml += `
        <div class="boxPetLista">
        <label>Descrição: ${objPets.pets[i].description}</label>
        </div>
        `
    }
}

boxListaPet.innerHTML=strHtml;
}