const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=19f069f690836c2b2d31a1501467e851&query=' + latitude + ',' + longitude
    
    request({url, json: true},(error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined, 
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + 
                body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast