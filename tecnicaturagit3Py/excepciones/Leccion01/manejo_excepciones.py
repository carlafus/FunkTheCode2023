from NumerosIgualesExcepciones import NumerosIgualesExcepciones

resultado = None

try:
    a = int(input('digite el primer numero: '))
    b = int(input('digite el primer numero: '))
    if  a == b: # modificamos
        raise NumerosIgualesExcepciones ('son iguales')
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - ocurrio un error: {type(e)}')
else:
    print('no se arrojo ninguna excepcion')

finally: # siempre se va a ejecutar
    print('ejecucion de este bloque finally')

print(f'el resultado es: {resultado}')
print('seguimos...')
