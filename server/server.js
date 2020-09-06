//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory


//app.use(express.static('./angular/dist'));
//OK app.use(express.static(__dirname + '/../angular/dist'));
app.use(express.static('angular/dist/meanjs20'));

app.get('/*', function(req, res) {
    console.log('El valor de __dirname es ', __dirname);
    //res.sendFile('index.html', { root: 'angular/dist/' });
    //res.sendFile('./angular/dist/index.html');
    //OK res.sendFile(path.join(__dirname + '/../angular/dist/meanjs20/index.html'));
    res.sendFile(path.resolve(__dirname + 'angular/dist/meanjs20/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);