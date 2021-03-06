const empleados = [
    {
        id: 1,
        nombre: 'Pedro'
    },
    {
        id: 2,
        nombre:'Bety',
    },
    {
        id :3,
        nombre: 'Luis'
    }



]
const sueldos =[
    {
        id: 1,
        sueldo: 3000
    },
    {
        id: 2,
        sueldo: 2000

    }
   
]

const getEmpleadoById = (id) => {
    return new Promise((resolve, reject)=>{
       
       const empleado = empleados.find((e) =>e.id);
          if(empleado){
              resolve(empleado);
              return;
          }  
          reject(`El empleado con id ${id} no existe`);
    } );
}
 

const id = 5;

getEmpleadoById(id).then(empleado =>{
    console.log(`el empleado con id ${id} es ${empleado.nombre} `);
} ).catch(error =>console.log(error));




const getSueldoById = (id) => {
    return new Promise((resolve, reject)=>{
       
       const sueldo = sueldos.find((s) =>s.id);
          if(sueldo){
              resolve(sueldo);
              return;
          }  
          reject(`El sueldo con id ${id} no existe`);
    } );
}
 


getEmpleadoById(id)

 .then(empleado =>{
    nombre = empleado.nombre;
     return getSueldoById(id);

    
} )
   .then (sueldo =>{
    console.log(`el empleado con id ${id} es ${nombre} y tiene un sueldo de ${sueldo.sueldo} `);
   })
   .catch(error => console.log(error));