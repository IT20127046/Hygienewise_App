/**
 * This componenets used to display order list for the site manager
 */
import {React, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Background from '../../components/session/Background';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  SectionList,
  Linking,
} from 'react-native';

export default function ViewSessions() {
  const Navigation = useNavigation();

  const [sessions, setSessions] = useState([]);
  const [recieveStatus, setRecieveStatus] = useState('Not Recived');

  useEffect(() => {
    //Call GET method to retive order list from database and set to order array
    axios
      .get('http://192.168.43.153:5000/session/getAll')
      .then(function (response) {
        if (response.data.success) {
          setSessions(response.data.exsitingSession);
        }
      })
      .catch(function (error) {
        alert('Error');
      });
  }, []);

  //When user press a particular order that redirect to more details screnn of the particular order
  const onPressOrder = () => {
    Navigation.navigate('ViewOrderDetails');
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Awareness sessions</Text>

        <View style={styles.containernew}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../../assets/images/all.png')}
            />
          </View>
        </View>

        {sessions.map((data, index) => {
          return (
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() => {
                Linking.openURL(`https://meet.google.com/${data.link}`);
              }}>
              <View style={styles.orderListSection}>
                <View style={styles.orderTitle}>
                  <Text style={styles.sectionHeader}> {data.title} </Text>
                </View>
              </View>
              <Text style={styles.orderDetails}>{data.date}</Text>

              <View
                style={styles.statusSection}
                onPress={() => {
                  Linking.openURL('https://google.com');
                }}>
                <Text style={styles.statusText}>Join</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 8,
    marginTop: -60,
    bottom: 5,
  },
  itemBox: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 359,
    height: 150,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
  },
  orderListSection: {
    alignItems: 'center',
    padding: 10,
  },
  orderTitle: {
    alignItems: 'center',
    marginTop: 8,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  orderDetails: {
    marginLeft: 10,
  },

  statusSection: {
    width: 125,
    height: 40,
    backgroundColor: '#5B78EE',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  statusButton: {
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
  },
  containernew: {
    alignSelf: 'center',
    margin: 2,
    flex: 1,
    width: 350,
    overflow: 'hidden', // for hide the not important parts from circle
    margin: 10,
    height: 200,
  },
  background: {
    // this shape is a circle
    // border borderRadius same as width and height
    // borderRadius: 400,
    width: 535,
    height: 600,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 200, // same width and height for the container
    width: 350,
    position: 'absolute', // position it in circle
    bottom: 5, // position it in circle
    marginLeft: 100, // center it in main view same value as marginLeft for circle but positive
  },
});
