import React from 'react';
import Box from './Box';
import {View} from 'react-native';
import styles from '../styles';
import NavigationButtons from './NavigationButtons';
import task from '../data/task'

function Menu() {
    return (
        <View style={styles.containerDetails}>
            <View style={styles.containerBoxes}>
                {
                    task.map((task, i) => (
                        <Box 
                            key = {i}
                            id={task.id}
                            description={task.description}
                        />
                    ))
                }
            </View>

            <NavigationButtons/>
            
        </View>
    );
}

export default Menu;