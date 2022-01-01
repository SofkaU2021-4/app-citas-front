import './App.css';
import CitasTablas from './pages/CitasTablas';
import PadecimientosTablas from './pages/PadecimientoTablas';
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import {loadCitasAsync} from '../src/redux/reducers/citas/citasThunks'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadPadecimientosAsync } from './redux/reducers/padecimientos/padecimientosThunks';


const App=()=> {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadCitasAsync())
        dispatch(loadPadecimientosAsync())
    },[])


    return(
    <>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<CitasTablas/>} />
                    <Route path='/padecimientos' element={<PadecimientosTablas/>} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App;
