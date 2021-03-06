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

const getEmpleadoById = async (id) => {

    try{
         const empleado = empleados.find((e) =>e.id);
          if(empleado){
              return empleado;
        }
    }catch(error){
         throw error;
    
    

    }
       
              
         
         
    


}

const id = 1;

const getDatosCompletosEmpleado = async (id) => {

    const empleado = await getEmpleadoById(id);
    console.log(`el empleado con id ${id} es ${empleado.nombre}`);
}

    getDatosCompletosEmpleado(id);


    const getSueldoById = async (id) => {

        try{
             const sueldo = sueldos.find((s) =>s.id);
              if(sueldo){
                  return sueldo;
            }
        }catch(error){
             throw error;
        
        
    
        }


        const getDatosSueldoEmpleado = async (id) => {

            const sueldo = await getSueldoById(id);
            console.log(`el sueldo con id ${id} es ${sueldo.sueldo}`);
        }
        
            getDatosSueldoEmpleado(id);


}        