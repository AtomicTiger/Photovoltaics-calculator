import { useState } from 'react';
import './inputs.css';
function Inputs(props) {
    const [data, setData] = useState({
      "input": [
        {
          deg: "",
          lat: "",
          lon: "",
          az: "",
          wp: ""
        }
      ]
    })
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setData(prevState => ({
        input: [{
          ...prevState.input[0],
          [name]: value
        }]
      }))
      props.onSaveInnerData(data);
    }
  
    return (
      <div>
        <form>
          <label>Latitude</label>
          <br></br>
          <input type="number" name="lat" placeholder="lat" onChange={handleChange} />
          <br></br>
          <br></br>
          <label>Longitude</label>
          <br></br>
          <input type="number" name="lon" placeholder="lon" onChange={handleChange} />
          <br></br>
          <br></br>
          <label>Degrees</label>
          <br></br>
          <input type="number" name="deg" placeholder="deg" onChange={handleChange} />
          <br></br>
          <br></br>
          <label>Plane Azimuth</label>
          <br></br>
          <input type="number" name="az" placeholder="az" onChange={handleChange} />
          <br></br>
          <br></br>
          <label>Installed Watt-Peak</label>
          <br></br>
          <input type="number" name="wp" placeholder="wp" onChange={handleChange} />
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }

export default Inputs;
