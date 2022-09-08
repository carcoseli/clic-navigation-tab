import { View, Text, StyleSheet, Image,link} from "react-native"
import React from 'react'
import * as RN from 'react-native';


export default function PersonScreen() {
    
  return (
    <View style={styles.container1}>
        
        
        <Image
            style={styles.tinyLogo}
            source={require('../../../assets/Kathy.png')}
        />
        <Text style={styles.title}>Conóceme</Text>
        <Text style={styles.conoceme}>Soy la creadora de esta App espero la disfrutes y sucribete en nuestros canales de Facebook, Instagram y Tiktok. </Text>
        <RN.ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
        <Image
            style={styles.tinyLogo1}
            source={require('../../../assets/tiktok.png')}
           
        />
         <Image
            style={styles.tinyLogo1}
            source={require('../../../assets/face.png')}
            />
              <Image
            style={styles.tinyLogo1}
            source={require('../../../assets/insta.png')}
            />
         </RN.ScrollView>
    </View>
    
    );

};

const styles = StyleSheet.create({
container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
},
tinyLogo: {
    width: 150,
    height: 300,
    marginTop: 10,
    marginBottom: 20,
},
title: {
    marginBottom: 5,
    color: '#000000',
    height: 50,
    marginTop: 0,
    padding: 12,
    fontSize: 22,
    alignSelf:"center" 
},
tinyLogo1: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
},


});