const Address = require('./model');
const chalk = require('chalk');

exports.addFormThree = (req, res) => {
  console.log(chalk.cyan('add formThree: '), req.body);
  res.send({ got:'it' });
  // new Address ({
  //   address: req.body.address,
  // }).save()
  // .then((result) => {
  //   console.log(chalk.magenta('result: '), result)
  //   res.send({result: 'success'})
  // }).catch((err) => {
  //   console.log(err);
  //   res.send({ error: 'there was an error' })
  // })

};
