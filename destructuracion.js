const   personaje = {
    nombre:'Pepe',
    apellido:'Argento',
    profesion:'Zapatero',
    getDescripcion()  {
        return `${nombre} ${apellido}es ${profesion}`;
    }

}
//const nombre = personaje.nombre;
//const apellido = personaje.apellido;
//const profesion = personaje.profesion;

//const {nombre, apellido,profesion, edad=50}= personaje;

//console.log(nombre,apellido,profesion,edad);

const imprimirPersonaje = ({ nombre, apellido, profesion, edad = 50 }) => {
 console.log(nombre, apellido, profesion, edad);
}
    imprimirPersonaje(personaje);



