/* import padecimientosService from "../../../Services/padecimientosSercive"
import actions from "./padecimientosActions";


export const loadPadecimientosAsync=()=>(dispatch)=>{

    dispatch(actions.padecimientosLoadStart())

    padecimientosService.getAllPadecimiento()
    .then(resp=>dispatch(actions.padecimientosLoadSucess(resp.data)))
    .catch((error)=>dispatch(actions.padecimientosLoadError(error.message)))
}; */