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

export const ADD_APPLICATION = gql`
  mutation AddApplication($name: String!, $guardianName: String!, $guardianPhone: String!) {
    addApplication(name: $name, guardianName: $guardianName, guardianPhone: $guardianPhone) {
      _id
      name
      birthday
      phoneNumber
      addressStreet
      addressCity
      state
      zipCode
      guardianName
      guardianPhone
      grade
      school
      currentStatus
    }
  }
`

export const EDIT_APPLICATION = gql`
  mutation EditApplication($name: String!, $guardianName: String!, $guardianPhone: String!) {
    editApplication(name: $name, guardianName: $guardianName, guardianPhone: $guardianPhone) {
      _id
      name
      birthday
      phoneNumber
      addressStreet
      addressCity
      state
      zipCode
      guardianName
      guardianPhone
      grade
      school
      currentStatus
    }
  }
`

export const ACCEPT_APPLICATION = gql`
  mutation Mutation($name: String!) {
    acceptApplication(name: $name) {
      _id
      createdAt
      name
      currentStatus
    }
  }
`

export const DENY_APPLICATION = gql`
  mutation Mutation($name: String!) {
    denyApplication(name: $name) {
      _id
      createdAt
      name
      currentStatus
    }
  }
`
