import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ChallengesList from './ChallengesList'

/**
 * The main component of the challenges
 */

export default function MainPage() {
  return (
    <ScrollView style={styles.scrollView} >
      <ChallengesList />
    </ScrollView>
  )
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
  }
})