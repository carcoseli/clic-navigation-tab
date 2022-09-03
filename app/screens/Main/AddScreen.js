import { View, Text, StyleSheet, TextInput, Pressable, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { idGenerator } from '../../utlis/idGenerator';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../config/firebase';


export default function AddcircleScreen() {
  /definimos los hooks de estados/
  const [productName, setProductName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(null);
  const image = { uri: "https://i.pinimg.com/564x/03/ca/a8/03caa8b3006b06f652f1d6ef44d3b845.jpg" };

  const createProduct = async () => {
    if (!productName) {
      Alert.alert("todos los campos son obligatorios")
    } else {
      const id = idGenerator(10);
      await setDoc(doc(db, "product", id), {
        id: id,
        productName: productName,
        description: description,
        price: price
      });
      Alert.alert("Producto agregado")

    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>
        <Text style={styles.title}>          Crear productos</Text>
        <TextInput
          style={styles.input}
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
          style={styles.input}
          onChangeText={(value) => setPrice(value)}
          value={price}
          placeholder="Precio del producto"
        />
        <Pressable style={styles.button} onPress={createProduct}>

          <Text style={styles.label} >Crear Producto</Text>

        </Pressable>
      </ImageBackground>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#f8f8ff',
    fontSize: 30,
  },

  input: {
    marginTop: 20,
    borderWidth: 1,
    width: 360,
    height: 40,
    borderRadius: 10,
    borderColor: "#ffd700",
    padding: 10,
    backgroundColor:"#fdf5e6"
},

  textArea: {
    marginTop: 20,
    borderWidth: 2,
    width: 360,
    height: 100,
    borderRadius: 10,
    padding: 10,
    borderColor: "#ffd700",
    padding: 10,
    backgroundColor:"#fdf5e6"

  },

  button: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#ffd700",
    borderRadius: 7,
    width: 360,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    
},
  image: {
    flex: 1,
    justifyContent: "center"
  },
  label:{
    fontSize: 22,
  }


})