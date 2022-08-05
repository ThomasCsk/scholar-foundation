// importing the mongoose models  
const { User, Application } = require('../models');
// error handling for auth errors 
const { AuthenticationError } = require('apollo-server-express');
// importing the signToken function 
const { signToken } = require('../utils/auth');

const resolvers = {
    // find all applications in order of descending date
    Query: {
        applications: async (parent, { currentStatus }) => {
            const params = currentStatus ? { currentStatus } : {};
            return Application.find(params).sort({ createdAt: -1 });
        },
    
        // find one application by name  
        application: async (parent, { name }) => {
            const userApplication = await Application.findOne({ name });
            return {userApplication};
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
        // verify the users token
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password') 
                .populate('applications');

            return userData;
        }

        throw new AuthenticationError('Not logged in');
    }
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
                throw new AuthenticationError('The email or password is incorrect');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('The email or password is incorrect')
            }

            const token = signToken(user);
            return { token, user };
        },
        // creates the application 
        addApplication: async (parent, args, context) => {
            console.log(context.user);
            // ensuring the user is logged in
            if (context.user) {
                const application = await Application.create({ ...args, username: context.user.username });
          
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { applications: application } },
                    { new: true }
                );
          
                return application;
            }
          
            throw new AuthenticationError('You need to be logged in.');
          },
        // edits the application
        editApplication: async (parent, args, context) => {
            // ensuring the user is logged in
            if (context.user) {
                // getting the users id
                const user = await User.findById( context.user.id );
                // get the application info
                const {name} = user;

            const application = await Application.findOneAndUpdate(
                { name: name },
                 args,
                { new: true }
            );

            return application;
        }

        throw new AuthenticationError('You need to be logged in.');
        },
        acceptApplication: async(parent, args) => {
            let filter = Application.findOne({name: args.name})
            let update = {currentStatus: 1};
            const app = await Application.findOneAndUpdate(filter, update, {new: true});
            return app
        },
        denyApplication: async(parent, args) => {
            let filter = Application.findOne({name: args.name})
            let update = {currentStatus: 2};
            const app = await Application.findOneAndUpdate(filter, update, {new: true});
            return app
        }
    }
};

module.exports = resolvers;