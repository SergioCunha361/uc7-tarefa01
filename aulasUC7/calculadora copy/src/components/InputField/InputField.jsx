import React from "react";
import style from "./InputField.module.css"; // Importando o CSS

function InputField({label, value, onChange}){
    return(
        <>
            <div className={style.input}>
                <label>{label}</label>
                <input type="number" value={value} onChange={onChange} />
            </div>
        </>
    );
}

export default InputField;