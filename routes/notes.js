const notes = require('express').Router();

//Helper function to generate unique ids
const uuid = require('../helpers/uuid');

//Helper function for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route for submitting notes
notes.post('/', (req, res) => {
    //Log that a POST was received
    console.info(`${req.method} request received to submit note`);

    //Destructure assignment for the items in req.body
    const { title, text } = req.body;

    //If all the required properties are present
    if (title && text) {
        //variable for the object we will save
        const newNote = {
            title,
            text,
            note_id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting feedback');
    }
});

module.exports = notes;