//tipo fuerte
var edad = 10;
//edad = 'hola soy carlios';
function saludar(saludo) :void{
    console.log(saludo);
}
function sumar(a:number, b:number):number {
    return a + b;
}
//tipo de datos
var anio:number = 10;
var nombre:string = 'carlos';
var alto:boolean = false;
var fechaNac:Date = new Date();
 

//interfases
    interface Articulo {
        nombre:string,
        edad:number;
   }
   const articulo:Articulo={
    nombre: '',
    edad:14
   };
   
   //Programacion orientada a objetos(POO): clases(molde), objetos(instancias de una clase), interfaces, clases abstractas
    
    interface IHablar {//defino un contrato
    hablar(): void;//metodo, ahora aquellos que usen esta interfaz estan obligados a usar el metodo. Lo mismo ocurria en un contrato de atributos, como la interfaz anterior
    }

   class Persona implements IHablar {//obligamos a persona a tener el metodo hablar
        //en POO cada cosa nace de manera determinada, el constructor permite definir como nace un objeto
        //this que la referencia dentro de la clase que permite ver los atributos y metodos
       //atributos de una clase
        sexo:string;
       nombre:string;
       fechaNac:Date;

       constructor(sexo:string,nombre:string){
        //this que la referencia dentro de la clase que permite ver los atributos y metodos
        this.fechaNac = new Date();
        this.nombre = nombre;
        this.sexo = sexo;
       };

       //metodos dentro de una clase
        mostrarDatos(): void {
        console.log(yo.fechaNac);
        console.log(yo.nombre);
        console.log(yo.sexo)    
        }

        hablar(): void {        
        }
    }

    class Animal implements IHablar{
        hablar(): void {
          
    }}

    //puedo instanciar objetos de la clase persona
    const yo = new Persona('masculino','carlos');//el new ejecuta/trae al constructor 
    const vos = new Persona('femenino','maria');
    yo.mostrarDatos();//el yo y el vos daran datos distintos con la funcion, ya que son instancias distintas
    vos.mostrarDatos();

    //el codigo .ts tiene que ser compilado porque los navegadores no interpretan ts, para poder ejecutarlo primero hay que instalas node.js seguido ts (npm install -g typescripts)
    //luego hariamos, por ej. para esta clase, npx tsc .\articulos.ts en la terminal de node. Y se genera un archivo .js automaticamente