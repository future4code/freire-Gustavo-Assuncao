import React from "react";
import '../'

const Etapa1 = () => {
    return (
        <form className="DadosGerais">
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <h3> 1.Qual o seu nome?</h3>
            <input type="text" />
            <h3> 2.Qual a sua idade?</h3>
            <input type="text" />
            <h3> 3.Qual o seu email?</h3>
            <input type="text" />
            <h3 for='background'> 4.Qual a sua escolaridade?</h3>
            <select name = 'background' id='background'>
            <option value="ensinoMedioCom"> Ensino médio completo </option>
            <option value="ensinoMedioIn"> Ensino médio inompleto </option>
            <option value="ensinoSuperiorCom"> Ensino superior completo </option>
            <option value="ensinoSuperiorIn"> Ensino superior completo </option>
            </select>


        </form>
    )
};

export default Etapa1;