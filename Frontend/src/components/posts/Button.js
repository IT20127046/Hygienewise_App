import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
//import { theme } from '../core/theme'

export default function SubmitButton({mode, style, ...props}) {
  return (
    <PaperButton
      style={[styles.button, mode === 'outlined', style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#6495ed',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 26,
    color: '#ffffff',
    marginLeft:11,
  },
});
