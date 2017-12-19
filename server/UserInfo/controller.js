const UserInfo = require('./model');
const User = require('../User/model');
const chalk = require('chalk');

exports.addFormTwo = (req, res) => {
  new UserInfo ({
    user_id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    telephone: req.body.telephone
  }).save()
  .then((result) => {
    console.log(chalk.magenta('result: '), result)
    res.send({result: 'success'})
  }).catch((err) => {
    console.log(err);
    res.send({ error: 'there was an error' })
  })

};
