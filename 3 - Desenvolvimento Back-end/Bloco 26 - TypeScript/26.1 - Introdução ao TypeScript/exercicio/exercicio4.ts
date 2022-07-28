import readLine from "readline-sync";

import Months from "./exercicio2";
import Seasons from "./exercicio3";

const monthsValues = Object.values(Months);

const indexMonth = readLine.keyInSelect(monthsValues, 'Qual o mês deseja saber a estação?');

const North = {
  [Seasons.VERÃO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.INVERNO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
  [Seasons.PRIMAVERA]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.OUTONO]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
};

const South = {
  Verão: North.Inverno,
  Inverno: North.Verão,
  Primavera: North.Outono,
  Outono: North.Primavera,
};

const seasonsByHemisphere = {
  North,
  South,
}

const hemisphereValues = Object.keys(seasonsByHemisphere);

const setHemisphere = readLine.keyInSelect(hemisphereValues, 'Qual o hemisfério deseja saber a estação?');

Object.entries(seasonsByHemisphere[hemisphereValues[setHemisphere]]).map((season) => {
  if (season[1].includes(monthsValues[indexMonth])) {
    console.log(`A estação é: ${season[0]}`)
  }
});