// import the gql tagged template function
const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');
const dateFormat = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    // convert outgoing Date to integer for JSON
    return value.getTime();
  },
  parseValue(value) {
    // convert incoming integer to Date
    return new Date(value); 
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // convert hard-coded AST string
      return new Date(parseInt(ast.value, 10)); 
    }
    // invalid hard-coded value (not an integer)
    return null; 
  },
});

// create our typeDefs
const typeDefs = gql`  

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    name: String!
    admin: Boolean!
    applications: [Application]
  }
  
  type Application {
    _id: ID
    createdAt: String 
    name: String!
    birthday: String
    phoneNumber: String
    addressStreet: String
    addressCity: String
    state: Statelist
    zipCode: Int
    guardianName: String!
    guardianPhone: String!
    grade: Gradelist
    school: String 
    currentStatus: Int
  }

  type Query {
    me: User 
    users: [User]
    user(username: String!): User
    applications(currentStatus: Int): [Application]
    application(name: String!): Application
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, name: String!, admin: Boolean!): Auth
    addApplication(createdAt: String,
                  name: String!
                  birthday: String
                  phoneNumber: String
                  addressStreet: String
                  addressCity: String
                  state: Statelist
                  zipCode: Int
                  guardianName: String!
                  guardianPhone: String!
                  grade: Gradelist
                  school: String
                  currentStatus: Int): Application
  }

  type Auth {
    token: ID!
    user: User
  }

  enum Gradelist {
      SIXTH
      SEVENTH
      EIGHTH
      NINTH
      TENTH
      ELEVENTH
      TWELTH 
    }

  enum Statelist {
      ALABAMA 
      ALASKA 
      ARIZONA 
      ARKANSAS 
      CALIFORNIA 
      COLORADO 
      CONNECTICUT 
      DELAWARE 
      FLORIDA 
      GEORGIA 
      HAWAII 
      IDAHO 
      ILLINOIS
      INDIANA 
      IOWA 
      KANSAS 
      KENTUCKY 
      LOUISIANA 
      MAINE 
      MARYLAND 
      MASSACHUSETTS 
      MICHIGAN 
      MINNESOTA 
      MISSISSIPPI 
      MISSOURI 
      MONTANA
      NEBRASKA 
      NEVADA 
      NEW_HAMPSHIRE 
      NEW_JERSEY 
      NEW_MEXICO 
      NEW_YORK 
      NORTH_CAROLINA 
      NORTH_DAKOTA 
      OHIO 
      OKLAHOMA 
      OREGON 
      PENNSYLVANIA
      RHODE_ISLAND 
      SOUTH_CAROLINA 
      SOUTH_DAKOTA 
      TENNESSEE 
      TEXAS 
      UTAH 
      VERMONT 
      VIRGINIA 
      WASHINGTON 
      WEST_VIRGINIA 
      WISCONSIN 
      WYOMING    
    }
`;

// export the typeDefs
module.exports = typeDefs;