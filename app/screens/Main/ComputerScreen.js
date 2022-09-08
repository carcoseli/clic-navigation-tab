import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Modal, Pressable, TextInput, NativeModules } from "react-native";
import React from "react";
import * as RN from 'react-native';
export default function ComputerScreen() {
    return (
        <View style={styles.container}>
            <RN.ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.inicio}>
                <Text style={styles.title}>Misión</Text>
                <Text style={styles.conocenos}>
                    Creamos un espacio de rumba bar/discoteca para toda la población.
                    KALIZ ha crecido año tras año y nos empezamos a catalogar como uno de los mejores lugares para la gente.
                    Somos un lugar open-mind, convirtiendonos en organización dedicada a ofrecer a nuestr@s clientes un servicio de entretenimiento adaptado a sus necesidades, nos preocupamos por manejar un ambiente seguro, una experiencia inolvidable y sobretodo un lugar donde nuestr@s clientes se sienten en familia. nos basamos en el trabajo equipo con el objetivo de conseguir la máxima satisfacción.
                    Nuestra casa cuenta con dos ambientes que ambientamos cada noche, con una temática diferente y la música se presta para cantar a grito herido o para bailar hasta que el cuerpo no de más.
                    La sonrisa de nuestros clientes es nuestra gran motivación, por eso realizamos nuestro trabajo con todo el amor.
                </Text>

                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/imagen1.png')}
                />

                <Text style={styles.title}>Visión</Text>
                <Text style={styles.conocenos}>En el plazo de 1-2 año queremos ser la discoteca #1 para la población en Ecuador. Ser una marca reconocida no solo por ser una discoteca sino por ser todo un movimiento para la comunidad.
                    Queremos una tienda virtual (venta de camisetas, gorras y todo tipo de souvenirs) y en un futuro llegar a ciudades del mundo como río de janeiro, Barcelona y paises cercanso.</Text>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/imagen2.png')}
                />
               
                <Text style={styles.title}>Localización</Text>
                <Image
                    style={styles.tinyLogo1}
                    source={require('../../../assets/map.png')}
                />
            </RN.ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    title: {
        marginBottom: 5,
        color: '#8843CE',
        height: 50,
        marginTop: 0,
        padding: 12,
        borderColor: "#90ee90",
        fontSize: 22,
        alignSelf:"center"
    },
    conocenos: {
        width: 340,
        backgroundColor: '#fff',
        borderColor: "#00ffff",
        borderRadius: 0,
        marginTop: 5,
        alignSelf: 'center'

    },

    tinyLogo: {
        width: 250,
        height: 250,
        marginTop: 20,
        marginBottom: 0,
        alignSelf: 'center',
        borderRadius: 500,

    },
    tinyLogo1: {
        width: 350,
        height: 250,
        marginTop: 20,
        marginBottom: 0,
        alignSelf: 'center',
        borderRadius: 10,

    },

});