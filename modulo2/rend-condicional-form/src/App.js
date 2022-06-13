import React from 'react';
import './components/Etapa1'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
}
  render () {

    return (
      
      <div className="App">
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <Final/>
    {/* <button onClick={}></button> */}
    </div>
    
      )

}
}

export default App;
