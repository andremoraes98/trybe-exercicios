import random
import csv

def scramble():
    with open('words.csv', encoding = 'utf-8') as file:
        words = csv.reader(file, delimiter=',')
        header, *data = words

    names = []
    for name in data:
        names.append(name[0])

        
    selected_word = random.choice(names)
    scrambled_word = "".join(random.sample(selected_word, len(selected_word)))
    print(scrambled_word)

scramble()