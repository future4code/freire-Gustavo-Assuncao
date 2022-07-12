import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as C from './MatchesStyles';
import clean from '../../assets/clean.png'
import back from '../../assets/back.png'
import Swal from "sweetalert2";

function Matches(props) {

  const [list, setList] = useState([]);

  useEffect(()=>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/matches")
    .then((res)=>{
        setList(res.data.matches)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const maping = list.map((profile)=>{
    return (
      <C.List key={profile.id}>
        <li>
          <img src={profile.photo}></img>
          <p>{profile.name}</p>
        </li>
      </C.List>
    )
  })

  const clear = () =>{

    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/clear")
    .then((res)=>{
        window.location.reload(false);
    })
    .catch((err)=>{
        console.log(err.response)
      })

      Swal.fire(
        'Matches deletados!',
        '',
        'success')
    }

    return (
      <C.ListContainer>
          <C.ListMenuBar>
              <button onClick={clear}><img src={clean} height ="35" width="35"></img></button>
              <h2>Astromatch</h2>
              <button onClick={props.goToHome}><img src={back} height ="35" width="35"></img></button>
          </C.ListMenuBar>
          {maping}
      </C.ListContainer>
    )
  }

export default Matches; 