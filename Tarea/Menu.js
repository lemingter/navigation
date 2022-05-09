import React from 'react';
import Box from './Box';
import {View, Button} from 'react-native';
import styles from '../styles';

function Menu({navigation}) {
    const boxes = new Array(10).fill(null).map((value, i) => i + 1);
    return (
        <View style={styles.containerDetails}>
            <View style={styles.containerBoxes}>
                {
                    boxes.map(value => (
                        <Box key = {value}>Tarea {value}
                        <Button
                            title="Detalle" 
                            onPress={() => navigation.navigate('Details', {
                                id: value,
                                description: "Descripcion de la tarea " + value,
                        })}/>
                        </Box>
                    ))
                }
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

export default Menu;