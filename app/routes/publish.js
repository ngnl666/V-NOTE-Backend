const express = require('express');
const router = express.Router();
const publish = require('../controller/publish.controller');

router.post('/', publish.create);

router.get('/:page', publish.getPaginate);

router.get('/note/:id', publish.getOne);

router.put('/:id', publish.update);

router.delete('/:id', publish.delete);

module.exports = router;
