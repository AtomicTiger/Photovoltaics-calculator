import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import './map.css'
import 'leaflet/dist/leaflet.css';

function MyMap(props) {
  const [clickedLatLng, setClickedLatLng] = useState(null);

  const handleClick = (event) => {
    setClickedLatLng(event.latlng);
    
  }
  
  useEffect(() => {
    if (clickedLatLng !== null) {
      props.onSaveInnerData(clickedLatLng);
    }
  }, [clickedLatLng]);
  
  const MyComponent = () => {
    useMapEvents({
      click: handleClick,
    });
    return null;
  }
return (
  <MapContainer center={[51.505, -0.09]} zoom={13} className="map">
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <MyComponent />
    {clickedLatLng && (
      <Marker position={clickedLatLng}>
        <Popup>
          You clicked at {clickedLatLng.lat.toFixed(4)}, {clickedLatLng.lng.toFixed(4)}
        </Popup>
      </Marker>
    )}
  </MapContainer>
);
}
export default MyMap;