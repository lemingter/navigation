import React from 'react';
import {View, Text} from 'react-native';
import styles from "../styles"
import NavigationButtons from './NavigationButtons';

function DetailScreen({route}) {
    const {id, description} = route.params;

    return (
        <View style={styles.containerDetails}>
            <View  style={styles.textDetails}>
                <Text style={{alignSelf:"center", fontSize:40}}>Tarea {id}</Text>
                <Text>{description}</Text>
            </View>
            <NavigationButtons/>
        </View>
    );
}

export default DetailScreen;