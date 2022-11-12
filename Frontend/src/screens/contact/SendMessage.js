/**
 * This componenets used to display order list for the site manager
 */
import {React, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Background from '../../components/session/Background';
import {BASE_URL} from '../../api/BaseURL.const';

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

export default function SendMessage() {
  const Navigation = useNavigation();

  //When user press a particular order that redirect to more details screnn of the particular order
  const onPressOrder = () => {
    Navigation.navigate('MyIssues');
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>
          Get help from the relevant authorities
        </Text>
        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={styles.mainButtonBlock}
                onPress={() => {
                  Navigation.navigate('MessageA');
                }}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/a1.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('MessageA');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockTextnew}>PHI</Text>
                <Text style={styles.mainButtonBlockText}>Mr. Sadun Gamage</Text>

                <View style={styles.statusSection}>
                  <Text style={styles.statusText}>Message</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={styles.mainButtonBlock}
                onPress={() => {
                  Navigation.navigate('MessageA');
                }}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/a2.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('MessageA');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockTextnew}>Doctor</Text>
                <Text style={styles.mainButtonBlockText}>
                  Mrs. Thilini Perera
                </Text>

                <View style={styles.statusSection}>
                  <Text style={styles.statusText}>Message</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={styles.mainButtonBlock}
                onPress={() => {
                  Navigation.navigate('MessageA');
                }}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/a3.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('MessageA');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockTextnew}>
                  Family Health Officer
                </Text>
                <Text style={styles.mainButtonBlockText}>
                  Mrs. Sasini Perera
                </Text>

                <View style={styles.statusSection}>
                  <Text style={styles.statusText}>Message</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    height: 175,
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

  mainButtonBlock: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtonBlockText: {
    fontSize: 20,
    color: '#000000',
  },
  mainButtonBlockTextnew: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
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
  image: {
    width: 150,
    height: 150,
    backgroundColor: '#EBECF0',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#FFFFFF',
  },
});
