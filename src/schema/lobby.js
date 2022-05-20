import { gql } from 'apollo-server';

export default gql`
  type Lobby {
    id: UUID!
    name: String!
    password: String
  }

  input LobbyInput {
    name: String!
    password: String
  }
`;
