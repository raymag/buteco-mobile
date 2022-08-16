import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import {useMessage} from '../../hooks/useMessage';
import {Container, Message, Sender, Text} from './styles';

const Chat = ({id}: any) => {
  const {messages} = useMessage();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({animated: false})
        }>
        {messages.map((msg, index) => {
          return (
            <Message key={index} highlight={msg.id === id && id !== 'unknown'}>
              <Sender>{msg.nickname}: </Sender>
              <Text>{msg.message}</Text>
            </Message>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Chat;
