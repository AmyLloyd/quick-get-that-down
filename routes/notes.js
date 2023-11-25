const notes = require('express').Router();

//Helper function to generate unique ids
const uuid = require('../helpers/uuid');

//import notesData from db.json
const notesData = require('../db/db.json');

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
            id: uuid(),
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

//Write delete - not working yet

notes.delete('notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete note`);
    //Log that a DELETE was received
    const noteToDelete = parseString(req.params.id);
    const updatedNotes = notesData.filter((id) => id !== noteToDelete);
  
    if (!updatedNotes) {
      response.status(500).send('Note not found.');
    } else {
    response.status(200).send('Notes updated');
      res.writeTotFile('./db/db.json', updatedNotes);
    }
});

// // Delete a task. Thanks to https://github.com/Evgen097/nodejs-test-project-examples/tree/99e9bb2c9bd9918ac4c4708b1923de4f424f68d0/10_Project_Karma/index.js#L53
// notes.delete('/tasks/:id', function(req, res) {
//     const id = req.params.id;
//     app.db('tasks').remove({
//       id: id
//     });
//     return res.status(201).end();
//   });

module.exports = notes;