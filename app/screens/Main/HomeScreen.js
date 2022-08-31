import { View, Text, SafeAreaView, StyleSheet, Image, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-web';

export default function HomeScreen() {
    //hooks de stado funciones 
    const [productList, setProducList] = useState([]);
    const [id, setId] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setProductDescription] = useState('');
    const [modalEdit, setModalEdit] = useState(false);

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


    }, []);

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
                    <Text style={styles.textDescription}>{item.description}</Text>
                    <Text style={styles.textPrice}>$ {item.price} </Text>
                </View>
                <View style={styles.infoView}>
                    <Ionicons name="pencil-outline" size={30} style={styles.icon}
                        onPress={function openEditModal() {
                            setModalEdit(true);
                            setId(item.id);
                            setProductName(item.productName);
                            setProductDescription(item.description);
                            setPrice(item.price)
                        }}></Ionicons>
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
            <Modal animationType='slide' transparent={true} visible={modalEdit}
                onRequestclose={() => { setModalEdit(!modalEdit) }}
            >
                <View style={styles.centeredView}></View>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Editar Producto</Text>
                    <Text style={styles.modalText}>id={id} </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setProductName(value)}
                        value={productName}
                        placeholder="Nombre del producto"
                    />
                    <TextInput
                        style={styles.textArea}
                        onChangeText={(value) => setProductDescription(value)}
                        value={description}
                        placeholder="Descripción del producto"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setPrice(value)}
                        value={price}
                        placeholder="Precio del producto"
                    />
                </View>
                

            </Modal>


        </SafeAreaView>
    )
};
/*
<View style={styles.modalButtons}>
                    <Pressable style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalEdit(!modalEdit)}>
                        <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonEdit]}
                        onPress={editProduct}>
                        <Text style={styles.textStyle}>Editar</Text>
                    </Pressable>
                </View>
*/
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
    iconView: {
        width: "20%",
        padding: 10
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
    /**/
    icon: {
        color: "#02CCFF",
        marginLeft: 20,
        padding: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 10
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonEdit: {
        backgroundColor: "#02CCFF",
        marginLeft: 10
    },
    buttonDelete: {
        backgroundColor: "#CB4335",
        marginLeft: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        marginTop: 10,
        borderWidth: 2,
        width: 340,
        height: 50,
        borderRadius: 5,
        borderColor: '#02CCFF',
        padding: 10,
    },
    textArea: {
        marginTop: 10,
        borderWidth: 2,
        width: 340,
        height: 100,
        borderRadius: 5,
        borderColor: '#02CCFF',
        padding: 10,
    },
    modalButtons: {
        flexDirection: "row",
        marginTop: 5,

    }
});