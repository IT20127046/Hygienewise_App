import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function CalenderViewSummary() {

    const [selectedStartDate, setSelectedStartDate] = React.useState(null);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    const onDateChange = (date) => {
        setSelectedStartDate(date);
    }
    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={onDateChange}
                selectedDayColor="#5CB3FF"
                width={300}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});



//CalenderViewSummary