import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground} from "react-native";


export default function FavouriteScreen() {

    const image = { uri: "https://i.pinimg.com/564x/35/18/25/351825bb77c7a8910d86ab54d780f23e.jpg" };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>
            
            <Text style={styles.title}>               FavouriteScreen</Text>
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
        height: 60,
        marginTop:5,
        alignSelf:'center',
        width:360,
        padding:15,
        borderColor: "#00ffff", 
        borderRadius: 20, 
        fontSize: 22,
    },
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
});