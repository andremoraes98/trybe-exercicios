from exercicio.exercicio2 import remember_numbers
import pytest

def test_if_returns_correct_expression():
    expression = '1-HOME-SWEET-HOME'
    assert remember_numbers(expression) == '1-4663-79338-4663'

def test_if_returns_correct_expression_from_another_message():
    expression = 'MY-MISERABLE-JOB'
    assert remember_numbers(expression) == '69-647372253-562'

def test_if_raise_an_error_if_expression_has_special_char():
    expression = '@'
    with pytest.raises(ValueError, match='A expressão deve conter apenas letras maiúsculas, 1, 0 ou hífen!'):
        remember_numbers(expression)

def test_if_raise_an_error_if_expression_has_blank_space():
    expression = 'expression with blank spaces'
    with pytest.raises(ValueError, match='A expressão deve conter apenas letras maiúsculas, 1, 0 ou hífen!'):
        remember_numbers(expression)