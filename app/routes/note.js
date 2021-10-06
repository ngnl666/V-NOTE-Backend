const express = require('express');
const router = express.Router();
const note = require('../controller/note.controller');

// BaseUrl: /api/note/

router.post('/', note.create);

router.get('/', note.getAll);

router.get('/:id', note.getOne);

router.put('/:id', note.update);

router.delete('/:id', note.delete);

module.exports = router;
