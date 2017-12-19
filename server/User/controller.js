const User = require('./model');
const chalk = require('chalk');

exports.addFormOne = (req, res) => {
  new User ({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).save()
  .then((result) => {
    console.log(chalk.magenta('result: '), result)
    res.send({result: 'success'})
  }).catch((err) => {
    console.log(err);
    res.send({ error: 'there was an error' })
  })
};
