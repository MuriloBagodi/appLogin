import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Login/title/index'
import Main from './src/components/Login/Main/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    marginTop: 30
  },
});
