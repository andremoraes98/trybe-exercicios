const detectNumberSignal = (number) => {
    if (typeof number !== 'number') throw new Error('Valor não é um número!')
    if (number > 0) return 'positivo'
    if (number < 0) return 'negativo'
    return 'neutro'
}

module.exports = detectNumberSignal;