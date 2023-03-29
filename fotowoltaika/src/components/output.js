import axios from "axios";
import { useState } from "react";
import Linegraph from "./chart";
import Button from 'react-bootstrap/Button';
import './chart.css'

function Output(props) {
    const [totalWh, setTotalWh] = useState(0);
    const [responsedata, setresponsedata] = useState();
    const [buttonClicked, setButtonClicked] = useState(false); // New state variable
      
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
            });
            setresponsedata(response.data.output);
            setButtonClicked(true); // Set buttonClicked to true on successful response
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log(responsedata)
    return (
        <div>
            <Button variant="danger" onClick={generate_power}>How much power will you get ?</Button>
            <br/><br/>
            <h1>You will gain</h1>
            <h1>{totalWh}</h1>
            <h1> Wats of power</h1>
            {buttonClicked && <Linegraph className="chart" data={responsedata} />} 
        </div>
    );
}

export default Output;