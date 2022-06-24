import React from "react";



export default class Home extends React.Component {
    state = {
        genero: ""
    }  

    handleGenero = (event) => {
        this.setState({genero: event.target.value});
    }


    render () {

        

        return (
            <div>
                <h3>LABEFY</h3>
                <input 
                type="text"
                placeholder="Digite um gênero musical"
                value = {this.state.genero}
                onChange = {this.handleGenero}
                />
                <button onClick={}>Confirmar</button>




            </div>
            

        )
    }
}