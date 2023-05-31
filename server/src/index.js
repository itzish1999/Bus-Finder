const express = require('express');
const { port } = require('./config/config');
const cors = require('cors');
const locationRouter = require('./routes/location');

const app = express();

app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:8000'],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', locationRouter);

app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`);
});

