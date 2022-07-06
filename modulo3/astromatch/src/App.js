import React from 'react';
import Header from './components/header/header';
import Footer from './components/Footer/footer';
import * as C from './Styles'


const App = () => {

  return (
    <div>
      <C.ContainerApp>
      <Header />
      <Footer />
      </C.ContainerApp>

    </div>
  );
};

export default App;


// const App = () => {

//   return ()
// } 
// export default App;