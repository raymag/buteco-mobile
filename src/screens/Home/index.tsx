import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Button from '../../components/Button';
import Chat from '../../components/Chat';
import MessageSender from '../../components/MessageSender';
import {SocketContext} from '../../hooks/socket';
import {MessageProps, useMessage} from '../../hooks/useMessage';
import {Container, Header, Veil, Title} from './styles';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [id, setId] = useState('unknown');
  const {pushMessage} = useMessage();
  const {socket} = useContext(SocketContext);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('registration', (data: any) => {
      setId(data.id);
    });
    socket.on('chat-message', (msg: MessageProps) => {
      msg.highlight = msg.id === id && id !== 'unknown';
      pushMessage(msg);
    });

    return () => {
      socket.off('connect');
      socket.off('registration');
      socket.off('chat-message');
    };
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Veil>
        <Title>Buteco</Title>
        <Container>
          <Header>
            <Button text="Set name" />
          </Header>
          <Chat />
        </Container>
      </Veil>
      <MessageSender id={id} />
    </SafeAreaView>
  );
};
export default Home;
