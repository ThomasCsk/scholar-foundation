// importing the mongoose models  
const { User, Application } = require('../models');
// error handling for auth errors 
const { AuthenticationError } = require('apollo-server-express');
// importing the signToken function 
const { signToken } = require('../utils/auth');

const resolvers = {
    // find all applications in order of descending date
    Query: {
        applications: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Application.find(params).sort({ createdAt: -1 });
            },
    },
        // find one application by name  
        application: async (parent, { _id }) => {
            return Application.findOne({ _id });
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

    Mutation: {
        // adds a user 
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        // lets a user login and gives auth errors 
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('The email is incorrect');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('The password is incorrect')
            }

            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;