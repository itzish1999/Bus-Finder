import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getlocation } from './app/features/location/location-slice';

export const useGetLocation = () => {
    const [location, setLocation] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            });
        }
        getLocation();

    }, [])

    dispatch(getlocation(location));
    return location;
};