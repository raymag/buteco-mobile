import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';

import {MessageProvider} from './src/hooks/useMessage';
import SocketProvider from './src/hooks/socket';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SocketProvider>
      <MessageProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </MessageProvider>
    </SocketProvider>
  );
};

export default App;
