import React from "react";
import useForm from "../../hooks/useForm"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { login } from "../../services/requests"
import { useNavigate } from 'react-router-dom'
import { LoginStyled } from "./LoginPageStyled";

const LoginPage = () =>  {
  useUnprotectedPage()
  const navigate = useNavigate()
  const { form, onChange } = useForm({ email: "", password: "" })


  const onClickLogin = (event) => {
    event.preventDefault()
    login(form, navigate)
}

  return (
    <LoginStyled >
      <h1> Login </h1>
      <h3> Conecte-se para continuar </h3>
      <form onSubmit={onClickLogin}>
      <p>EMAIL</p>
      <input 
          placeholder={"seuemail@gmail.com"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
      />
      <p>PASSWORD</p>
      <input 
        placeholder={"********"}
        type={"password"}
        name={"password"}
        value={form.password}
        onChange={onChange}
        required
      />
      <button type={"submit"}>Login</button>
      </form>
    </LoginStyled>
  );
};

export default LoginPage;