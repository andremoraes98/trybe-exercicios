import random

words = ['PEDRO', 'ANDRE', 'JULIA']

def scramble(words):
    selected_word = random.choice(words)
    scrambled_word = "".join(random.sample(selected_word, len(selected_word)))
    print(scrambled_word)

scramble(words)