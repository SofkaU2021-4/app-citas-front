import CitasService from "../../../Services/citas.Service";
import actions from "./citasActions";


export const loadCitasAsync=()=>(dispatch)=>{

    dispatch(actions.citasLoadStart())

    CitasService.getAllCitas()
    .then(resp=>dispatch(actions.citasLoadSucess(resp.data)))
    .catch((error)=>dispatch(actions.citasLoadError(error.message)))
};
