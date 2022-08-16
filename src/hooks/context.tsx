import {createContext} from 'react';
import {io} from 'socket.io-client';

export const SocketContext = createContext({
  socket: io('https://open-buteco-server.herokuapp.com', {
    path: '/socket.io',
    withCredentials: false,
  }),
});

const SocketProvider = ({children}: any) => {
  return (
    <SocketContext.Provider
      value={{
        socket: io('https://open-buteco-server.herokuapp.com', {
          path: '/socket.io',
          withCredentials: false,
        }),
      }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
