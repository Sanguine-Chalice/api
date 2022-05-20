import 'dotenv/config';

export const graphql = {
  port: parseInt(process.env.API_GRAPHQL_PORT || '4000', 10)
};

export const logging = {
  level: process.env.API_LOG_LEVEL || 'info',
  timestampFormat: process.env.API_LOG_TIME_FMT
};

export const socket = {
  port: parseInt(process.env.API_SOCKET_PORT || '4001', 10)
};

export default {
  graphql,
  logging,
  socket
};
