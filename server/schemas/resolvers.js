// importing the mongoose models  
const { User, Application } = require('../models');

const resolvers = {
    // find all applications in order of descending date
    Query: {
        applications: async (parent, { name }) => {
            const params = name ? { name } : {};
            return Application.find(params).sort({ createdAt: -1 });
            },
    },
        // find one application by name 
        applications: async (parent, { name }) => {
            return Application.findOne({ name });
    },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('applications')
    },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('applications')
    },
};

module.exports = resolvers;