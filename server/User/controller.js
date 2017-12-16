const User = require('./model');
const chalk = require('chalk');

exports.addFormOne = (req, res) => {
  console.log(chalk.cyan('add formOne: '), req);
  res.send({hello: 'there'})
};
