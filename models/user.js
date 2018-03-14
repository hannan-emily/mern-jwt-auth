var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 99
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 99
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 99
  }
})

//this returns a user object, but strips the password out
userSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      name: ret.name
    }
    return returnJson
  }
})
