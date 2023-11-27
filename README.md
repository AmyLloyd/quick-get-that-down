# Quick get that down App

## Description

'Quick get that down' is the perfect tool for small business people who have a lot to think about and do in a short space of time.

Small business people don't have an extensive budget that can pay for a personal assistant. This is where technology needs to provide a simple, affordable solution. With its simple interface and functionality, small business people from all walks of life will enjoy using 'Quick get that down' or "Quick-D" for short. It is also accessible on multiple devices as the user's data is stored in a JSON file and  through any online device. 

Quick-D was created in response to living a busy life style with work, family and personal commitments. Quick-D acts as a digital assistant to relieve some of the mental load I carry throughout the day. It also plays an important role in recording those thoughts at bedtime, enabling me to sleep easy.

Building this project has taught me to use Promises (async and await) and helpers and middleware with an express.js server. I have gained experience using Heroku for deploying the app, as well as Insomnia and local host Ports when testing routes and functionality during the build. 

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
There aren't specific installation steps as the app is deployed through Heroku and accessible at:
https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/ 

## Usage

To use Quick-D, go to: https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/ and click 'Get started'.

![landing page screen shot](assets\quick-d-landing-page.PNG)


You will be taken to the notes page.
Type in the title and description of the note.

![notes page screenshot](assets\Quick-d-add-note.PNG)

When you have entered both a Title and Description, buttons will appear in the top-right corner.
Click 'Save Note' to save your note for reference later. 

![example note](assets\Quick-d-example-note.PNG)

To go back to a saved note, click on the title in the leftside column.
To delete a note, click on the delete icon.


## Credits
The model for my code was previous Bootcamp examples. 
My tutor helped me to refactor in order to deploy through Heroku.
BCS learning assisstant helped to debug my delete method by adding an await to the readFromFile.

