import React from 'react';
import {ImgButton} from './styled'


function ImagemButton(props) {
    return (
        <ImgButton>
            <img src={ props.imagem } />
            <p>{ props.texto }</p>
        </ImgButton>

    )
}

export default ImagemButton;