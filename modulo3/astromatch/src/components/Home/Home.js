import { useState, useEffect } from "react";
// import Swal from "sweetalert2";
import axios from "axios";
import * as C from './HomeStyles'
// import Load from '../Load/Load';



const Home = () => {
  const [profile, setProfile] = useState([]);
  const [stopLoading, setStopLoading] = useState(false);

  useEffect(() => {
      getProfile();
    ;
  }, []);

  useEffect(() => {}, [profile]);

  const getProfile = () => {
    setRemoveLoading(false);
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/person"
      )
      .then((res) => {
        setPessoa(res.data.profile);
        setRemoveLoading(true);
        console.log(res.data.profile);
      })
      .catch((error) => {
        console.log("error", error.response || []);
      });
  };

  const ChoosePerson = () => {
    setRemoveLoading(false);
    const body = { id: pessoa.id, choice: true };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/choose-person",
        body
      )
      .then((res) => {
        getProfileToChoose();
        console.log(res.data.isMatch);
        if (res.data.isMatch === true) {
          Swal.fire({
            title: "Match!!",
            text: `Você deu match com ${pessoa.name} .`,
            imageUrl: `${pessoa.photo}`,
            imageWidth: 200,
            imageHeight: 200,
          });
        }
      })
      .catch((error) => {
        alert(error.response);
      });
  };



  return (
    <div>
      <C.ContainerHome>

      </C.ContainerHome>
    </div>
  );
};

export default Home;