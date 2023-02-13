// import { ScrollView } from "react-native"
// import { SafeAreaView } from "react-native-web"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Linking
} from 'react-native';
import { Button1 } from './Button';
// import ProgressBarClassic from 'react-native-progress-bar-classic';
import {useState, useEffect} from "react";
import { Progress } from './Progress';
import { Extra } from './Extra';
import { Info } from './Info';
// import { ProgressBar} from "react-native-paper";




const UserCv = () => {
    const Data = [
        { button: "Name: ", info: "Yasmin" },
        { button: "Residence: ", info: 'BD' },
        { button: "Freelancer: ", info: 'Available' },
        { button: "Adress: ", info: 'ok' },
    ];

    const skills = [
        {width: "100%", value: "100%", skill: "HTML"},
        {width: "75%", value: "75%", skill: "CSS"},
        {width: "55%", value: "55%", skill: "Bootstrap"},
        {width: "50%", value: "50%", skill: "Angular"},
        {width: "85%", value: "85%", skill: "React"},
        {width: "62%", value: "62%", skill: "Node js"},
    ];

    const extra = [
        {value: "MongoDB"},
        {value: "ES6"},
        {value: "Testing"},
        {value: "MongoDB"},
    ]

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <ScrollView style={styles.container} 
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>
                <Image style={styles.userImg} source={require('../assets/user.jpg')} />
                <Text style={styles.userName}>Yasmin Emad</Text>
                <Text style={styles.aboutUser}>Frontend Developer</Text>
                <View style={styles.icons}>
                    <MaterialCommunityIcons name="facebook" color={"#fff"} size={20} style={styles.icon} onPress={() => Linking.openURL('http://google.com')} />
                    <MaterialCommunityIcons name="twitter" color={"#fff"} size={20} style={styles.icon} onPress={() => Linking.openURL('http://google.com')} />
                    <MaterialCommunityIcons name="instagram" color={"#fff"} size={20} style={styles.icon} onPress={() => Linking.openURL('http://google.com')} />
                    <MaterialCommunityIcons name="linkedin" color={"#fff"} size={20} style={styles.icon} onPress={() => Linking.openURL('http://google.com')} />
                    <MaterialCommunityIcons name="whatsapp" color={"#fff"} size={20} style={styles.icon} onPress={() => Linking.openURL('http://google.com')} />
                </View>
                <View style={styles.hairlineWidth} />
                <View>
                    {Data.map((i) =>(
                        <Info key={i} item={i} />
                    )
                    )}
                </View>
                <View style={styles.hairlineWidth} />
                <Text style={styles.heading}>Skills</Text>
                <View style={styles.progress}>
                    {skills.map((i) =>(
                        <Progress item={i} />
                    )
                    )}
                </View>
                <View style={styles.hairlineWidth} />
                <View style={styles.heading}>Extra Skills</View>
                <View style={styles.extra}>
                    {extra.map((i) => (
                        <Extra item={i} />
                    ))}
                </View>
                <TouchableOpacity  style={styles.btn} onPress={() => Linking.openURL('http://google.com')}>
                    <Button1 />
                </TouchableOpacity>
                {/* <Button
                    title="Press me"
                    onPress={() => {uri}}
                /> */}
                {/* <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('http://google.com')}>
                Google
                </Text> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserCv;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    },
    userImg: {
    height: 200,
    width: 200,
    borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    icons: {
        flex: 2,
        flexDirection: 'row',
        // borderBottomColor: '#ccc',
        // borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
        marginRight: 10,
        borderRadius: 75,
        padding:5,
        backgroundColor: '#FFC000'
    },
    hairlineWidth: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 250
    },
    progress: {
        textAlignVertical: 'baseline',
        marginTop: 10,
        width: '100%',
        borderRadius: 75
    },
    heading: {
        fontWeight: 'bolder',
        fontSize: 30,
        marginBottom: 20,
        // textAlign: 'left',
        // justifyContent: 'flex-start'
    },
    extra: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
    },
    btn: {
        backgroundColor: '#FFC000',
        marginTop:50,
        borderRadius: 5
    }
});

