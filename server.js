const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// enable parsing of JSON bodies in request
app.use(express.json());
app.use(express.static('public'));

// create a list of items
const messages = {
  msg_subject: 'Secure software supply chains are great!',
  msg_body: 'This is my message body.',
  client: 'VMware',
  framework: 'Node JS, Express, and EJS'
};

// define a route to retrieve all items
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // render the 'index' template, and pass in a title and message
  res.render('pages/index', { 
    title: 'Powered By VMware Tanzu Application Platform', 
    client: messages.client,
    framework: messages.framework
   });
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});


var server = app.listen(port);
module.exports = server;
