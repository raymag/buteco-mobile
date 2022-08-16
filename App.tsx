import React, {useEffect, useContext, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './src/components/Button';
import Chat from './src/components/Chat';
import theme from './src/global/theme';
import {Container, Footer, Header, Input, Veil, Title} from './styles';
import {Message} from './src/components/Chat/styles';
import {SocketContext} from './src/hooks/context';

export type Message = {
  nickname: string;
  message: string;
};

const App = () => {
  const [nickname, setNickname] = useState('Bêbado');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const {socket} = useContext(SocketContext);

  const sendMessage = (message: string) => {
    if (message !== '') {
      console.log('send', message);
      socket.emit('chat message', {
        nickname: nickname,
        message: message,
      });
      setMessage('');
    }
  };

  useEffect(() => {
    console.log(socket.connected);
    socket.on('connect', () => {
      console.log(socket.connected); // true
    });

    socket.on('chat message', (msg: Message) => {
      console.log('receive', msg);
      const temp = messages;
      temp.push(msg);
      if (temp.length > 9) {
        const newMessages = temp.slice(4, temp.length - 1);
        setMessages(newMessages);
      } else {
        console.log('all', messages);
        setMessages(temp);
      }
    });

    socket.on('connect_error', err => {
      console.log(`connect_error due to ${err.message}`);
    });

    return () => {
      socket.off('connect');
      socket.off('chat message');
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Veil>
          <Title>Buteco</Title>
          <Container>
            <Header>
              <Button text="Set name" />
            </Header>
            <Chat messages={messages} />
          </Container>
        </Veil>
        <Footer>
          <Input
            value={message}
            onChangeText={setMessage}
            placeholder="Mensage"
            placeholderTextColor="#767"
          />
          <Button
            text="Send"
            color="accent"
            onPress={() => sendMessage(message)}
          />
        </Footer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
