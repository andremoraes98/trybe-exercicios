import readLine from "readline-sync";

import Months from "./exercicio2";
import Seasons from "./exercicio3";

const monthsValues = Object.values(Months);

const setMonth = readLine.keyInSelect(monthsValues, 'Qual o mês deseja saber a estação?');

const North = {
  Verão: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  Inverno: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
  Primavera: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  Outono: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
};

const South = {
  Verão: North.Inverno,
  Inverno: North.Verão,
  Primavera: North.Outono,
  Outono: North.Primavera,
};

const hemisphere = {
  North,
  South
};

const setHemisphere = readLine.keyInSelect(Object.keys(hemisphere), 'Qual o hemisfério deseja saber a estação?');

console.log(hemisphere[setHemisphere][]);