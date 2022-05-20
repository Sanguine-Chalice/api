import { gql } from 'apollo-server';

export default gql`
  type AuthInfo {
    accessToken: String!
    refreshToken: String!
  }
`;
