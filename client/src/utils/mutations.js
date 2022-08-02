import { gql } from '@apollo/client';

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