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
            sentencia = "DELETE FROM persona WHERE id_persona IN %s"
            entrada = input("digite ls numeros de registros a eliminar(separados por coma) : ")
            valores = (entrada,) # es una tupla de valores
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print(f"los registros eliminados son:{registros_eliminados}")

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

# https_//www.psycopg.org/focs/usage.html
