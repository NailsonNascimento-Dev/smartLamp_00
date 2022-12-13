// page.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'tuya-panel-kit';

export default ({ num, navigator }) => (
  <View style={[styles.container, styles.center]}>
    <Text style={styles.welcomeTxt}>This is Page {num}</Text>
    <Button style={styles.btnStyle} onPress={() => navigator.pop()}>
      <Text style={styles.navTxt}>Click to go back!</Text>
    </Button>
  </View>
);