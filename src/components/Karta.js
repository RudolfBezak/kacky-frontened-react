import React, {useEffect, useState} from "react";
import voda from '../obrazky/kacka0.png'
import kacka1 from '../obrazky/kacaciPochod.png';
import kacka2 from '../obrazky/kacaciTanec.png';
import kacka3 from '../obrazky/turboKacka.png';
import kacka4 from '../obrazky/rosambo.png';
import kacka5 from '../obrazky/zamier.png';
import kacka6 from '../obrazky/vystrel.png';
import kacka7 from '../obrazky/divokyBill.png';
import './Kacka.css';
import {kackyLink} from "../App";



export default function Karta(cislo){


    const [obrazky] = useState([voda,kacka1,kacka2,kacka3,kacka4,kacka5,kacka6,kacka7]);


    var kacky = [
        {id: "nieco je zle", farba: "white"},
        {id: "kačací pochod", farba: "blue"},
        {id: "kačací tanec", farba: "red"},
        {id: "turbokačka", farba: "lime"},
        {id: "rošambo", farba: "yellow"},
        {id: "zamier", farba: "aqua"},
        {id: "vystrel", farba: "purple"},
        {id: "divoký Bill", farba: "purple"}
    ]


    if(typeof cislo==="undefined"){
        cislo = {"kartaId": -1};
    }

    function kliknutie(karta){
        console.log(karta)
        if (cislo.naRade+1 !== cislo.hrac){
            console.log("neni na rade");
            console.log(cislo.naRade+" "+cislo.hrac);
            return
        }
        console.log("je na rade");

        console.log("vie hrat?: " + cislo.vieHrat);



        if (cislo.vieHrat){
            if (karta === 1||karta === 2||karta === 4){
                //zahra kartu bez mierenia
                let telo = {"kacka": -1};
                fetch(kackyLink+"/"+karta,{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'Put',
                    body: JSON.stringify(telo)
                });
                return;
            }
            //zahraj kartu s mierenim
            if (cislo.miesto === 0){cislo.nastavVybraneKarty([true,false,false]);}
            else if (cislo.miesto === 1){cislo.nastavVybraneKarty([false,true,false]);}
            else if (cislo.miesto === 2){cislo.nastavVybraneKarty([false,false,true]);}

        }
        else {
            console.log("zahodim kartu");
            let telo = {"kacka": -1};
            fetch(kackyLink + "/" + karta, {
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
        <div className={"karta"} onClick={() => kliknutie(cislo.kartaId)} style={{boxShadow: cislo.vybraneKarty[cislo.miesto]?"0px 0px 20px 0px rgba(255,255,0,0.5)":""}}>
            <div>
                <img className={"obraz"} src={obrazky[cislo.kartaId]} alt={'obrazok na karte'}/>
            </div>
            <div className={"popis"}>
                <h3 style={{color: kacky[cislo.hrac].farba, fontSize: "80%"}}>{kacky[cislo.kartaId].id}</h3>
            </div>


        </div>
    );
}