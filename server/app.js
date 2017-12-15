const express = require('express');
const path = require('path');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const port = process.env.PORT || 1337
const app = express();

app.use(bodyParser.json());


app.listen(port, () => {
	console.log(chalk.cyan(`<Cozy> is listening on ${port}`))
})
