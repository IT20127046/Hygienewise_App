import React from 'react'
import axios from 'axios'
import { Button, Card, Dialog, List, Portal, Provider, Text } from 'react-native-paper'
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native'
import { BASE_URL } from '../../../api/BaseURL.const'

/**
 * To render the list of challenges existing in the database
 */

export default function ChallengesList() {
    // To store all the challenges retrieved from the database
    const [allChallenges, setAllChallenges] = React.useState([])

    // To get all the challenges from the database
    React.useEffect(() => {
        axios.get(BASE_URL + `challenge/getAll`)
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

    // This is the state for the dialog box
    const [visible, setVisible] = React.useState(false);
    const [selectedChallenge, setSelectedChallenge] = React.useState({});
    const showDialog = () => {
        setVisible(true);
    }
    const hideDialog = () => {
        setVisible(false);
        setSelectedChallenge({});
    }

    const onAccept = () => {
        // add the challenge to the logged in user's challenges list
    }

    // To display a dialog box with task name and calendar view when a task is clicked
    if (visible) {
        return (
            <Provider>
                <Portal.Host>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>{selectedChallenge.challengeName}</Dialog.Title>
                        <Dialog.ScrollArea>
                            <ScrollView>
                                {selectedChallenge.taskList.map((task, index) => {
                                    return (
                                        <Text key={index}>{task.taskName}</Text>
                                    )
                                })}
                            </ScrollView>
                        </Dialog.ScrollArea>
                        <Dialog.Actions>
                            <Button onPress={onAccept} color="#5CB3FF">Accept</Button>
                            <Button onPress={hideDialog} color="#5CB3FF">Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal.Host>
            </Provider>
        );
    }

    return (
        <List.Section>
            {allChallenges.map((item, index) => {
                return (
                    <View style={styles.container} key={index}>
                        <Card style={styles.card} onPress={
                            () => {
                                showDialog();
                                setSelectedChallenge(item);
                            }
                        }>
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