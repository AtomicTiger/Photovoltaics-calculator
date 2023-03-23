import axios from "axios";
import data from "./response.json"

function Output(props) {
    const generate_power = () =>{
        const options = {
            method: 'GET',
            url: 'https://solarenergyprediction.p.rapidapi.com/v2.0/solar/prediction',
            params: {
                lat: '49.3418836',
                lon: '8.8006813',
                loss: '14',
                plant: '0xAb425D74eA0113d11c3092E47a4C0542C25973db',
                deg: '32',
                az: '45',
                wp: '6442',
                inverter: '4500',
                decoration: 'default'
            },
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'solarenergyprediction.p.rapidapi.com'
            }
        }
        console.log("qwe");
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    }
    // conected with props.data
    // const options = {
    //     method: 'GET',
    //     url: 'https://solarenergyprediction.p.rapidapi.com/v2.0/solar/prediction',
    //     params: {
    //       lat: props.data[0].lat,
    //       lon: props.data[0].lon,
    //       loss: '14',
    //       plant: '0xAb425D74eA0113d11c3092E47a4C0542C25973db',
    //       deg: props.data[0].deg,
    //       az: props.data[0].az,
    //       wp: props.data[0].wp,
    //       inverter: '4500',
    //       decoration: 'default'
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': '',
    //       'X-RapidAPI-Host': 'solarenergyprediction.p.rapidapi.com'
    //     }
    //   }
    
    //   axios.request(options)
    //     .then(function (response) {
    //       console.log(response.data);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // }

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={generate_power}>How much power will you get ?</button>
        <h1>You will gain</h1>
        <br/>
        <h1></h1>
        <br/>
        <h1> Wats of power</h1>

    </div>
  );
}

export default Output;
