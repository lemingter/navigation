import React from 'react';
import Box from './Box';
import {View} from 'react-native';
import styles from '../styles';

function Menu(props) {
    const boxes = new Array(10).fill(null).map((value, i) => i + 1);
    return (
        <View style={styles.container}>
            {
                boxes.map(value => (
                    <Box key = {value}>Tarea {value}</Box>
                ))
            }
            
        </View>
    );
}

export default Menu;