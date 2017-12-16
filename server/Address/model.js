const config = require('../config/database');

const Address = config.bookshelf.Model.extend({
  tableName: 'addresses',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Address;
