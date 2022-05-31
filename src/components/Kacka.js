import React, {useState} from "react";
import kacka0 from '../obrazky/kacka0.png';
import kacka1 from '../obrazky/kacka1.png';
import kacka2 from '../obrazky/kacka2.png';
import kacka3 from '../obrazky/kacka3.png';
import kacka4 from '../obrazky/kacka4.png';
import kacka5 from '../obrazky/kacka5.png';
import kacka6 from '../obrazky/kacka6.png';
import './Kacka.css';
import {kackyLink} from "../App";

export default function Kacka(cislo){


    const [obrazky] = useState([kacka0,kacka1,kacka2,kacka3,kacka4,kacka5,kacka6]);


    var kacky = [
        {id: 0, farba: "white"},
        {id: 1, farba: "blue"},
        {id: 2, farba: "red"},
        {id: 3, farba: "lime"},
        {id: 4, farba: "yellow"},
        {id: 5, farba: "aqua"},
        {id: 6, farba: "purple"}
    ]


    if(typeof cislo==="undefined"){
        cislo = {"farba": 0};
    }

    function kliknutie(){
        //zisti id zakliknutej
        let idZakliknutej = -1;
        for (let i = 0; i < cislo.ruka.length; i++) {
            if (cislo.vybraneKarty[i]){
                idZakliknutej = cislo.ruka[i];
            }
        }
        cislo.nastavVybraneKarty([false,false,false]);
        if (idZakliknutej !== -1){
            console.log("zahram dvojcastovu kartu na: "+cislo.miesto+" a kartu s id: "+ idZakliknutej);
            let telo = {"kacka": cislo.miesto};
            fetch(kackyLink + "/" + idZakliknutej, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'Put',
                body: JSON.stringify(telo)
            });
        }

    }


    return (
            <div className={"karta"} onClick={() => kliknutie(cislo.kartaId)}>
                <div>
                    <img className={"obraz"} src={obrazky[cislo.farba]} alt={'obrazok na karte'}/>
                </div>
                <div className={"popis"}>
                    <h3 style={{color: kacky[cislo.farba].farba, fontSize: "80%"}}>{cislo.farba}{cislo.namierene?"🏹":""}</h3>
                </div>


            </div>
        );
}