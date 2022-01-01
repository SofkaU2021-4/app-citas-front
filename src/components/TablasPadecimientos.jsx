import React from 'react'
import { useSelector } from "react-redux";

const TablasPadecimientos = () => {

    const {isLoading,padecimientos,errorMessage} = useSelector(state => state.padecimientos);

  return (
    <div>
    {isLoading && <h1>cargado...</h1>}
    {errorMessage&& <h1>Error de carga base de datos</h1>}
    {padecimientos &&
    <div>
    <table className = "w-full table-fixed mt-6">
        <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
            <tr>
                <th className="">Id Paciente</th>
                <th className=" ">Nombre Padecimiento</th>
                <th className="">Tramiento</th>
            </tr>
        </thead>
        {padecimientos.map((padecimiento) => {
            return(
                < FilasTablaPadecimientos key = {padecimiento.id} padecimiento = {padecimiento}/>
            )
        })}
    </table>
    </div>
    }
</div>
  )
}


const FilasTablaPadecimientos = ({padecimiento}) =>{

  return(
      <tbody className = "texto-tablas tbody-border texto-tablas">
      <tr >
          <td className=" text-center">
              <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis pl-2">{padecimiento.id}</span>
          </td>
          <td className="p-2 flex justify-center">
              <span className ="">{padecimiento.nombrePadecimiento}</span>
          </td>
          <td className="text-center">
          <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{padecimiento.tratamiento}</span>
          </td>
      </tr>
  </tbody>
  )
}

export default TablasPadecimientos
