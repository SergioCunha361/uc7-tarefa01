import React, {useState} from "react";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import ResultDisplay from "../components/ResultDisplay/ResultDisplay";
import style from "./TipCalculator.module.css"; // Importando o CSS módulo

function TipCalculator(){
    const [valorConta, setValorConta] = useState("");
    const [percentualGorjeta, setPercentualGorjeta] = useState("");
    const [resultado, setResultado] = useState("");

const calcularGorjeta = () => {
    const valor = parseFloat(valorConta);
    const valorGorjeta = (valor * parseFloat(percentualGorjeta))/100;
    const total = valor + valorGorjeta;
    setResultado({gorjeta: valorGorjeta, total:total})
}


    return(
        
         <div className={style.container}>
            <h1>Calculadora de Gorjeta</h1>
            <div className={style.inputContainer}>
                <InputField
                    label="Valor da Conta:"
                    value={valorConta}
                    onChange={(e) => setValorConta(e.target.value) }
                />
            </div>
            <div className={style.container}>
                <InputField
                    label="Porcentagem da Gorjeta (%)"
                    value={percentualGorjeta}
                    onChange={(e) => setPercentualGorjeta(e.target.value) }
                />
            </div>
            <div className={style.buttonContainer}>
                <Button 
                    text="Calcular" onClick={calcularGorjeta}
                />
            </div>
            <div className={style.resultContainer}>
                <ResultDisplay gorjeta ={resultado.gorjeta} total={resultado.total}/>
            </div>

        </div>
     
    );
}

export default TipCalculator;