import React, {useState, useEffect} from 'react'
import axios from "axios"
import * as C from './HomeStyles';
import contact from "../../assets/contact.png";
import reject from "../../assets/reject.png"
import heart from "../../assets/heart.png"
import clean from "../../assets/clean.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {

    const [profiles, setProfiles] = useState([]);
    const [matches, setMatches] = useState([]);

    useEffect(() =>{
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/person")
            .then((res) =>{
                setProfiles(res.data.profile)
            })
            .catch((err) =>{
                console.log(err.message)
            })
    },[matches])

    const ToastEmmitter = () => {

        toast('Woww deu Match!!🔥🔥', {
            position: "top-center",
            autoClose: 400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }


    const choosePerson = (idProfile, choiceProfile) =>{

        const body ={
            "id": idProfile,
            "choice": choiceProfile
        }
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/choose-person", body)
        .then((res)=>{
            setMatches(res.data)
            if (res.data.isMatch) { 
                ToastEmmitter()}
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    // const clear = () =>{
    //     axios
    //     .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/clear")
    //     .then((res)=>{
    //         alert('deletado com sucesso')
    //     })
    //     .catch((err)=>{
    //         console.log(err.response)
    //     })
    // }


  return (
    <C.AppContainer>
    <C.MenuBar>
        <button><img src={clean} height ="35" width="35"></img></button>
        <h2>Astromatch</h2>
        <button onClick={props.goToMatches}><img src={contact} height ="45" width="45"></img></button>
    </C.MenuBar>
    {profiles === null ? (
        <h1>Nada foi encontrado!</h1>
    ):(
        <C.Elements>
        <C.Picture>
            <img src={profiles.photo}/>
        </C.Picture>
    <C.Profile>
        <h2>🟢{profiles.name}, {profiles.age}</h2>
        <p>{profiles.bio}</p>
    </C.Profile>
    <ToastContainer/>
        <C.Buttons>
            <button onClick={()=>choosePerson(profiles.id, false)}> <img src={reject} height ="30" width="30"></img></button>
            <button onClick={()=>choosePerson(profiles.id, true)}> <img src={heart} height ="30" width="30"></img></button>
        </C.Buttons>
</C.Elements>
    )
}
</C.AppContainer>
);
}


export default Home; 