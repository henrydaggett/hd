age = 20  # python starts counting at 0
name = 'Henry'

print('{} is now {} years old when learning python'.format(name, age))  # numbers in brackets are optional {0},{1}
print('why is {} playing with that python'.format(name))

print('{nom} is learning {program}'.format(nom='Henry', program='python'))

# python automatically puts print text on a new line
print('a', end='')  # use end to stop this
print('b')

print('a', end=' ')
print('b', end=' ')
print('c')

print('\t {0} \n {1}'.format(age, name))  # \t = tab, \n = new line



