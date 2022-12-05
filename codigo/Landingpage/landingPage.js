function carregarDicas(){
    let objDicasCuriosidades = JSON.parse(
        localStorage.getItem("objDicasCuriosidades")
      );
    
      if (objDicasCuriosidades == null) {
        objDicasCuriosidades = {
          dicasCuriosidades: [
            {
              name: "Cuidados com a Alimentação do seu PET",
              type: "dicas",
              site: "https://biofarm.com.br/cuidados-com-a-alimentacao-do-seu-pet/",
              description:
                "Manter uma alimentação saudável é uma tarefa difícil para muitas pessoas. É preciso disciplina e controle para evitar os excessos que prejudicam nossa saúde!",
            },
            {
              name: "Anemia Em Cães E Gatos Sinais de Alerta",
              type: "dicas",
              site: "https://vetnil.com.br/blog/anemia-em-caes-e-gatos-sinais-de-alerta",
              description:
                "Você sabia que há a possibilidade de desenvolvimento de anemia em cães e gatos? A condição também afeta os nossos pets e pode ter sinais clínicos perceptíveis quando o quadro estiver avançado. Saiba mais sobre o assunto no artigo e veja quando deve ficar em alerta!",
            },
            {
              name: "O motivo da Cor dos ovos da galinha",
              type: "curiosidades",
              site: "https://www.instagram.com/p/Cfm8yHasW9o/?utm_source=ig_web_copy_link",
              description:
                "O aluno samuel do curso de veterinaria da UFMG, explica para você o motivo da cor dos ovos da galinha!!",
            },
            {
              name: "10 curiosidades sobre cachorros que você não sabia",
              type: "curiosidades",
              site: "https://www.cafunepets.com.br/dicas-de-cuidado/curiosidades-sobre-cachorros.html",
              description: "Quem tem um cãozinho sabe de todas as manias fofas do pet, e mesmo assim é surpreendido com curiosidades sobre cachorros que ainda não sabia!",
            },
          ],
        };
      }
    
      localStorage.setItem(
        "objDicasCuriosidades",
        JSON.stringify(objDicasCuriosidades)
      );

      var menuDicasContainer = document.getElementById("menuDicasContainer");
      var strHtml = "";
      objDicasCuriosidades = JSON.parse(localStorage.getItem("objDicasCuriosidades"));
    
        for (i = 0; i < objDicasCuriosidades.dicasCuriosidades.length; i++) {
          if (objDicasCuriosidades.dicasCuriosidades[i].name != "") {
            strHtml += `
            <div class="boxPetshopLista" onclick="detalhes(${i})">
            <div class="boxInfo">
            <h4>Nome:</h4>
            <label>${objDicasCuriosidades.dicasCuriosidades[i].name}</label>
            <h4>Tipo: <label>${objDicasCuriosidades.dicasCuriosidades[i].type}</label></h4>
            </div>
            </div>
            `;
          }
        }
        menuDicasContainer.innerHTML = strHtml;
    }
    function detalhes(id) {
      localStorage.setItem("id", id);
      window.location.href = "../ExibirDicas/exibirDicas.html";
    }