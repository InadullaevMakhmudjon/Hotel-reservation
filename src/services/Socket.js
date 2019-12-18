import hotels from './Hotels';
const socket = require('socket.io-client')('localhost:3031');
hotels(socket);