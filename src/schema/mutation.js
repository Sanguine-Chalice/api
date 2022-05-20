import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    login(username: String!, password: String!): AuthInfo
    register(
      username: String!
      password: String!
      email: EmailAddress!
    ): AuthInfo

    createLobby(lobby: LobbyInput!): Lobby
    removeLobby(id: UUID!): Boolean
    joinLobby(id: UUID!): Lobby
    leaveLobby: Boolean
  }
`;
