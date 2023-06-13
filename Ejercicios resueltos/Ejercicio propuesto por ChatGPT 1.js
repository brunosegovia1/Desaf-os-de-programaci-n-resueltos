/*
Considere que estás desarrollando un sistema de gestión de biblioteca y necesitas implementar una clase llamada "Libro". La clase debe tener las siguientes características:

Propiedades:

Título del libro (string).
Autor del libro (string).
Año de publicación (number).
Género del libro (string).
Número de páginas (number).
Métodos:

Obtener información: un método que devuelva un string con la información completa del libro (título, autor, año de publicación, género y número de páginas).
Calcular antigüedad: un método que calcule y devuelva la antigüedad del libro en años, tomando como referencia el año actual.
Tu tarea es implementar la clase "Libro" con las características mencionadas y luego realizar las siguientes acciones:

Crear dos instancias de la clase "Libro" con información de tu elección.
Utilizar el método "Obtener información" para obtener la información de cada libro y mostrarla en la consola.
Utilizar el método "Calcular antigüedad" para obtener la antigüedad de cada libro y mostrarla en la consola.
Recuerda considerar buenas prácticas de programación, como la encapsulación de propiedades y el uso de parámetros en los métodos. ¡Buena suerte con el ejercicio!
*/

class Libro 
{
    constructor (titulo, autor, publicacion, genero, paginas)
    {
        this.titulo = titulo
        this.autor = autor
        this.publicacion = publicacion
        this.genero = genero
        this.paginas = paginas    
    }

    mostrarinfo() 
    {
        console.log 
        (
         `
         Título: ${this.titulo} \n
         Autor: ${this.autor} \n
         Año de publicación: ${this.publicacion} \n
         Género: ${this.genero} \n
         Páginas: ${this.paginas}
         `
        )
    }

    mostrarantiguedad()
    {
        console.log (`Antiguedad: ${2023 - this.publicacion} años`)
    }
}


let libro1 = new Libro('Misery', 'Stephen King', 1987, 'Suspenso', 397)
console.log(libro1.mostrarinfo())
console.log(libro1.mostrarantiguedad())

let libro2 = new Libro('Plop', 'Rafael Pinedo', 2002, 'Survival Post-apocalíptico', 172)
console.log(libro2.mostrarinfo())
console.log(libro2.mostrarantiguedad())
