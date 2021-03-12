const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Some project 1'
  });
});

module.exports = router;
