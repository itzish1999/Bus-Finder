const express = require('express');
const { port } = require('./config/config');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`);
});

