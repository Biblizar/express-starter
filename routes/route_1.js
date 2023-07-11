const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('alive on route 1');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`alive on route 1 with id ${id}`);
});

module.exports = router;
