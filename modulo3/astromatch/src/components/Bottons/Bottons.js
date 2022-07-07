import React from "react";
import * as C from './BottonsStyles'
import like from '../../assets/like.png'
import deslike from '../../assets/deslike.png'

const Bottons = () => {

  return (
    <div>
        <C.BottonsStyled src={like} onClick={() => console.log('Click')}></C.BottonsStyled>
        <C.BottonsStyled src={deslike} onClick={() => console.log("clicou")}></C.BottonsStyled>
    </div>
  )
} 
export default Bottons;