import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Button1 = () => {

    return(
        <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('http://google.com')}>
            <Text style={styles.text}>Download CV</Text>
            <MaterialCommunityIcons name="download" color={"#fff"} size={20} style={{marginTop: 5, marginStart: 5}}  />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFC000',
        padding: 10,
        // borderRadius: 50,
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500
    },
});