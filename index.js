const express = require('express');
const path = require('path');
//Routers
const mainRouter = require('./routes/main.js');
const testRoter = require('./routes/test.js')



const server = express();
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: false}));
server.use('/', mainRouter);
server.use('/test', testRoter);





server.listen(8000);