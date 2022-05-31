import React, {useEffect, useState} from "react";
import './NavigacnyBar.css';
import divokyBill from '../obrazky/divokyBill.png';
import Tlacitko from "./Tlacitko";
import {useNavigate} from "react-router-dom"
import {kackyLink} from "../App";

function NavigacnyBar(doskaData){

    let navigate = useNavigate();

    const [ruky, setRuky] = useState([]);

    var timer = 0;

    setInterval( increment, 1000);

    function increment(){
        this.timer = this.timer+1;
    }

    useEffect(() => {ziskajPocetHracov().then(ruky => setRuky(ruky))},[timer]);



    return (
            <div>
                <nav className={'navLista'}>
                    <img src={divokyBill} alt={"obrazok Billa"}/>
                    <div>
                        <h3>Vyber si farbu</h3>
                        <ul className={"buttony"}>
                            <Tlacitko ruky = {ruky}/>
                            <button onClick={() => navigate("/new")}>Nova hra</button>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
export default NavigacnyBar;

async function ziskajPocetHracov() {
    let promise = await fetch(kackyLink);
    let json = await promise.json();
    return json.ruky;
}




