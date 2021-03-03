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

    },
   
]
const getEmpleadosById = (id ,callback) => {
    const empleado = empleados.find((e)=>  e.id=== id);
 if(empleado){
      callback(empleado);
 }
}
const id = 1;

getEmpleadosById(id,({nombre})=>{
    cosole.log(`el empleado: ${nombre}...`;)
