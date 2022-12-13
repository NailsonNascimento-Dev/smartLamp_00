import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeBottomView from './bottom';
import Lamp from '../lamp';
const HomeScene = () => (
  <View style={styles.container}>
    {/* Chama imagem da lâmpada/botão on/off */}
    <Lamp />

      {/* Chama menu/botões inferirores  */}
    <HomeBottomView /> 
      
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

  text:{
    flex:1,
    color: 'red',
    textAlign: 'center'
   
  }
});

export default HomeScene;
