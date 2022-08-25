import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import {Story} from './components/Story';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Story />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;