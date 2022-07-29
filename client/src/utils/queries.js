import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query user{
    _id
    username
    email
    name
    admin
    applications{
      _id
      name
    } 
  }
`;
export const QUERY_APPLICATIONS = gql`
  query application{
    _id
    createdAt
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
`;