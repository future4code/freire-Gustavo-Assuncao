import React, { useEffect } from "react";
import TextMainScreen from "../TextMainScreen/TextMainScreen";
import * as C from './MainsScreenStyles'




const MainScreen = () => {
  
    return (
      <C.MainScreenStyled >
         <TextMainScreen />
      </C.MainScreenStyled>
    );
  };
  
  export default MainScreen;