const paragraph = document.getElementById("paragraph");

paragraph.style.color = "red";

// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("page-title").innerHTML = "Os Vingadores"
// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById("second-paragraph").innerHTML = "Marvel > DC"
// 3. Por fim, recupere o subtítulo e altere-o também. */
document.getElementById("subtitle").innerHTML = "Melhor saga da Marvel"


// 1. Adicione uma classe igual para os dois parágrafos.
// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.getElementsByClassName("conteudo")
// 3. Altere algum estilo do primeiro deles.
document.getElementsByClassName("conteudo")[0].style.color = "green"
// 4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
document.getElementsByTagName("h4")[0].style.color = "blue"