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