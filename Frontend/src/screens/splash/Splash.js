/**
 * This components used to display small loading page
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
        Navigation.navigate('Home');
        setIsGo(false);
      }, 3000);
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/SplashImg.png')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
}
