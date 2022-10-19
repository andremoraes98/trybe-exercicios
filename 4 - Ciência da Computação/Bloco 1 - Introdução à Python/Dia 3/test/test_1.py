from exercicio.exercicio1 import int_numbers_until_n

def test_if_returns_correct_numbers():
    last_number = 2
    assert int_numbers_until_n(last_number)[-1] == 2

def test_if_returns_fizz_on_multiplies_of_3():
    assert int_numbers_until_n(3)[-1] == 'Fizz'

def test_if_returns_fizz_on_multiplies_of_5():
    assert int_numbers_until_n(5)[-1] == 'Buzz'

def test_if_returns_fizz_on_multiplies_of_3_and_5():
    assert int_numbers_until_n(15)[-1] == 'FizzBuzz'