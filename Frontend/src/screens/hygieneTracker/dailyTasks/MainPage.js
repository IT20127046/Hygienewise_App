import React from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function MainPage({ navigation }) {
  return (
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <Text />
        <Text>Daily tasks list goes here</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'column',
          padding: 20,
          alignContent: 'center',
          marginVertical: 20,
          marginHorizontal: 10,
          bottom: 0,
        }}
      >
        <Button mode='contained' color='#5CB3FF' onPress={() => navigation.navigate("AddNewDailyTask")}>Add New Task</Button>
      </View>
    </ImageBackground>
  )
}
