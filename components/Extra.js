import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Extra = ({item}) => {

    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
            <MaterialCommunityIcons name="share" color={"#FFC000"} size={30}  />
            <Text style={{fontWeight: 400, fontSize: 25, marginBottom: 10}}>{item.value}</Text>
        </View>
    )
}