import { gql } from 'apollo-server';

export default gql`
  type Player {
    id: UUID!
    name: String!
  }

  input PlayerInput {
    name: String!
  }
`;
