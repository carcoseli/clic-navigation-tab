import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from "react-native";
import TabNavigation from "../navigation/TabNavigation";

export default function Login(props) {
    const { navigation } = props;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const login = () => {
        //ponemos el nombre de nuestra pantalla en este caso Main
        if (email == 'Santi' && password == 123) {
            Alert.alert("BIENVENIDO: ",email);
            navigation.navigate("Main"); //ver Navigation la clase que importamos como TabNav
        } else {
            Alert.alert("ERROR! - CONTRASEÑAS o USUARIO INVÁLIDO");
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.title}>LOGIN</Text>
            <Text style={styles.title}>Compra Fácil y Rápido</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={(value) => setEmail(value)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />
            <Pressable
                onPress={login}
                style={styles.button}
            >
                <Text style={styles.textButton}>Iniciar Sesión</Text>
            </Pressable>
            <Text
                onPress={() => navigation.navigate("Register")}
                style={styles.link}>¿No tienes una cuenta?</Text>
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
        height: 125,
        marginTop: 100,
        marginBottom: 30,
    },
    title: {
        marginBottom: 50,
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
        marginTop: 30,
        marginBottom: 30,
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
        marginTop: 20,
        color: "#02CCFF",
        fontWeight: "bold",
    }
});