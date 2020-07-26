import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>The Match Maker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#006aff',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});

export default Header;
