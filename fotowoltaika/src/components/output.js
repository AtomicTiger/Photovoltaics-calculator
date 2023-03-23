

function Output(props) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'solarenergyprediction.p.rapidapi.com'
        }
    };
    
    fetch('https://solarenergyprediction.p.rapidapi.com/v2.0/solar/prediction?lat=49.3418836&lon=8.8006813&loss=14&plant=0xAb425D74eA0113d11c3092E47a4C0542C25973db&deg=32&az=45&wp=6442&inverter=4500&decoration=default', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <div>

    </div>
  );
}

export default Output;
