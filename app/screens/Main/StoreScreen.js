
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground } from "react-native";
import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Product from './components/Product';

export default function StoreScreen() {
    const [products, setProducts] = React.useState([]);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <RN.Button title='Agregar' onPress={() => navigation.navigate('Add')} />
        })
    }, [navigation])

    React.useEffect(() => {
        const collectionRef = collection(db, 'products');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            console.log('querySnapshot unsusbscribe');
            setProducts(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    emoji: doc.data().emoji,
                    name: doc.data().name,
                    price: doc.data().price,
                    cantid: doc.data().cantid,
                    isSold: doc.data().isSold,
                    createdAt: doc.data().createdAt,
                }))
            );
        });
        return unsubscribe;
    }, [])
    const image = { uri: "https://i.pinimg.com/564x/62/c0/88/62c08850fe36f6f0da4f0e7dea483f1f.jpg" };

    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>
            <RN.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <RN.Text style={styles.title}>Productos</RN.Text>
                {products.map(product => <Product key={product.id} {...product} />)}
            </RN.ScrollView>
        </ImageBackground>
        </View>
    );

};

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3F9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        marginBottom: 5,
        color: '#000000',
        backgroundColor: '#F5F3F9',
        height: 50,
        marginTop: 5,
        alignSelf: 'center',
        width: 360,
        padding: 12,
        borderColor: "#00ffff",
        borderRadius: 20,
        fontSize: 22,
    },

    image: {
        flex: 1,
        justifyContent: "center"
    },
});