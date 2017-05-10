const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var User = new Schema({
  id: String,
  displayName: String,
  username: String
})

module.exports = mongoose.model('User', User)
