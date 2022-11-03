/**
 * This compoenets used to dipaly small loading page
 */
import {useNavigation} from '@react-navigation/native';
import {React, useState, useEffect} from 'react';
import {Image, View} from 'react-native';

export default function Splash() {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        Navigation.navigate('Login');
        setIsGo(false);
      }, 2000);
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/Hygienewise-Logo.png')}
        style={{width: 200, height: 150}}
      />
    </View>
  );
}
