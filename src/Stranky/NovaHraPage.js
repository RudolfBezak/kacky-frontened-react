import React from "react";
import "./NovaHraPage.css"
import {useNavigate} from "react-router-dom"
import {kackyLink} from "../App";

export default function NovaHraPage(){
    let navigate = useNavigate();

    return(
        <div className={"stranka"}>
            <div className={"nadpis"}>
                Zvoľ si počet hráčov:
            </div>
            <button onClick={() => {tlacitkoFunc(2,navigate)}}>2</button>
            <button onClick={() => {tlacitkoFunc(3,navigate)}}>3</button>
            <button onClick={() => {tlacitkoFunc(4,navigate)}}>4</button>
            <button onClick={() => {tlacitkoFunc(5,navigate)}}>5</button>
            <button onClick={() => {tlacitkoFunc(6,navigate)}}>6</button>

        </div>
    )
}

function tlacitkoFunc(pocetHracov,navigate){
    zapniHruNaServeri(pocetHracov);
    navigate("/");

}

function zapniHruNaServeri(pocetHracov){
    fetch(kackyLink+"/"+pocetHracov,{method: 'Post',})
}