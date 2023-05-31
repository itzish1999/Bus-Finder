const express = require('express');
const axios = require('axios');
const router = express.Router();
const { apiKey } = require('../config/config');

let coordinates = [];

router.get('/see-coordinates', (req, res) => {
    res.send(coordinates);
});

router.post('/location', (req, res) => {
    const coords = {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    };

    coordinates.push(coords);

    console.log('coords', coords);

    res.send('coord received')
})

router.get('/bus-stops', (req, res) => {
    const longitudeArr = coordinates.map(el => el.longitude);
    const latitudeArr = coordinates.map(el => el.latitude);
    const longitude = longitudeArr[0];
    const latitude = latitudeArr[0];

    const route = `http://bustime.mta.info/api/where/stops-for-location.json?lat=${latitude}&lon=${longitude}&latSpan=0.005&lonSpan=0.005&key=${apiKey}`;

    axios.get(route)
        .then(response => {
            const responseData = response.data;
            res.json(responseData);
        })
        .catch(err => console.log(err));
})

module.exports = router;