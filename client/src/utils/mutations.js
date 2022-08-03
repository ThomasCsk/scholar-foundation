import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $name: String!
    $email: String!
    $password: String!
    $admin: Boolean!
  ) {
    addUser(
      username: $username  
      name: $name
      email: $email
      password: $password
      admin: $admin
    ) {
      token
      user {
        _id
      }
    }
  }
`;
