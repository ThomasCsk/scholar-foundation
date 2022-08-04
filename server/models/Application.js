const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateformat');

const applicationSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    name: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Must be a valid phone number!']
    },
    addressStreet: {
      type: String,
      required: true
    },
    addressCity: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: Number,
      required: true
    },
    guardianName: {
      type: String,
      required: true,
      trim: true
    },
    guardianPhone: {
      type: String,
      required: true,
      match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Must be a valid phone number!']
    },
    grade: {
      type: String,
      required: true
    },
    school: {
      type: String,
      required: true,
      trim: true
    },
    currentStatus: {
      // 0 for pending, 1 for accepted, 2 for denied
      type: Number,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Application = model('Application', applicationSchema)

module.exports = Application;