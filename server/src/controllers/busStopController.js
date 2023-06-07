const axios = require('axios');
const { apiKey } = require('../config/config');

const getBusStop = (req, res) => {
    const coords = {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    };

    console.log('coords', coords)

    const route = `http://bustime.mta.info/api/where/stops-for-location.json?lat=${coords.latitude}&lon=${coords.longitude}&latSpan=0.018&lonSpan=0.018&key=${apiKey}`;

    axios.get(route)
        .then(response => {
            const responseData = response.data;
            const busStops = responseData.data.stops;
            console.log("bus stops : ", busStops)

            const buses = busStops.map(busStop => {
                const stopName = busStop.name;
                const busDirection = busStop.direction
                const busRoutes = busStop.routes.map(routeName => routeName.id);

                return {
                    stopName,
                    busDirection,
                    busRoutes,
                };
            });
            console.log("Buses : ", buses)
            res.json(buses);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to fetch bus stop data!' })
        });
}

module.exports = {
    getBusStop,
}