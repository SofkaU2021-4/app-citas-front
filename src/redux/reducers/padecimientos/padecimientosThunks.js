import padecimientosService from "../../../Services/padecimientosSercive"
import actions from "./padecimientosActions";


export const loadPadecimientosAsync=()=>(dispatch)=>{

    dispatch(actions.PadecimientosLoadStart())

    padecimientosService.getAllPadecimiento()
    .then(resp=>dispatch(actions.PadecimientosloadSucess(resp.data)))
    .catch((error)=>dispatch(actions.PadecimientosloadError(error.message)))
};