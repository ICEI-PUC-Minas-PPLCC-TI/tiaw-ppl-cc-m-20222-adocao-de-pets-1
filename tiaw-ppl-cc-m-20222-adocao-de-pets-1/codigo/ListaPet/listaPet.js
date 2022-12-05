function filtrar(filtro) {

    var boxListaPet = document.getElementById("boxListaPet");
    var strHtml = '';
    var objPets = JSON.parse(localStorage.getItem("objPets"));

// ${objPets.pets[i].name}

if(filtro == ''){
    for(i=0;i<objPets.pets.length;i++){
        if(objPets.pets[i].name != ""){
        strHtml += `
        <div class="boxPetLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPets.pets[i].image)}" alt="imgs"></div>
        <label>Nome: ${objPets.pets[i].name}</label>
        <label>Endereço: ${objPets.pets[i].address}</label>
        <label>Raça: ${objPets.pets[i].type}</label>
        <label>Idade: ${objPets.pets[i].age}</label>
        <label>Descrição: ${objPets.pets[i].description}</label>
        </div>
        `}
    }
}

if(filtro == 'name'){
    for(i=0;i<objPets.pets.length;i++){
        if(objPets.pets[i].name != ""){
        strHtml += `
        <div class="boxPetLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPets.pets[i].image)}" alt="imgs"></div>
        <label>Nome: ${objPets.pets[i].name}</label>
        </div>
        `}
    }
}
if(filtro == 'address'){
    for(i=0;i<objPets.pets.length;i++){
        if(objPets.pets[i].name != ""){
        strHtml += `
        <div class="boxPetLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPets.pets[i].image)}" alt="imgs"></div>
        <label>Endereço: ${objPets.pets[i].address}</label>
        </div>
        `}
    }
}
if(filtro == 'type'){
    for(i=0;i<objPets.pets.length;i++){
        if(objPets.pets[i].name != ""){
        strHtml += `
        <div class="boxPetLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPets.pets[i].image)}" alt="imgs"></div>
        <label>Raça: ${objPets.pets[i].type}</label>
        </div>
        `}
    }
}
if(filtro == 'age'){
    for(i=0;i<objPets.pets.length;i++){
        if(objPets.pets[i].name != ""){
        strHtml += `
        <div class="boxPetLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPets.pets[i].image)}" alt="imgs"></div>
        <label>Idade: ${objPets.pets[i].age}</label>
        </div>
        `}
    }
}
if(filtro == 'description'){
    for(i=0;i<objPets.pets.length;i++){
        if(objPets.pets[i].name != ""){
        strHtml += `
        <div class="boxPetLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPets.pets[i].image)}" alt="imgs"></div>
        <label>Descrição: ${objPets.pets[i].description}</label>
        </div>
        `}
    }
}

boxListaPet.innerHTML=strHtml;
}
function detalhes(id){
    localStorage.setItem("id", id)
    window.location.href = '../ExibirPets/exibirPet.html'
}