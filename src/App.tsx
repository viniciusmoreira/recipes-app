import React from 'react';
import { View, StatusBar } from 'react-native';
import Home from './pages/Home';

// import { Container } from './styles';

const src: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Home />
    </View>
  </>
);

export default src;
