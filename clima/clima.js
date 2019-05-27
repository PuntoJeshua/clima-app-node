const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=afc548e8b060aae0945d4bfc47ec2e9a&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}