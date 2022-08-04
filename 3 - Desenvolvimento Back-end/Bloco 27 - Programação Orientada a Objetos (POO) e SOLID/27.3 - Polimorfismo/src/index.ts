import Teacher from './Teacher';
import Subject from './Subject';

const math = new Subject('Matemática');
const hist = new Subject('História');
const phi = new Subject('Filosofia');

const julia = new Teacher('Júlia', '04/10/2000', math, 10000, '04/10/2000');
const andre = new Teacher('André', '12/06/1998', hist, 10000, '12/06/1998');
const luciene = new Teacher('Luciene', '15/11/1963', phi, 10000, '15/11/1963');

console.log(julia);
console.log(andre);
console.log(luciene);