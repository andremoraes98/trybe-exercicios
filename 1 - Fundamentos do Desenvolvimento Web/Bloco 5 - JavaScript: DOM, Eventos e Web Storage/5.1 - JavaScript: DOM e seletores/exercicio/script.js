    /*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/
    document.getElementById("future").innerText = "Formado, trabalhando na área, agregando muito conhecimento e impactando pessoas"
    
    //2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)"

    //3. Crie uma função que mude a cor do quadrado vermelho para branco.
    document.querySelector(".center-content").style.backgroundColor = "white"

    //4. Crie uma função que corrija o texto da tag <h1>.
    document.querySelector("h1").innerText = "Exercício 5.1 - JavaScript"

    //5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    //6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    