import React from "react";
import { LoginStyled } from "./LoginPageStyled";


const LoginPage = () =>  {
  return (
    <LoginStyled >
      <h1> Login </h1>
      <h3> Conecte-se para continuar </h3>
      <p>EMAIL</p>
      <input 
        type='text'
        placeholder="seuemail@labex.com"
      />
      <p>PASSWORD</p>
      <input 
        type='text'
        placeholder="********"
      />
      <button>Login</button>

    </LoginStyled>
  );
}

export default LoginPage;