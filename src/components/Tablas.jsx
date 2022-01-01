import { useSelector } from "react-redux";


const Tablas = () => {

    const {isLoading,citas,errorMessage} = useSelector(state => state.citas);


    return (
        <div>
            {isLoading && <h1>cargado...</h1>}
            {errorMessage&& <h1>Error de carga base de datos</h1>}
            {citas && 
            <div>
            <table className = "w-full table-fixed mt-6">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="">Nombre Paciente</th>
                        <th className=" ">Nombre Medico</th>
                        <th className="">Fecha Reserva Cita</th>
                        <th className="">Hora Reserva Cita</th>
                        <th className="">Estado Reserva Cita</th>
                    </tr>
                </thead>
                {citas.map((cita) => {
                    return(
                            <FilasTablaCitas key={cita.id}  cita={cita}/>
                    )
                })}
            </table>
        </div>
        }
    </div>
    )
}


const FilasTablaCitas = ({cita}) =>{

    return(
        <tbody className = "texto-tablas tbody-border texto-tablas">
        <tr >
            <td className=" text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis pl-2">{cita.nombrePaciente} {cita.apellidosPaciente}</span>
            </td>
            <td className="p-2 flex justify-center">
                <span className ="">{cita.nombreMedico} {cita.apellidosMedico}</span>
            </td>
            <td className="text-center">
            <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{cita.fechaReservaCita}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{cita.horaReservaCita}</span>
            </td>
            <td className="text-center">
                {cita.estadoReservaCita?<span>Activo</span>:<span>Inactivo</span>}
            </td>
        </tr>
    </tbody>
    )
}

export default Tablas;