import actionTypes from "./padecimientosactionsTypes";


const PadecimientosLoadStart=()=>({
    type:actionTypes.PADECIMIENTOS_LOAD_START,
})

const PadecimientosloadSucess=(padecimientos)=>{
    return{
    type:actionTypes.PADECIMIENTOS_LOAD_SUCCESS,
    payload:padecimientos,
    }
}

const PadecimientosloadError=(errorMessage)=>{
    return{
    type:actionTypes.PADECIMIENTOS_LOAD_ERROR,
    payload:errorMessage,
    }

}


export default{
  PadecimientosLoadStart,
  PadecimientosloadSucess,
  PadecimientosloadError
};