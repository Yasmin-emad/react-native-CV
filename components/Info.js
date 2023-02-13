import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';


export const Info = ({ item }) => {
    return (
    <View  style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.data1}>{item.button}</Text>
        <Text style={styles.data2}>{item.info}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: '#ccc',
    paddingTop: 30,
    paddingBottom: 20,
    width: 255,
    // marginRight: -50
    },
    data1: {
        backgroundColor: '#FFC000',
        padding: 10,
        color: '#fff',
        fontSize:15,
        fontWeight: 'bolder',
        // marginLeft: -50,
        marginEnd: 'auto'
    },
    data2: {
        fontSize: 18,
        fontWeight: 640,
        // marginTop: 5,
        // marginBottom: 5,
        marginStart: 'auto',
    },
});