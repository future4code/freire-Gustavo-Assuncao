import React from 'react';
import {BigCard} from './styled'

function CardGrande(props) {
    return (
        <BigCard>
            <img src={props.imagem}/>
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>
        </BigCard>
    )
}

export default CardGrande;