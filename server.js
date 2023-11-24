const express = require('express');
const path = require('path');

//Import the notes router
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;;

const app = express();

//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Middleware to serve up static assets from the public folder
app.use ('/api', api);

//GET route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html')));

//GET route for the notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
console.log((`App listening at http://localhost:${PORT}`)));