package paquete1;

public class Clase1 {
  public String atributoPublic = "valor atributo public";
  protected String atrivutoProtected= "valor atributo protected";
          
  public Clase1(){
            System.out.println("constructor public");
  }
  public Clase1(String atrivutoPublic){
            System.out.println("constructor protected");
  }
  
  public void metodoPublico(){
      System.out.println("Metodo Public");
  }
  protected void metodoProtected(){
      System.out.println("Metodo protected");
  }
}
