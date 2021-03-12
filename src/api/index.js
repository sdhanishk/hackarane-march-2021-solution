const express = require('express');

const info = require('./info');
const projects = require('./projects');

const router = express.Router();

router.use('/info', info);
router.use('/projects', projects);

module.exports = router;
