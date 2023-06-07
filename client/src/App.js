import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocation();
    if (location?.latitude && location?.longitude) {
      axios.post('http://localhost:8000/api/bus-stops', {
        longitude: location.longitude,
        latitude: location.latitude,
      })
        .then(res => {
          console.log('Location sent:', res.data);
        })
        .catch(error => {
          console.error('Error sending location:', error);
        });
    }
  }, [location.latitude, location.longitude]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  }

  return (
    <div className="App">
      <p>BUS APP</p>
    </div>
  );
}

export default App;
