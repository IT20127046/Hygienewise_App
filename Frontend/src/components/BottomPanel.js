import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon02 from 'react-native-vector-icons/MaterialIcons';
import Icon03 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function BottomPanel({ navigation }) {

  const Navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <View style={styles.bottomView}>
            <View style={styles.fixToText}>

                <Text style={styles.textStyle} onPress={() => Navigation.navigate("Home")}><Icon name="home" size={30} color="#6495ed"></Icon></Text>
                <Text style={styles.textStyle} onPress={() => Navigation.navigate("PostMain")}><Icon02 name="post-add" size={30} color="#6495ed"></Icon02></Text>
                <Text style={styles.textStyle} onPress={() => Navigation.navigate("Complaints")}><Icon name="questioncircleo" size={30} color="#6495ed"></Icon></Text>
                <Text style={styles.textStyle} onPress={() => Navigation.navigate("SubMenu")}><Icon02 name="event" size={30} color="#6495ed"></Icon02></Text>
                <Text style={styles.textStyle} onPress={() => Navigation.navigate("HygieneTrackerMenu")}><Icon03 name="eight-track" size={30} color="#6495ed"></Icon03></Text>
            </View>
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