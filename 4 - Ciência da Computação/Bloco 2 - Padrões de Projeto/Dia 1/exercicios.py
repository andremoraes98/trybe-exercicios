class TV:
  def __init__(self, tamanho):
    self.__volume = 50
    self.__canal = 1
    self.__tamanho = tamanho
    self.__ligada = False

  def aumentar_volume(self):
    if self.__volume < 99:
      self.__volume += 1
    else:
      self.__volume = 99

  def diminuir_volume(self):
    if self.__volume > 0:
      self.__volume -= 1
    else:
      self.__volume = 0

  def modificar_canal(self, canal):
    if canal < 1 and canal > 99:
      raise ValueError('O canal tem que estar entre 1 e 99')
    else: 
      self.__canal = canal

  def ligar_desligar(self):
    if self.__ligada:
      self.__ligada = False
    else:
      self.__ligada = True


class Estatistica:
  numbers = []
  length_total = 0

  def __init__(self, numbers: list) -> None:
    Estatistica.numbers = numbers
    Estatistica.length_total = len(numbers)
    
  @classmethod
  def media(cls):
    total_numbers = 0
    for number in Estatistica.numbers:
      total_numbers += number
    return total_numbers / Estatistica.length_total

  @classmethod
  def mediana(cls):
    sorted_numbers = sorted(Estatistica.numbers)
    if Estatistica.length_total % 2 == 0:
      return (sorted_numbers[Estatistica.length_total//2] + sorted_numbers[(Estatistica.length_total//2) - 1]) / 2
    else:
      return sorted_numbers[Estatistica.length_total//2]