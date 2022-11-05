import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default function Complaints() {

  const Navigation = useNavigation();

  return (
    <View>
      <Text>Complaints</Text>

      <View style={styles.fixToText}>
      <TouchableOpacity style={styles.mainButtonBlock} onPress={()=>{Navigation.navigate('SelectComplaintType');}}>
        <Text style={styles.mainButtonBlockText}>Add New Complaint</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.mainButtonBlock}>
          <Text style={styles.mainButtonBlockText}>View Complaints</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainButtonBlock: {
    width: 150,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',

  },
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});
