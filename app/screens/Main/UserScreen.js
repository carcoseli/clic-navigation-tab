import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground} from "react-native";


export default function UserScreen() {

    const image = { uri: "https://i.pinimg.com/564x/b6/37/a3/b637a3291ece36bcde89c3991be635f4.jpg" };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>
            <Image
                style={styles.tinyLogo}
                source={require('../../../assets/logoUs.png')}
            />
            <Text style={styles.title}>    Usuario: hllulluna</Text>
            <Text style={styles.title}>    Gmail: david@gmail.com</Text>
            <Text style={styles.title}>    Telefono: 0939137992</Text>
            <Text style={styles.title}>    Dirreccio: Tumbaco</Text>
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
    tinyLogo: {
        width: 360,
        height: 300,
        marginTop: 0,
        marginBottom: 0,
    },
    title: {
        marginBottom: 5,
        color:'#000000',
        backgroundColor:'#00ffff',
        height: 50,
        marginTop:5,
        alignSelf:'center',
        width:350,
        padding:15,
        borderColor: "#00ffff", 
        borderRadius: 20, 
    },
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
});