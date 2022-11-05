import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

export default function TextArea({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        theme={{ colors: { primary: '#6495ed',underlineColor:'transparent',}}}
        multiline={true}
        style={styles.input}
        //selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
        height: 100
    },
    description: {
      fontSize: 13,
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      paddingTop: 8,
    },
  })
