/*Exercícios (Array):
    Exercicio 1: Obtenha o valor "Serviços" do array menu

    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    let menuServices = menu[1];

    console.log(menuServices);

    Exercicio 2: Procure o índice do valor "Portfólio" do array menu
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    let indexOfPortfolio = menu.indexOf('Portfólio');

    console.log(indexOfPortfolio);

    Exercício 3: Adicione o valor "Contato" no final do array menu 
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

    menu.push('Contato')

    console.log(menu);

Exercício (lopp For): */
    let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

    for ( indice = 0; indice < groceryList.length; indice += 1 ) {
        console.log(groceryList[indice])
    }