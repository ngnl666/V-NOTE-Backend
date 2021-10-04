const db = require('../models');
const note = db.note;

exports.create = (req, res) => {
    if (!req.body.data) {
        res.status(400).send({ message: '標題或內容不得為空' });
        return;
    }
};
