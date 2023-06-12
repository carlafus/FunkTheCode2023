import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){// ciclo infinito

            System.out.println("************** Aplicacion Calculadora***************");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {

                    ejecutarOperacion(operacion, entrada);
                } // fin del if
                else if (operacion == 5) {
                    System.out.println("hasta pronto...");
                    break; // rompe el ciclo
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }
                //imprimimos un salto de linea antes de repetir el menu
                System.out.println();
            } catch (Exception e) { // fin del try, comienzo del catch
                System.out.println("Ocurrio un error: " + e.getMessage());
                System.out.println();
            }
        }//fin while
    } // fin del main

    private  static void mostrarMenu(){
        //Mostramos el menu
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicacion
                    4. Division
                    5. Salir             
                    """);
        System.out.println("Operacion a realizar");
    } // fin metodo mostrar menu
    private static  void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.println("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        Double resultado;
        switch (operacion) {
            case 1 -> { // suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> { // resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> { // multiplicacion
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicacion: " + resultado);
            }
            case 4 -> { // division
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division: " + resultado);
            }
            default -> System.out.println("Opcion erronea: " + operacion);
        }// fin switch
    }// fin metodo ejecutar
} // fin clase