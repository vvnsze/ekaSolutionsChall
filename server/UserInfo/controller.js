const UserInfo = require('./model');
const chalk = require('chalk');

exports.addFormOne = (req, res) => {
  console.log(chalk.cyan('add formOne: '), req.body);
  new UserInfo ({
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
