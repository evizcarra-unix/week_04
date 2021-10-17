const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();

const weatherData = require('../utils/weatherData');

//Operationable on port 3000
const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../main')

const viewsPath = path.join(__dirname, '../templates/views');

const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Current Weather'
    })
})

//localhost:3000/weather?address=rexburg
/*This is an endpoint for the weather app.*/
app.get('/weather', (req, res) => {
    const address = req.query.address
    if(!address) {
        return res.send({
            error: "There must be a city typed in search box."
        })
}
    //Retrieves the data ran from script.
    weatherData(address, (error, {temperature, description, cityName} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
});

//Informs the User of any bad connection
app.get("*", (req, res) => {
    res.render('404', {
        title: "Page Not Found."
    })
})

//While running, it informs the backend user the status of the site.
app.listen(port, () => {
    console.log("Server is up and running on port: ", port);
})