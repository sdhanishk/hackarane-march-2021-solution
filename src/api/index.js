const express = require('express');

const info = require('./info');

const router = express.Router();

router.use('/info', info);

module.exports = router;
