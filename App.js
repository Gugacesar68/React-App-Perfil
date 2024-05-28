import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right'
  },

  imagem_perfil: {
    aspectRatio: 1/1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 1000
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imagem_container}>
          <Image style={styles.imagem_perfil} source={require('./images/b8abe72dec611e80cc1a5b08bf849460.jpg')}/>
      </View>
      <Text>Olá mundo!</Text>
      <Text>Meu nome é Gustavo César</Text>
      <Text>Finalmente meu primeiro App React Native está completo</Text>
      <Text>Mas eu não estou entendendo Nada o que está acontecendo aqui</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}