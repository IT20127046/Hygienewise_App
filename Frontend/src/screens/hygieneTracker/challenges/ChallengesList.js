import React from 'react'
import axios from 'axios'
import { Card, List } from 'react-native-paper'
import { ImageBackground, StyleSheet, View } from 'react-native'

/**
 * To render the list of challenges existing in the database
 */

export default function ChallengesList() {
    // To store all the challenges retrieved from the database
    const [allChallenges, setAllChallenges] = React.useState([])

    // To get all the challenges from the database
    React.useEffect(() => {
        axios.get(`http://192.168.1.103:5000/challenge/getAll`)
            .then(response => {
                if (response.data.success) {
                    // Save retrieved challenges to the state
                    setAllChallenges(response.data.existingRecords)
                }
            })
            .catch(error => {
                // Handle error when retrieving challenges
                console.log(error)
            })
    }, [])

    // To render each challenge
    const onSelectChallenge = () => {

    }

    return (
        <List.Section>
            {allChallenges.map((item, index) => {
                return (
                    <View style={styles.container} key={index}>
                        <Card style={styles.card} onPress={onSelectChallenge}>
                            <ImageBackground borderRadius={20} source={require('../../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
                                <Card.Title title={item.challengeName} />
                            </ImageBackground>
                        </Card>
                    </View>
                )
            })}
        </List.Section>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 30,
    },
    card: {
        marginBottom: 10,
        borderRadius: 20,
    },
    imageBackground: {
        width: '100%',
        height: 200,
    }
});