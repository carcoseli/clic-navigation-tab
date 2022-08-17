import { View, Text, Pressable, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { idGenerator } from '../../../utils/IdGenerator';
import { TextInput } from 'react-native-gesture-handler';
import { ImageBackground, NativeModules } from 'react-native-web';
import { doc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../../config/firebase';





export default function CreateScreen() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null)
   

    const createProduct = async () => {
        if (!productName || !price || !description) {
            Alert.alert("ERROR Datos vacios");
        } else {
            const id = idGenerator(10);
            await setDoc(doc(db, "products", "id"), {
                id: id,
                productName: productName,
                description: description,
                price: price
            });
            console.log("creadacorrecta")
            //NativeModules.DevSettings.reload();
        }
    };




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Producto</Text>
            <TextInput
                style={styles.imput}
                onChangeText={(value) => setProductName(value)}
                value={productName}
                placeholder="Nombre del producto"
            />
            <TextInput
                style={styles.textArea}
                onChangeText={(value) => setDescription(value)}
                value={description}
                placeholder="Descripción del producto"
                multiline
                numberOfLines={3}
            />
            <TextInput
                style={styles.imput}
                onChangeText={(value) => setPrice(value)}
                value={price}
                placeholder="Precio del producto"
            />
            <Image
                style={styles.image}
                source={require('../../../assets/noPicture.png')}
            />
            <Pressable onPress={(createProduct)} style={styles.button}>

                <Text style={styles.label}>Crear Producto</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    imput: {
        marginTop: 10,
        borderWidth: 1,
        width: 340,
        height: 50,
        borderRadius: 5,
        borderColor: "#02CCFF",
        padding: 10,
    },
    textArea: {
        marginTop: 10,
        borderWidth: 1,
        width: 340,
        height: 100,
        borderRadius: 5,
        borderColor: "#02CCFF",
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    button: {
        marginTop: 20,
        //marginBottom: 30,
        padding: 10,
        backgroundColor: "#02CCFF",
        borderRadius: 5,
        width: 340,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        color: "#FFF",
        backgroundColor: "#02CCFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});