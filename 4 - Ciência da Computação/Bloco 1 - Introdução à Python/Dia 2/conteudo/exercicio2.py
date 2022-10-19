number = "0"
result = 0

while number.isnumeric():
  number = input("Digite um número: ")
  if number.isnumeric():
    result += int(number)
  else:
    break

print(f"Erro ao somar valores, {number} é um valor inválido")
print(f"A soma total é {result}")