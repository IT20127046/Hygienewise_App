import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default function SelectComplaintType() {

    const Navigation = useNavigation();

  return (
    <View>
      <Text>Complaints</Text>

      <View style={styles.fixToText}>
      <TouchableOpacity style={styles.mainButtonBlock} onPress={()=>{Navigation.navigate('AddComplaintDetails');}}>
        <Text style={styles.mainButtonBlockText}>Community Complaint</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.mainButtonBlock}>
          <Text style={styles.mainButtonBlockText}>Complaint to Authorized Person</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    mainButtonBlock: {
      width: 300,
      height: 150,
      backgroundColor: '#6495ed',
      margin: 10,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainButtonBlockText: {
      fontSize: 20,
      color: '#ffffff'
    },
  
    fixToText: {
      marginLeft: 20,
      marginRight: 20,
      textAlign: 'justify',
      alignItems: 'center'
    },

  });
  
