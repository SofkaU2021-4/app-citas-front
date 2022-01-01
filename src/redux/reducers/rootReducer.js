import { combineReducers } from "redux";
import citasReducer from "./citas/reducer";
import padecimientosReducer from "./padecimientos/reducer";

const rootReducer=()=>
  combineReducers({
    citas:citasReducer,
    padecimientos:padecimientosReducer
  });


export default rootReducer;