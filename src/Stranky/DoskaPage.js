import React, {useEffect, useState} from "react";
import divokyBill from "../obrazky/divokyBill.png";
import Kacka from "../components/Kacka";
import "./DoskaPage.css";
import {useNavigate} from "react-router-dom"
import Karta from "../components/Karta";
import Zivoty from "../components/Zivoty";
import {kackyLink} from "../App";

export default function DoskaPage(hrac){

    let navigate = useNavigate();

    const [vybraneKarty, setVybraneKarty] = useState([false,false,false]);
    const nastavsetVybraneKarty = (data) => {setVybraneKarty(data);}

    var farbyHracov = [
        {id: 0, farba: "white"},
        {id: 1, farba: "blue"},
        {id: 2, farba: "red"},
        {id: 3, farba: "lime"},
        {id: 4, farba: "yellow"},
        {id: 5, farba: "aqua"},
        {id: 6, farba: "purple"}
    ]

    async function ziskajDoskaData() {
        let promise = await fetch(kackyLink);
        let json = await promise.json();
        return json;
    }

    let [doska, setDoska] = useState({
        "jazero": [0,0,0,0,0,0],
        "ruky":[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
        "naRade": 0,
        "zivoty":[6,6,6,6,6,6],
        "zameriavaci":[false,false,false,false,false,false]
    });

    var hraci = [];

    for (let i = 0; i < doska.zivoty.length; i++){
        hraci[i] = i;
    }

    useEffect(() => {ziskajDoskaData().then(doska => {setDoska(doska);})},[]);

    useEffect(() => {setTimeout(() => {ziskajDoskaData().then(doska => {setDoska(doska);})},5000)});


    function RenderDoska(){
        return(
            <div>
                <nav className={"navko"}>
                    <img src={divokyBill} alt={"obrazok Billa"}/>
                    <h3>Si hrac {hrac.cislo} 🦆</h3>
                </nav>
                <div className={"jazero"}>
                    <Kacka miesto = {0} farba = {doska.jazero[0]} namierene = {doska.zameriavaci[0]} nastavVybraneKarty = {nastavsetVybraneKarty} ruka = {doska.ruky[hrac.cislo-1]} vybraneKarty = {vybraneKarty}/>
                    <Kacka miesto = {1} farba = {doska.jazero[1]} namierene = {doska.zameriavaci[1]} nastavVybraneKarty = {nastavsetVybraneKarty} ruka = {doska.ruky[hrac.cislo-1]} vybraneKarty = {vybraneKarty}/>
                    <Kacka miesto = {2} farba = {doska.jazero[2]} namierene = {doska.zameriavaci[2]} nastavVybraneKarty = {nastavsetVybraneKarty} ruka = {doska.ruky[hrac.cislo-1]} vybraneKarty = {vybraneKarty}/>
                    <Kacka miesto = {3} farba = {doska.jazero[3]} namierene = {doska.zameriavaci[3]} nastavVybraneKarty = {nastavsetVybraneKarty} ruka = {doska.ruky[hrac.cislo-1]} vybraneKarty = {vybraneKarty}/>
                    <Kacka miesto = {4} farba = {doska.jazero[4]} namierene = {doska.zameriavaci[4]} nastavVybraneKarty = {nastavsetVybraneKarty} ruka = {doska.ruky[hrac.cislo-1]} vybraneKarty = {vybraneKarty}/>
                    <Kacka miesto = {5} farba = {doska.jazero[5]} namierene = {doska.zameriavaci[5]} nastavVybraneKarty = {nastavsetVybraneKarty} ruka = {doska.ruky[hrac.cislo-1]} vybraneKarty = {vybraneKarty}/>
                </div>
                <div className={"ruka"}>
                    <Karta miesto = {0} kartaId = {doska.ruky[hrac.cislo-1][0]} hrac = {hrac.cislo} vieHrat = {doska.vieZahrat} naRade = {doska.naRade} vybraneKarty = {vybraneKarty} nastavVybraneKarty = {nastavsetVybraneKarty}/>
                    <Karta miesto = {1} kartaId = {doska.ruky[hrac.cislo-1][1]} hrac = {hrac.cislo} vieHrat = {doska.vieZahrat} naRade = {doska.naRade} vybraneKarty = {vybraneKarty} nastavVybraneKarty = {nastavsetVybraneKarty}/>
                    <Karta miesto = {2} kartaId = {doska.ruky[hrac.cislo-1][2]} hrac = {hrac.cislo} vieHrat = {doska.vieZahrat} naRade = {doska.naRade} vybraneKarty = {vybraneKarty} nastavVybraneKarty = {nastavsetVybraneKarty}/>
                </div>
                <footer className={"foooter"}>
                    <div>hráč&nbsp;<div style={{color: farbyHracov[doska.naRade+1].farba}}>{doska.naRade+1}</div>&nbsp;je na rade<br/></div>
                    <div>životy: &nbsp;{hraci.map((info) => (<Zivoty farba = {farbyHracov[info+1].farba} pocet = {doska.zivoty[info]}/>))}</div>


                </footer>
            </div>
        )
    }

    function RenderNeexistuje(){
        return(
            <div><button onClick={navigate("/")}>neexituje hrac</button></div>
        )
    }


    if (hrac.cislo > doska.ruky.length){
        return <RenderNeexistuje/>
    }
    return <RenderDoska/>
}
