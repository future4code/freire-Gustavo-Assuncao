import React from "react";



const Etapa3 = () => {
    return (
        <form className="DadosGerais">
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <h3> 5. Por que você não terminou um curso de graduação?</h3>
            <input type="text" />
            <h3 for='background3'> 6.Você fez algum curso complementar?</h3>
            <select name = 'background3' id='background3'>
            <option value="nenhum"> Nenhum </option>
            <option value="um"> Um </option>
            <option value="dois"> dois </option>
            <option value="tresouMais"> Três ou mais </option>
            </select>


        </form>
    )
};

export default Etapa3;