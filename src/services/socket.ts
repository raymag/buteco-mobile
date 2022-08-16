import {io} from 'socket.io-client';

export const socket = io('http://localhost:3000', {
  path: '/socket.io',
  //   forceNew: true,
  //   reconnectionAttempts: 5,
  //   timeout: 2000,
  //   transports: ['websocket'],
  withCredentials: false,
});

// socket.on('connect', () => {
//   console.log('connected:', socket.connected); // true
// });
