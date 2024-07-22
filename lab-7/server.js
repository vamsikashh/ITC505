const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

server.use(express.urlencoded({'extended': true}));
server.use(logger('dev'));

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// POST route for the mad lib
server.post('/ITC505/lab-7/index.html', (req, res) => {
    const { noun, verb, adjective, adverb, pluralNoun } = req.body;
    if (!noun || !verb || !adjective || !adverb || !pluralNoun) {
        res.send(`
          <h1>Submission Failed</h1>
          <p>Please fill out ALL fields</p>
          <a href="/">Go Back to Form</a>
        `);
        return;
    }
    const madLib = `Once upon a time, a ${adjective} ${noun} decided to ${verb} ${adverb}. They had many ${pluralNoun} that joined them on their adventure.`;
    res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
});

// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = process.env.PORT || 80;
if (process.argv[2] === 'local') {
  port = 8080;
}
server.listen(port, () => console.log('Ready on localhost!'));
