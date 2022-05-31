import React from "react";

export default function Zivoty(info){

    return(
        <div style={{color: info.farba}}>
            {info.pocet}&nbsp;
        </div>
    )
}