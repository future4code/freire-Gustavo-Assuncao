import React from "react";
import { LoginStyled } from "./LoginPageStyled";
import {useState} from "react";
import axios from "axios";


const LoginPage = () =>  {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail (event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = (event) => {
    console.log(email, password)
    const body = {
      email: email, 
      password: password
    }
    axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo/login', body)
  .then((resp)=>{
    console.log('Deu certo:', resp.data)
  }).catch((error)=>{
    console.log('Deu errado:',error.resp)
  })
  };

  return (
    <LoginStyled >
      <h1> Login </h1>
      <h3> Conecte-se para continuar </h3>
      <p>EMAIL</p>
      <input 
        type='email'
        placeholder="seuemail@labex.com"
        value={email}
        onChange={onChangeEmail}
      />
      <p>PASSWORD</p>
      <input 
        type='password'
        placeholder="********"
        value={password}
        onChange={onChangePassword}

      />
      <button onClick={onSubmitLogin}>Login</button>

    </LoginStyled>
  );
};

export default LoginPage;