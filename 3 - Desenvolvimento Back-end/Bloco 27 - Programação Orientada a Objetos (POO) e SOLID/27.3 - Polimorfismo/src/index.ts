import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const math = new Subject('Matemática');

//const andre = new Teacher('André', '12/06/1998', math, 10000, '12/06/1998');
const andre = new Student('André', '12/06/1998');

console.log(andre);