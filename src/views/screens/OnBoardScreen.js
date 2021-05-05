import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OnBoardScreen = ({navigation}) => {
    return (
        <SafeAreaView 
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
            <View style={{ height:400 }} >
                {/* <Image style={{
                    width:"100%",
                    resizeMode: "contain",
                    // top: -150,
                }} 
                // source={require("../../assets/onboardImage.png")} />
                // source={require("../../assets/d63bf7c3-0d8a-47da-b446-82220ede3a9e.jpg")} />
                source="https://drive.google.com/file/d/1PvFLitvvLt6087mPAqFq5xwPlQV486LW/view?usp=sharing" /> */}
                <Icon 
                style={{
                    // width:"100%",
                    // resizeMode: "contain",
                    // top: -150,
                    justifyContent:'center',
                    textAlign:'center',
                    alignItems:'center',
                    marginTop:80
                }}
                name="monetization-on" size={200} color="black"/>
                
            </View>
            <View style={style.textContainer} >
                <View>
                    <Text 
                        style={{
                            fontSize:32,
                            fontWeight:"bold",
                            textAlign:"center",
                        }}
                    >
                        Banque du Maroc
                    </Text>
                    <Text
                        style={{
                            marginTop:10,
                            fontSize:18,
                            textAlign:"center",
                            color: COLORS.grey,
                        }}
                    >
                        La banque Centrale Maroc souhaite automatiser son système de taux de change
                    </Text>
                </View>
                <View style={style.indicatorContainer}>
                    <View style={style.currentIndicator} />
                    <View style={style.indicator} />
                    <View style={style.indicator} />
                </View>
                {/* <PrimaryButton onPress={() => navigation.navigate('Home')} title="Get Start"/> */}
                <PrimaryButton 
                    onPress={() => navigation.navigate('Home')} 
                    title="Get Start"
                />
            </View>
            
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal:50,
        justifyContent:"space-between",
        paddingBottom:40,
    },
    indicatorContainer: {
        height:50,
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    },
    indicator: {
        height:12,
        width:12,
        borderRadius:6,
        backgroundColor:COLORS.grey,
        marginHorizontal:5,
    }
});

export default OnBoardScreen;