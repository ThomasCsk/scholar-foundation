const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Application'
      }
    ],
    admin: {
      // 0 if student, 1 if staff/admin
      type: Boolean,
      required: true
    }
  }
)

const User = model('User', userSchema);

module.exports = User;