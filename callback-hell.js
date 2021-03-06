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
const getEmpleadosById = (id ,callback) => {
    const empleado = empleados.find((e)=>  e.id=== id);
 if(empleado){
      callback(empleado);
 }
}
const getSueldoById = (id, callback) =>{
    const sueldo = sueldos.find((s ) =>s.id ===id );
    if (sueldo){
        callback(null,sueldo);
        return;
    }
    callback(`El sueldo con id ${id}no existe`);
}
const id = 1;

getEmpleadosById(id,({nombre})=>{
    cosole.log(`el empleado: ${nombre}...`;)


    const getEmpleadoById = async (id) => {
        try {
          const empleado = empleados.find((e) => e.id === id);
      
          if (empleado) {
            return empleado;
          }
          throw new Error("El empleado no existe");
        } catch (error) {
          throw error;
        }
      }

   