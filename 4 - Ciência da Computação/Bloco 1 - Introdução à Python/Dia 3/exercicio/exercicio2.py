def remember_numbers(expression):
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