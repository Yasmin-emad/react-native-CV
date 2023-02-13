import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

export const Progress = ({ item }) => {

    return(
        <View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.label}>{item.skill}</Text>
                <label style={styles.label}>{item.value}</label>
            </View>
            
            <View style={styles.progress}>
            <View style={{
            width: item.width,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            color: '#fff',
            textAlign:'center',
            backgorundColor:'',
            backgroundColor: '#FFC000'
            }} > 
                {item.value} 
            </View>
        </View>
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    progress: {
        textAlignVertical: 'baseline',
        height: 16,
        overflow: 'hidden',
        backgroundColor: '#ccc',
        marginTop: 10,
        width: '100%',
        borderRadius: 75,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
    },
})