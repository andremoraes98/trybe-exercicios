import re

def remember_numbers(expression: str):
    pattern = re.compile(r'[A-Z10-]')
    expression_pattern = pattern.findall(expression)

    if len(expression_pattern) == 0:
        raise ValueError('A expressão deve conter apenas letras maiúsculas, 1, 0 ou hífen!')

    codes = {
        'ABC': '2',
        'DEF': '3',
        'GHI': '4',
        'JKL': '5',
        'MNO': '6',
        'PQRS': '7',
        'TUV': '8',
        'WXYZ': '9',
    }

    wrong_codes = ['1', '0', '-']

    coded_expresision = ''
    for char in expression:
        for code in codes:
            if char in wrong_codes:
                coded_expresision += char
                break
            elif char in code:
                coded_expresision += codes[code]
                break

    return coded_expresision