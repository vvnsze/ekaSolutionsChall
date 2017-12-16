const config = require('../config/database');

const User = config.bookshelf.Model.extend({
   tableName: 'users',
   userInfo: function() {
     return this.hasOne(userInfo);
   },
   address: function() {
     return this.hasOne(address);
   }
});

const Users = config.bookshelf.Collection.extend({
  model: User
});

module.exports = User;
