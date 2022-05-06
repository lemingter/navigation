import React from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from'../styles';

const Box = ({children}) => {

    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
            <Button onPress={() => navigation.navigate('Details', {
                id: {key},
                description: "Aqui va una descripcion",
                })}/>
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;