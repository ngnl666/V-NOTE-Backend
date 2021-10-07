const express = require('express');
const multer = require('multer');
const router = express.Router();
const note = require('../controller/note.controller');

// set multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now());
//     },
// });
// const upload = multer({ storage: storage });

// BaseUrl: /api/note/
router.post('/', note.create);

router.get('/', note.getAll);

router.get('/:id', note.getOne);

router.put('/:id', note.update);

router.delete('/:id', note.delete);

module.exports = router;
