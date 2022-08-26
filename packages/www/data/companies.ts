import { gql } from '@apollo/client';

export const GET_COMPANY_QUERY = gql`
  query Company($where: CompanyWhereInput!) {
    company(where: $where) {
      id
      name
      slug
      contactEmail
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
