const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));

// Back-end routes
app.use('/api', require('./routes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log("Your server, listening on port 3000");
});