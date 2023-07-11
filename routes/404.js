const express = require('express');

const router = express.Router();

router.get('*', (req, res) => {
  res.status(404).send('Need Glasses?');
});

module.exports = router;
