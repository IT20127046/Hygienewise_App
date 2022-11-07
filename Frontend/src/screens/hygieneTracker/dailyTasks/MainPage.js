import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import TaskList from './TaskList'

/**
 * The main component of the daily tasks screen
 */

export default function MainPage({ navigation }) {

  return (
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={styles.imageBackground}>
      <View style={styles.viewForSummaryButton}>
        <Button mode='contained' color='white' onPress={() => navigation.navigate("DailyTasksListForSummary")}>Summary</Button>
      </View>

      <ScrollView>
        <Text />
        <TaskList />
      </ScrollView>

      <View style={styles.viewForAddButton}>
        <Button mode='contained' color='#5CB3FF' onPress={() => navigation.navigate("AddNewDailyTask")}>Add New Task</Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  viewForSummaryButton: {
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    top: 0,
  },
  viewForAddButton: {
    flexDirection: 'column',
    padding: 20,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    bottom: 0,
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
}) 
