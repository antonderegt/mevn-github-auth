var mongoose = require('mongoose')
var Schema = mongoose.Schema

var User = new Schema({
  id: String,
  displayName: String,
  username: String
})

module.exports = mongoose.model('User', User)
