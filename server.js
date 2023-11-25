//Import express.js
const express = require('express');
//path package brought in to resolve path of files that are located on server
const path = require('path');

//Import the notes router
const api = require('./routes/index');

//specify the port it will run on plus process.env port for heroku

const PORT = process.env.PORT || 3001;

//initialize an instance of express.js
const app = express();

//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Middleware to serve up static assets from the public folder
app.use(express.static('public'));

app.use ('/api', api);

//GET route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//GET route for the notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.listen(PORT, () =>
console.log((`App listening at http://localhost:${PORT}`)));