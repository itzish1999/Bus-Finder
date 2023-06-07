import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLocation } from './utils';
import { getlocation } from './app/features/location/location-slice';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((state) => state.location);

  const location = useGetLocation();

  useEffect(() => {
    dispatch(getlocation(location));

    if (latitude && longitude) {
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
  }, [dispatch, location, latitude, longitude]);

  return (
    <div className="App">
      <p>BUS APP</p>
    </div>
  );
}

export default App;
