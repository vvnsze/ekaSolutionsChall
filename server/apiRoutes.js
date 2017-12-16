const bodyParser = require('body-parser')
const express = require('express');
const router = express.Router()
const chalk = require('chalk');
const user = require('./User/routes');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/*', (req, res, next) => {
	console.log(chalk.blue(`Request Url: ${req.url}`))
	next();
})

router.use('/api/formOne', user);

module.exports = router;
