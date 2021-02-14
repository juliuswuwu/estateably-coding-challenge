const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const transactions = require('./routes/api/transactions');

const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

mongoose
  .connect(db, { useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/transactions', transactions);

app.listen(port, () => console.log(`Server is running on port ${port}`));