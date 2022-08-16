import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import {Container, Message, Sender, Text} from './styles';

import {Message as MessageType} from '../../../App';

type Props = {
  messages: MessageType[];
};

const Chat = ({messages}: Props) => {
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({animated: false})
        }>
        {messages.map((msg, index) => (
          <Message key={index}>
            <Sender>{msg.nickname}: </Sender>
            <Text>{msg.message}</Text>
          </Message>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Chat;
