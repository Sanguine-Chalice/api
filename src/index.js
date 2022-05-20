import { createServer } from 'http';
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { Server } from 'socket.io';
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers
} from 'graphql-scalars';

import { graphql, socket } from './modules/config.js';
import { getLogger } from './modules/logging.js';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

const log = getLogger('app');

const execute = async () => {
  log.info('Starting GraphQL server...');
  const graphqlServer = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [...scalarTypeDefs, ...schema],
      resolvers: [scalarResolvers, resolvers]
    })
  });
  const { url } = await graphqlServer.listen(graphql.port);
  log.info(`GraphQL Server Listening at ${url}`);

  log.info('Starting socket server...');
  const socketServer = createServer();
  const io = new Server(socketServer);

  io.on('connection', (socket) => {
    // eslint-disable-next-line
    console.dir(socket);
  });

  socketServer.listen(socket.port, () => {
    log.info(`Socket server listening on http://localhost:${socket.port}`);
  });
};

execute();
