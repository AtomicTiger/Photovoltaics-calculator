import axios from "axios";
import { useState } from "react";
import LineGraph from "./chart";
import output from "./data.json"
function Output(props) {
    const [totalWh, setTotalWh] = useState(0);
    const [respons_data, set_response_data] = useState()
    set_response_data(output)
    const generate_power = () =>{
        const options = {
            method: 'GET',
            url: 'https://solarenergyprediction.p.rapidapi.com/v2.0/solar/prediction',
            params: {
              lat: props.data.lat,
              lon: props.data.lon,
              loss: '14',
              plant: '0xAb425D74eA0113d11c3092E47a4C0542C25973db',
              deg: props.data.deg,
              az: props.data.az,
              wp: props.data.wp,
              inverter: '4500',
              decoration: 'default'
            },
            headers: {
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'solarenergyprediction.p.rapidapi.com'
            }
          }
          
        
        axios.request(options).then(function (response) {
            response.data.output.forEach(item => {
                setTotalWh(prevTotalWh => prevTotalWh +  item.wh);
                console.log(totalWh)      
            });;
        }).catch(function (error) {
            console.error(error);
        });
    }
  return (
    <div>
        <button onClick={generate_power}>How much power will you get ?</button>
        <h1>You will gain</h1>
        <br/>
        <h1>{totalWh}</h1>
        <br/>
        <h1> Wats of power</h1>
        <LineGraph data = {respons_data}/> 
    </div>
  );
}

export default Output;
