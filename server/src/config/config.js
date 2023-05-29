require('dotenv').config();

const port = process.env.PORT || 7070;
const apiKey = process.env.SECRET_KEY;

module.exports = {
    port,
    apiKey
}