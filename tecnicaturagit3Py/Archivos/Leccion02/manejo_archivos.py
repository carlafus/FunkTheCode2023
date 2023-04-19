# declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding = 'utf8')# la w es de write (escribir en ingles)
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Con esto terminamos.')
    archivo.write('# las letras son:\n r read,\n a append anexa,\n w write escribe,\n x crea un archivo')
    archivo.write('\n t esta es para texto o text, \n b archivos binarios, \n w+ lee y escribe son iguales r+\n')
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo
    # archivo.write('todo quedo perfecto'): este es un error
