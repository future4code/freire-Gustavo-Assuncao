import React from 'react';
import {SmallCard} from './styled'

function CardPequeno(props) {
    return (
        <SmallCard>
            <img src={props.imagem}/>
            <div>
                <h4> {props.dado} </h4>
                <p> {props.informacao}</p>
            </div>
        </SmallCard>
    )
}
export default CardPequeno;