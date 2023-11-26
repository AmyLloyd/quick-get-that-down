const notes = require('express').Router();

//Helper function to generate unique ids
const uuid = require('../helpers/uuid');

//import notesData from db.json
const notesData = require('../db/db.json');



//Helper function for reading and writing to the JSON file
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

//GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//GET Route to retrieve specific note using id
notes.get('/:id', (req, res) => {
    const requestedNote = req.params.id;

    for (let i = 0; i < notesData.length; i++) {
        if (requestedNote === notesData[i].id) {
            return res.json(notesData[i]);
        }
    }

    return res.json("No match found");
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

// notes.delete('/:id', async(req, res) => {
//     const requestedNote = req.params.id;
//     console.log(requestedNote);
//     const updatedNotes = await notesData.delete({ id: requestedNote})
//      //Log that a DELETE was received
//     console.info(`${req.method} request received to delete note`);
//     console.log(updatedNotes);
   
// });

notes.delete("/:id", function(req, res) {
    console.log(notesData);

    let noteID = req.params.id;
    console.log(noteID);

    console.log(`Deleting note with ID ${noteID}`);
    const updatedData = notesData.filter(currNote => {
        return currNote.id != noteID;
    })

    // Write new notes to db.json file
    writeToFile("./db/db.json", updatedData);
    res.json(updatedData);
})

// notes.delete('/:id', (req, res) => {
//     const idToDelete = req.params.id;
//     let data = readFromFile();
//     console.log(data);
//     // const updatedData = data.filter(notes => notes.id !== idToDelete);

//     // if (data.length === updatedData.length) {
//     //     return res.status(404).json({ success: false, message: "data not found" });
//     // }

//     // writeFile(updatedData);

//     // res.json({ success: true, message: 'Data deleted successfully' });
// });


// // Delete a task. Thanks to https://github.com/Evgen097/nodejs-test-project-examples/tree/99e9bb2c9bd9918ac4c4708b1923de4f424f68d0/10_Project_Karma/index.js#L53
// notes.delete('/:id', function(req, res) {
//     const id = req.params.id;
//     app.db('db\db.json').remove({
//       id: id
//     });
//     return res.status(201).end();
//   });
//Tried .map method; 

module.exports = notes;