import { gql } from '@apollo/client';

export const GET_COMPANY_QUERY = gql`
  query Company($where: CompanyWhereInput!) {
    company(where: $where) {
      id
      name
      slug
      contactEmail
      address
      description
      note
      phoneNumber
      website
      categories {
        id
        name
        color
      }
    }
  }
`;

export const GET_COMPANIES_QUERY = gql`
  query {
    companies {
      id
      name
      phoneNumber
      website
      categories {
        id
        name
        color
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

export const UNSAVE_COMPANY_MUTATION = gql`
  mutation ($input: SaveCompanyInput!) {
    unsaveCompany(input: $input) {
      ok
      errors {
        message
        path
      }
    }
  }
`;

export const IS_COMPANY_SAVED_BY_USER_QUERY = gql`
  query IsCompanySavedByUser($where: CompanyWhereInput!) {
    isCompanySavedByUser(where: $where)
  }
`;
