import React from "react";

import '../style.css'


const CampoUsuario = (props) => {
  return (
      <div className="inputs">
      <input className="usuarioInput"  type="text" placeholder= "Usuário" />
      <input className="mensagemInput" type="text" placeholder= "Mensagem" />
      <input className='button' type="button" value="Enviar"/>
      </div>
  );
}

export default CampoUsuario;
