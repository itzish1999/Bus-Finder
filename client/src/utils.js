import { useState, useEffect } from 'react';

export const getLocation = () => {

    const [location, setLocation] = useState({});
    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            });
        }
        getLocation();
    }, [])
    return location;
};