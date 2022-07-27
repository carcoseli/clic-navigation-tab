import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from "react-native";
import TabNavigation from "../navigation/TabNavigation";

export default function Register(props) {
    const { navigation } = props;
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [edad, setEdad] = useState(null);
    const [pais, setPais] = useState(null);
    const [email, setEmail] = useState(null);
    const [tlf, setTlf] = useState(null);



    const registrar = () => {
        Alert.alert("Registro Exitoso");
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/mp.png')}
            />
            <Text style={styles.title}>NEW USER - Fill the blocks</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(value) => setUserName(value)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />

            <TextInput
                style={styles.input}
                placeholder="Edad"
                onChangeText={(value) => setEdad(value)}
                value={edad}
            />
            <TextInput
                style={styles.input}
                placeholder="Pais"
                onChangeText={(value) => setPais(value)}
                value={pais}
            />

            <TextInput
                style={styles.input}
                placeholder="Mail"
                onChangeText={(value) => setEmail(value)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone"
                onChangeText={(value) => setTlf(value)}
                value={tlf}
            />

            <Pressable
                onPress={registrar}
                style={styles.button}
            >
                <Text style={styles.textButton}>Create Account!</Text>
            </Pressable>
            <Text
                onPress={() => navigation.navigate("Login")}
                style={styles.link}>¿Ya tienes una cuenta?</Text>
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
        height: 170,
        marginTop: 100,
        marginBottom: 30,
    },
    title: {
        marginBottom: 5,
        color: "red",
        fontSize: 25,
    },
    input: {
        marginTop: 5,
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 20,
        borderColor: "#02CCFF",
        padding: 10,
    },
    button: {
        marginTop: 20,
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