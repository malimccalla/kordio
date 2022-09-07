import { gql } from '@apollo/client';

export const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      givenName
      familyName
      picture
      savedCompanies {
        id
        name
        categories {
          id
          name
          color
        }
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginUserViaGoogle($input: LoginUserInput!) {
    login(input: $input) {
      ok
      errors {
        message
        path
      }
      user {
        id
      }
    }
  }
`;
