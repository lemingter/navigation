import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from "../styles"

function DetailScreen({route, navigation}) {
    const {id, description} = route.params;

    return (
        <View style={styles.containerDetails}>
            <View  style={styles.textDetails}>
                <Text style={{alignSelf:"center", fontSize:40}}>Tarea {id}</Text>
                <Text>{description}</Text>
            </View>
            <View style={styles.footer}>
                <Button 
                    title="Atras"
                    onPress={() => navigation.goBack()}
                />
                <Button 
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}

export default DetailScreen;