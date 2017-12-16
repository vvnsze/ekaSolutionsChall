const config = require('../config/database');

console.log('hello')
const User = config.bookshelf.Model.extend({
   tableName: 'users',
   userInfo: function() {
     return this.hasOne(userInfo);
   },
   address: function() {
     return this.hasOne(address);
   }
});

module.exports = User;
