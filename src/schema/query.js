import { gql } from 'apollo-server';

export default gql`
  type Query {
    currentPlayer: Player
    players: [Player]
    lobbies: [Lobby]
  }
`;
