const axios = require('axios');
const { apiKey } = require('../config/config');

const getBusStop = (req, res) => {
    const coords = {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    };

    console.log('coords', coords)

    const route = `http://bustime.mta.info/api/where/stops-for-location.json?lat=${coords.latitude}&lon=${coords.longitude}&latSpan=0.015&lonSpan=0.016&key=${apiKey}`;

    axios.get(route)
        .then(response => {
            const responseData = response.data
            console.log('response : ', responseData);
            res.json(responseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to fetch bus stop data!' })
        });
}

module.exports = {
    getBusStop,
}