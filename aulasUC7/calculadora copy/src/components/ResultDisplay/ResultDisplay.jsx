import React from "react";
import style from "./ResultDisplay.module.css"; // Importando o CSS

function ResultDisplay({gorjeta, total}){
    return(
        <>
        <div className={style.result}>
            <p> Gorjeta: R$ {gorjeta} </p>
            <p> Total: R$ {total} </p>
        </div>
        </>
    );
}

export default ResultDisplay;