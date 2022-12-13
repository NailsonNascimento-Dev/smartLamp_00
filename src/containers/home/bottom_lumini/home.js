// home.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'tuya-panel-kit';

export default ({ navigator }) => (
  <View style={[styles.container, styles.center]}>
    <Text style={styles.welcomeTxt}>
      Welcome to basic usage of NavigatorLayout
    </Text>
    {[1, 2].map(v => (
      <Button
        style={styles.btnStyle}
        key={v}
        onPress={() => navigator.push({ id: `page${v}` })}
      >
        <Text style={styles.navTxt}>Go to page {v}</Text>
      </Button>
    ))}
  </View>
);