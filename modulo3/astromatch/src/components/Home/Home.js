import React, {useState, useEffect} from 'react'
import styled from 'styled-components' 
import axios from "axios"

import { AppContainer } from './style';
import { Buttons } from './style';
import { Elements } from './style';
import { MenuBar } from './style';
import { Profile } from './style';
import Couple from "../../img/incendio.png";
import Reject from "../../img/reject2.png"
import Hart from "../../img/hart1.png"
import { Picture } from './style';
import Clean from '../../img/reload.png'

function Menu(props) {

    const [ProfilesList, setProfilesList] = useState([]);
    const [MatcheProfile, setMatcheProfile] = useState([]);

    useEffect(() =>{
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/person")
            .then((res) =>{
                console.log(res.data.profile)
                setProfilesList(res.data.profile)
            })
            .catch((err) =>{
                console.log(err)
            })
    },[MatcheProfile])


    const choosePerson = (idProfile, choiceProfile) =>{

        const body ={
            "id": idProfile,
            "choice": choiceProfile
        }

        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/choose-person", body)
        .then((res)=>{
            console.log(res)
            setMatcheProfile(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const cleanList = () =>{
        axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/clear")
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div>
      <C.ContainerHome>
     
      </C.ContainerHome>
    </div>
  );
};

export default Home;