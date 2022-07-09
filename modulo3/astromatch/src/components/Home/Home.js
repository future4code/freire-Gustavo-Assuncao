import React, {useState, useEffect} from 'react'
import axios from "axios"
import * as C from './HomeStyles';
import contact from "../../assets/contact.png";
import reject from "../../assets/reject.png"
import heart from "../../assets/heart.png"
import clean from "../../assets/clean.png"

function Home(props) {

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
    <C.AppContainer>
    <C.MenuBar>
        <button onClick={()=>cleanList()}><img src={clean} height ="35" width="35"></img></button>
        <h2>Astromatch</h2>
        <button onClick={props.goToList}><img src={contact} height ="35" width="35"></img></button>
    </C.MenuBar>
    {ProfilesList === null ? (
        
        <h1>Nada foi encontrado!</h1>
    ):(
        <C.Elements>
        
        <C.Picture>
            <img src={ProfilesList.photo}/>
        </C.Picture>
    <C.Profile>
        <h2>🟢{ProfilesList.name}, {ProfilesList.age}</h2>
        <p>{ProfilesList.bio}</p>
    </C.Profile>
        <C.Buttons>
            <button onClick={()=>choosePerson(ProfilesList.id, false)}> <img src={reject} height ="30" width="30"></img></button>
            <button onClick={()=>choosePerson(ProfilesList.id, true)}> <img src={heart} height ="30" width="30"></img></button>
        </C.Buttons>
</C.Elements>
    )
}
</C.AppContainer>
);
}


export default Home;