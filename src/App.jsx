import './App.css';
import CitasTablas from './pages/CitasTablas';
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import {loadCitasAsync} from '../src/redux/reducers/citas/citasThunks'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App=()=> {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadCitasAsync())
    },[])


    return(
    <>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<CitasTablas/>} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App;
