import psycopg2 # esto es para poder conectarnos a postgre

conexion = psycopg2.connect(
    user = 'postgres',
    password='Manaos.22',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' #placeholder
            entrada = input("digite los id_persona a buscar (separados por coma): ")
            llaves_primarias = (tuple(entrada.split(", ")),)
            cursor.execute(sentencia, llaves_primarias) # de esta manera ejecutamos la sentencia
            registros = cursor.fetchall() # recuperamos todos los registros que seran una lista
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

# https_//www.psycopg.org/focs/usage.html