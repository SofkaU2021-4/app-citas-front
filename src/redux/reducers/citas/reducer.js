import citasActionsTypes from "./citasActionsTypes";
import initialStates from "./citasInitialStates";

const citasReducer = (state=initialStates,{type,payload})=>{
    switch(type){
        case citasActionsTypes.CITAS_LOAD_START:
            return{
                ...state,
                isLoading : true,
                citas:null,
                errorMessage:null
            }
        case citasActionsTypes.CITAS_LOAD_SUCCESS:
            return{
                ...state,
                isLoading : false,
                citas:payload
            }
        case citasActionsTypes.CITAS_LOAD_ERROR:
            return{
                ...state,
                isLoading : false,
                errorMessage:payload
            }
        default: 
            return state;
    }
}

export default citasReducer;