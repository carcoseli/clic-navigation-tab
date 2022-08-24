import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';

export default function HomeScreen() {
    //hooks de stado funciones 
    const [productList, setProducList] = React.useState([]);
    const [id, setId] = React.useState('');
    const [productName, setProductName] = React.useState('')
    const [price, setProducPrice] = React.useState('')
    const [description, setProductDescription] = React.useState('')

    //hooks de efecto 
    //nos ayuda a visializar lo primer de la aplicacion
    useEffect(() => {
        let list = [];

        async function getProducts() {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                list.push(doc.data());
                console.log(doc.id, "=>", doc.data());
            });
            setProducList(list);
        }
        getProducts();


    }, [])

    const renderItem = ({ item }) => {//llamamos al itemde flatList
        return (
            <View style={styles.item} key={item.id} >
                <View styles={styles.img}>
                    <Image
                        style={styles.imgProduct}
                        sourse={require('../../../assets/item.png')}
                    />
                </View>
                <View style={styles.info} >
                    <Text style={styles.textName}>{item.productName} </Text>
                    <Text style={styles.textDescription}>{item.description} </Text>
                    <Text style={styles.textPrice}>$ {item.price} </Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {/*para agregar javaScrip s las etiquetas se usa el codigo entre llaves*/
                productList.length > 0 ? (
                    <FlatList
                        data={productList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}/*aqui se usa un identificador */
                    />
                ) : (
                    <Text style={styles.textNoProducts}>No existen Productos</Text>
                )
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2C2C2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: '10',
        marginTop: 10,
        width: 360,
        height: 100,
        borderRadius: 5,
    },
    img: {
        width: "30%"
    },
    info: {
        width: "50%"
    },
    imgProduct: {
        width: 80,
        height: 70
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 15
    },
    textPrice: {
        fontSize: 20,
        textAlign: "right",
        color: "#012ccff",
        fontWeight: 'bold'
    },
    textNoProducts: {
        color: "#fff",
        fontSize: 22,
        fontWeight: 'bold'
    },
});