/* Item 1: */

    // Adição:
    function adicao (a, b) {
        let sum;
        sum = a + b;
        return sum
    }

    // Subtração (a - b)
    function adicao (a, b) {
        let sub;
        sub = a - b;
        return sub
    }

    // Multiplicação (a * b)
    function multiplicacao (a, b) {
        let mult;
        mult = a * b
        return mult
    }

    // Divisão (a / b)
    function divisao (a, b) {
        let div;
        div = a / b
        return div
    }

    // Módulo (a % b)
    function modulo (a, b) {
        let mod;
        mod = a % b
        return mod 
    }

/* Item 2:  retorne o maior entre dois números*/
    function maior2 (a, b) {
        if (a > b) { 
            return(a);
        } else { 
            return(b);
        }
    }

/* Item 3:  retorne o maior entre três números*/
    function maior3 (c, d, e) {
        if( c > d ) {
            if ( c > e ) { 
                return(c);
            } else {
                return(e);
            }
        }
        else if ( c < d ) { 
            if ( d > e ) { 
                return(d);
            } else { 
                return(e);
            }
        } else { 
            if ( c < e ) { 
                return(e)
            } else { 
                return(c)
            }
        }
    }

/* Item 4: Retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário */
    function sinal (a) {
        if ( a > 0 ) { 
            return("positive")
        } else if ( a < 0 ) { 
            return("negative")
        } else { 
            return("zero")
        }
    }

/* Item 5: Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário */
    function isTriangle (a, b, c) {
        if ( a + b + c === 180 && a > 0 && b > 0 && c > 0) { 
            return(true)
        } else { 
            return("Esse ângulos não formam um triângulo")
        }
    }