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

export default function ListOfDonation() {
  const Navigation = useNavigation();


  const onPressOrder = () => {
    Navigation.navigate('ViewOrderDetails');
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>List Of Donation</Text>
        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={styles.mainButtonBlock}
                onPress={() => {
                  Navigation.navigate('DonationDetails');
                }}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/d1.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('DonationDetails');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockText}>Sanitizing Gel</Text>

                <View style={styles.statusSection}>
                  <Text style={styles.statusText}>Donate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.mainButtonBlock}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/d2.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('DonationDetails');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockText}>Face Masks</Text>

                <View
                  style={styles.statusSection}
                  onPress={() => {
                    Linking.openURL('https://google.com');
                  }}>
                  <Text style={styles.statusText}>Donate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.mainButtonBlock}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/d3.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('DonationDetails');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockText}>Clean Water</Text>

                <View style={styles.statusSection}>
                  <Text style={styles.statusText}>Donate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.itemBox}>
            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.mainButtonBlock}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/d4.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('DonationDetails');
                }}
                style={styles.mainButtonBlock}>
                <Text style={styles.mainButtonBlockText}>Towels</Text>

                <View style={styles.statusSection}>
                  <Text style={styles.statusText}>Donate</Text>
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
    fontSize: 25,
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
