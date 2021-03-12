const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Dhanish Kumar S'
  });
});

module.exports = router;
