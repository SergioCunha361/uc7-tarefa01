import React from "react";
import { Link } from "react-router-dom"
import Band from "../Band/index"
import style from "./Main.module.css"
import bandas from "../../data/bancoBands"


function Main() {
    return (
            <main className={style.main}>
                {
                    bandas.map((banda, index)=>(
                        
                            <section>
                                <Link key={banda.id} to={`band/${banda.id}`}>
                                    <Band key={index} {...banda}/>
                                    <p>Clique aqui para ler mais sobre ...</p>
                                    {/* Link key={banda.id} --resposta da pesquisa
                                    to={`band/${banda.id}`}== direcionamento após identificar o ID
                                    Band key={index} {...banda} -- tranforma imagem + textos como objeto do link */}
                                </Link>
                            </section>                    
                       
                    ))
                }                
               
            </main>
            
    )
}

export default Main

