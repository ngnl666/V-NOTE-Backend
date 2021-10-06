require('dotenv').config(); // .env variables

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const db = require('./app/models');
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
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
    .catch(err => {
        console.log('Connect db failed!', err);
        process.exit();
    });

// routes
const note = require('./app/routes/note');

app.use('/api/note', note, (req, res, next) => {
    res.header('Acces-Control-Allow-Headers', 'Access-Control-Allow-Credentials: true', 'Origin, Cotent-Type, Accept');
    next();
});

// server
app.listen(PORT, () => console.log('Server is running.'));
