import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default function FormBackground({children}) {
  return (
    
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F8F6F0',
      margin: 10,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 20
    },
  })
