import { View, Text, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"; //Import de ..Primeros pasos con Cloud Firestore
import { db } from '../../config/firebase';
 
export default function HomeScreen() {
 
    //Para creacion de productos
    //Hooks de estado
    const [productList, setProductList] = React.useState([]);
    const [id, setId] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [productPrice, setProductPrice] = React.useState('');
    const [productDescription, setProductDescription] = React.useState('');
 
    //Hooks de efecto: ayuda a visualizar lo primero de la app
    useEffect(() => { //--> useEffectSnippet
      let list = []; //creo un array para capturar productos
 
      // Ojo, si en la funiocn esta await, debemos poner async, haciendolo ascincrono
      async function getProducts() {
        const querySnapshot = await getDocs(collection(db, "Products")); //"nombre de la tabla"
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
          console.log(doc.id, "=>", doc.data());
        });
        setProductList(list);
      }
      getProducts();
 
    }, [])
 
 
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item} key={item.id}>
 
          <View style={styles.img}>
            <Image
              style={styles.imageProduct}
              source={require('../../../assets/item.png')}
            />
          </View>
 
          <View style={styles.info}>
            <Text style={styles.textName}>{item.productName}</Text>
            <Text style={styles.textDescription}>{item.productDescription}</Text>
            <Text style={styles.textPrice}>${item.productPrice}</Text>
          </View>
 
        </View>
      )
    }
 
 
    return (
      <SafeAreaView style={styles.container}>
        { //para colocar codigo de JS lo ponemos dentro de llaves {}
          //generamoss funcion ternearia: if else...
          productList.length > 0 ? (
            <FlatList
              data={productList}
              renderItem={renderItem}
              keyExtractor={item => item.id} //identificaro de producto
            />
          ) : (
            <Text style={styles.textNOproducts}>No existen productos</Text>
          )
        }
      </SafeAreaView>
    )
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c2c2c2',
      alignItems: 'center',
      justifyContent: "center",
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 10,
      marginTop: 10,
      width: 360,
      height: 100,
      borderRadius: 5
    },
    img: {
      width: "30%",
    },
    info: {
      width: "50%",
    },
    imageProduct: {
      width: 80,
      height: 70,
    },
    textName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    textDescription: {
      fontSize: 18,
    },
    textPrice: {
      fontSize: 20,
      textAlign: 'right',
      color: "#02ccff",
      fontWeight: 'bold',
    },
    textNOproducts: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold'
    },
 
  });