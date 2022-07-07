import React, {useState, useEffect} from "react";
import * as C from './BottonsStyles'
import axios from "axios";
import like from '../../assets/like.png'
import deslike from '../../assets/deslike.png'
import TextMainScreen from "../TextMainScreen/TextMainScreen";


const Bottons = (props) => {

    const [click, setClick] = useState(undefined)
    const [idP, setIdP] = useState('')


    console.log(props.id)
    const darMatch = (boolean) => {
  
      const body = {
        id: '6g72H0f3cVretMxppMYt',
        choice:boolean
      }
      console.log(body)
      axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gus/choose-person', body)
      .then((response)=> {
        console.log(response.data);
        // setClick(response.data.click)
      }).catch((error)=>{
        console.log(error.message)
      })
    }

  return (
    <div>
        <C.BottonsStyled src={like} onClick={() => darMatch(true)}></C.BottonsStyled>
        <C.BottonsStyled src={deslike} onClick={() => darMatch(false)}></C.BottonsStyled>
    </div>
  )
} 
export default Bottons;









// const Match = (boolean) => {

//   axios
//   .post(
//     "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/choose-person",
//     {"id": id,
//       "choice": boolean})
//   .then(() => {
//     console.log(`O match foi ${boolean}`)
//     setProximo(proximo + 1)


//     })
//   .catch((err) => {
//       console.log(err);
//     })
  
//   }
// </img></button>
