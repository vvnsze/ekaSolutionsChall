const config = require('../config/database');

const UserInfo = bookshelf.Model.extend({
  tableName: 'userInfos',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = UserInfo;
