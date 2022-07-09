import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as C from './MatchesStyles';
import clean from '../../assets/clean.png'
import back from '../../assets/back.png'

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
            <h1>astromatch</h1>
            <button onClick={props.goToMenu}><img src={back} height ="35" width="35"></img></button>
        </C.ListMenuBar>
        {Filter}
    </C.ListContainer>
  )
}

export default Matches; 