import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
//import { theme } from '../core/theme'

export default function Background({ children }) {
  return (

<ImageBackground
      source={require('../../assets/images/back.png')}
      resizeMode="repeat"
      style={styles.background}
    >

    </ImageBackground>

    
  )
}

const styles = StyleSheet.create({

  background: {
    width: '100%',
    
  },

})