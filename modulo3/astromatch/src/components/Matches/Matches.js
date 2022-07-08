import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios'

import { List } from './style';
import { ListContainer } from './style';
import { ListMenuBar } from './style';
import Clean from '../../img/reload.png'
import Back from '../../img/volte.png'


function Matches(props) {

  const [MatcheList, setMatcheList] = useState([]);

  useEffect(()=>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/matches")
    .then((res)=>{
        console.log(res.data.matches)
        setMatcheList(res.data.matches)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const Filter = MatcheList.map((profile)=>{
    return (
      <List key={profile.id}>
        <li>
          <img src={profile.photo}></img>
          <p>{profile.name}</p>
        </li>
      </List>
    )
  })

  return (
    <ListContainer>
        <ListMenuBar>
            <button><img src={Clean} height ="35" width="35"></img></button>
            <h1>astromatch</h1>
            <button onClick={props.goToMenu}><img src={Back} height ="35" width="35"></img></button>
        </ListMenuBar>
        {Filter}
    </ListContainer>
  )
}

export default Matches; 