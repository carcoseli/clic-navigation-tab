import {View, Text, TextInput, StyleSheet, Image, Pressable, Alert, NativeModules, ScrollView, Button} from 'react-native'
import React, { useState } from 'react'
import { idGenerator } from '../../utils/idGenerator';
import { doc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../config/FireBase';




export default function Add(){
    //hooks 
        const [productName,setproductName]=useState('');
        const [productDescription,setproductDescription]=useState('');
        const [productPrice,setproductPrice]=useState('');


const createProduct = async() => {
    if (!productName || !productDescription || !productPrice) {
        Alert.alert("Datos no ingresados")
    } else {
        const id = idGenerator(10);
        await setDoc(doc(db, "Products", id), {
            id:id,
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
          });
          console.log('Creacion Correcta de Producto')
          //NativeModules.DevSettings.reload(); // recargar la pantalla
    }
}

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Crear Producto</Text>

            <TextInput
            style={styles.input}
            placeholder="Nombre del Producto"
            onChangeText={(value) => setproductName(value)}
            value={productName}
            
            />
            
            <TextInput
            style={styles.input}
            placeholder="Descripción del Producto"
            onChangeText={(value) => setproductDescription(value)}
            value={productDescription}
            multiline
            numberOfLines={3}
            />
            <TextInput
            style={styles.input}
            placeholder="Precio del Producto"
            onChangeText={(value) => setproductPrice(value)}
            value={productPrice}
            />

            

            <Pressable onPress={createProduct} style={styles.button}>
                <Text style={styles.textButton}>Crear Producto</Text>
            </Pressable>
            
        </View> 

    )
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            //justifyContent: 'center',
        },
        title: {
            fontSize:20,
            fontWeight: 'bold',
        },
        input: {
            marginTop: 10,
            borderWidth: 1,
            width: 340,
            height: 50,
            borderRadius: 15,
            borderColor: "#02CCFF",
            padding: 10,
        },
        textArea: {
            marginTop: 10,
            borderWidth: 2,
            width: 340,
            height: 100,
            borderRadius: 5,
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
});
