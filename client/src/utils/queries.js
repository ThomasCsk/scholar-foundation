import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      username
      email
      name
      admin
    }
  }
`;
export const QUERY_APPLICATIONS = gql`
query Applications {
  applications {
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
}
`;
export const QUERY_ME_DASH = gql`
  {
    me{
      _id
      name
      admin
      applications {
        _id
        name
        currentStatus
      }
    }
  }
`