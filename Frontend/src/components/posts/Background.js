import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
//import { theme } from '../core/theme'

export default function Background({children}) {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/images/gradientBackground.png')}
        style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    
  },
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
  },
});
