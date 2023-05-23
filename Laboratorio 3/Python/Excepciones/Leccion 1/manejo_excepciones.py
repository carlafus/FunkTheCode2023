from NumerosIgualesExcepcion import NumerosIgualesExcepcion

resultado = None


try:
    a = int(input("Digite el primer numero: "))
    b = int(input("Digite el segundo numero: "))
    if a== b:
        raise  NumerosIgualesExcepcion("Son numeros iguales")
        # Accedemos a una excepcion de una clase
    
    resultado = a / b 
except Exception as e:
    print(f"Esta operacion no se puede realizar: {e}")
else: 
    print("No se arrojo ninguna excepcion")
finally: 
    print("Siempre se va a ejecutar este bloque")
    