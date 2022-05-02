import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text>Details Screen</Text>  

            <View style={styles.containerButton}>
                <Button 
                    title="Atras" 
                    onPress={() => navigation.goBack()}
                /> 
                <Button 
                    title="Home" 
                    onPress={() => navigation.navigate('Home')}
                /> 
                <Button 
                    title="Ir a Detalle" 
                    onPress={() => navigation.push('Details')}
                /> 
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',

        margin: 20,
        padding: 5,
        
        width: 300,
        height: 100,
    }
})

export default DetailScreen;