import React from 'react';
import {Text, ScrollView, ImageBackground, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import axios from 'axios';

/**
 * Menu screen for the Hygiene tracker
 */

export default function SubMenu({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
      <Text />
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('SelectSession')}>
        <ImageBackground
          borderRadius={20}
          source={require('../../assets/images/MenuBackground.jpg')}
          style={styles.imageBackground}>
          <Card.Title title="Awareness Sessions" />
        </ImageBackground>
      </Card>
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('DonationSubMenu')}>
        <ImageBackground
          borderRadius={20}
          source={require('../../assets/images/MenuBackground.jpg')}
          style={styles.imageBackground}>
          <Card.Title title="Donations" />
        </ImageBackground>
      </Card>
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('ContactSubMenu')}>
        <ImageBackground
          borderRadius={20}
          source={require('../../assets/images/MenuBackground.jpg')}
          style={styles.imageBackground}>
          <Card.Title title="Get help from the authorities" />
        </ImageBackground>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 20,
    height: 150,
  },
  imageBackground: {
    width: '100%',
    height: 150,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 8,
    bottom: 5,
  },
});
