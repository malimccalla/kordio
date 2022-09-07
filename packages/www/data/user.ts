import { gql } from '@apollo/client';

export const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      givenName
      familyName
      picture
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

export const SAVE_COMPANY_MUTATION = gql`
  mutation ($input: SaveCompanyInput!) {
    saveCompany(input: $input) {
      ok
      errors {
        message
        path
      }
    }
  }
`;
