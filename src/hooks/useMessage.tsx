import React, {useState, createContext, useContext} from 'react';

export type MessageProps = {
  nickname: string;
  message: string;
  id: string;
  highlight?: boolean;
};

type MessageContextProps = {
  messages: MessageProps[];
  pushMessage: any;
};

const MessageContext = createContext({} as MessageContextProps);
export const MessageProvider = ({children}: any) => {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      nickname: 'string',
      message: 'string',
      id: 'string',
    },
  ]);

  return (
    <MessageContext.Provider
      value={{
        messages,
        pushMessage: (msg: MessageProps) => {
          setMessages(prev => [
            ...prev.slice(prev.length > 9 ? 2 : 0, prev.length),
            msg,
          ]);
        },
      }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  return useContext(MessageContext);
};
