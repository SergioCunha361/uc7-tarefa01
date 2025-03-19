import {React, useState} from "react";
import { useParams, Link } from "react-router-dom";
import bandas from "../../data/bancoBands";
import Band from "../../components/Band/index";
import Header from "../../components/Header/index";
import Aside from "../../components/Aside/index";
import Footer from "../../components/Footer/index";
import style from "./BandDetalhes.module.css";

function BandDetalhes() {
    const { id } = useParams();
    const [curiosidade, setCuriosidade] = useState(``);
    const band = bandas.find((b) => b.id === parseInt(id));
    if (!band) {
        return (
            <>
                <Header />
                <div className={style.container}>
                    <h2>Nenhuma Banda Encontrada</h2>
                    <div>
                        <Link to={'/'} className={style.link}>Voltar</Link>
                    </div>
                </div>
                <Aside />
            </>
        );
    }
    return (
        <>
            <Header />
            <div className={style.container}>
                <div>
                    <Band {...band} />
                    <p>{curiosidade}</p>
                    <button onClick={()=>setCuriosidade(band.curiosidade)}>Curiosidade</button>
                    <Link to={'/'} className={style.link}>Voltar</Link>
                </div>

            </div>
            <Aside />
            <Footer />

        </>
    );
}

export default BandDetalhes;