require('dotenv').config(); // .env variables

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const db = require('./app/models');
const app = express();

const corsOptions = {
  origin: 'https://v-note-mongo.herokuapp.com/',
  method: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: [
    'Origin',
    'Content-Type',
    'Authorization',
    'Accept',
    'x-access-token',
  ],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// db
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connect db succeeded!'))
  .catch((err) => {
    console.log('Connect db failed!', err);
    process.exit();
  });

// routes
const note = require('./app/routes/note');
const publish = require('./app/routes/publish');

app.use('/api/note', note, (req, res, next) => next());
app.use('/api/publish', publish, (req, res, next) => next());

// server
app.listen(PORT, () => console.log('Server is running.'));
