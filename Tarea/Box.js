import React from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from'../styles';
import { useNavigation } from '@react-navigation/native';

function Box({id, description}) {

    const navigation = useNavigation();
    
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>Tarea {id}</Text>
            <Button
                title="Detalle" 
                onPress={() => navigation.navigate('Details', {
                    id: id,
                    description: description,
            })}/> 
        </View>
    );
}

export default Box;