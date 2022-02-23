const express = require('express');

const { addclientArray } = require('./clientArray.controller');
const router = express.Router();

router.post('/', addclientArray);

module.exports = router;
