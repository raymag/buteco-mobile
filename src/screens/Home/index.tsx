import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Button from '../../components/Button';
import Chat from '../../components/Chat';
import MessageSender from '../../components/MessageSender';
import {SocketContext} from '../../hooks/socket';
import {MessageProps, useMessage} from '../../hooks/useMessage';
import {
  Container,
  Header,
  Veil,
  Title,
  ModalVeil,
  ModalContainer,
  Text,
  Input,
} from './styles';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [id, setId] = useState('unknown');
  const [nickname, setNickname] = useState('Bêbado');
  const [showModal, setShowModal] = useState(false);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal(!showModal);
        }}>
        <ModalVeil>
          <ModalContainer>
            <Text>New nickname:</Text>
            <Input value={nickname} onChangeText={setNickname} />
            <Button
              text="Save"
              color="accent"
              onPress={() => setShowModal(!showModal)}
            />
          </ModalContainer>
        </ModalVeil>
      </Modal>
      <Veil>
        <Title>Buteco</Title>
        <Container>
          <Header>
            <Button text="Set name" onPress={() => setShowModal(true)} />
          </Header>
          <Chat id={id} />
        </Container>
      </Veil>
      <MessageSender nickname={nickname} id={id} />
    </SafeAreaView>
  );
};
export default Home;
