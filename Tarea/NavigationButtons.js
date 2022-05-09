import {Button, View} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

function NavigationButtons() {

    const navigation= useNavigation();

    return (
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
    );
}

export default NavigationButtons;