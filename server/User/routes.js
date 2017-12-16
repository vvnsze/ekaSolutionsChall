const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/api/formOne', (req, res) => {
  controller.addFormOne(req, res);
});

module.exports = router;
