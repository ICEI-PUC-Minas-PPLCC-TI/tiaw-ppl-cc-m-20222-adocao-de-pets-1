function filtrar(filtro) {
    var boxListaPetshop = document.getElementById("boxListaPetshop");
    var strHtml = '';
    var objPetshop = JSON.parse(localStorage.getItem("objPetshop"));

if(filtro == ''){
    for(i=0;i<objPetshop.petshop.length;i++){
        if(objPetshop.petshop[i].name != ""){
        strHtml += `
        <div class="boxPetshopLista" onclick="detalhes(${i})">
        <div class="boxImg"><div class="boxImg"><img id="imgs" src="${JSON.parse(objPetshop.petshop[i].image)}" alt="imgs"></div></div>
        <div class="boxInfo">
        <label>Nome: ${objPetshop.petshop[i].name}</label>
        <label>Endereço: ${objPetshop.petshop[i].address}</label>
        <label>Site: <a href="${objPetshop.petshop[i].site}">${objPetshop.petshop[i].site}</a></label>
        <label>Descrição: ${objPetshop.petshop[i].description}</label>
        </div>
        </div>
        `}
    }
}

if(filtro == 'name'){
    for(i=0;i<objPetshop.petshop.length;i++){
        if(objPetshop.petshop[i].name != ""){
        strHtml += `
        <div class="boxPetshopLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPetshop.petshop[i].image)}" alt="imgs"></div>
        <label>Nome: ${objPetshop.petshop[i].name}</label>
        <label>Site: <a href="${objPetshop.petshop[i].site}">${objPetshop.petshop[i].site}</a></label>
        </div>
        `}
    }
}
if(filtro == 'address'){
    for(i=0;i<objPetshop.petshop.length;i++){
        if(objPetshop.petshop[i].name != ""){
        strHtml += `
        <div class="boxPetshopLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPetshop.petshop[i].image)}" alt="imgs"></div>
        <label>Endereço: ${objPetshop.petshop[i].address}</label>
        <label>Site: <a href="${objPetshop.petshop[i].site}">${objPetshop.petshop[i].site}</a></label>
        </div>
        `}
    }
}
if(filtro == 'description'){
    for(i=0;i<objPetshop.petshop.length;i++){
        if(objPetshop.petshop[i].name != ""){
        strHtml += `
        <div class="boxPetshopLista" onclick="detalhes(${i})">
        <div class="boxImg"><img id="imgs" src="${JSON.parse(objPetshop.petshop[i].image)}" alt="imgs"></div>
        <label>Descrição: ${objPetshop.petshop[i].description}</label>
        <label>Site: <a href="${objPetshop.petshop[i].site}">${objPetshop.petshop[i].site}</a></label>
        </div>
        `}
    }
}

boxListaPetshop.innerHTML=strHtml;
}
function detalhes(id){
    localStorage.setItem("id", id)
    window.location.href = '../ExibirPetshop/exibirPetshop.html'
}