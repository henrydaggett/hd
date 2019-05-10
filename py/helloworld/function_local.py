x = 50

def func(x):

    print('x is', x)
    x = 2
    print('Changed local x to', x)

func(x)
print('x is still', x)

# this is showing how the x value within the function can be different to the x value of the main block.


