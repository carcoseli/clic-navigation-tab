import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from "react-native";
import TabNavigation from "../navigation/TabNavigation";

export default function Login(props) {
    const { navigation } = props;
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    

    const login = () => {
        //ponemos el nombre de nuestra pantalla en este caso Main
        if (user == 'Santi' && password == 123) {
            Alert.alert("BIENVENIDO: ",user);
            navigation.navigate("Main"); //ver Navigation la clase que importamos como TabNav
        } else {
            Alert.alert("ERROR! - CONTRASEÑAS o USUARIO INVÁLIDO");
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/login.png')}
            />
            <Text style={styles.title}>LOGIN</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(value) => setUser(value)}
                value={user}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />
            
            <Text style={styles.link3}>Forgot Password or account?</Text>

            <Text
                onPress={() => navigation.navigate("Register")}
                style={styles.link}>Create account</Text>

            <Text style={styles.link2}>Remember me</Text>

            <Pressable
                onPress={login}
                style={styles.button}
            >
                <Image
                //source={require('../../assets/mp.png')}
                />
            <Text style={styles.textButton}>LOGIN</Text>
            </Pressable>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    tinyLogo: {
        
        width: 250,
        height: 250,
        marginTop: 100,
        marginBottom: 1,
    },
    title: {
        marginBottom: 10,
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 20,
        borderColor: "#02CCFF",
        padding: 10,
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#02CCFF",
        borderRadius: 7,
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    link: {
        marginTop: 10,
        marginBottom: 5,
        color: "#02CCFF",
        fontWeight: "bold",
    },
    link2: {
        marginTop: 20,
        marginBottom: 20,
        color: "black",//02CCFF
        fontWeight: "bold",
        fontSize:25,
    },
    link3: {
        marginTop: 10,
        marginBottom: 5,
        color: "black",//02CCFF
        fontWeight: "bold",
    }
});