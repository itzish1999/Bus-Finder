import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLocation } from './utils';
import { getBusList } from './app/features/bus-list/busList-slice';
import axios from 'axios';

import BusList from './app/features/bus-list/BusList';

function App() {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((state) => state.location);
  const busList = useSelector((state) => state.busList);
  const location = useSelector((state) => state.location);


  useGetLocation();

  useEffect(() => {
    if (latitude && longitude) {
      axios.post('http://localhost:8000/api/bus-stops', {
        longitude: location.longitude,
        latitude: location.latitude,
      })
        .then(res => {
          console.log('Location sent:', res.data);
          dispatch(getBusList(res.data));
        })
        .catch(error => {
          console.error('Error sending location:', error);
        });
    }
  }, [dispatch, location, latitude, longitude]);

  if (!longitude && !latitude && !busList) {
    return <div>Getting Data...</div>
  }

  return (
    <div className="App">
      {longitude && latitude && busList ? <BusList buses={busList} /> : <div>Getting Data...</div>}
    </div>
  );
}

export default App;
