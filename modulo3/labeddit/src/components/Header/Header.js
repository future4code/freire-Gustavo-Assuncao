import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolBar } from "./HeaderStyled"
import { goToFeedPage, goToLoginPage  } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if (token){
        logout()
        goToLoginPage(navigate) 
      } else { 
        goToLoginPage(navigate) 
      }
    }

  return (
      <AppBar position="static">
        <StyledToolBar>
            <Button onClick={() => goToFeedPage(navigate)} color="inherit">LabEddit</Button>
            <Button onClick={rightButtonAction} color="inherit">{token && token ? "Logout" : "Login"}</Button>
        </StyledToolBar>
      </AppBar>
  );
}

export default Header; 