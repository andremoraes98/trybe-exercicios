def int_numbers_until_n(N: int):
    numbers = []
    for num in range(1, (N + 1)):
        if num % 3 == 0:
            if num % 5 == 0:
                numbers.append("FizzBuzz")
            else:
                numbers.append("Fizz")
        elif num % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(num)
    return numbers