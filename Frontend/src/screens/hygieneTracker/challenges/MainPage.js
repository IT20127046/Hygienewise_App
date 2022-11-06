import React from 'react'
import { Text, ImageBackground } from 'react-native'

export default function MainPage() {
  return (
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={{ width: '100%', height: '100%' }}>
      <Text>Challenges</Text>
    </ImageBackground>
  )
}
