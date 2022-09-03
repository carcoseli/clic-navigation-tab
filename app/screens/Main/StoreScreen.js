import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground} from "react-native";


export default function StoreScreen() {

    const image = { uri: "https://i.pinimg.com/564x/62/c0/88/62c08850fe36f6f0da4f0e7dea483f1f.jpg" };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>
            
            <Text style={styles.title}>                  StoreScreen</Text>
            </ImageBackground>
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#adff2f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        marginBottom: 5,
        color:'#000000',
        backgroundColor:'#00ffff',
        height: 50,
        marginTop:5,
        alignSelf:'center',
        width:360,
        padding:12,
        borderColor: "#00ffff", 
        borderRadius: 20, 
        fontSize: 22,
    },
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
});