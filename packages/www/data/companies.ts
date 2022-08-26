import { gql } from '@apollo/client';

export const GET_COMPANY_QUERY = gql`
  query {
    company {
      id
      name
      phoneNumber
      website
      categories {
        name
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
