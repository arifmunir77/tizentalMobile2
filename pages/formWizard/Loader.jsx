import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};
export default Loader;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    width,
    height,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',zIndex:5
  },
});
