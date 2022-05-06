import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({route, navigation}) {
    const {id, description} = route.params;

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7cb342'}}>
            <Text>Details Screen</Text>  
            <Text>Screen: {id}</Text>
            <Text>Descripcion: {description}</Text>

            <View style={styles.containerButton}>
                <Button 
                    color="#ff8f00"
                    title="Tarea 1" 
                    onPress={() => navigation.push('Details', {
                        id: 1,
                        description: "Ir de Compras"
                    })}
                /> 
                <Button 
                    color="#ff8f00"
                    title="Tarea 2" 
                    onPress={() => navigation.push('Details', {
                        id: 2,
                        description: "Jugar"
                    })}
                /> 
                <Button 
                    color="#ff8f00"
                    title="Tarea 3" 
                    onPress={() => navigation.push('Details', {
                        id: 3,
                        description: "Ver One Piece"
                    })}
                /> 
             </View>

            <View style={styles.containerButton}>
                <Button 
                    color="#ff8f00"
                    title="Atras" 
                    onPress={() => navigation.goBack()}
                /> 
                <Button 
                    color="#ff8f00"
                    title="Home" 
                    onPress={() => navigation.navigate('Home')}
                /> 
                <Button 
                    color="#ff8f00"
                    title="Ir a Detalle" 
                    onPress={() => navigation.push('Details')}
                /> 
             </View>

             <Button 
                color="#ff8f00"
                title="Inicio"
                onPress={() => navigation.popToTop()}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aee571',

        margin: 20,
        padding: 5,
        
        width: 300,
        height: 100,
    }
})

export default DetailScreen;