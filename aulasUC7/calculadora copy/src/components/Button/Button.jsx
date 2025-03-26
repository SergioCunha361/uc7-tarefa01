import React from "react";
import style from "./Button.module.css"; // Importando o CSS

function Button({text, onClick}){
    return(
        <>
        <div className={style.button}>
        <button onClick={onClick}>
            {text}
        </button>
        </div>
        </>
    );
}

export default Button;