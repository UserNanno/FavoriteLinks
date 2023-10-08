const express = require('express');
const morgan = require('morgan');


//  initializations
const app = express();

//  settings
app.set('port', process.env.PORT || 4000);

// Midedlewares
app.use(morgan('dev'));

// Global Variables

// Routes

app.use(require('./routes')); //Busca automaticamente el archivo index.js

// Public

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});