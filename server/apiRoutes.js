const bodyParser = require('body-parser')
const express = require('express');
const router = express.Router()
const chalk = require('chalk');
const controllerOne = require('./User/controller');
const controllerTwo = require('./UserInfo/controller');
const controllerThree = require('./Address/controller');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use('/*', (req, res, next) => {
	console.log(chalk.blue(`Request Url: ${req.url}`))
	next();
})

router.post('/formOne', (req, res) => {
  controllerOne.addFormOne(req, res);
});

router.post('/formTwo', (req, res) => {
  controllerTwo.addFormTwo(req, res);
});

router.post('/formThree', (req, res) => {
  controllerThree.addFormThree(req, res);
});

module.exports = router;
