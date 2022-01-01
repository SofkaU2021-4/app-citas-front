import actionTypes from "./citasActionsTypes";

const citasLoadStart=()=>({
    type:actionTypes.CITAS_LOAD_START,
})

const citasLoadSucess=(citas)=>({
    type:actionTypes.CITAS_LOAD_SUCCESS,
    payload:citas,
})

const citasLoadError=(errorMessage)=>({
    type:actionTypes.CITAS_ERROR,
    payload:errorMessage,
})


export default{
  citasLoadStart,
  citasLoadSucess,
  citasLoadError
};