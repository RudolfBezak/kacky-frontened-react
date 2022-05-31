
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import StartHryPage from "./Stranky/StartHryPage";
import NovaHraPage from "./Stranky/NovaHraPage";
import ErrorPage from "./Stranky/ErrorPage";
import DoskaPage from "./Stranky/DoskaPage";

//export var kackyLink = 'http://192.168.0.114:8080/kacky';
export var kackyLink = "https://daec-178-143-34-174.eu.ngrok.io/kacky";


    function App(){

    var stav = {
        zameriavaci: "",
        ruky: "",
        viezahrat: "",
        zivoty: "",
        balikKaciek: "",
        balikKariet: "",
        jazero: "",
        naRade: "",
        pokracujeHra: ""
    }


    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartHryPage/>}/>
                <Route path="/new" element={<NovaHraPage/>}/>
                <Route path="/1" element={<DoskaPage cislo = {1}/>}/>
                <Route path="/2" element={<DoskaPage cislo = {2}/>}/>
                <Route path="/3" element={<DoskaPage cislo = {3}/>}/>
                <Route path="/4" element={<DoskaPage cislo = {4}/>}/>
                <Route path="/5" element={<DoskaPage cislo = {5}/>}/>
                <Route path="/6" element={<DoskaPage cislo = {6}/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
)
}

export default App;