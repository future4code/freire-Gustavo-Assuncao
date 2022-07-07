import React, {useState, useEffect} from "react";
import * as C from './TextMainStyles'
import axios from "axios";

const TextMainScreen = () => {
  const [profile, setProfile] = useState([])

  const getProfiles = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/person')
    .then((response)=> {
      console.log(response.data);
      setProfile(response.data.profile)
    }).catch((error)=>{
      console.log(error.message)
    })
  }

    useEffect (()=>{
      getProfiles(profile)
    }, [])


    return (
    <C.TextMainScreenStyled>
    <img src={profile.photo} />
    <h3> 🟢{profile.name}, {profile.age}</h3> 
    <p>{profile.bio}</p>
    </C.TextMainScreenStyled> 
    );
  };
  
  export default TextMainScreen;