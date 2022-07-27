import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolBar } from "./HeaderStyled"
import { goToFeedPage, goToLoginPage  } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToFeedPage(navigate)} color="inherit">LabEddit</Button>
          <Button onClick={() => goToLoginPage(navigate)} color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>
  );
}

export default Header; 