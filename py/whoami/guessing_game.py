number = 3

running = True

print('Try to guess the number between 1 and 10')
while running:

    guess = int(input("\nGuess : "))

    if guess == number:

        print('\nDamn, you guessed it!')
        running = False

    elif guess < number:

        print('Maybe a little higher...')

    else:

        print("That's too high")

else:

    print('try again sometime!')


print('\n\nMade by HD')



