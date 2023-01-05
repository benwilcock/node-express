const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from the server!');
// });

// set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // render the 'index' template, and pass in a title and message
  res.render('pages/index', { title: 'My Express App', message: 'Hello World' });
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
