const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TaskSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'First name must be provided']
  },
  last_name: {
    type: String,
    required: [true, 'Last name must be provided']
  },
  email: {
    type: String,
    Required:  'Email address cannot be left blank.',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true,  'Password cannot be left blank']
  },
  dob: { 
    type: Date ,
    required: [true, 'Date of birth must be provided']
  },
  country: { 
    type: String , 
    required: [true, 'Country cannot be left blank.']
  },
  gender: { 
    type: String , 
    required: [true, 'Gender must be provided']
  },
  hobbies: {
     type: String
     },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('user', TaskSchema)
