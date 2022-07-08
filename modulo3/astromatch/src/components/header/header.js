import React, {useState, useEffect} from "react";
import Buttons from "../Buttons/Buttons";
import * as C from './HeaderStyles'
import axios from "axios";


const TextMainScreen = () => {
  const [profile, setProfile] = useState([])

  const getProfiles = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gus/person')
    .then((response)=> {
      console.log(response.data);
      setProfile(response.data.profile)
    }).catch((error)=>{
      console.log(error.message)
    })
  }

    useEffect (()=>{
      getProfiles()
    }, [])

    return (
    <C.TextMainScreenStyled>
    <img src={profile.photo} alt={profile.name} />
    <h3> 🟢{profile.name}, {profile.age}</h3> 
    <p>{profile.bio}</p>
    <Buttons id={profile.id}/>
    </C.TextMainScreenStyled> 
    );
  };
  
  export default TextMainScreen;