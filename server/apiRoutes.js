const bodyParser = require('body-parser')
const express = require('express');
const router = express.Router()
const chalk = require('chalk');
const controller = require('./User/controller');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use('/*', (req, res, next) => {
	console.log(chalk.blue(`Request Url: ${req.url}`))
	next();
})

router.post('/formOne', (req, res) => {
  controller.addFormOne(req, res);
});


module.exports = router;
