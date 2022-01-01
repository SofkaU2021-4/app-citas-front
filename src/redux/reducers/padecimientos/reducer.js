import ActionsTypes from "./padecimientosactionsTypes";
import initialStates from "./padeciminetosinitialStates";

const padecimientosReducer = (state=initialStates,{type,payload})=>{
    switch(type){
        case ActionsTypes.PADECIMIENTOS_LOAD_START:
            return{
                ...state,
                isLoading : true,
                padecimientos:null,
                errorMessage:null
            }
        case ActionsTypes.PADECIMIENTOS_LOAD_SUCCESS:
            return{
                ...state,
                isLoading : false,
                padecimientos:payload
            }
        case ActionsTypes.PADECIMIENTOS_LOAD_ERROR:
            return{
                ...state,
                isLoading : false,
                errorMessage:payload
            }
        default: 
            return state;
    }
}



export default  padecimientosReducer;