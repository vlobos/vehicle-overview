const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const {router} = require('./router/routes')

const app = express();

app.use(cors());

const port = 8000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, function() {
  console.log("Successfully connected to port: ", port)
})