const Address = require('./model');
const chalk = require('chalk');

exports.addFormThree = (req, res) => {
  new Address ({
    user_id: req.body.id,
    body: req.body.address,
  }).save()
  .then((result) => {
    res.send({result: 'success'})
  }).catch((err) => {
    res.send({ error: 'there was an error' })
  })

};
