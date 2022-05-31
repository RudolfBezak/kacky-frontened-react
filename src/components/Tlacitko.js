import React from "react";
import "./Tlacitko.css";
import {useNavigate} from "react-router-dom"

function Tlacitko(props) {

    let navigate = useNavigate();

    var hraci = [
        {id: 1, farba: "blue"},
        {id: 2, farba: "red"},
        {id: 3, farba: "lime"},
        {id: 4, farba: "yellow"},
        {id: 5, farba: "aqua"},
        {id: 6, farba: "purple"}
    ]

    if (typeof props.ruky === "undefined"){
        props.ruky = [-1];
    }

    var dlzka = props.ruky.length;

    var mapa = [];

    for (let i = 0; i < dlzka; i++){
        mapa[i] = i;
    }

    return(
        <div className={"divko"}>
            {mapa.map((id) => (<button onClick={() => {navigate("/"+(id+1))}} style={{color: hraci[id].farba}}>{hraci[id].id}</button>))}
        </div>
    )

}

export default Tlacitko;