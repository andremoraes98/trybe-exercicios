let a = 5, b = 4, adicao, subtracao, multiplicacao, divisao, modulo

/* Item 1: */
adicao = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a / b;
modulo = a % b;

/* Item 2: */
if (a > b) { 
    console.log(a);
} else { 
    console.log(b);
}

/* Item 3: */
const c=3.14, d=1, e=3

if( c > d ) {
    if ( c > e ) { 
        console.log(c);
    } else {
        console.log(e);
    }
}
else if ( c < d ) { 
    if ( d > e ) { 
        console.log(d);
    } else { 
        console.log(e);
    }
} else { 
    if ( c < e ) { 
        console.log(e)
    } else { 
        console.log(c)
    }
}

/* Item 4: */
if ( a > 0 ) { 
    console.log("positive")
} else if ( a < 0 ) { 
    console.log("negative")
} else { 
    console.log("zero")
}

/* Item 5: */
if ( a + b + c === 180 && a > 0 && b > 0 && c > 0) { 
    console.log(true)
} else { 
    console.log("Esse ângulos não formam um triângulo")
}

/* Item 6: */
let peça = "Horse";

if (peça.toLowerCase() === "tower") { 
    console.log(peça + " pode andar para frente, para trás e para os lados, quantas casas quiser.")
} else if (peça.toLowerCase() === "horse") { 
    console.log(peça + " pode andar em L.")
} else if (peça.toLowerCase() === "bishop") { 
    console.log(peça + " pode andar pelas diagonais, quantas casas quiser.")
}  else if (peça.toLowerCase() === "queen") { 
    console.log(peça + " pode andar para frente, para trás, para os lados e para as diagonais, quantas casas quiser.")
}  else if (peça.toLowerCase() === "king") { 
    console.log(peça + " pode andar para frente, para trás, para os lados e para as diagonais, mas somente uma casa.")
}  else if (peça.toLowerCase() === "pawn") { 
    console.log(peça + " pode andar para frente somente uma casa e comer as peças na diagonal. No primeiro movimento, pode andar duas casas.")
} 