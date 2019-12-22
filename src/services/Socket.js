import hotels from './Hotels';
const socket = require('socket.io-client')(process.env.REACT_APP_SERVER_URL);
hotels(socket);
