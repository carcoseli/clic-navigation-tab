import {View, Text, TextInput, StyleSheet, Image, Pressable, Alert, NativeModules, ScrollView, Button} from 'react-native'
import React, { useState } from 'react'
import { idGenerator } from '../../utils/idGenerator';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../config/FireBase';
import {getStorage,ref,uploadBytesResumable,getDownloadURL,} from "firebase/storage"; import * as ImagePicker from 'expo-image-picker';



export default function Add(){
    //hooks 
        const [productName,setproductName]=useState('');
        const [productDescription,setproductDescription]=useState('');
        const [productPrice,setproductPrice]=useState('');
        const [image, setImage] = useState(null);

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
};
const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const upLoadImage = (id) => {
    const storage = getStorage();
    const file=image;

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + String(id)+'.jpg');
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
     (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
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
        bImage: {
            width: 180,
            height: 180,
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
        button2: {
            marginTop: 20,
            //marginBottom: 30,
            padding: 10,
            backgroundColor: "#02CCFF",
            borderRadius: 5,
            width: 180,
            height: 180,
            alignItems: "center",
            justifyContent: "center",
          },
        textButton: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
        },
        label: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          },
});
