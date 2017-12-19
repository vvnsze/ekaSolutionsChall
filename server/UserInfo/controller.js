const UserInfo = require('./model');
const chalk = require('chalk');

exports.addFormTwo = (req, res) => {
  new UserInfo ({
    user_id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    telephone: req.body.telephone
  }).save()
  .then((result) => {
    res.send({result: 'success'})
  }).catch((err) => {
    console.log(chalk.red('err: '), err);
    res.send({ error: 'there was an error' })
  })

};
