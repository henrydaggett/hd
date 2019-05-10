number = 9
running = True

while running :
    guess = int(input('Enter an integer : '))

    if guess == number:
        print('Congratulations you have guessed it!')
        running = False

    elif guess < number:
        print('No, a little higher than that')

    else:
        print('No, a little lower than that')

else:
    print('The loop is complete.')

print('\nDone')



