import React, {useContext, useState} from 'react';
import Button from '../../components/Button';
import {SocketContext} from '../../hooks/socket';
import {Footer, Input} from './styles';

const MessageSender = ({id}: any) => {
  const [message, setMessage] = useState('');
  const {socket} = useContext(SocketContext);

  const sendMessage = (message: string) => {
    if (message !== '') {
      socket.emit('chat-message', {
        nickname: 'Bêbado',
        message: message,
        id: id,
      });
      setMessage('');
    }
  };

  return (
    <Footer>
      <Input
        value={message}
        onChangeText={setMessage}
        placeholder="Mensage"
        placeholderTextColor="#767"
      />
      <Button text="Send" color="accent" onPress={() => sendMessage(message)} />
    </Footer>
  );
};

export default MessageSender;
