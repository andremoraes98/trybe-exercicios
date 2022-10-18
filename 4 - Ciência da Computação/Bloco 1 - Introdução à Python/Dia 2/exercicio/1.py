name = 'PEDRO'

def output(name):
    our_name = name
    quantity = 0

    while quantity <= len(name):
        print(our_name)
        our_name = our_name[:-1]
        quantity += 1

output(name)