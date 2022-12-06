# Informações do Projeto
`ADOTZ`  

Nos dias atuais, é muito veiculado em redes sociais mensagens perguntando acerca de pessoas aptas a adotar um animal. Dito isso, a dor que estamos focados em solucionar é a forma de se adotar um Pet, problema tal está geralmente atrelado as maneiras mais convencionais de como isso atualmente funciona, como por exemplo canis, clínicas veterinárias e também Petshops, maneiras nada eficientes comparadas a plataforma que desenvolvemos.

`TIAW - Ciência da Computação` 

Criada durante o trabalho da materia de TIAW(Trabalho Interdisciplinar de Aplicações Web) do curso de Ciência da Computação da PUC Minas. A Adotz é um projeto que busca auxiliar pessoas na hora de adotar um pet. Dentro do nosso site você encontrará, uma aba com varias opções de Pets para se adotar, diversas opções de petshops para cuidar dos seus pets e uma pagina recheada com dicas e curiosidades para o melhor cuidado do seu amiguinho.

## Participantes

* Felipe Luiz Parreiras Lima
* Daniel de Moura Renda
* Luiz Felipe Ferreira De Lacerda
* Pedro Melo Menezes
* Ian Carlos Santos da Gama
* Matheus Cleto Paes
* Gabriel Lopes Messias

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A dor que buscamos resolver, com o desenvolvimento do site, é a falta de meios para se realizar a adoção de um pet, como por exemplo, sites ou aplicativos. As vezes 
essas aplicações existem, porém não trazem um experiência agradável ao usuário. Atrelado a isso, um outro problema que surge decorrente da falta de adoção de animais, 
é a superlotação de canis, ou ong's que abrigam esses animais. 



**Links úteis que apresentam informações relevantes sobre o assunto**:
 
>[Abandono de animais e superlotação do canil causam preocupação em São Leopoldo](https://www.jornalvs.com.br/noticias/regiao/2022/06/29/abandono-de-animais-e-superlotacao-do-canil-causam-preocupacao-em-sao-leopoldo.html)
>  
>[Deficiência como sentença: cães esperam há anos por adoção no DF](https://www.metropoles.com/distrito-federal/deficiencia-como-sentenca-caes-esperam-adocao-no-df)
> 
>[Superlotação preocupa ONGs que cuidam de animais no ABC](http://www.metodista.br/rronline/noticias/cidades/2011/08/superlotacao-preocupa-ongs-que-cuidam-de-animais-no-abc)

## Objetivos

Nosso principal objetivo com o desenvolvimento do site Adotz, é justamente apresentar um solução para essa dor relacionada à adoção de Pets. Por isso, focamos nossos esforços para criar uma aplicação chamativa, agradável ao usuário e extremamente funcional, onde o usuário pode cadastrar Petshops, anunciar Pets disponíveis para adoção, editar informações já publicadas. Além disso conta com um portal de dicas e curiosidades, que são cadastrados por usuários da plataforma.

## Justificativa

A principal motivação para termos escolhidos o tema, é que grande parte dos membros do grupo são apaixonados por animais/pets, consequentemente nos importamos com os diversos Pets que infelizmente vivem em situação de abandono e também que estão em canis a espera de um novo lar, que possa fornecem carinho e amor ao bichos. Por isso, nossa aplicação se baseia na listagem de pets disponíveis para adoção, ou seja, um canil, petshop, ou terceiro se encarrega de publicar o animal e um outro usuário com o interesse no bichinho, entra em contato com quem publicou e o adota.


## Público-Alvo

Uma forma viável de apresentar nosso público-alvo e também o SteakHolders, seria com uma divisão em 3 grupos, são eles: os "Fundamentais", os "Importantes" e os "Influenciadores".
Primeiramente, no grupo de fundamentais, estão as pessoas que irão adotas, os canis e os petshops, que irão publicar os pets, ou então divulgar seus petshops.
Segundamente, no grupo de importantes, estão os veteriários, que tratrão dos animais antes de serem adotados.
Terceiramente, no grupo dos infulenciadores, estão os adestradores, que de forma implícita fazem parte do ecossistema, ou seja, adestram os bichinhos antes mesmo, ou então posteriormente a adoção.
 
# Especificações do Projeto

O grupo "adoção de pets" tem como finalidade criar um site focado em adoção e compra de animais, com um foco maior na adoção, já que é um problema que aflige diversos 
animais em situações de rua e resgatados. De acordo com as pesquisas realizadas por nós, descobrimos que pessoas que não possuem um pet ainda, tem a tendência de 
querer um para lhe fazer companhia e diversificar a rotina. Além disso, existem aqueles que gostam avidamente desses seres e gostam de ter diversos bichos por perto. 
Desta forma, escolhemos esse tema pela falta de ferramentas de pesquisa disponíveis online, com um foco maior no público jovem-adulto, que faz um maior uso da internet 
para se informar.

## Personas e Mapas de Empatia


**Exemplo de Persona**

![Exemplo de Persona](imaages/../images/ass.jpg)




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Cadastrar Pets e Petshops           | Que o pet seja adotado.            |
|Usuário do sistema   | Ver pets cadastrados                | Adotar um pet já cadastrado |

Pelo fato de ainda não termos validado nosso produto publicamente, ainda não temos histórias de usuários do site.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre Petshops | ALTA | 
|RF-002| Permitir que o usuário cadastre Pets   | ALTA |
|RF-003| Permitir que o usuário cadastre Dicas e Curiosidades  | ALTA |
|RF-004| Permitir que o usuário efetue login | BAIXA | 
|RF-005| Permitir que o usuário visualize informações cadastradas   | ALTA |
|RF-006| Permitir que o usuário edite informações cadastradas   | MÉDIA |
|RF-007| Permitir que o usuário delte informações cadastradas   | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Permitir a visualização da informação cadastrada imediatamente |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |



# Projeto de Interface

As interfaces foram projetadas apartir de necessidades, que foram colhidas de possível usuários através de pesquisas por formulário.

## User Flow / WireFrames

O User Flow abaixo será apresenta de forma sequencial, onde cada print representará 
![Exemplo User Flow Home](imaages/../images/home.png)
![Exemplo User Flow Cadastro Pet](imaages/../images/cadpet.png)
![Exemplo User Flow Listagem Pet](imaages/../images/petlist.png)

# Metodologia

![Metodologia](imaages/../images/metodo.png)

## Divisão de Papéis

Felipe Parreiras - LandingPage/Home-Cadastro de Pets
Gabriel Lopes - Listagem de Pets - Cadastro de Petshops
Luiz Felipe - Detalhamento de Pets- Cadastro de Dicas
Daniel Renda - Detalhamento dicas- Detalhamento Dicas


## Ferramentas

As ferramentas utilizadas foram:

VISUAL STUDIO CODE - Editor de código.
DISCORD e WHATSAPP - Ferramentas de comunicação
CANVA - Ferramentas de diagramação
GITHUB - Plataforma de hospedagem

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVPUrpW_o=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20222-adocao-de-pets-1/tree/master/codigo | 

> 
> **Links Úteis - Hospedagem**:

> - [GitHub Pages](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20222-adocao-de-pets-1/tree/master/codigo)

## Controle de Versão

 A ferramenta de controle de versão adotada no projeto foi o
 [Git]([https://git-scm.com/](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20222-adocao-de-pets-1/tree/master/codigo)), sendo que o [Github](https://github.com)
 `master`: versão estável já testada do software


