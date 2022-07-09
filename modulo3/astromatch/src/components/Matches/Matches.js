import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as C from './MatchesStyles';
import clean from '../../assets/clean.png'
import back from '../../assets/back.png'

function Matches(props) {

  const [list, setList] = useState([]);

  useEffect(()=>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/matches")
    .then((res)=>{
        console.log(res.data.matches)
        setList(res.data.matches)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const Filter = list.map((profile)=>{
    return (
      <C.List key={profile.id}>
        <li>
          <img src={profile.photo}></img>
          <p>{profile.name}</p>
        </li>
      </C.List>
    )
  })

  return (
    <C.ListContainer>
        <C.ListMenuBar>
            <button><img src={clean} height ="35" width="35"></img></button>
            <h2>Astromatch</h2>
            <button onClick={props.goToHome}><img src={back} height ="35" width="35"></img></button>
        </C.ListMenuBar>
        {Filter}
    </C.ListContainer>
  )
}

export default Matches; 