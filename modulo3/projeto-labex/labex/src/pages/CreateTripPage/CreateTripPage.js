import React from "react";
import { useNavigate } from 'react-router-dom'
import { Title, Create, InputData, ButtonCreate } from "./CreateTripPageStyled"
import { planets } from '../../constants/planets'
import { createTrip } from "../../services/requests"
import { goToAdminHomePage } from '../../routes/Coordinator'
import useForm from "../../hooks/useForm"
import useProtectedPage from '../../hooks/useProtectedPage'


const CreateTripPage = () =>  {
  useProtectedPage()
  const navigate = useNavigate()
  const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const onClickCreate = (event) => {
    event.preventDefault()
    createTrip(form, clear)
}

const today = new Date().toISOString().split("T")[0]

  return (
    <>
    <Title>
    <h1>Criar Viagem</h1>
    </Title>
    <form onSubmit={onClickCreate}>
    <Create>
        <input
            placeholder={"Nome"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            pattern={"^.{5,}$"}
            title={"O nome da viagem deve ter no mínimo 5 caracteres"}
            required
        />
        <input
            placeholder={"Descrição"}
            name={"description"}
            value={form.description}
            onChange={onChange}
            required
            pattern={"^.{30,}$"}
            title={"O nome deve ter no mínimo 30 caracteres"}
        />
        <input
            placeholder={"Duração em dias"}
            type={"number"}
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            required
            min={50}
        />
        </Create>
        <InputData>
        <select
            placeholder={"Planeta"}
            name={"planet"}
            defaultValue={""}
            onChange={onChange}
            required
        >
            <option value={""} disabled>Escolha um Planeta</option>
            {planets.map((planet) => {
                return <option value={planet} key={planet}>{planet}</option>
            })}
        </select>
        <input
            placeholder={"Data"}
            type={"date"}
            name={"date"}
            value={form.date}
            onChange={onChange}
            required
            min={today}
        />
        </InputData>
        <ButtonCreate>
            <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
            <button type={"submit"}>Criar</button>
            </ButtonCreate>
    </form>
    </>
  );
}

export default CreateTripPage;