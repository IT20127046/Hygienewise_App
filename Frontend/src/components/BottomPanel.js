import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

export default function BottomPanel() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <View style={styles.bottomView}>
            <View style={styles.fixToText}>
                <Text style={styles.textStyle}><FontAwesomeIcon icon={ faMugSaucer } /></Text>
                <Text style={styles.textStyle}>Hello</Text>
                <Text style={styles.textStyle}>Hello</Text>
                <Text style={styles.textStyle}>Hello</Text>
                <Text style={styles.textStyle}>Hello</Text>
            </View>
          {/* <Text style={styles.textStyle}>Bottom View</Text> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomView: {
      width: '100%',
      height: 60,
      backgroundColor: '#F0FFFF',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
    },
    textStyle: {
      color: '#6495ed',
      fontSize: 18,
      marginLeft: 20,
      marginRight: 20
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify',
      },
  });